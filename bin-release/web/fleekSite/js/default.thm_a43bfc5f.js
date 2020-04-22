
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/component/ButtonSkin.exml'] = window.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 100;
		this.width = 200;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i()];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x424787;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/component/TopBannerSkin.exml'] = window.TopBannerSkin = (function (_super) {
	__extends(TopBannerSkin, _super);
	function TopBannerSkin() {
		_super.call(this);
		this.skinParts = ["btnBack"];
		
		this.height = 88;
		this.width = 1334;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = TopBannerSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.btnBack_i()];
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Label();
		this.btnBack = t;
		t.left = 0;
		t.size = 80;
		t.text = "⬅️";
		t.verticalCenter = 0;
		return t;
	};
	return TopBannerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Scene/Lobby/component/LobbyEntryItemSkin.exml'] = window.LobbyEntryItemSkin = (function (_super) {
	__extends(LobbyEntryItemSkin, _super);
	function LobbyEntryItemSkin() {
		_super.call(this);
		this.skinParts = ["recBg","labelName","labelSubName","group4Click"];
		
		this.height = 508;
		this.width = 508;
		this.elementsContent = [this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.bgColor"],[0],this.recBg,"fillColor");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this.labelName,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.subName"],[0],this.labelSubName,"text");
	}
	var _proto = LobbyEntryItemSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 508;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 508;
		t.elementsContent = [this.group4Click_i()];
		return t;
	};
	_proto.group4Click_i = function () {
		var t = new eui.Group();
		this.group4Click = t;
		t.height = 508;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 508;
		t.elementsContent = [this.recBg_i(),this._Group1_i()];
		return t;
	};
	_proto.recBg_i = function () {
		var t = new eui.Rect();
		this.recBg = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.labelName_i(),this.labelSubName_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.labelName_i = function () {
		var t = new eui.Label();
		this.labelName = t;
		t.size = 102;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelSubName_i = function () {
		var t = new eui.Label();
		this.labelSubName = t;
		t.size = 102;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return LobbyEntryItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Scene/Lobby/LobbySelectSceneSkin.exml'] = window.LobbySelectSceneSkin = (function (_super) {
	__extends(LobbySelectSceneSkin, _super);
	function LobbySelectSceneSkin() {
		_super.call(this);
		this.skinParts = ["listEntry","labelUrl","btnCopy"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Scroller1_i(),this._Group3_i()];
	}
	var _proto = LobbySelectSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x4492ed;
		t.height = 1000;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1664;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 83;
		t.text = "点击选择关卡";
		t.textColor = 0x262323;
		t.top = 42;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 508;
		t.horizontalCenter = 0;
		t.verticalCenter = 18;
		t.width = 1178;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.listEntry_i()];
		return t;
	};
	_proto.listEntry_i = function () {
		var t = new eui.List();
		this.listEntry = t;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = LobbyEntryItemSkin;
		t.layout = this._HorizontalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.bgColor = "0xff0000";
		t.name = "1";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.bgColor = "0x00ff00";
		t.name = "2";
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.right = 34;
		t.elementsContent = [this._Group2_i(),this.btnCopy_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Label2_i(),this.labelUrl_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "如果本游戏对您有所帮助，欢迎到本项目github地址提交建议反馈";
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.labelUrl_i = function () {
		var t = new eui.Label();
		this.labelUrl = t;
		t.text = "https://github.com/PotentialSteffan/GameBased_Behaviour_Assessment";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto.btnCopy_i = function () {
		var t = new eui.Button();
		this.btnCopy = t;
		t.label = "复制";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "ButtonSkin";
		t.verticalCenter = 0;
		t.x = 999;
		return t;
	};
	return LobbySelectSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Scene/OrderBox/component/OrderBoxItemSkin.exml'] = window.OrderBoxItemSkin = (function (_super) {
	__extends(OrderBoxItemSkin, _super);
	function OrderBoxItemSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","txtGreen","txtRed"];
		
		this.height = 220;
		this.width = 220;
		this.elementsContent = [this.imgBg_i(),this.txtGreen_i(),this.txtRed_i()];
	}
	var _proto = OrderBoxItemSkin.prototype;

	_proto.imgBg_i = function () {
		var t = new eui.Rect();
		this.imgBg = t;
		t.fillColor = 0xb5b3b3;
		t.percentHeight = 100;
		t.strokeColor = 0x726e6e;
		t.strokeWeight = 9;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtGreen_i = function () {
		var t = new eui.Label();
		this.txtGreen = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.size = 88;
		t.text = "YES";
		t.textColor = 0x3bb709;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.txtRed_i = function () {
		var t = new eui.Label();
		this.txtRed = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.size = 122;
		t.text = "错";
		t.textColor = 0xfc0f0f;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return OrderBoxItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Scene/OrderBox/OrderBoxSceneSkin.exml'] = window.OrderBoxSceneSkin = (function (_super) {
	__extends(OrderBoxSceneSkin, _super);
	function OrderBoxSceneSkin() {
		_super.call(this);
		this.skinParts = ["btnAgainInGame","groupMain","groupMask","btnStart","btnAgain","txtInstruct","btnBack"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Rect1_i(),this.btnAgainInGame_i(),this._Group1_i(),this._Group2_i()];
	}
	var _proto = OrderBoxSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xcecac0;
		t.height = 1000;
		t.horizontalCenter = 0;
		t.strokeColor = 0xf9fbfc;
		t.verticalCenter = 0;
		t.width = 1664;
		return t;
	};
	_proto.btnAgainInGame_i = function () {
		var t = new eui.Button();
		this.btnAgainInGame = t;
		t.height = 100;
		t.label = "再来一次";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ButtonSkin";
		t.top = 139;
		t.visible = false;
		t.width = 200;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 100;
		t.verticalCenter = 0;
		t.elementsContent = [this.groupMain_i(),this.groupMask_i(),this.btnStart_i(),this.btnAgain_i(),this.txtInstruct_i()];
		return t;
	};
	_proto.groupMain_i = function () {
		var t = new eui.Group();
		this.groupMain = t;
		t.height = 680;
		t.horizontalCenter = 0;
		t.width = 1132;
		t.y = 0;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._Component1_i(),this._Component2_i(),this._Component3_i(),this._Component4_i(),this._Component5_i(),this._Component6_i(),this._Component7_i(),this._Component8_i(),this._Component9_i(),this._Component10_i(),this._Component11_i(),this._Component12_i(),this._Component13_i(),this._Component14_i(),this._Component15_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.orientation = "rows";
		return t;
	};
	_proto._Component1_i = function () {
		var t = new eui.Component();
		t.skinName = "OrderBoxItemSkin";
		return t;
	};
	_proto._Component2_i = function () {
		var t = new eui.Component();
		t.skinName = "OrderBoxItemSkin";
		return t;
	};
	_proto._Component3_i = function () {
		var t = new eui.Component();
		t.skinName = "OrderBoxItemSkin";
		return t;
	};
	_proto._Component4_i = function () {
		var t = new eui.Component();
		t.skinName = "OrderBoxItemSkin";
		return t;
	};
	_proto._Component5_i = function () {
		var t = new eui.Component();
		t.skinName = "OrderBoxItemSkin";
		return t;
	};
	_proto._Component6_i = function () {
		var t = new eui.Component();
		t.skinName = "OrderBoxItemSkin";
		return t;
	};
	_proto._Component7_i = function () {
		var t = new eui.Component();
		t.skinName = "OrderBoxItemSkin";
		return t;
	};
	_proto._Component8_i = function () {
		var t = new eui.Component();
		t.skinName = "OrderBoxItemSkin";
		return t;
	};
	_proto._Component9_i = function () {
		var t = new eui.Component();
		t.skinName = "OrderBoxItemSkin";
		return t;
	};
	_proto._Component10_i = function () {
		var t = new eui.Component();
		t.skinName = "OrderBoxItemSkin";
		return t;
	};
	_proto._Component11_i = function () {
		var t = new eui.Component();
		t.skinName = "OrderBoxItemSkin";
		return t;
	};
	_proto._Component12_i = function () {
		var t = new eui.Component();
		t.skinName = "OrderBoxItemSkin";
		return t;
	};
	_proto._Component13_i = function () {
		var t = new eui.Component();
		t.skinName = "OrderBoxItemSkin";
		return t;
	};
	_proto._Component14_i = function () {
		var t = new eui.Component();
		t.skinName = "OrderBoxItemSkin";
		return t;
	};
	_proto._Component15_i = function () {
		var t = new eui.Component();
		t.skinName = "OrderBoxItemSkin";
		return t;
	};
	_proto.groupMask_i = function () {
		var t = new eui.Group();
		this.groupMask = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.btnStart_i = function () {
		var t = new eui.Button();
		this.btnStart = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.label = "开始";
		t.skinName = "ButtonSkin";
		t.visible = false;
		t.width = 200;
		t.y = 286;
		return t;
	};
	_proto.btnAgain_i = function () {
		var t = new eui.Button();
		this.btnAgain = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.label = "再来一次";
		t.skinName = "ButtonSkin";
		t.visible = false;
		t.width = 200;
		t.y = 515;
		return t;
	};
	_proto.txtInstruct_i = function () {
		var t = new eui.Label();
		this.txtInstruct = t;
		t.bold = true;
		t.horizontalCenter = 115;
		t.size = 36;
		t.text = "点击开始,播放动画\n动画播放完毕后\n按照播放顺序点击方块即可";
		t.textColor = 0xe85912;
		t.top = 40;
		t.visible = false;
		t.width = 595;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.top = 0;
		t.touchThrough = true;
		t.percentWidth = 100;
		t.elementsContent = [this.btnBack_i()];
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Label();
		this.btnBack = t;
		t.left = 0;
		t.size = 70;
		t.text = "<";
		t.textAlign = "center";
		t.textColor = 0x14525b;
		t.verticalCenter = 0;
		t.width = 92;
		return t;
	};
	return OrderBoxSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Scene/ReactionRate/component/ReactionNumSkin.exml'] = window.ReactionNumSkin = (function (_super) {
	__extends(ReactionNumSkin, _super);
	function ReactionNumSkin() {
		_super.call(this);
		this.skinParts = ["labelNum"];
		
		this.height = 94;
		this.width = 90;
		this.elementsContent = [this.labelNum_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.num"],[0],this.labelNum,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.color"],[0],this.labelNum,"textColor");
	}
	var _proto = ReactionNumSkin.prototype;

	_proto.labelNum_i = function () {
		var t = new eui.Label();
		this.labelNum = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 70;
		t.verticalCenter = 0;
		return t;
	};
	return ReactionNumSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Scene/ReactionRate/ReactionRateSceneSkin.exml'] = window.ReactionRateSceneSkin = (function (_super) {
	__extends(ReactionRateSceneSkin, _super);
	function ReactionRateSceneSkin() {
		_super.call(this);
		this.skinParts = ["groupLock","listSecret","labelLockStatus","btnRestart","btnBack","btnSwitch"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this.btnSwitch_i(),this._Label1_i()];
	}
	var _proto = ReactionRateSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xcecac0;
		t.height = 1000;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1664;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 618;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 618;
		t.elementsContent = [this.groupLock_i(),this.listSecret_i(),this.labelLockStatus_i()];
		return t;
	};
	_proto.groupLock_i = function () {
		var t = new eui.Group();
		this.groupLock = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 618;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 618;
		return t;
	};
	_proto.listSecret_i = function () {
		var t = new eui.List();
		this.listSecret = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ReactionNumSkin;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 272;
		t.layout = this._HorizontalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -42;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.color = "0xff0000";
		t.num = "8";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.color = "0xff0000";
		t.num = "6";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.color = "0xff0000";
		t.num = "8";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.color = "0x00ff00";
		t.num = "6";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.color = "0x00ff00";
		t.num = "8";
		return t;
	};
	_proto.labelLockStatus_i = function () {
		var t = new eui.Label();
		this.labelLockStatus = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "锁定中";
		t.textColor = 0xf90707;
		t.verticalCenter = 67;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.top = 139;
		t.width = 200;
		t.elementsContent = [this.btnRestart_i()];
		return t;
	};
	_proto.btnRestart_i = function () {
		var t = new eui.Button();
		this.btnRestart = t;
		t.alpha = 1;
		t.height = 100;
		t.horizontalCenter = 0;
		t.label = "再来一次";
		t.skinName = "ButtonSkin";
		t.width = 200;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.btnBack_i()];
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Label();
		this.btnBack = t;
		t.left = 0;
		t.size = 70;
		t.text = "<";
		t.textAlign = "center";
		t.textColor = 0x14525b;
		t.verticalCenter = 0;
		t.width = 92;
		return t;
	};
	_proto.btnSwitch_i = function () {
		var t = new eui.Button();
		this.btnSwitch = t;
		t.height = 100;
		t.label = "开始";
		t.right = 87;
		t.skinName = "ButtonSkin";
		t.verticalCenter = 77;
		t.width = 200;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.right = 59;
		t.text = "点击开始按钮，锁盘旋转。\n\n点击暂停按钮，依次使指针停留在屏幕中央显示的数字位置即可";
		t.textColor = 0xe85912;
		t.verticalCenter = -131;
		t.width = 265;
		return t;
	};
	return ReactionRateSceneSkin;
})(eui.Skin);