function setup() {
    createCanvas(600,400);
  }
  
  function draw() {
    background(240);
    stroke(0);
    fill('#d2cbbd');
    noStroke();
    ellipse(300,250,400);
    strokeWeight(3);
    
    
    fill('#8e2824'); //tóc sau
    rectMode(CENTER);
    rect(300,300,260,250);
    ellipse(300,170,260,210);
    
    
    fill('#e9bfb5'); // cổ
    rect(300,300,35,40);
    
  
    fill(255); // áo trắng
    triangle(265,320,335,320,300,400);
    quad(280,310,300,320,290,340,265,320); //trái
    quad(300,320,320,310,335,320,315,340); //phải
    
    
    fill('#373f5a'); // áo xanh
    noStroke();
    quad(265,320,335,320,400,350,200,350);
    quad(400,350,200,350,200,500,400,500);
    
    
    stroke(0);
    fill(255); // áo trắng
    triangle(265,320,335,320,300,400);
    quad(280,310,300,320,285,335,265,320); //trái
    quad(300,320,320,310,335,320,315,335); //phải
    
    
    fill(0); //cà vạt
    quad(300,320,310,330,300,350,290,330);
    quad(295,340,305,340,320,500,280,500);
    
    
    fill('#373f5a'); // áo xanh
    stroke(0);
    triangle(300,400,276,350,260,370);
    triangle(255,350,265,320,276,350);
    triangle(335,320,345,350,323,350);
    triangle(300,400,322,350,340,370);
    noStroke();
    triangle(200,350,200,500,150,500);
    triangle(400,350,400,500,450,500);
    stroke(3);
    line(300,400,300,500);
    
    
    strokeWeight(3);
    fill('#feeee0'); // tai
    arc(410,225,50,50,radians(270),radians(110)); // phải
    arc(185,225,50,50,radians(70),radians(270)); // trái
    
    
    fill('#e89a84'); // tai trong
    arc(410,225,30,30,radians(270),radians(110)); // phải
    arc(185,225,30,30,radians(70),radians(270)); // trái
    
    
    fill('#feeee0'); // đầu
    ellipse(300,201,230,200);
    
  
    
    strokeWeight(3);
    fill('#8e2824'); //tóc mái
    rectMode(CENTER);
    arc(402,105,150,200,radians(82),radians(190)); 
    arc(250,110,200,200,radians(349),radians(110));
    arc(198,105,200,200,radians(349),radians(98)); 
    noStroke();//che mái
    ellipse(320,110,90,60);
    
    
    
    
    
    
    if (mouseIsPressed === true) {
      
      noStroke(); // má hồng
    fill('#FFCCE5');
    noStroke();
    ellipse(250,270,30,15);
    ellipse(360,265,30,15);
      
      
    fill(255); //mắt
    noStroke();
    ellipse(250,240,60,50);
    
  
    fill('#5b5d5e'); //tròng mắt xám
    noStroke();
    ellipse(255,240,35);
    
    
    fill(0); //tròng mắt đen
    noStroke();
    ellipse(255,243,26);
  
    
    
    fill(255); //mắt
    noStroke();
    ellipse(250,235,11);
    ellipse(265,245,7);
  
    
      //mắt phải
    stroke(0);
    strokeWeight(5);
    line(360, 230, 340, 240);
    line(360, 250, 340, 240);
      stroke(0); 
      // miệng
    strokeWeight(4);
    noFill();
    arc(320,270,25,25,radians(25),radians(115));
  
    
    
     } else {
    fill(255); //mắt
    noStroke();
    ellipse(250,240,60,50);
    ellipse(350,240,60,50);
    
  
    fill('#5b5d5e'); //tròng mắt xám
    noStroke();
    ellipse(255,240,35);
    ellipse(355,240,35);
    
    
    fill(0); //tròng mắt đen
    noStroke();
    ellipse(255,243,26);
    ellipse(355,243,26);
    
    
    fill(255); //mắt
    noStroke();
    ellipse(250,235,11);
    ellipse(350,235,11);
    ellipse(265,245,7);
    ellipse(365,245,7);
    
    
    
    stroke(0); // miệng
    strokeWeight(4);
    noFill();
    arc(300,270,25,25,radians(45),radians(135));
    }
    
    
    
       
    noFill(); // lông mi
    stroke(0);
    strokeWeight(4);
    arc(250,240,60,50,radians(190),radians(340));
    arc(350,240,60,50,radians(200),radians(350));
  
    stroke(0); // lông mày
    strokeWeight(5);
    noFill();
    arc(350,212,60,30,radians(200),radians(340));  
       
       
    strokeWeight(3); //lông mi
    line(225,215,230,220);
    line(217,225,225,228);
    line(214,235,220,235);
    line(375,215,370,220);
    line(384,223,375,228);
    line(380,235,387,233);
  
    fill(255); // bông tai 
    strokeWeight(2);
    ellipse(165,210,8);
    ellipse(180,250,10);
    ellipse(160,230,8);
    ellipse(420,250,10);
    
  
    noFill(); // kính
    strokeWeight(4);
    arc(250,230,80,80,radians(350),radians(190));
    arc(250,230,80,50,radians(190),radians(350));
    
    noFill();
    arc(300,230,20,20,radians(190),radians(350));
    
    arc(350,230,80,80,radians(350),radians(190));
    arc(350,230,80,50,radians(190),radians(350));
    
    fill(0);
    triangle(235,206,210,210,210,220);
    triangle(390,210,370,208,390,220);
    
    fill('#e9bfb5'); // mũi
    strokeWeight(3);
    arc(300,250,16,15,radians(270),radians(90));
    
    strokeWeight(5);//gọng kính
    line(200,210,210,210);
    line(380,211,410,208);
    
  
    stroke(0); // mái trái
    strokeWeight(3);
    fill('#8e2824')
    arc(200,230,30,150,radians(90),radians(270)); 
    noFill();
    arc(210,240,20,130,radians(90),radians(270));
    
    
    stroke(0); // mái phải
    strokeWeight(3);
    fill('#8e2824')
    arc(400,230,30,150,radians(270),radians(90)); 
    noFill();
    arc(390,240,20,130,radians(270),radians(90));
    
   
   
  }