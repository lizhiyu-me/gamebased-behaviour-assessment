//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {
    private mStage: egret.Stage;
    private mWidth: number;
    public constructor(stage: egret.Stage) {
        super();
        this.mStage = stage;
        this.width = this.mStage.stageWidth;
        this.height = this.mStage.stageHeight;
        this.mWidth = this.mStage.stageWidth
        this.createView();
    }

    private textField: egret.TextField;
    private mProgressRect: eui.Rect;
    private createView(): void {
        this.textField = new egret.TextField();
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
        this.textField.verticalAlign = "middle";

        let _progressContainer = new egret.Sprite();
        _progressContainer.width = this.mWidth;
        _progressContainer.height = 120;
        let _bgRect = new eui.Rect();
        _bgRect.width = this.mWidth;
        _bgRect.height = 120;
        this.mProgressRect = new eui.Rect();
        this.mProgressRect.height = 120;
        this.mProgressRect.fillColor = 0x00ff00;


        _progressContainer.addChild(_bgRect);
        _progressContainer.addChild(this.mProgressRect);
        _progressContainer.addChild(this.textField);
        this.textField.x = (_progressContainer.width - this.textField.width) / 2;
        this.textField.y = (_progressContainer.height - this.textField.height) / 2;
        _progressContainer.y =0;
        _progressContainer.x = (this.mWidth - _progressContainer.width) / 2;
        this.addChild(_progressContainer);

    }

    public onProgress(current: number, total: number): void {
        this.textField.text = `Loading...${current}/${total}`;
        let _rate: number = current / total;
        this.mProgressRect.width = _rate * this.mWidth;
    }
}
