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
// TypeScript file
var LoadResource = (function (_super) {
    __extends(LoadResource, _super);
    // public constructor() {
    //     super();
    //     RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
    //     RES.loadConfig("resource/default.res.json", "resource/");
    // }
    // private onConfigComplete(event:RES.ResourceEvent):void {
    //     console.log('complete');
    //     RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
    //     RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
    //     RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
    //     RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
    //     RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
    //     /*** 本示例关键代码段开始 ***/
    //     //加载已经配置过的组
    //     egret.log("创建前：" + RES.getGroupByName("icons").length);
    //     //创建动态 group
    //     RES.createGroup("icons", ["cartoon-egret_00_png", "cartoon-egret_01_png", "cartoon-egret_02_png", "cartoon-egret_03_png"]);
    //     egret.log("创建后：" + RES.getGroupByName("icons").length);
    //     //加载
    //     RES.loadGroup("icons");
    //     /*** 本示例关键代码段结束 ***/
    // }
    // private onResourceLoadComplete(event:RES.ResourceEvent):void {
    //     console.log('load resource complete');
    //     if (event.groupName == "icons") {
    //         RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
    //         RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
    //         RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
    //         RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
    //         this.createGameScene();
    //     }
    // }
    // private onItemLoadError(event:RES.ResourceEvent):void {
    //     console.warn("Url:" + event.resItem.url + " has failed to load");
    // }
    // private onResourceLoadError(event:RES.ResourceEvent):void {
    //     console.warn("Group:" + event.groupName + " has failed to load");
    //     this.onResourceLoadComplete(event);
    // }
    // private onResourceProgress(event:RES.ResourceEvent):void {
    //     console.log('process load');
    //     if (event.groupName == "icons") {
    //     }
    // }
    // private createGameScene():void {
    //     this.createBitmapByName("cartoon-egret_00_png", this.stage.stageWidth / 2, 200);
    //     this.createBitmapByName("cartoon-egret_01_png", this.stage.stageWidth / 2 + 200, 400);
    //     this.createBitmapByName("cartoon-egret_02_png", this.stage.stageWidth / 2 - 200, 400);
    //     this.createBitmapByName("cartoon-egret_03_png", this.stage.stageWidth / 2, 600);
    // }
    // private createBitmapByName(name:string, x:number, y:number):void {
    //     var result:egret.Bitmap = new egret.Bitmap();
    //     var texture:egret.Texture = RES.getRes(name);
    //     result.texture = texture;
    //     result.scaleX = result.scaleY = 0.5;
    //     result.anchorOffsetX = result.width / 2;
    //     result.anchorOffsetY = result.height / 2;
    //     result.x = x;
    //     result.y = y;
    //     this.addChild(result);
    // }
    function LoadResource() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    LoadResource.prototype.onAddToStage = function (event) {
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    LoadResource.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        /*** 本示例关键代码段开始 ***/
        //加载已经配置过的组
        RES.loadGroup("preload");
        /*** 本示例关键代码段结束 ***/
    };
    LoadResource.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    };
    LoadResource.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    LoadResource.prototype.onResourceLoadError = function (event) {
        console.warn("Group:" + event.groupName + " has failed to load");
        this.onResourceLoadComplete(event);
    };
    LoadResource.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
        }
    };
    //创建游戏场景
    LoadResource.prototype.createGameScene = function () {
        this.createBitmapByName("cartoon-egret_00_png", this.stage.stageWidth / 2, 200);
        this.createBitmapByName("cartoon-egret_01_png", this.stage.stageWidth / 2 + 200, 400);
        this.createBitmapByName("cartoon-egret_02_png", this.stage.stageWidth / 2 - 200, 400);
        this.createBitmapByName("cartoon-egret_03_png", this.stage.stageWidth / 2, 600);
    };
    LoadResource.prototype.createBitmapByName = function (name, x, y) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        result.scaleX = result.scaleY = 0.5;
        result.anchorOffsetX = result.width / 2;
        result.anchorOffsetY = result.height / 2;
        result.x = x;
        result.y = y;
        this.addChild(result);
    };
    return LoadResource;
}(egret.DisplayObjectContainer));
__reflect(LoadResource.prototype, "LoadResource");
//# sourceMappingURL=loadResource.js.map