// /////////////////////////////////////////////
            // pour le menu burger//
// /////////////////////////////////////////////

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
      // pour le menu general souligne mediaquery >1050px//
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

// ///////////////////////////////////////////////////////// //
//   pour l'animation du menu/collection section portfolio   //
// ///////////////////////////////////////////////////////// //

$(document).ready(function(){

      $('.beaches').on({
            mouseover: function(){
            $('#beaches').addClass('colorLinks');},
            mouseleave: function(){
            $('#beaches').removeClass('colorLinks');}
      });

      $('.animals').on({
            mouseover: function(){
            $('#animals').addClass('colorLinks');},
            mouseleave: function(){
            $('#animals').removeClass('colorLinks');}
      });

      $('.sunsets').on({
            mouseover: function(){
            $('#sunsets').addClass('colorLinks');},
            mouseleave: function(){
            $('#sunsets').removeClass('colorLinks');}
      });

      // pour filtrer la collection selon le menu

      $('#all').on('click', function(){
            $('.portfolio-content').css({'visibility':'initial','order':'initial'});
            $('.portfolio-image').css({'visibility':'initial','order':'initial'});
      });

      $('#beaches').on('click', function(){
            $('.beaches').css({'visibility':'initial','order':'-1'});
            $('.sunsets').css({'visibility':'hidden','order':'1'});
            $('.animals').css({'visibility':'hidden','order':'2'});
      });

      $('#sunsets').on('click', function(){
            $('.beaches').css({'visibility':'hidden','order':'1'});
            $('.sunsets').css({'visibility':'initial','order':'-1'});
            $('.animals').css({'visibility':'hidden','order':'2'});
      });
 
      $('#animals').on('click', function(){
            $('.beaches').css({'visibility':'hidden','order':'1'});
            $('.sunsets').css({'visibility':'hidden','order':'2'});
            $('.animals').css({'visibility':'initial','order':'-1'});
      });

// ////////////////////////////////////////////////////
//   pour l'animation des slides du blog //
// ////////////////////////////////////////////////////

var windowWidth= $(window).width();
      if(windowWidth < 1050){

            $("a[href$='#sb1']").on('click', function(){
                  $('#sb1').show();
                  $('#sb2').hide();
                  $('#sb3').hide();
                  $('#sb4').hide();
            });

            $("a[href$='#sb2']").on('click', function(){
                  $('#sb1').hide();
                  $('#sb2').show();
                  $('#sb3').hide();
                  $('#sb4').hide();
            });

            $("a[href$='#sb3']").on('click', function(){
                  $('#sb1').hide();
                  $('#sb2').hide();
                  $('#sb3').show();
                  $('#sb4').hide();
            });

            $("a[href$='#sb4']").on('click', function(){
                  $('#sb1').hide();
                  $('#sb2').hide();
                  $('#sb3').hide();
                  $('#sb4').show();
            });
      }else{
            $("a[href$='#sb4']").on('click', function(){
                  $('#sb1').hide();
                  $('#sb4').show();
            });
            $("a[href$='#sb1']").on('click', function(){
                  $('#sb4').hide();
                  $('#sb1').show();
            });
      }

});