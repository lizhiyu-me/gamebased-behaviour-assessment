class OrderBoxMediator extends BaseMediator {
    static NAME: string = 'OrderBoxIMediator';
    skin:string = "OrderBoxSceneSkin";
    mView: OrderBoxScene;
    private mFloatMessageMrg: MessageMediator;
    constructor(view) {
        super(view);
        this.mFloatMessageMrg = AppFacade.getInstance().retriveMediator(MessageMediator.NAME) as MessageMediator;
        this.view.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
         this.setSkin();
    }
    setSkin(){
        this.view.skinName = this.skin;
    }
    get view(): OrderBoxScene {
        return this.mView;
    }
    // static collectItem2Show: string = 'collectItem2Show';
    registerNotifications() {
        AppFacade.getInstance().registerNotifications(this, [
            // OrderBoxMediator.collectItem2Show,
        ])
    }
    /**皮肤加载完毕 */
    onViewUIComplete() {
        this.mHasRemove = false;
        let _layerMediator = AppFacade.getInstance().retriveMediator(LayerMediator.NAME) as LayerMediator;
        _layerMediator.addScene(this.view);
        this.initView();
    }
    private initView() {
        this.view.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStart, this);
        this.view.btnAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAgain, this);
        this.view.btnAgainInGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAgain, this);
        this.view.groupMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMask, this);
        this.view.groupMain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onListItemTap, this);
        this.recoverViewWhenGameStart();
    }
    private onStart() {
        this.view.btnStart.visible = false;
        this.view.btnAgain.visible = false;
        this.view.btnAgainInGame.visible = false;
        this.view.groupMask.visible = true;
        this.view.txtInstruct.visible = false;
        this.refreshData();
        this.showAni();
    }
    private onAgain() {
        // this.recoverViewWhenGameEnd();
         this.resetData();
        this.onStart();
    }
    private showAni() {
        this.itemAni();
    }
    private refreshData() {
        let _itemData = this.getNewData();
        for (let i in this.mStepData) {
            let itemDisplay = (this.view.groupMain as eui.Group).getChildAt(this.mStepData[i]);
            this.mItems2Show.push(itemDisplay);
        }
    }
    private itemAni() {
        if(this.mHasRemove)return;
        let _el: OrderBoxItemRenderer = this.mItems2Show.shift();
        if (!_el) {
            this.view.groupMask.visible = false;
            this.mFloatMessageMrg.showFloatTip("开始吧", 0x0000ff);
            return;
        }
        _el.playAni(this.itemAni, this);

    }
    private mItems2Show = [];
    /**游戏过关恢复场景 */
    private recoverViewWhenGameEnd() {
        this.view.txtInstruct.visible = false;
        this.view.btnAgainInGame.visible = false;
        this.view.btnAgain.visible = true;
        this.resetData();
        this.refreshData();
    }
    private resetData(){
         this.mClickStep = 0;
        this.mItems2Show.length = 0;
        this.errorTime = 0;
    }
    private recoverViewWhenGameStart() {
        this.view.txtInstruct.visible = true;
        this.view.btnStart.visible = true;
        this.view.btnAgainInGame.visible = false;
        this.view.btnAgain.visible = false;
        this.view.groupMask.visible = true;        
        this.resetData();
    }
    private mClickStep: number = 0;
    private onListItemTap(e: egret.Event) {
        let _skinIdx = this.view.groupMain.getChildIndex(e.target.parent);
        if (this.mStepData[this.mClickStep] !== _skinIdx) {
            this.showFloat(EnumOrderBoxStatus.WRONG);
            return;
        } else {
            if (this.mToalStepCount === this.mClickStep + 1) {
                this.mFloatMessageMrg.showFloatTip("恭喜过关", 0x00ff00);
                this.recoverViewWhenGameEnd();
                return;
            }
            this.showFloat(EnumOrderBoxStatus.CORRECT);
            this.mClickStep++;
        }
    }
    private errorTime: number = 0;
    private showFloat(type: EnumOrderBoxStatus) {
        if (type === EnumOrderBoxStatus.CORRECT) {
            this.mFloatMessageMrg.showFloatTip("不错哟", 0x00ff00);
        } else {
            if (++this.errorTime > 6) this.view.btnAgainInGame.visible = true;
            this.mFloatMessageMrg.showFloatTip("再试试", 0xff0000);
        }
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
    public onMask() {

    }
    onRegister() {
    }
    private mHasRemove:boolean;
    private onRemove(){
        this.mHasRemove = true;
    }


}