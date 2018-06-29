/**
 * @copyright www.egret.com
 * @author city
 * @desc 锚点是对显示对象进行操作的重要概念，切水果游戏中的水果旋转，是围绕其中心
 *      点旋转的。这个中心点就是我们所谓的锚点。
 *      锚点设置了一个基准点或者说中心点。显示对象的旋转和缩放均以锚点为基准。
 */

class ImageLoader extends egret.DisplayObjectContainer {
    
    /// 旋转及缩放步长设定
    private static STEP_ROT:number = 3;
    private static STEP_SCALE:number = .03;

    public constructor() {
        super();
        this.once( egret.Event.ADDED_TO_STAGE, this.onAddToStage, this );
    }

    private onAddToStage(event:egret.Event) {
        var imgLoader:egret.ImageLoader = new egret.ImageLoader;
        imgLoader.once( egret.Event.COMPLETE, this.imgLoadHandler, this );
        imgLoader.load( "resource/assets/cartoon-egret_00.png" );
    }
    
    private _bird:egret.Bitmap;
    private _txInfo:egret.TextField;
    
    private imgLoadHandler( evt:egret.Event ):void{
        /// 展示用显示对象： 白鹭小鸟
        var image:egret.ImageLoader = evt.currentTarget;
        var texture = new egret.Texture();
        texture._setBitmapData(image.data);

        this._bird = new egret.Bitmap(texture );
        this.addChild( this._bird );

        this._bird.anchorOffsetX = this._bird.width/2;
        this._bird.anchorOffsetY = this._bird.height/2;
        this._bird.x = this.stage.stageWidth / 2;
        this._bird.y = this.stage.stageHeight * 0.618;

        /// 提示信息
        this._txInfo = new egret.TextField;
        this.addChild( this._txInfo );
        
        this._txInfo.size = 28;  /* private _txInfo:egret.TextField; */
        this._txInfo.x = 50;
        this._txInfo.y = 50;
        this._txInfo.textAlign = egret.HorizontalAlign.LEFT;
        this._txInfo.textColor = 0x000000;
        this._txInfo.type = egret.TextFieldType.DYNAMIC;
        this._txInfo.lineSpacing = 6;
        this._txInfo.multiline = true;
        
        this.launchAnimations();
    }
    
    /// 用于记录当前的模式，模式切换通过触摸舞台触发
    private _iAnimMode:number;
    private _nScaleBase:number;

    private launchAnimations():void {
        
        this._iAnimMode = AnimModes.ANIM_ROT;
        this.stage.addEventListener( egret.TouchEvent.TOUCH_TAP, ()=>{
            this._iAnimMode = ( this._iAnimMode + 1 ) % 3;
        }, this );

        this._nScaleBase = 0;
        
        /// 根据当前模式调整旋转度数或缩放正弦基数形成相应动画
        this.addEventListener( egret.Event.ENTER_FRAME, ( evt:egret.Event )=>{

            /*** 本示例关键代码段开始 ***/
            switch ( this._iAnimMode ){
                case AnimModes.ANIM_ROT:        /// 仅旋转
                    this._bird.rotation += ImageLoader.STEP_ROT;
                    break;
                case AnimModes.ANIM_SCALE:        /// 仅缩放，缩放范围 0.5~1
                    this._bird.scaleX = this._bird.scaleY = 0.5 + 0.5* Math.abs( Math.sin( this._nScaleBase += ImageLoader.STEP_SCALE ) );
                    break;
            }
            /*** 本示例关键代码段结束 ***/

            this._txInfo.text = 
                  "旋转角度:" + this._bird.rotation 
                +"\n缩放比例:" + this._bird.scaleX.toFixed(2)
                +"\n\n轻触进入" +(["缩放","静止","旋转"][this._iAnimMode])+ "模式";
            
            return false;  /// 友情提示： startTick 中回调返回值表示执行结束是否立即重绘
        }, this );
    }
}

class AnimModes{
    public static ANIM_ROT:number = 0;
    public static ANIM_SCALE:number = 1;
}