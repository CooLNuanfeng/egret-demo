// TypeScript file
class MaskTest extends egret.DisplayObjectContainer{
    constructor(){
        super();
        this.once(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(event:egret.Event){
        var imgLoader:egret.ImageLoader = new egret.ImageLoader;
        imgLoader.once( egret.Event.COMPLETE, this.imgLoadHandler, this );
        imgLoader.load( "resource/cartoon-egret_03.png" );
    }
    private _bird:egret.Bitmap;
    private imgLoadHandler(event:egret.Event):void{
        var image = event.currentTarget;
        var texture = new egret.Texture();
        texture._setBitmapData(image.data);

        this._bird = new egret.Bitmap(texture);
    }
}