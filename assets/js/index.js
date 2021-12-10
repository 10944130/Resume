var img4 =document.getElementsByClassName('img5','img6')[0];
var protitle = document.getElementsByClassName('protitle');

img4.addEventListener('mouseover',function(){
    for(var p=0;p<protitle.length;p++){
        protitle[p].style.letterSpacing="5px";
        protitle[p].style.transition=".4s";
        if(p==0){
            protitle[p].style.transform = "translate(0 ,-10px)";
        }
        if(p==1){
            protitle[p].style.transform = "translate(0 ,10px)";
        }
        
    }
})

img4.addEventListener('mouseout',function(){
    for(var p=0;p<protitle.length;p++){
        protitle[p].style.letterSpacing="2px";
        protitle[p].style.transition=".4s";
        protitle[p].style.transform = "translate(0 ,0)";
        
    }
})

window.addEventListener("scroll",()=>{
    console.log(window.scrollY);
    if(window.scrollY>300){
        run();
    }
})
// 第一個
var maskFull1 = document.querySelector('.mask.full_1');
var circle1 = document.querySelectorAll('.circle_1 .fill');
// 第二個
var maskFull2 = document.querySelector('.mask.full_2');
var circle2 = document.querySelectorAll('.circle_2 .fill');
//第三個
var maskFull3 = document.querySelector('.mask.full_3');
var circle3 = document.querySelectorAll('.circle_3 .fill');
//第四個
var maskFull4 = document.querySelector('.mask.full_4');
var circle4 = document.querySelectorAll('.circle_4 .fill');

function run(){
    // 第一個
    maskFull1.classList.add('run');
    for(var c=0;c<circle1.length;c++){
        circle1[c].classList.add('run');
    }
    // 第二個
    maskFull2.classList.add('run');
    for(var c=0;c<circle2.length;c++){
    circle2[c].classList.add('run');
    }
    // 第三個
    maskFull3.classList.add('run');
    for(var c=0;c<circle3.length;c++){
    circle3[c].classList.add('run');
    }
    // 第四個
    maskFull4.classList.add('run');
    for(var c=0;c<circle4.length;c++){
    circle4[c].classList.add('run');
    }
}

var slideIndex = 0;
    showSlides();

    function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 1800); // Change image every 2 seconds
    }