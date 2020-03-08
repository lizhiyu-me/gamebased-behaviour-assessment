/**需设置点击组件 eg. this["display4ScaleArr"] = [this.btn1,this.btn2] */
function ScaleButton_FnDecoration() {
    function onTapBegin(e) {
        return egret.Tween.get(e.currentTarget).to({ scaleX: .8, scaleY: .8 }, 100)
    }
    function onTapEnd(e) {
        return egret.Tween.get(e.currentTarget).to({ scaleX: 1, scaleY: 1 }, 100)
    }
    function onTap(e:egret.Event) {
        return egret.Tween.get(e.currentTarget).to({ scaleX: 1, scaleY: 1 }, 100)
    }
    return function (target: any, methodName: any, desc: any) {
        return;
        let _oldMethod = desc.value;
        desc.value = function (...args: any[]) {
            _oldMethod.call(this);
            this['display4ScaleArr'] && this['display4ScaleArr'].forEach((item) => {
                item.addEventListener(egret.TouchEvent.TOUCH_BEGIN, onTapBegin, this);
                item.addEventListener(egret.TouchEvent.TOUCH_END, onTapEnd, this);
                item.addEventListener(egret.TouchEvent.TOUCH_TAP, onTap, this);
                item.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, onTapEnd, this);
            })
        }
    }
}