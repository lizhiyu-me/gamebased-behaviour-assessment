class BaseView extends eui.Component {
    constructor() {
        super();
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