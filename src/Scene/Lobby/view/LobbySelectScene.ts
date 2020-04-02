class LobbySelectScene extends BaseView {
        public listEntry:eui.List;
        public btnCopy:eui.Button;
        public labelUrl:eui.Label;

        constructor() {
            super();
        }
        childrenCreated(){
            super.childrenCreated();
            this.listEntry.itemRenderer = LobbyEntryItemView;
        }
    }
