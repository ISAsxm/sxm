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


// quand je survol une case souligne le menu correspondant
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

      // pour filtrer la collection selon le menu et afficher comme si les autres n'existait pas

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
// a partir d'une certaine taille d'ecran, j'ai 2 slides, sinon 4
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

// /////////////////////////////////////////////////////// //
//   pour l'animation des mots du titre dans section home  //
// /////////////////////////////////////////////////////// //

// je déclare les mots que je veux ecrire
var dataText = ['SXM.','Saint-Martin.', "Sint Maarten.", "The Friendly Island!"];
// je déclare le mot en cours d'écriture
var currentWord = 0;
// je déclare l'index de la lettre du mot en cours
var letter_index = 0;
// pour la valeur renvoyée par  la function setInterval
var interval;
// je declare l'element qui va recevoir les mots
var txt_element = document.querySelector('#sxm');

// ma fonction pour ecrire les mots lettre par lettre
function typeWriter(){
      var txt = dataText[currentWord].substring(0, letter_index + 1);
      txt_element.innerHTML = txt;
      letter_index++;
      // dès qu'un mot est écrit, efface le après une pause
      if(txt === dataText[currentWord]) {
		clearInterval(interval);
		setTimeout(function() {
			interval = setInterval(Delete, 50);
		}, 1000);
	}
}
// ma fonction qui va effacer les mots et réecrire après en boucle
function Delete() {
	// pour effacer lettre par lettre
	var txt =  dataText[currentWord].substring(0, letter_index - 1);
	txt_element.innerHTML = txt;
	letter_index--;
      if(txt === '') {
		clearInterval(interval);
		// pour boucler entre les mots
		if(currentWord == (dataText.length - 1)){
			currentWord = 0;
		}else{
			currentWord++;
                  letter_index = 0;
            }
            // pour démarrer après une pause
            setTimeout(function() {
			interval = setInterval(typeWriter, 100);
		}, 200);
	}
}
// je demarre l'animation au chargement
interval = setInterval(typeWriter, 100);


// ////////////////////////////////////////////////////////////////// //
      // pour l'effet smooth lors du scroll du menu vers les ancres //
// ////////////////////////////////////////////////////////////////// //
// je selectionne la classe js qui va me servir à déclencher l'accélération
// du scroll et assigne une vitesse lors du scroll à mon document html

$('.js-scrollTo').on('click', function(){
      // je cache le menu lors du click sur un lien 
      $('#container-burger').removeClass('burger-activated');

      var section = $(this).attr('href');
      var speed = 750;
      $('html, body').animate({ scrollTop: $(section).offset().top}, speed);
      return false;
});


});