class OrderBoxScene extends eui.Component {
    public listMain: eui.List;

    constructor() {
        super();
        this.addEventListener(eui.UIEvent.COMPLETE,this.initView,this);
        this.skinName = 'OrderBoxSceneSkin';

    }
    protected childrenCeated(){
        super.childrenCreated();
        this.initView();
    }
    private mListMainDataProvider: eui.ArrayCollection;
    private initView() {
        this.mListMainDataProvider = new eui.ArrayCollection();
        this.listMain.itemRendererSkinName = 'OrderBoxItemSkin';
        this.listMain.itemRenderer = OrderBoxItemRenderer;
        this.listMain.dataProvider = this.mListMainDataProvider;
        this.mListMainDataProvider.source = this.getInitData();

    }
    
    private mItemLen: number = 15;
    private getInitData(): OrderBoxItemData[] {
        let _res: OrderBoxItemData[] = [];
        for (let i = 0; i < this.mItemLen; ++i) {
            let random: number = Math.floor(Math.random() * 2);
            let _status:EnumOrderBoxStatus = random == 0? EnumOrderBoxStatus.WRONG:EnumOrderBoxStatus.CORRECT; 
            let _item:OrderBoxItemData = {
                stat:_status
            }
            _res.push(_item);
        }
        return _res;
    }

}