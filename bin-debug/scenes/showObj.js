// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var ShowObj = (function (_super) {
    __extends(ShowObj, _super);
    function ShowObj() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    ShowObj.prototype.onAddToStage = function () {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    ShowObj.prototype.onConfigComplete = function () {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadGroup('icons');
    };
    ShowObj.prototype.onGroupComplete = function (evt) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        /*** 本示例关键代码段开始 ***/
        /// 将已加载完成的图像显示出来
        if (evt.groupName == "icons") {
            var bird = new egret.Bitmap();
            bird.texture = RES.getRes('cartoon-egret_03_png');
            bird.x = 100;
            bird.y = 100;
            this.addChild(bird);
            /// 为定位设置基准点(即锚点)
            bird.anchorOffsetX = bird.width / 2;
            bird.anchorOffsetY = bird.height / 2;
            bird.x = this.stage.stageWidth * .5;
            bird.y = this.stage.stageHeight * .5;
            /// 提示信息
            this._txInfo = new egret.TextField;
            this.addChild(this._txInfo);
            this._txInfo.size = 28;
            this._txInfo.x = 50;
            this._txInfo.y = 50;
            this._txInfo.textAlign = egret.HorizontalAlign.LEFT;
            this._txInfo.textColor = 0x000000;
            this._txInfo.type = egret.TextFieldType.DYNAMIC;
            this._txInfo.lineSpacing = 6;
            this._txInfo.multiline = true;
            this._txInfo.text = "轻触屏幕调整显示对象位置";
            this._bgInfo = new egret.Shape;
            this.addChildAt(this._bgInfo, this.numChildren - 1);
            this._bgInfo.x = this._txInfo.x;
            this._bgInfo.y = this._txInfo.y;
            this._bgInfo.graphics.clear();
            this._bgInfo.graphics.beginFill(0xffffff, .5);
            this._bgInfo.graphics.drawRect(0, 0, this._txInfo.width, this._txInfo.height);
            this._bgInfo.graphics.endFill();
            this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (evt) {
                bird.x = evt.localX;
                bird.y = evt.localY;
            }, this);
        }
    };
    return ShowObj;
}(egret.DisplayObjectContainer));
__reflect(ShowObj.prototype, "ShowObj");
//# sourceMappingURL=showObj.js.map