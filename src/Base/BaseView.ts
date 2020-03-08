class BaseView extends eui.Component {
    public isCanCloseByTopBanner:boolean = false;
    constructor(isCanCloseByTopBanner:boolean = false) {
        super();
        this.isCanCloseByTopBanner = isCanCloseByTopBanner;
        this.addEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
    }
    //TODO
    hasUICompleteCache: boolean = false;
    private onUIComplete() {
        if (this.mMediator && this.mMediator.onViewUIComplete) {
            this.mMediator.onViewUIComplete();
        } else {
            this.hasUICompleteCache = true;
        }
    }
    private mMediator;
    setBelongMediator(mediator) {
        this.mMediator = mediator;
    }
    getMediator() {
        return this.mMediator;
    }
}