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
var OrderBoxItemRenderer = (function (_super) {
    __extends(OrderBoxItemRenderer, _super);
    function OrderBoxItemRenderer() {
        return _super.call(this) || this;
    }
    OrderBoxItemRenderer.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        this.mData = this.data;
        this.setViewStatus(this.mData.stat);
    };
    OrderBoxItemRenderer.prototype.setViewStatus = function (sta) {
        this.txtGreen.visible = sta === EnumOrderBoxStatus.CORRECT;
        this.txtRed.visible = sta === EnumOrderBoxStatus.WRONG;
    };
    return OrderBoxItemRenderer;
}(eui.ItemRenderer));
__reflect(OrderBoxItemRenderer.prototype, "OrderBoxItemRenderer");
var EnumOrderBoxStatus;
(function (EnumOrderBoxStatus) {
    EnumOrderBoxStatus[EnumOrderBoxStatus["CORRECT"] = 0] = "CORRECT";
    EnumOrderBoxStatus[EnumOrderBoxStatus["WRONG"] = 1] = "WRONG";
})(EnumOrderBoxStatus || (EnumOrderBoxStatus = {}));
//# sourceMappingURL=OrderBoxItemRenderer.js.map