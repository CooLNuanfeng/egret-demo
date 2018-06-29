// TypeScript file
class CreateLoad extends egret.DisplayObjectContainer{
    constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event:egret.Event) {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        this.createGameScence();
    }
     //创建游戏场景
    private createGameScence():void {
        this.createBitmapByName("resource/assets/cartoon-egret_00.png", this.stage.stageWidth / 2, 200);
        this.createBitmapByName("resource/assets/cartoon-egret_01.png", this.stage.stageWidth / 2 + 200, 400);
        this.createBitmapByName("resource/assets/cartoon-egret_02.png", this.stage.stageWidth / 2 - 200, 400);
        this.createBitmapByName("resource/assets/cartoon-egret_03.png", this.stage.stageWidth / 2, 600);
    }
    private createBitmapByName(url:string, x:number, y:number):void {
        /*** 本示例关键代码段开始 ***/
        RES.getResByUrl(url, function(texture:egret.Texture):void {
            var result:egret.Bitmap = new egret.Bitmap();
            result.texture = texture;
            result.scaleX = result.scaleY = 0.5;
            result.anchorOffsetX = result.width / 2;
            result.anchorOffsetY = result.height / 2;
            result.x = x;
            result.y = y;
            this.addChild(result);
        }, this, RES.ResourceItem.TYPE_IMAGE);
        /*** 本示例关键代码段结束 ***/
    }
}