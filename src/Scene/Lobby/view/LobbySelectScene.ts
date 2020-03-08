class LobbySelectScene extends BaseView {
        public readonly skinName = "LobbySelectSceneSkin";

        public listEntry:eui.List;
        public btnCopy:eui.Button;
        public labelUrl:eui.Label;

        constructor() {
            super();
            this.listEntry.itemRenderer = LobbyEntryItemView;
        }
    }
