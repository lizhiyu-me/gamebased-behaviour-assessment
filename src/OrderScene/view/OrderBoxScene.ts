class OrderBoxScene extends BaseView {
    public listMain: eui.List;
    public txtCorrect: eui.Label;
    public txtComplete: eui.Label;
    public txtWrong: eui.Label;

    public btnStart: eui.Button;
    public btnAgain: eui.Button;


    constructor() {
        super();
        this.skinName = 'OrderBoxSceneSkin';

    }

}