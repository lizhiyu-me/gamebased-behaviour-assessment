class LobbySelectScene extends BaseView {
        public readonly skinName = "LobbySelectSceneSkin";

        public listEntry:eui.List;
        constructor() {
            super();
            this.listEntry.itemRenderer = LobbyEntryItemView;
        }
    }
