///<reference path="../../../Component/TopBanner.ts"/>
class OrderBoxScene extends BaseView {
    public groupMain: eui.Group;

    public btnStart: eui.Button;
    public btnAgain: eui.Button;
    public btnAgainInGame: eui.Button;
    public groupMask: eui.Group;
    public topBanner: TopBanner;
    public btnBack: eui.Label;

    public txtInstruct: eui.Label;






    constructor() {
        super(true);
        this.skinName = 'OrderBoxSceneSkin';

    }
    childrenCreated() {
        super.childrenCreated();
        this.initListener();
        this.groupMain.removeChildren();
        for (let i = 0; i < 15; i++) {
            let _itemComp: OrderBoxItemRenderer = new OrderBoxItemRenderer();
            this.groupMain.addChild(_itemComp);

        }
    }
    private initListener() {
        this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this);
    }
    private onBack() {
        this.removeScene(this)
    }
    private removeScene(thisDisplay) {
        if (thisDisplay && thisDisplay.parent) {
            thisDisplay.parent.removeChild(thisDisplay);
        }
    }

}