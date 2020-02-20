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
        this.mListMainDataProvider = new eui.ArrayCollection();
        this.listMain.itemRendererSkinName = 'OrderBoxItemSkin';
        this.listMain.itemRenderer = OrderBoxItemRenderer;
        this.listMain.dataProvider = this.mListMainDataProvider;
        this.mListMainDataProvider.source = this.getInitData();
    };
    OrderBoxScene.prototype.getInitData = function () {
        var _res = [];
        for (var i = 0; i < this.mItemLen; ++i) {
            var random = Math.floor(Math.random() * 2);
            var _status = random == 0 ? EnumOrderBoxStatus.WRONG : EnumOrderBoxStatus.CORRECT;
            var _item = {
                stat: _status
            };
            _res.push(_item);
        }
        return _res;
    };
    return OrderBoxScene;
}(eui.Component));
__reflect(OrderBoxScene.prototype, "OrderBoxScene");
//# sourceMappingURL=OrderBoxScene.js.map