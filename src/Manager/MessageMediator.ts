class MessageMediator implements IMediator {
    static NAME: string = "MessageMediator";
    constructor() {

    }
    view() {

    }
    onRegister() {

    }
    registerNotifications() {

    }
    private mLabelFloat: eui.Label;
    showFloatTip(content: string,color:number=0xffffff) {
        if (!this.mLabelFloat) {
            this.mLabelFloat = new eui.Label();
            this.mLabelFloat.size = 60;
            let _parent = (AppFacade.getInstance().retriveMediator(LayerMediator.NAME) as LayerMediator).getLayer(ELayer.TOP);
            _parent.addChild(this.mLabelFloat);
            this.mLabelFloat.visible = false;
            this.mLabelFloat.touchEnabled = false;
        }
        this.mLabelFloat.text = content;
        this.mLabelFloat.textColor = color;
        this.mLabelFloat.y = (this.mLabelFloat.parent.height - this.mLabelFloat.height) / 2;
        this.mLabelFloat.x = (this.mLabelFloat.parent.width - this.mLabelFloat.width) / 2;
        let _originY: number = this.mLabelFloat.y;
        let _targetY: number = this.mLabelFloat.y - 50;
        egret.Tween.get(this.mLabelFloat).to({ visible: true }).to({ y: _targetY }, 500).call(
            () => {
                this.mLabelFloat.y = _originY;
                this.mLabelFloat.visible = false;
            }
        );
    }

}