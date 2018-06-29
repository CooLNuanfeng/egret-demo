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
var TextInput = (function (_super) {
    __extends(TextInput, _super);
    function TextInput() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    TextInput.prototype.init = function () {
        var textIput = new egret.TextField();
        textIput.type = egret.TextFieldType.INPUT;
        this.addChild(textIput);
        var button = new egret.Shape();
        button.graphics.beginFill(0x00cc00);
        button.graphics.drawRect(0, 0, 100, 40);
        button.graphics.endFill();
        button.y = 50;
        this.addChild(button);
        button.touchEnabled = true;
        button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            textIput.setFocus();
        }, this);
    };
    return TextInput;
}(egret.DisplayObjectContainer));
__reflect(TextInput.prototype, "TextInput");
//# sourceMappingURL=textInput.js.map