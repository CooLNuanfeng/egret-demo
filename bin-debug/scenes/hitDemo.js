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
var HitDemo = (function (_super) {
    __extends(HitDemo, _super);
    function HitDemo() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    HitDemo.prototype.init = function () {
        this.drawText();
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawRect(0, 0, 100, 100);
        shp.graphics.endFill();
        shp.width = 100;
        shp.height = 100;
        this.addChild(shp);
        var isHit = shp.hitTestPoint(10, 10);
        this.infoText.text = "isHit: " + isHit;
    };
    HitDemo.prototype.drawText = function () {
        this.infoText = new egret.TextField();
        this.infoText.y = 200;
        this.infoText.text = "isHit";
        this.addChild(this.infoText);
    };
    return HitDemo;
}(egret.DisplayObjectContainer));
__reflect(HitDemo.prototype, "HitDemo");
//# sourceMappingURL=hitDemo.js.map