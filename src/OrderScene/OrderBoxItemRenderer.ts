class OrderBoxItemRenderer extends eui.ItemRenderer {
	public imgBg: eui.Rect;
	public txtGreen: eui.Label;
	public txtRed: eui.Label;

	public constructor() {
		super();
	}
	private mData: OrderBoxItemData;
	protected dataChanged() {
		super.dataChanged();
		this.mData = this.data;
		this.setViewStatus(this.mData.stat);
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
interface OrderBoxItemData {
	stat: EnumOrderBoxStatus
}