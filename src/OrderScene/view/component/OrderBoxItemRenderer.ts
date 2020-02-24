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
		// if (this.mData.stat === EnumOrderBoxStatus.CORRECT) {
			AppFacade.getInstance().sendNotification(OrderBoxMediator.collectItem2Show,{item:this,stat:this.mData.stat})
			// setTimeout(function (that) {
			// 	egret.Tween.get(this.txtGreen).to({ visible:true,scaleX: 1.2, scaleY: 1.2 }, 800)
			// 		.to({ scaleX: 1, scaleY: 1, alpha: 0 }, 800).call(
			// 			() => {
			// 				this.txtGreen.alpha = 1;
			// 				this.txtGreen.visible = false;
			// 			}
			// 		)
			// }
			// , this.mData.showIdx * 1600, this);
		// }
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