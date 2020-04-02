///<reference path="../../../Component/TopBanner.ts"/>
class ReactionRateScene extends BaseView {
    //====ui begin====
    public groupLock: eui.Group;
    public btnSwitch: eui.Button;
    public listSecret: eui.List;
    public labelLockStatus: eui.Label;
    public btnRestart:eui.Button;
    public topBanner:TopBanner;
    public btnBack:eui.Label;



    //====ui end====

    constructor() {
        super(true);
    }
    @ScaleButton_FnDecoration()
    childrenCreated(){
        super.childrenCreated();
        this.resumeSwitchBtn();
        this["display4ScaleArr"] = [this.btnSwitch,this.btnRestart];
        this.initListener();
    }
    /**0 start 1 pause */
    private mSwitchBtnStatus:number = 0;
    onSwitch():number{
        if(this.mSwitchBtnStatus === 0){
            this.btnSwitch.label = '暂停';
            this.mSwitchBtnStatus = 1;
        }else if(this.mSwitchBtnStatus === 1){
            this.resumeSwitchBtn();
        }
        return this.mSwitchBtnStatus;
    }
    resumeSwitchBtn(){
        this.btnSwitch.label = '开始';
        this.mSwitchBtnStatus = 0;
    }
    setLabelStatus(isSuccess: boolean) {
        if (isSuccess) {
            this.labelLockStatus.text = "解锁成功";
            this.labelLockStatus.textColor = 0x00ff00;
        }
        else {
            this.labelLockStatus.text = "锁定中"
            this.labelLockStatus.textColor = 0xff0000;
        }
    }
     private initListener(){
        this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBack,this);
    }
    private onBack(){
        this.removeScene(this)
    }
    private removeScene(thisDisplay){
        if(thisDisplay && thisDisplay.parent){
            thisDisplay.parent.removeChild(thisDisplay);
        }
    }
}
