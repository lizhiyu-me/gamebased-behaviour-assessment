class TopBanner extends eui.Component {
    public btnBack:eui.Label;

    constructor() {
        super();

    }
    @ScaleButton_FnDecoration()
    protected childrenCreated(): void {
        super.childrenCreated();
        this["display4ScaleArr"] = [this.btnBack];
        this.initListener();
    }
    private initListener(){
        this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBack,this);
    }
    private onBack(){
        this.removeScene(this)
    }
    private removeScene(thisDisplay){
        let _grandParent = thisDisplay.parent.parent;
        let _parent = thisDisplay.parent;
        if(_parent && _grandParent){
            if(_parent["isCanCloseByTopBanner"]){
                _grandParent.removeChild(_parent);
            }else{
                this.removeScene(_parent);
            }
        }
    }
}