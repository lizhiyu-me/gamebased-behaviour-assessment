class LayerMediator implements IMediator {
    static NAME: string = 'LayerMediator';
    private mMainLayer: eui.UILayer;
    private mStage:egret.Stage;
    constructor(mainLayer) {
        this.mMainLayer = mainLayer;
        this.mStage = this.mMainLayer.stage;
    }
    get view() {
        return this.mMainLayer;
    }
    registerNotifications() {

    }
    onRegister() {
        this.initLayer();
    }
    private mLayerDic: { [Enum: number]: eui.UILayer };
    private initLayer() {
        if (!this.mLayerDic) {
            this.mLayerDic = {};
            this.mLayerDic[ELayer.MAIN] = this.mMainLayer;

            let _topLayer =  new eui.UILayer();
            _topLayer.name = 'top';
            _topLayer.touchThrough = true;
            this.mLayerDic[ELayer.TOP] =_topLayer;
            this.mStage.addChild(_topLayer);
        }
    }
    getLayer(id: number) {
        return this.mLayerDic[id];
    }

    addScene(scene: BaseView) {
        this.mMainLayer.addChild(scene);
        //居中显示Scene
        scene.x = (this.mMainLayer.width - scene.width) / 2;
        scene.y = (this.mMainLayer.height - scene.height) / 2;
    }
}
enum ELayer {
    MAIN,
    TOP
}