var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    loop: true, 
    spaceBetween: 25,
    autoplay:true,
				autoplayTimeout:2000,
				autoplayHoverPause:true,
    navigation: {
                nextEl: '.swiper-slide-next',
                prevEl: '.swiper-slide-prev',
            },
	
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }); 


const nav = document.querySelector('#topheader');
const fixedNavbarHandler = () =>{
	if(window.pageYOffset > 200){
		nav.classList.add('fixcung');
		nav.classList.remove('topheader');
		document.querySelector('.logo img').src = 'images/logo1.png'
	}
	else{
		nav.classList.remove('fixcung');
		nav.classList.add('topheader');
		document.querySelector('.logo img').src = 'images/logo5.png'
	}
		//window.pageYOffset > 200 ? nav.classList.add('fixcung') : nav.classList.remove('fixcung');
		
}
window.addEventListener('scroll', fixedNavbarHandler);
	
new WOW().init(); 


var owl = $('.owl-carousel');
owl.owlCarousel({
items:4,
loop:true,
margin:20,
autoplay:true,
autoplayTimeout:3000,
autoplayHoverPause:true,
navigation: {
	nextEl: '.swiper-slide-next',
	prevEl: '.swiper-slide-prev',
}
});
$('.play').on('click',function(){
owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
owl.trigger('stop.owl.autoplay')
})

const iconbar = document.querySelector(".iconbar");
iconbar.addEventListener("click", function() {
	var navbar = document.querySelector('.navbar');
	console.log(navbar);
	navbar.classList.toggle("hienlen");
  });






      
  