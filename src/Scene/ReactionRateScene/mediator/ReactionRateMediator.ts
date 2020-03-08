class ReactionRateMediator implements IMediator {
    static NAME: string = 'ReactionRateMediator';
    private mView: ReactionRateScene;
    constructor(view) {
        this.registerNotifications();
        this.mView = new view();
        this.mView.setBelongMediator && this.mView.setBelongMediator(this);
    }
    get view(): ReactionRateScene {
        return this.mView;
    }
    registerNotifications() {
        AppFacade.getInstance().registerNotifications(this, [

        ])
    }
    /**皮肤加载完毕 */
    onViewUIComplete() {
        let _layerMediator = AppFacade.getInstance().retriveMediator(LayerMediator.NAME) as LayerMediator;
        _layerMediator.addScene(this.view);
        this.initView();
    }
    private mCenterNumberDataProvider = new eui.ArrayCollection();
    private initView() {
        this.view.btnSwitch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSwitch, this);
        this.view.btnRestart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAgain, this);
        this.refreshCenterNumber();
        this.initRotateTimer();
        this.generateLockPanel();
        this.view.listSecret.dataProvider = this.mCenterNumberDataProvider;

    }
    private mCenterNumData: number[] = [];
    private refreshCenterNumber() {
        this.mCenterNumData.length = 0;
        let _res = [];
        let _len = 5;
        for (let i = 0; i < _len; i++) {
            let _item: { num: number, color: number };
            _item = {
                num: this.getRandomNum(this.mCenterNumData),
                color: 0xff0000
            }
            this.mCenterNumData.push(_item.num);
            // this.mCenterNumData.push(9);
            _res.push(_item);
        }
        this.mCenterNumberDataProvider.source = _res;
    }
    private getRandomNum(arr) {
        let _random = Math.floor(Math.random() * 10);
        // let _random = 9;
        if (arr[arr.length - 1] === _random) {
            return this.getRandomNum(arr);
        } else {
            return _random;
        };
    }
    private mPointerArc: number;
    private getPointerArc(baseArc: number) {
        this.mPointerArc = baseArc * 2;
        return this.mPointerArc;
    }
    private mPointer: { container: egret.DisplayObjectContainer, arc: number, shape: egret.Shape }
    /**生成指针 */
    private generatePointerObj(): egret.DisplayObjectContainer {
        if (!this.mPointer) this.mPointer = {} as { container: egret.DisplayObjectContainer, arc: number, shape: egret.Shape };
        let _secContainer = this.generateSectionContainer();
        let _pointer = this.generateSectionArc({
            sectionWidth: this.mInitialParamOfSection.sectionWidth,
            radius: this.mInitialParamOfSection.radius,
            angle2ArcUnit: this.mInitialParamOfSection.angle2ArcUnit,
            sectionArc: this.getPointerArc(this.mInitialParamOfSection.sectionArc)
        }
            , 0xEFC562);
        _secContainer.addChild(_pointer);
        this.mPointer.arc = this.mInitialParamOfSection.sectionArc;
        this.mPointer.container = _secContainer;
        this.mPointer.shape = _pointer;
        _secContainer.alpha = .6;
        this.setPointerToNewPos();
        return _secContainer;
    }
    private mMarkArcObj: egret.DisplayObjectContainer;
    private generateMarkArcObj() {
        this.mMarkArcObj = this.generateSectionContainer();
        this.mMarkArcObj.alpha = .5;
        this.mMarkArcObj.addChild(this.generateSectionArc(this.mInitialParamOfSection, 0xff0000));
        return this.mMarkArcObj;
    }
    private mBaseData: { diameter, radius, angle2ArcUnit, arc2angleUnit, sectionWidth };
    private generateBaseData(diameter): { diameter, radius, angle2ArcUnit, arc2angleUnit, sectionWidth } {
        if (!this.mBaseData) this.mBaseData = {} as { diameter, radius, angle2ArcUnit, arc2angleUnit, sectionWidth };
        this.mBaseData.diameter = diameter;
        this.mBaseData.radius = diameter / 2;
        this.mBaseData.angle2ArcUnit = Math.PI / 180;
        this.mBaseData.arc2angleUnit = 180 / Math.PI;
        //TODO calculate by setting count
        this.mBaseData.sectionWidth = 192;
        return this.mBaseData;
    }
    /**生成锁盘界面 */
    private generateLockPanel(sectionCount: number = this.view.sectionCount, diameter: number = 618) {
        let _baseData = this.generateBaseData(diameter);
        let _count = sectionCount;
        let _sectionArc = _baseData.angle2ArcUnit * 360 / _count;

        let _outerCircular = new egret.Shape();
        let _outerCircularGrap: egret.Graphics = _outerCircular.graphics;
        _outerCircularGrap.beginFill(0xff0000);
        _outerCircularGrap.drawCircle(_baseData.radius, _baseData.radius, _baseData.radius);
        _outerCircularGrap.endFill();

        let _container = this.view.groupLock;
        _container.addChild(_outerCircular);

        let _innerCircular = new egret.Shape();
        let _innerCircularGrap: egret.Graphics = _innerCircular.graphics;
        _innerCircularGrap.beginFill(0x302A2A);
        _innerCircularGrap.drawCircle(_baseData.radius, _baseData.radius, 156);
        _innerCircularGrap.endFill();
        _container.addChild(_innerCircular);


        let _sectionContainer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        _sectionContainer.width = _baseData.diameter;
        _sectionContainer.height = _baseData.diameter;
        _container.addChildAt(_sectionContainer, 1);
        for (let i = 0; i < 10; i++) {
            let _itemContainer: egret.DisplayObjectContainer = this.generateSectionContainer();
            if (!this.mInitialParamOfSection) this.mInitialParamOfSection = {
                sectionWidth: _baseData.sectionWidth,
                radius: _baseData.radius,
                angle2ArcUnit: _baseData.angle2ArcUnit,
                sectionArc: _sectionArc
            }
            let _section = this.generateSectionArc(this.mInitialParamOfSection);
            _itemContainer.addChild(_section);

            let _labelNum: eui.Label = new eui.Label(i + "");
            _labelNum.size = 70 + _labelNum.height / 2;
            _labelNum.x = (_baseData.sectionWidth - _labelNum.width) / 2 + _labelNum.width / 2;
            _labelNum.y = 78;
            _itemContainer.addChild(_labelNum);
            _itemContainer.rotation = i * _sectionArc * _baseData.arc2angleUnit;
            _labelNum.anchorOffsetX = _labelNum.width / 2;
            _labelNum.anchorOffsetY = _labelNum.height / 2;
            _labelNum.rotation = -i * _sectionArc * _baseData.arc2angleUnit;

            _sectionContainer.addChild(_itemContainer);
            _sectionContainer.cacheAsBitmap = true;
        }
        _container.addChildAt(this.generatePointerObj(), 2);
        _container.addChildAt(this.generateMarkArcObj(), 2);

        this.initResultCheckDic(_count);
        this.setMarkArcObjPos();

        // this.onStart();
    }
    private mInitialParamOfSection: { sectionWidth, radius, angle2ArcUnit, sectionArc };
    private generateSectionArc(param: { sectionWidth, radius, angle2ArcUnit, sectionArc }, color: number = 0x513B06): egret.Shape {
        if (!param) return;
        let _part: egret.Shape = new egret.Shape();
        let _partGrap: egret.Graphics = _part.graphics;
        _partGrap.beginFill(color);
        _partGrap.moveTo(param.sectionWidth / 2, param.radius);
        _partGrap.lineTo(param.sectionWidth / 2, 0);
        _partGrap.drawArc(param.sectionWidth / 2, param.radius, param.radius, -param.angle2ArcUnit * 90 - param.sectionArc / 2, -param.angle2ArcUnit * 90 + param.sectionArc / 2);
        _partGrap.lineTo(param.sectionWidth / 2, param.radius);
        _partGrap.endFill();
        return _part;
    }
    private generateSectionContainer(): egret.DisplayObjectContainer {
        let _baseData = this.mBaseData;
        let _itemContainer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        _itemContainer.width = _baseData.sectionWidth;
        _itemContainer.height = _baseData.radius;
        _itemContainer.x = (_baseData.diameter - _baseData.sectionWidth) / 2 + _baseData.sectionWidth / 2;
        _itemContainer.y = _baseData.radius;
        _itemContainer.anchorOffsetX = _baseData.sectionWidth / 2;
        _itemContainer.anchorOffsetY = _baseData.radius;
        return _itemContainer;
    }
    private mRotateSwitch: boolean = false;
    private mRotateTimerDur: number = 17;
    private mRotateTimer: egret.Timer = new egret.Timer(this.mRotateTimerDur);
    private initRotateTimer() {
        this.mRotateTimer.addEventListener(egret.TimerEvent.TIMER, this.onRotateTimer, this);
    }
    private mPointerRotateAngle: number = 0;
    private onRotateTimer() {
        let _curPointerRotate: number = this.mPointer.container.rotation;
        _curPointerRotate = _curPointerRotate < 0 ? this.mPointer.container.rotation + 360 : _curPointerRotate;
        this.mPointerRotateAngle = (_curPointerRotate + 10) % 360;
        this.mPointer.container.rotation = this.mPointerRotateAngle;
    }
    private onStart() {
        this.mRotateTimer.start();
    }
    private onPause() {
        this.mRotateTimer.stop();
        if (this.checkIsInCorrectPos()) {
            //check is success
            if (this.mCurStep === 4) {
                this.view.setLabelStatus(true);
            }
            let _item = this.mCenterNumberDataProvider.source[this.mCurStep];
            _item.color = 0x00ff00;
            this.mCenterNumberDataProvider.itemUpdated(_item);
            this.mCurStep++;
            this.setMarkArcObjPos();
        };
    }

    private mCurStep: number = 0;
    private checkIsInCorrectPos(): boolean {
        let _curNum: number = this.getCurTarIdx();
        let _constAngle: number = this.mSectionCenterAngleDic[_curNum];
        let _isCorrect: boolean = (() => {
            // egret.log("[ReactionRateMediator:checkIsInCorrectPos] this.mPointerRotateAngle->", this.mPointerRotateAngle)
            //TODO: storage critical value in dic to avoid frequently claculate
            let _centerDistance;
            let _absDistance;
            if (_constAngle === 0 && this.mPointerRotateAngle) {
                var _temp = 360 - this.mPointerRotateAngle;
                this.mPointerRotateAngle = Math.min(_temp,this.mPointerRotateAngle);
            }
            _centerDistance = this.mPointerRotateAngle - _constAngle;
            _absDistance = Math.abs(_centerDistance);
            return _absDistance <= (this.mPointerArc - this.mInitialParamOfSection.sectionArc)/2 * this.mBaseData.arc2angleUnit;
        })();
        return _isCorrect;
    }
    private mSectionCenterAngleDic: { [idx: number]: number } = {};
    private initResultCheckDic(count: number) {
        let _intialSectionData = this.mInitialParamOfSection;
        let _sectionAngle: number = _intialSectionData.sectionArc * this.mBaseData.arc2angleUnit;
        for (let i = 0; i < count; i++) {
            this.mSectionCenterAngleDic[i] = i * _sectionAngle;
        }
    }
    private onAgain() {
        this.recoverView();
    }
    private onSwitch() {
        let _status: number = this.view.onSwitch();
        if (_status === 0) this.onPause();
        else if (_status === 1) this.onStart();
    }
    private setPointerToNewPos() {
        this.mPointer.container.rotation = Math.floor(Math.random() * 360);
    }
    private setMarkArcObjPos() {
        let _curNum: number = this.getCurTarIdx();
        if (_curNum == null) {
            this.mMarkArcObj.visible = false;
            return;
        } else {
            this.mMarkArcObj.visible = true;
        }
        let _constAngle: number = this.mSectionCenterAngleDic[_curNum];
        this.mMarkArcObj.rotation = _constAngle;
        // if (this.mMarkArcObj.rotation < 0) this.mMarkArcObj.rotation += 360;
    }
    private getCurTarIdx(): number {
        return this.mCenterNumData[this.mCurStep];
    }
    /**还原场景组件状态及数据 */
    private recoverView() {
        this.mRotateTimer.reset();
        this.refreshCenterNumber();
        this.mCurStep = 0;
        this.view.setLabelStatus(false);
        this.setPointerToNewPos();
        this.setMarkArcObjPos();
        this.view.resumeSwitchBtn();
    }
    onRegister() {
        if (this.view.hasUICompleteCache) this.onViewUIComplete();
    }


}