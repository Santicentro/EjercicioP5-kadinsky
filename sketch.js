function setup(){
    createCanvas(1000, 760);
    background(255, 242, 200);
    }
    
    function draw(){
    scale(2);
    

    
    
    ///////Small Light Blue Circle
    noStroke();
    fill(12, 194, 211);
    ellipse(147, 305, 40, 40);
    stroke(0);///Restore Stroke
    
    
    ///////////////////////////TRIANGLE GROUP
    
    ///////Orange Triangle
    fill(246, 198, 62, 200);
    stroke(210, 126, 27, 200);
    strokeWeight(3);
    beginShape();
    vertex(122, 359);
    vertex(250, 270);
    vertex(333, 355);
    endShape();
    
    
    ///////Big Blue Triangle
    fill(54, 124, 150);
    stroke(0);
    strokeWeight(1);
    triangle(130, 85, 469, 88, 327, 271);
    
    
    
     ///////Three Blue Arcs <--
    stroke(0);
    strokeWeight(2);
    fill(148, 178, 207);
    arc(249, 152, 45, 45, 2.61, 5.70);
    arc(187, 187, 45, 45, 2.61, 5.70);
    arc(120, 225, 45, 45, 2.61, 5.70);
    ///Background Mask
    noStroke();
    fill(255, 242, 200);
    quad(280, 128, 307, 161, 130, 263, 85, 243);
    stroke(0);
    strokeWeight(2);
    line(130, 85, 327, 271);
    
    
    ///////////////Two Yellow Arcs 
    stroke(0);
    strokeWeight(0.5);
    fill(235, 226, 74);
    arc(435, 153, 60, 60, 2.51, 5.34);
    //ellipse(435, 153, 60, 60);
    arc(395, 200, 60, 60, 2.51, 5.34);
    //ellipse(395, 200, 60, 60);
    //Background Mask
    noStroke();
    fill(255, 242, 200);
    quad(327, 271, 469, 88, 480, 150, 410, 260);
    stroke(0);
    strokeWeight(1);
    line(327, 271, 469, 88);
    
    
    ///////Brown Triangles
    fill(0, 50);//Shadow
    noStroke();
    triangle(306, 165, 358, 362, 303, 167);
    triangle(296, 170, 338, 362, 291, 167);
    triangle(281, 180, 315, 350, 275, 185);
    triangle(266, 190, 293, 340, 259, 190);
    fill(195, 159, 88);//Triangles
    stroke(0);
    triangle(303, 165, 355, 362, 300, 167); 
    triangle(293, 170, 335, 365, 288, 175);
    triangle(278, 180, 312, 350, 272, 185);
    triangle(263, 190, 290, 340, 256, 190);
    
    
    ///////Background Color Triangle
    fill(255, 242, 200);
    triangle(400, 99, 359, 170, 260, 99);
    
    
    ///////Red Triangle
    fill(176, 79, 70);
    //triangle(345, 140, 30, 300, 82, 300);
    beginShape();
    vertex(30, 300);
    vertex(345, 140);
    vertex(82, 300);
    endShape();
    
    
    ///////Small Black Triangle
    fill(5, 6, 10);
    triangle(108, 305, 90, 311, 170, 321);
    
    
    
    ////////////////////////SQUARE GROUP
    
    noStroke();
    ///////Red Group
    fill(0, 90);
    rect(333, 39, 17, 17);///Shadow
    fill(80, 14, 8);
    rect(331, 37, 17, 17);///Dark
    fill(158, 12, 13);
    rect(331, 57, 17, 17);///Light
    
    
    ///////Green Group
    fill(0, 90);
    quad(410, 204, 426, 211, 419, 229, 402, 221);
    fill(64, 148, 27);///Light
    quad(408, 202, 424, 209, 417, 227, 400, 219);
    fill(33, 64, 10);///Dark
    quad(397, 225, 415, 233, 407, 250, 390, 240);
    
    ///////Blue Group
    fill(0, 90);
    quad(251, 260, 262, 272, 250, 282, 239, 273);
    fill(28, 117, 154);///Light
    quad(249, 259, 260, 271, 248, 281, 237, 269);
    fill(0, 90);///Shadow Dark
    quad(265, 279, 275, 290, 264, 300, 253, 289);
    fill(15, 10, 16);///Dark
    quad(262, 274, 272, 285, 261, 295, 250, 284);
    fill(23, 58, 75);
    quad(234, 270, 245, 282, 232, 293, 220, 281);
    
    
    
    ////////////////////////CIRCLE GROUP
    
    noStroke();
    ///////Big Blue Circle
    fill(0, 90);//shadow
    ellipse(484, 356, 80, 80);
    fill(17, 86, 157);
    ellipse(486, 358, 80, 80);
    
    
    ///////Red Circle Alpha
    fill(202, 14, 14, 200);
    ellipse(410, 170, 50, 50);
    
    
    ///////Green Circle Alpha
    fill(53, 177, 19, 200);
    ellipse(220, 225, 50, 50);
    
    
    ///////Purple Circle Alpha
    fill(136, 16, 131, 220);
    ellipse(238, 110, 57, 57);
    
    
    ///////Black Circle
    fill(0, 90);//shadow
    ellipse(78, 177, 47, 47);
    fill(13, 10, 1);
    ellipse(78, 180, 47, 47);
    
    
    
    /////////////////////////LINES GROUP
    
    
    stroke(0);////Restores the stroke
    
    ////////Blue Square Line
    stroke(0, 90);
    strokeWeight(2.5);
    line(152, 192, 220, 286);//shadow
    stroke(0);
    strokeWeight(2);
    line(153, 190, 223, 285);
    
    
    ///////Red Squares Line
    stroke(0, 70);
    strokeWeight(1.5);
    line(322, 50, 320, 132);//shadow
    stroke(0);
    strokeWeight(1);
    line(324, 45, 322, 128);
    
    
    ///////Green Squares Line
    strokeWeight(4);
    line(430, 210, 377, 340);
    
    
    ///////Red Triangle Lines x4
    strokeWeight(1);/////resets the stroke
    line(357, 152, 108, 305);
    line(357, 152, 83, 333);
    line(372, 168, 109, 328);
    line(372, 168, 111, 333);
    
    
    ///////Three Humps Lines x2
    strokeWeight(0.5);
    line(173, 132, 100, 157);
    line(100, 157, 78, 104);
    
    
    ///////Big Triangle Lines
    stroke(0, 90);
    strokeWeight(1.5);
    line(279, 130, 378, 260);//shadow
    line(279, 130, 86, 245);
    stroke(0);
    strokeWeight(1);
    line(280, 128, 380, 256);
    line(280, 128, 85, 243);
    
    
    
    /////////////////////////CURVES GROUP
    
    noFill();
    ///////Two Curves
    curve(300, 150, 273, 59, 190, 80, 170, 250);
    curve(300, 160, 275, 63, 185, 100, 185, 300);
    
    
    ///////Double Curves
    curve(250, -100, 461, 197, 437, 342, 1000, 700);
    curve(450, 295, 417, 292, 440, 324, 500, 330);
    
    
    ///////Three Arcs
    arc(85, 125, 30, 30, radians(255), radians(420));
    arc(102, 132, 30, 30, radians(255), radians(420));
    arc(110, 115, 30, 30, radians(255), radians(420));
    
    
    ///////Black Triangle Arc
    fill(5, 6, 10);
    noStroke();
    beginShape();
        curveVertex(170, 320);
        curveVertex(170, 320);//sharp point
      curveVertex(145, 305);
      curveVertex(125, 302);
        curveVertex(108, 305);
        curveVertex(108, 305);//sharp corner
        curveVertex(90, 301);
        curveVertex(90, 301);//sharp corner
      curveVertex(120, 296);
      curveVertex(145, 301);
        curveVertex(170, 320);//sharp point
        curveVertex(170, 320);
    endShape();
    
    
    ///////Dark Brown Triangle Arc
    fill(101, 57, 59);
    beginShape();
        curveVertex(301, 73);
        curveVertex(301, 73);//sharp corner
      curveVertex(307, 95);
      curveVertex(300, 125);
        curveVertex(265, 158);
        curveVertex(265, 158);//sharp point
      curveVertex(290, 125);
      curveVertex(294, 95);
        curveVertex(288, 75);
        curveVertex(288, 75);//sharp corner
        endShape(CLOSE);
        
    
    
    /////////////////////////////MY SHAPE
    
    ///////Outer Ring
    noFill();
    stroke(192, 72, 189, 170);
    strokeWeight(13);
    ellipse(86, 294, 90, 90);
    
    
    ///////Inner Moon
    fill(192, 72, 189, 170);
    noStroke();
    beginShape();
    curveVertex(110, 315);//point
    curveVertex(110, 315);
    curveVertex(86, 325);
    curveVertex(63, 313);
    curveVertex(58, 291);
    curveVertex(69, 269);
    curveVertex(70, 270);//point
    curveVertex(72, 284);
    curveVertex(79, 300);
    curveVertex(92, 309);
    curveVertex(110, 315);
    curveVertex(110, 315);
    endShape();
        
    }
