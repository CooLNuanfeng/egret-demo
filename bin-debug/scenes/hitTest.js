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
var HitTest = (function (_super) {
    __extends(HitTest, _super);
    function HitTest() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    HitTest.prototype.onAddToStage = function (event) {
        var imgLoader = new egret.ImageLoader;
        imgLoader.once(egret.Event.COMPLETE, this.imgLoadHandler, this);
        imgLoader.load("resource/assets/cartoon-egret_00.png");
    };
    HitTest.prototype.imgLoadHandler = function (evt) {
        /// 展示用显示对象： 白鹭小鸟
        var image = evt.currentTarget;
        var texture = new egret.Texture();
        texture._setBitmapData(image.data);
        this._bird = new egret.Bitmap(texture);
        this.addChild(this._bird);
        this._bird.anchorOffsetX = this._bird.width / 2;
        this._bird.anchorOffsetY = this._bird.height / 2;
        this._bird.x = this.stage.stageWidth * 0.5;
        this._bird.y = this.stage.stageHeight * 0.618;
        this.launchCollisionTest();
    };
    HitTest.prototype.launchCollisionTest = function () {
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this);
    };
    HitTest.prototype.touchHandler = function (evt) {
        switch (evt.type) {
            case egret.TouchEvent.TOUCH_MOVE:
                this.checkCollision(evt.stageX, evt.stageY);
                break;
            case egret.TouchEvent.TOUCH_BEGIN:
                this.checkCollision(evt.stageX, evt.stageY);
                break;
            case egret.TouchEvent.TOUCH_END:
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchHandler, this);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this);
                break;
        }
    };
    HitTest.prototype.checkCollision = function (x, y) {
        var bResult = this._bird.hitTestPoint(x, y);
        console.log(bResult);
    };
    return HitTest;
}(egret.DisplayObjectContainer));
__reflect(HitTest.prototype, "HitTest");
// class HitTest extends egret.DisplayObjectContainer {
//     public constructor() {
//         super();
//         this.once( egret.Event.ADDED_TO_STAGE, this.onAddToStage, this );
//     }
//     private onAddToStage(event:egret.Event) {
//         var imgLoader:egret.ImageLoader = new egret.ImageLoader;
//         imgLoader.once( egret.Event.COMPLETE, this.imgLoadHandler, this );
//         imgLoader.load( "resource/assets/cartoon-egret_00.png" );
//     }
//     private _iTouchCollideStatus:number;
//     private _bShapeTest:boolean;
//     private launchCollisionTest():void {
//         this._iTouchCollideStatus = TouchCollideStatus.NO_TOUCHED;
//         this._bShapeTest = false;
//         this.stage.addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this );
//         this.updateInfo( TouchCollideStatus.NO_TOUCHED );
//     }
//     private checkCollision( stageX:number, stageY:number ):void {
//         /*** 本示例关键代码段开始 ***/
//         var bResult:boolean = this._bird.hitTestPoint( stageX, stageY, this._bShapeTest );
//         /*** 本示例关键代码段结束 ***/
//             /// 小圆点同步手指位置
//         this._dot.x = stageX;
//         this._dot.y = stageY;
//         /// 文字信息更新
//         this.updateInfo( bResult ? TouchCollideStatus.COLLIDED : TouchCollideStatus.TOUCHED_NO_COLLIDED );
//     }
//     private touchHandler( evt:egret.TouchEvent ){
//         switch ( evt.type ){
//             case egret.TouchEvent.TOUCH_MOVE:
//                 this.checkCollision( evt.stageX, evt.stageY );
//                 break;
//             case egret.TouchEvent.TOUCH_BEGIN:
//                 if( !this._txInfo.hitTestPoint( evt.stageX, evt.stageY ) ){ /// if代码确保触摸开始位置不在文字区域
//                     this.stage.addEventListener( egret.TouchEvent.TOUCH_MOVE, this.touchHandler, this );
//                     this.stage.once( egret.TouchEvent.TOUCH_END, this.touchHandler, this );
//                     this.addChild( this._dot );
//                     this.checkCollision( evt.stageX, evt.stageY );
//                 }
//                 break;
//             case egret. TouchEvent.TOUCH_END:
//                 this.stage.removeEventListener( egret.TouchEvent.TOUCH_MOVE, this.touchHandler, this );
//                 this.stage.addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this );
//                 if( this._dot.parent ){
//                     this._dot.parent.removeChild( this._dot );
//                 }
//                 this.updateInfo( TouchCollideStatus.NO_TOUCHED );
//                 break;
//         }
//     }
//     private updateInfo( iStatus:number ){
//         this._txInfo.text =
//             "碰撞检测结果：" + ( ["放上手指！","想摸我？", "别摸我！！！"][iStatus] )
//             +"\n\n碰撞检测模式：" +( this._bShapeTest ? "非透明像素区域" : "矩形包围盒" )
//             +"\n（轻触文字区切换）";
//     }
//     private _bird:egret.Bitmap;
//     private _dot:egret.Shape;
//     private _txInfo:egret.TextField;
//     private imgLoadHandler( evt:egret.Event ):void {
//         /// 展示用显示对象： 白鹭小鸟
//         var image:egret.ImageLoader = evt.currentTarget;
//         var texture = new egret.Texture();
//         texture._setBitmapData(image.data);
//         this._bird = new egret.Bitmap( texture );
//         this.addChild( this._bird );
//         this._bird.anchorOffsetX = this._bird.width / 2;
//         this._bird.anchorOffsetY = this._bird.height / 2;
//         this._bird.x = this.stage.stageWidth * 0.5;
//         this._bird.y = this.stage.stageHeight * 0.618;
//         /// 小圆点，用以提示用户按下位置
//         this._dot = new egret.Shape;
//         this._dot.graphics.beginFill( 0x00ff00 );
//         this._dot.graphics.drawCircle( 0, 0, 5 );
//         this._dot.graphics.endFill();
//         /// 提示信息
//         this._txInfo = new egret.TextField;
//         this.addChild( this._txInfo );
//         this._txInfo.size = 28;
//         this._txInfo.x = 50;
//         this._txInfo.y = 50;
//         this._txInfo.textAlign = egret.HorizontalAlign.LEFT;
//         this._txInfo.textColor = 0x000000;
//         this._txInfo.type = egret.TextFieldType.DYNAMIC;
//         this._txInfo.lineSpacing = 6;
//         this._txInfo.multiline = true;
//         this._txInfo.touchEnabled = true;
//         this._txInfo.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
//             evt.stopImmediatePropagation();
//             this._bShapeTest = ! this._bShapeTest;
//             this.updateInfo( TouchCollideStatus.NO_TOUCHED );
//         }, this );
//         this.launchCollisionTest();
//     }
// }
// class TouchCollideStatus{
//     public static NO_TOUCHED:number = 0;
//     public static TOUCHED_NO_COLLIDED:number = 1;
//     public static COLLIDED:number = 2;
// } 
//# sourceMappingURL=hitTest.js.map