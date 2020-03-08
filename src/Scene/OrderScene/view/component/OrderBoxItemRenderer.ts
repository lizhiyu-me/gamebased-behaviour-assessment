class OrderBoxItemRenderer extends eui.ItemRenderer {
	public imgBg: eui.Rect;
	public txtGreen: eui.Label;
	public txtRed: eui.Label;

	public constructor() {
		super();
	}
	private mData: IorderBoxItemData;
	protected dataChanged() {
		super.dataChanged();
		this.mData = this.data;
		AppFacade.getInstance().sendNotification(OrderBoxMediator.collectItem2Show, { item: this, stat: this.mData.stat })
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTapBegin,this);
		this.addEventListener(egret.TouchEvent.TOUCH_END,this.onTapEnd,this);
		this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onTapEnd,this);
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