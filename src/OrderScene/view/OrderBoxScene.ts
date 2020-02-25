class OrderBoxScene extends BaseView {
    public listMain: eui.List;
    public txtCorrect: eui.Label;
    public txtComplete: eui.Label;
    public txtWrong: eui.Label;

    public btnStart: eui.Button;
    public btnAgain: eui.Button;
    public btnAgainInGame: eui.Button;
    public txtInstruct: eui.Label;
    public groupMask:eui.Group;
    public txtWarning:eui.Label;





    constructor() {
        super();
        this.skinName = 'OrderBoxSceneSkin';

    }

}