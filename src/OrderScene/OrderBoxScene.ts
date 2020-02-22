class OrderBoxScene extends eui.Component {
    public listMain: eui.List;
    public txtCorrect: eui.Label;
    public txtComplete: eui.Label;
    public txtWrong: eui.Label;

    public btnStart: eui.Button;
    public btnAgain: eui.Button;


    constructor() {
        super();
        this.addEventListener(eui.UIEvent.COMPLETE, this.initView, this);
        this.skinName = 'OrderBoxSceneSkin';

    }
    protected childrenCeated() {
        super.childrenCreated();
        this.initView();
    }
    private mListMainDataProvider: eui.ArrayCollection;
    private initView() {
        this.recoverView();
        this.mListMainDataProvider = new eui.ArrayCollection();
        this.listMain.itemRendererSkinName = 'OrderBoxItemSkin';
        this.listMain.itemRenderer = OrderBoxItemRenderer;
        this.listMain.dataProvider = this.mListMainDataProvider;

        this.listMain.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onListItemTap, this);
        this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStart,this);
        this.btnAgain.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onAgain,this);
    }
    private onStart(){
        this.btnStart.visible = false;
        this.refreshDataAndShowAni();
    }
    private onAgain(){
        this.recoverView();
    }
    private refreshDataAndShowAni(){
        this.mListMainDataProvider.source = this.getNewData();
        this.mListMainDataProvider.refresh();
    }
    /**还原场景组件状态及数据 */
    private recoverView(){
        this.btnStart.visible = true;
        this.btnAgain.visible = false;
        this.mClickStep = 0;
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
        egret.Tween.get(this.txtCorrect).to({ visible: true }).to({ alpha: 0 }, 500).call(
            () => {
                this.txtCorrect.visible = false;
                this.txtCorrect.alpha = 1;
            }
        )
    }
    private showFloatWin() {
        egret.Tween.get(this.txtComplete).to({ visible: true }).to({ scaleX: 1.6, scaleY: 1.6 }, 500).call(
            ()=>{
                this.txtComplete.visible = false;
                this.btnAgain.visible = true;
            }
        );
    }
    private showFloatError() {
        egret.Tween.get(this.txtWrong).to({ visible: true }).to({ alpha: 0 }, 500).call(
            () => {
                this.txtWrong.visible = false;
                this.txtWrong.alpha = 1;
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

}