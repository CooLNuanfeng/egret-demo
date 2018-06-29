// TypeScript file

class HitDemo extends egret.DisplayObjectContainer{
    private infoText:egret.TextField;

    constructor(){
        super()
        this.init();
    }
    private init(){
       this.drawText();
       var shp:egret.Shape = new egret.Shape();
       shp.graphics.beginFill( 0xff0000 );
       shp.graphics.drawRect( 0,0,100,100);
       shp.graphics.endFill();
       shp.width = 100;
       shp.height = 100;
       this.addChild( shp );
       var isHit:boolean = shp.hitTestPoint( 10, 10 );
       this.infoText.text = "isHit: " + isHit;
    }
    drawText(){
       this.infoText = new egret.TextField();
       this.infoText.y = 200;
       this.infoText.text = "isHit";
       this.addChild( this.infoText );
    }
      
}