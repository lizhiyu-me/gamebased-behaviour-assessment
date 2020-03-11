class OrderBoxItemRenderer extends eui.Component {

	public imgBg: eui.Rect;
	public txtGreen: eui.Label;
	public txtRed: eui.Label;

	public constructor() {
		super();
		this.skinName = 'OrderBoxItemSkin';
	}
	childrenCreated(){
		super.childrenCreated();
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTapBegin,this);
		this.addEventListener(egret.TouchEvent.TOUCH_END,this.onTapEnd,this);
		this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onTapEnd,this);
	}
	playAni(cb,that){
		egret.log("playAni")
		 egret.Tween.get(this.txtGreen).to({visible: true}).to({ scaleX: 1.2, scaleY: 1.2 }, 800)
			.to({ scaleX: 1, scaleY: 1, alpha: 0 }, 800).to({alpha:1,visible:false}).call(cb,that);
	}
	private onTapBegin(){
		this.imgBg.fillColor =  0x161111;
	}
	private onTapEnd(){
		this.imgBg.fillColor =  0xB5B3B3;
	}
	private setViewStatus(sta: EnumOrderBoxStatus) {
		this.txtGreen.visible = sta === EnumOrderBoxStatus.CORRECT;
		this.txtRed.visible = sta === EnumOrderBoxStatus.WRONG;
	}


}
enum EnumOrderBoxStatus {
	CORRECT,
	WRONG
}
interface IorderBoxItemData {
	stat: EnumOrderBoxStatus,
	skinIdx: number,
	showIdx: number
}