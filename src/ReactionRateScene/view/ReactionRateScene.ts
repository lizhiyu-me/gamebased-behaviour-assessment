class ReactionRateScene extends BaseView {
    public readonly skinName = "ReactioonRateSceneSkin";
    //====ui begin====
    public groupLock: eui.Group;
    public btnSwitch: eui.Button;
    public listSecret: eui.List;
    public labelLockStatus: eui.Label;
    public btnRestart:eui.Button;


    //====ui end====

    public sectionCount: number = 10;

    constructor() {
        super();
    }
    childrenCreated(){
        super.childrenCreated();
        this.resumeSwitchBtn();
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
            this.labelLockStatus.text = "Unlocked";
            this.labelLockStatus.textColor = 0x00ff00;
        }
        else {
            this.labelLockStatus.text = "Locked"
            this.labelLockStatus.textColor = 0xff0000;
        }
    }
}
