abstract class BaseMediator implements IMediator {
    static NAME: string;
    abstract get view();
    abstract mView: BaseView;
    abstract onRegister();
    abstract onViewUIComplete();
    abstract registerNotifications();
    abstract setSkin();
    constructor(view) {
        this.mView = new view();
        // this.mView.addEventListener(eui.UIEvent.COMPLETE, this.onViewUIComplete, this);
        this.mView.addEventListener(egret.Event.COMPLETE, this.onViewUIComplete, this);
        // setTimeout(function(that) {
    //    if(skinName === "LobbySelectSceneSkin")     this.mView.skinName = skinName;
            // this.mView.skinName = skinName;
        // }, 2,this);
        this.registerNotifications();

    }
}