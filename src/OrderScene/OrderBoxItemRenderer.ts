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
		if (this.mData.stat === EnumOrderBoxStatus.CORRECT) {
			setTimeout(function (that) {
				that.txtGreen.visible = true;
				egret.Tween.get(that.txtGreen).to({ scaleX: 1.2, scaleY: 1.2 }, 800)
					.to({ scaleX: 1, scaleY: 1, alpha: 0 }, 800).call(
						() => {
							that.txtGreen.alpha = 1;
							that.txtGreen.visible = false;
						}
					)
			}, this.mData.showIdx * 1600, this);
		}
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