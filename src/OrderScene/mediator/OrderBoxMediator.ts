class OrderBoxMediator implements IMediator {
    static NAME: string = 'OrderBoxIMediator';
    private mView: OrderBoxScene;
    constructor(view) {
        this.registerNotifications();
        this.mView = new view();
        this.mView.setBelongMediator && this.mView.setBelongMediator(this);
    }
    get view(): OrderBoxScene {
        return this.mView;
    }
    static collectItem2Show: string = 'collectItem2Show';
    registerNotifications() {
        AppFacade.getInstance().registerNotifications(this, [
            OrderBoxMediator.collectItem2Show,
        ])
    }
    /**皮肤加载完毕 */
    onViewUIComplete() {
        let _layerMediator = AppFacade.getInstance().retriveMediator(LayerMediator.NAME) as LayerMediator;
        let _mainLayer = _layerMediator.view;
        _mainLayer.addChild(this.view);
        this.initView();
    }
    private mListMainDataProvider: eui.ArrayCollection;
    private initView() {
        this.recoverView();
        this.mListMainDataProvider = new eui.ArrayCollection();
        this.view.listMain.itemRendererSkinName = 'OrderBoxItemSkin';
        this.view.listMain.itemRenderer = OrderBoxItemRenderer;
        this.view.listMain.dataProvider = this.mListMainDataProvider;

        this.view.listMain.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onListItemTap, this);
        this.view.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStart, this);
        this.view.btnAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAgain, this);
    }
    private onStart() {
        this.view.btnStart.visible = false;
        this.refreshDataAndShowAni();
    }
    private onAgain() {
        this.recoverView();
    }
    private refreshDataAndShowAni() {
        let _itemData = this.getNewData();
        this.mListMainDataProvider.source = _itemData;
        this.mListMainDataProvider.refresh();

    }
    private itemAni() {
        let _el: OrderBoxItemRenderer = this.mItems2Show.shift();
        if (!_el) return;
        egret.Tween.get(_el.txtGreen).to({ visible: true, scaleX: 1.2, scaleY: 1.2 }, 800)
            .to({ scaleX: 1, scaleY: 1, alpha: 0 }, 800).call(
            () => {
                _el.txtGreen.alpha = 1;
                _el.txtGreen.visible = false;
                this.itemAni();
            }
            )

    }
    private mItems2Show: OrderBoxItemRenderer[] = [];
    private rendererCount: number = 0;
    public collectItem2Show(data) {
        if (data.stat === EnumOrderBoxStatus.CORRECT) this.mItems2Show.push(data.item);
        this.rendererCount++;
        if (this.rendererCount === this.mItemLen) {
            this.mItems2Show.sort((a,b)=>{
                return a['mData']["showIdx"] - b['mData']['showIdx']
            })
            this.itemAni();
        }
    }
    /**还原场景组件状态及数据 */
    private recoverView() {
        this.view.btnStart.visible = true;
        this.view.btnAgain.visible = false;
        this.mClickStep = 0;
        this.mItems2Show.length = 0;
        this.rendererCount = 0;
    }
    private mClickStep: number = 0;
    private onListItemTap(e: eui.ItemTapEvent) {
        if (this.mStepData[this.mClickStep] !== e.item.skinIdx) {
            this.showFloat(EnumOrderBoxStatus.WRONG);
            return;
        } else {
            if (this.mToalStepCount === this.mClickStep + 1) {
                this.showFloatWin();
                return;
            }
            this.showFloatCorrect();
            this.mClickStep++;
        }
    }
    private showFloat(type: EnumOrderBoxStatus) {
        if (type === EnumOrderBoxStatus.CORRECT) {
            this.showFloatCorrect();
        } else {
            this.showFloatError();
        }
    }
    private showFloatCorrect() {
        egret.Tween.get(this.view.txtCorrect).to({ visible: true }).to({ alpha: 0 }, 500).call(
            () => {
                this.view.txtCorrect.visible = false;
                this.view.txtCorrect.alpha = 1;
            }
        )
    }
    private showFloatWin() {
        egret.Tween.get(this.view.txtComplete).to({ visible: true }).to({ scaleX: 1.6, scaleY: 1.6 }, 500).call(
            () => {
                this.view.txtComplete.visible = false;
                this.view.btnAgain.visible = true;
            }
        );
    }
    private showFloatError() {
        egret.Tween.get(this.view.txtWrong).to({ visible: true }).to({ alpha: 0 }, 500).call(
            () => {
                this.view.txtWrong.visible = false;
                this.view.txtWrong.alpha = 1;
            }
        )
    }
    private mToalStepCount: number = 0;
    private mStepData: { [step: number]: number } = {};
    private mItemLen: number = 15;
    private getNewData(): IorderBoxItemData[] {
        this.mStepData = {};
        let _res: IorderBoxItemData[] = [];
        /**显示绿勾的item的下标数组 */
        let _correctItemIdxArr: number[] = [];
        for (let i = 0; i < this.mItemLen; ++i) {
            let random: number = Math.floor(Math.random() * 2);
            let _status: EnumOrderBoxStatus = random == 0 ? EnumOrderBoxStatus.WRONG : EnumOrderBoxStatus.CORRECT;
            if (_status === EnumOrderBoxStatus.CORRECT) {
                _correctItemIdxArr.push(i);
            }
            let _item: IorderBoxItemData = {
                stat: _status,
                skinIdx: i,
                showIdx: 0
            }
            _res.push(_item);
        }
        this.mToalStepCount = _correctItemIdxArr.length;
        _correctItemIdxArr.sort((a, b) => { return Math.random() - .5 });
        _correctItemIdxArr.forEach((el, i) => {
            this.mStepData[i] = el;
        })
        _res.forEach((el, i) => {
            if (el.stat === EnumOrderBoxStatus.CORRECT) {
                _res[i].showIdx = _correctItemIdxArr.indexOf(el.skinIdx);
            }
        })
        return _res;
    }
    onRegister() {
        if (this.view.hasUICompleteCache) this.onViewUIComplete();
    }


}