class LayerMediator implements IMediator{
    static NAME:string = 'LayerMediator';
    private mMainLayer: eui.UILayer;
    constructor(mainLayer) {
        this.mMainLayer = mainLayer;
    }
    get view(){
        return this.mMainLayer;
    }
    registerNotifications(){
       
    }   
    onRegister(){}
    
    addScene(scene:BaseView){
        this.mMainLayer.addChild(scene);
        //居中显示Scene
        scene.x = (this.mMainLayer.width - scene.width)/2;
        scene.y = (this.mMainLayer.height - scene.height)/2;
    }
}