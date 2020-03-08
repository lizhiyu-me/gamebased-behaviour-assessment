class LobbyEntryItemView extends eui.ItemRenderer {
    public group4Click: eui.Group;
    public recBg: eui.Rect;
    public labelName: eui.Label;
    public labelSubName: eui.Label;

    constructor() {
        super();
    }
    @ScaleButton_FnDecoration()
    childrenCreated() {
        super.childrenCreated();
        this["display4ScaleArr"] = [this.group4Click];
        egret.log('[LobbyEntryItemView:childrenCreate]')
    }
}