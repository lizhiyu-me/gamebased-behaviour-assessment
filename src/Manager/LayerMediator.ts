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
}