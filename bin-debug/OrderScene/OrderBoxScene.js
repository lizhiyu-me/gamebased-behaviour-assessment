var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var OrderBoxScene = (function (_super) {
    __extends(OrderBoxScene, _super);
    function OrderBoxScene() {
        var _this = _super.call(this) || this;
        _this.mClickStep = 0;
        _this.mToalStepCount = 0;
        _this.mStepData = {};
        _this.mItemLen = 15;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.initView, _this);
        _this.skinName = 'OrderBoxSceneSkin';
        return _this;
    }
    OrderBoxScene.prototype.childrenCeated = function () {
        _super.prototype.childrenCreated.call(this);
        this.initView();
    };
    OrderBoxScene.prototype.initView = function () {
        this.recoverView();
        this.mListMainDataProvider = new eui.ArrayCollection();
        this.listMain.itemRendererSkinName = 'OrderBoxItemSkin';
        this.listMain.itemRenderer = OrderBoxItemRenderer;
        this.listMain.dataProvider = this.mListMainDataProvider;
        this.listMain.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onListItemTap, this);
        this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStart, this);
        this.btnAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAgain, this);
    };
    OrderBoxScene.prototype.onStart = function () {
        this.btnStart.visible = false;
        this.refreshDataAndShowAni();
    };
    OrderBoxScene.prototype.onAgain = function () {
        this.recoverView();
    };
    OrderBoxScene.prototype.refreshDataAndShowAni = function () {
        this.mListMainDataProvider.source = this.getNewData();
        this.mListMainDataProvider.refresh();
    };
    /**还原场景组件状态及数据 */
    OrderBoxScene.prototype.recoverView = function () {
        this.btnStart.visible = true;
        this.btnAgain.visible = false;
        this.mClickStep = 0;
    };
    OrderBoxScene.prototype.onListItemTap = function (e) {
        if (this.mStepData[this.mClickStep] !== e.item.skinIdx) {
            this.showFloat(EnumOrderBoxStatus.WRONG);
            return;
        }
        else {
            if (this.mToalStepCount === this.mClickStep + 1) {
                this.showFloatWin();
                return;
            }
            this.showFloatCorrect();
            this.mClickStep++;
        }
    };
    OrderBoxScene.prototype.showFloat = function (type) {
        if (type === EnumOrderBoxStatus.CORRECT) {
            this.showFloatCorrect();
        }
        else {
            this.showFloatError();
        }
    };
    OrderBoxScene.prototype.showFloatCorrect = function () {
        var _this = this;
        egret.Tween.get(this.txtCorrect).to({ visible: true }).to({ alpha: 0 }, 500).call(function () {
            _this.txtCorrect.visible = false;
            _this.txtCorrect.alpha = 1;
        });
    };
    OrderBoxScene.prototype.showFloatWin = function () {
        var _this = this;
        egret.Tween.get(this.txtComplete).to({ visible: true }).to({ scaleX: 1.6, scaleY: 1.6 }, 500).call(function () {
            _this.txtComplete.visible = false;
            _this.btnAgain.visible = true;
        });
    };
    OrderBoxScene.prototype.showFloatError = function () {
        var _this = this;
        egret.Tween.get(this.txtWrong).to({ visible: true }).to({ alpha: 0 }, 500).call(function () {
            _this.txtWrong.visible = false;
            _this.txtWrong.alpha = 1;
        });
    };
    OrderBoxScene.prototype.getNewData = function () {
        var _this = this;
        this.mStepData = {};
        var _res = [];
        /**显示绿勾的item的下标数组 */
        var _correctItemIdxArr = [];
        for (var i = 0; i < this.mItemLen; ++i) {
            var random = Math.floor(Math.random() * 2);
            var _status = random == 0 ? EnumOrderBoxStatus.WRONG : EnumOrderBoxStatus.CORRECT;
            if (_status === EnumOrderBoxStatus.CORRECT) {
                _correctItemIdxArr.push(i);
            }
            var _item = {
                stat: _status,
                skinIdx: i,
                showIdx: 0
            };
            _res.push(_item);
        }
        this.mToalStepCount = _correctItemIdxArr.length;
        _correctItemIdxArr.sort(function (a, b) { return Math.random() - .5; });
        _correctItemIdxArr.forEach(function (el, i) {
            _this.mStepData[i] = el;
        });
        _res.forEach(function (el, i) {
            if (el.stat === EnumOrderBoxStatus.CORRECT) {
                _res[i].showIdx = _correctItemIdxArr.indexOf(el.skinIdx);
            }
        });
        return _res;
    };
    return OrderBoxScene;
}(eui.Component));
__reflect(OrderBoxScene.prototype, "OrderBoxScene");
//# sourceMappingURL=OrderBoxScene.js.map