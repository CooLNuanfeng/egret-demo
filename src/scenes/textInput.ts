// TypeScript file

class TextInput extends egret.DisplayObjectContainer{
    private _bitmapText:egret.BitmapText;
  
    constructor(){
        super();
        this.init();
    }
    private init(){
        var textIput:egret.TextField = new egret.TextField();
        textIput.type = egret.TextFieldType.INPUT;
        this.addChild(textIput);
        var button:egret.Shape =  new egret.Shape();
        button.graphics.beginFill(0x00cc00);
        button.graphics.drawRect(0,0,100,40);
        button.graphics.endFill();
        button.y = 50;
        this.addChild(button);
        button.touchEnabled = true;
        button.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e) => {
                textIput.setFocus();
            }, this);
       
            
    }
    
}