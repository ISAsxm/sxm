// je recupere le contenu du menu et ma sidebar

var content = document.getElementById('burger-content');
var sideBar = document.getElementById('burger-sidebar');

// et lintegre dans ma side-bar
sideBar.innerHTML = content.innerHTML;

// je recupere le bouton et mon overlayout
var button = document.getElementById('burger-button');

// je declenche lajout/le retrait de ma classe
//  a lobjet parent lors de levenement onclick
button.addEventListener('click',function(e){
    
   this.parentNode.classList.toggle('burger-activated');

});

// /////////////////////////////////////////////
      // pour le menusticky mediaquery >1050px//
// /////////////////////////////////////////////
window.onscroll = function(){
   stickyMenu();

};

// je recupere mon menu et mon header
var menu = document.getElementById('menu');

// je recupere la distance de mon header
var startSticky = window.innerHeight;

// j'ajoute mon menu a mes autres sections
// des qu'il depasse la taille de mon header
function stickyMenu(){

      if(window.scrollY >= startSticky){
            menu.classList.add('sticky');
      }else {
            menu.classList.remove('sticky');
}
      underlineMenu();
      
}

// ////////////////////////////////////////////////////
      // pour le menu souligne mediaquery >1050px//
// ////////////////////////////////////////////////////
function underlineMenu(){
// je recupere le contenu de mon menu
var menuNav = document.querySelectorAll('#menu-nav a');

// je recupere mes sections et leur hauteur
var home = document.querySelector('header').offsetTop;
var about = document.getElementById('about').offsetTop;
var services = document.getElementById('services').offsetTop;
var portfolio = document.getElementById('portfolio').offsetTop;
var testimonials = document.getElementById('testimonials').offsetTop;
var blog = document.getElementById('blog').offsetTop;
var contact = document.getElementById('contact').offsetTop;

// je definit dans quelle condition ajouter la classe underline
      if((window.scrollY == home) && (window.scrollY < about)){
            menuNav[0].classList.add('underline');
      }else{
            menuNav[0].classList.remove('underline');
      } 
 
      if((window.scrollY >= about) && (window.scrollY < services)){
            menuNav[1].classList.add('underline');
      }else{
            menuNav[1].classList.remove('underline');
      }

      if((window.scrollY >= services) && (window.scrollY < portfolio)){
            menuNav[2].classList.add('underline');
      }else{
            menuNav[2].classList.remove('underline');
      }

      if((window.scrollY >= portfolio) && (window.scrollY < testimonials)){
            menuNav[3].classList.add('underline');
      }else{
            menuNav[3].classList.remove('underline');
      }

      if((window.scrollY >= testimonials) && (window.scrollY < blog)){
            menuNav[4].classList.add('underline');
      }else{
            menuNav[4].classList.remove('underline');
      }

      if((window.scrollY >= blog) && (window.scrollY < contact)){
            menuNav[5].classList.add('underline');
      }else{
            menuNav[5].classList.remove('underline');
      }

      if(window.scrollY >= contact){
            menuNav[6].classList.add('underline');
      }else{
            menuNav[6].classList.remove('underline');
      }
}


// ////////////////////////////////////////////////////
      // pour le hover des icones services//
// ////////////////////////////////////////////////////
// var container = document.getElementsByClassName('case');
// var icons = document.querySelectorAll('#services i');
// var contIcons = container + icons;

// for(var i =0; i<contIcons.length;i++){
//       for(var j = 0; j>contIcons.lenght;j++){
            
//             contIcons[i].addEventListener("mouseover",function(e){
                  
//                   contIcons[j].style.color ='#ffffcc;';
//                   contIcons[j].style.background ='rgba(51,255,255,0.6)';
                  
//       })
// }}


// je recupere mes containers
var container = document.getElementsByClassName('case');
for(var i =0; i<container.length;i++){
      container[i].addEventListener("mouseover",function(e){
            changeColorIcons();
      })
}

      // je definit ma fonction et dans quelle condition ajouter la couleur
function changeColorIcons(){
            // je recupere mes icones
      var icons = document.querySelectorAll('#services i');
      for(var i=0; i<icons.length;i++){
            icons[i].style.color ='#ffffcc';
            icons[i].style.background ='rgba(51,255,255,0.6)';
      
      // switch(icons[i]){
      //       case 'icons[i] == icons[0]':
      //             alert('ok');
      //       icons[0].style.color ='#ffffcc';
      //       icons[0].style.background ='rgba(51,255,255,0.6)';
      //       break;
      //       case 'icons[i] == icons[1]':
      //       icons[1].style.color ='#ffffcc';
      //       icons[1].style.background ='rgba(51,255,255,0.6)';
      //       break;
      //       case 'icons[i] == icons[2]':
      //       icons[2].style.color ='#ffffcc';
      //       icons[2].style.background ='rgba(51,255,255,0.6)';
      //       break;
      //       case 'icons[i] == icons[3]':
      //       icons[3].style.color ='#ffffcc';
      //       icons[3].style.background ='rgba(51,255,255,0.6)';
      //       break;
      //       case 'icons[i] == icons[4]':
      //       icons[4].style.color ='#ffffcc';
      //       icons[4].style.background ='rgba(51,255,255,0.6)';
      //       break;
      //       case 'icons[i] == icons[5]':
      //       icons[5].style.color ='#ffffcc';
      //       icons[5].style.background ='rgba(51,255,255,0.6)';
      //       break;
      // }
      }
}
      