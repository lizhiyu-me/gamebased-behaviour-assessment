/**门面类*/
class AppFacade {
    private static sAppInstance: AppFacade;
    static getInstance(mainLayer = null) {
        if (!AppFacade.sAppInstance) {
            AppFacade.sAppInstance = new AppFacade(mainLayer);
        }
        return AppFacade.sAppInstance;
    }
    private mModelDic = {};
    registModel(model) {
        this.mModelDic[model["NAME"]] = model.getInstance();
    }
    /**初始化相关命令等 */
    initApp(mainLayer: eui.UILayer) {
        this.initLayer(mainLayer);
        //注册层级管理中介
        this.registerMediator(LayerMediator, mainLayer);
        //注册启动命令
        this.registerSimpleCommand(CMD_StartUp);
    }
    //TODO layerMrg
    private initLayer(mainLayer) {
        
    }
    private mCommandDic = {};
    registerSimpleCommand(command) {
        this.mCommandDic[command.NAME] = new command();

    }
    private mMediatorDic = {};
    registerMediator(mediator, viewClass) {
        let _mediator = new mediator(viewClass);
        this.mMediatorDic[mediator.NAME] = _mediator;
        _mediator.onRegister();
    }
    retriveMediator(name: string) {
        return this.mMediatorDic[name];
    }
    private mNotifyDic = {};
    registerNotifications(mediator, notifies: string[]) {
        notifies.forEach((el) => {
                mediator[el]["that"] = mediator;
                this.mNotifyDic[el] = mediator[el];
            }
        )
    }
    sendNotification(notify:string,param){
        this.mNotifyDic[notify] && this.mNotifyDic[notify].call(this.mNotifyDic[notify]['that'],param);
    }
    /**发送命令 */
    sendCommand(commandName: string, param = null) {
        let _cmd = this.mCommandDic[commandName];
        if (_cmd) {
            _cmd.execute(param);
        }
    }

    remove() {

    }
    constructor(mainLayer) {
        this.initApp(mainLayer)
    }
}
