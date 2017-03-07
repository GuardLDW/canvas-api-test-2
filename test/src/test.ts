var canvas = document.getElementById("app") as HTMLCanvasElement;
var stage = engine.run(canvas);

engine.Ticker.getInstance().register((deltaTime) => {

    console.log(deltaTime);
    button.y = button.y + deltaTime / 10;

});

//第二层容器
var panel = new engine.DisplayObjectContainer();
panel.x = 120;
panel.y = 50;
panel.alpha = 0.5;

//按钮
var button = new engine.Button();
button.x = 10;
button.y = 30;
button.text = "点我";
button.color = "#FF0000"
button.size = 20;
button.enable = true;
button.addEventListener("onclick", ()=>{

    button.text = "欧尼酱";     

},this,false);

var word2 = new engine.TextField();
word2.text = "第二层容器"
word2.color = "#0000FF"
word2.size = 30;

var list = new engine.DisplayObjectContainer();
list.addEventListener("onmousemove", (e : MouseEvent) =>{

    var dy = engine.currentY - engine.lastY;
    list.y = list.y + dy;

}, this, false);


//帧动画
var movieData  = {

    frames : [
        {"image" : "playerIdle1.jpg"},
        {"image" : "playerIdle1.jpg"},
        {"image" : "playerIdle1.jpg"},
        {"image" : "playerIdle1.jpg"},
        {"image" : "playerIdle1.jpg"},
        {"image" : "playerIdle1.jpg"},
        {"image" : "playerIdle2.jpg"},
        {"image" : "playerIdle2.jpg"},
        {"image" : "playerIdle2.jpg"},
        {"image" : "playerIdle2.jpg"},
        {"image" : "playerIdle2.jpg"},
        {"image" : "playerIdle2.jpg"}

    ]

}

var player = new engine.MovieClip(movieData);
player.image.src = "player1.jpg";
player.image.width = 100;
player.image.height = 100;
player.x = 300;








//图片
var avater = new engine.Bitmap();
avater.image.src = "avater.jpg";


//加载完图片资源
avater.image.onload = () => {



    list.addChild(avater);
    list.addChild(button);
        
    panel.addChild(word2);

    stage.addChild(list);
    stage.addChild(panel);

    stage.addChild(player);

        
}



