var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
const navList=document.querySelector('.nav-list')
const openMenu=document.querySelector('.openMenu')
const closeMenu=document.querySelector('.closeMenu')


const showMenu=()=>{
  navList.classList.toggle("active")
  
  openMenu.classList.toggle("active")
  closeMenu.classList.toggle("active")
}


window.addEventListener("scroll",function () {
  
  const nav=document.querySelector('nav')
  nav.classList.toggle("active",window.scrollY>0)
})


// const navHeight=document.querySelector('nav').offsetHeight;

// document.documentElement.style.setProperty("scroll-padding",navHeight + 'px')