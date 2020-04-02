class LobbySelectMediator extends BaseMediator {
    static NAME: string = "LobbySelectMediator";
    skin:string = "LobbySelectSceneSkin";
    mView: LobbySelectScene;
    constructor(view) {
        super(view);
         this.setSkin();
    }
    get view() {
        return this.mView;
    };
    registerNotifications() {

    };
    setSkin(){
        this.view.skinName = this.skin;
    }
    /**皮肤加载完毕 */
    onViewUIComplete() {
        let _layerMediator = AppFacade.getInstance().retriveMediator(LayerMediator.NAME) as LayerMediator;
        _layerMediator.addScene(this.view);
        this.initView();
    }
    private initView() {
        this.view.listEntry.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onEntryListTap, this);
        this.view.btnCopy.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            Utils.copyToBoard(this.view.labelUrl.text);
            (AppFacade.getInstance().retriveMediator(MessageMediator.NAME) as MessageMediator).showFloatTip('复制成功')
        },this);
        this.getCfg();
    }
    private getCfg() {
        let _entryCfg = RES.getRes('lobbyEntryCfg_json');
        this.view.listEntry.dataProvider = new eui.ArrayCollection(_entryCfg);
    }
    onRegister() {
    };
    private onEntryListTap(e: eui.ItemTapEvent) {
        let _data = e.item;
        //TODO 界面管理类，打开对应kindID的界面
        if (_data.kindID == EGameKindID.INSTANT_MEMORY) {
           AppFacade.getInstance().registerMediator(OrderBoxMediator,OrderBoxScene);
        }else if(_data.kindID == EGameKindID.REACT_RATE){
           AppFacade.getInstance().registerMediator(ReactionRateMediator,ReactionRateScene);
        }
    }

}   