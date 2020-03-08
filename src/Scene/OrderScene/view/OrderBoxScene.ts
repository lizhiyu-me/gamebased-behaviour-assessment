///<reference path="../../../Component/TopBanner.ts"/>
class OrderBoxScene extends BaseView {
    public listMain: eui.List;
    public txtCorrect: eui.Label;
    public txtComplete: eui.Label;
    public txtWrong: eui.Label;

    public btnStart: eui.Button;
    public btnAgain: eui.Button;
    public btnAgainInGame: eui.Button;
    public txtInstruct: eui.Label;
    public groupMask:eui.Group;
    public txtWarning:eui.Label;
    public topBanner:TopBanner;
    public btnBack:eui.Label;





    constructor() {
        super(true);
        this.skinName = 'OrderBoxSceneSkin';

    }
    childrenCreated(){
        super.childrenCreated();
        this.initListener();
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