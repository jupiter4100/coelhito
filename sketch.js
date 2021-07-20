var sel_
var ver1
var ver
var fol1
var fol
var lar1
var lar
var mac1
var mac
var jardim,coelho;
var imagemdojardim,imagemdocoelho;

function preload(){
  imagemdojardim = loadImage("garden.png");
  mac1=loadImage("apple.png")
  lar1=loadImage("orangeLeaf.png")
  ver1=loadImage("redImage.png")
  fol1=loadImage("leaf.png")
  
  imagemdocoelho = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Fundo em movimento
jardim=createSprite(200,200);
jardim.addImage(imagemdojardim);

// Criando o menino corredor
coelho = createSprite(180,340,30,30);
coelho.scale =0.09;
coelho.addImage(imagemdocoelho);
}


function draw() {
  background(0);
  coelho.x=mouseX
  bordas= createEdgeSprites();
  coelho.collide(bordas);

  var sel=Math.round(random(1,4));
  if(World.frameCount%80===0){
        if(sel==1){
      criarmac();
    }
    else if(sel==2){
      criarfol();
    }
    else if(sel==3){
      criarlar();
    }
    else if(sel==4){
      criarver();
    }
  }
  drawSprites();
}
function criarmac(){
  mac=createSprite(random(50,350),40,10,10)
  mac.scale=0.1
  mac.addImage(mac1)
  mac.velocityY=4
  mac.lifeTime=50
}
function criarlar(){
  lar=createSprite(random(50,350),40,10,10)
  lar.scale=0.1
  lar.addImage(lar1)
  lar.velocityY=4
  lar.lifeTime=50
}
function criarfol(){
  fol=createSprite(random(50,350),40,10,10)
  fol.scale=0.1
  fol.addImage(fol1)
  fol.velocityY=4
  fol.lifeTime=50
}
function criarver(){
  ver=createSprite(random(50,350),40,10,10)
  ver.scale=0.1
  ver.addImage(ver1)
  ver.velocityY=4
  ver.lifeTime=50
}
