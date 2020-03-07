class ReactionRateScene extends BaseView {
    public readonly skinName = "ReactioonRateSceneSkin";
    //====ui begin====
    public groupLock: eui.Group;
    public btnPause: eui.Button;
    public btnStart: eui.Button;
    public listSecret: eui.List;
    public labelLockStatus: eui.Label;
    public btnRestart:eui.Button;


    //====ui end====

    public sectionCount: number = 10;

    constructor() {
        super();
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
