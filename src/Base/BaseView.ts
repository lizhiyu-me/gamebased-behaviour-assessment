class BaseView extends eui.Component {
    public isCanCloseByTopBanner:boolean = false;
    constructor(isCanCloseByTopBanner:boolean = false) {
        super();
        this.isCanCloseByTopBanner = isCanCloseByTopBanner;
        
    }
}