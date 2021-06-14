const slides = document.querySelectorAll('.slide')
const body = document.body
const container = document.querySelector('.container')
const wallpapper = document.querySelector('.wallpapper')

slides.forEach((slide, _, slidesArr) => {
  slide.addEventListener('click', () => {
    removeActiveClass(slidesArr)
    addActiveClass(slide)
    wallpapper.style.backgroundImage = slide.dataset.background
  })
})

function addActiveClass (slide) {
  slide.classList.add('active')
}
function removeActiveClass (slides) {
  slides.forEach(slide => {
    slide.classList.remove('active')
  })
}

// Preload
// document.addEventListener('DOMContentLoaded', () => {
//   const images = new Array();

//   function preloadImages(...images) {
//       images.forEach((image, i) => {
//           image = new Image();
//           image.src = preloadImages.arguments[i];
//       });
//   };

//   // Предварительная загрузка нужных картинок 
//   preloadImages(
//       'https://images.unsplash.com/photo-1526816118775-e70736f9beab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjIzNjAyODk3&ixlib=rb-1.2.1&q=80&w=1080',
//       'https://images.unsplash.com/photo-1565498546237-caee5443b06a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjIzNjAyOTc0&ixlib=rb-1.2.1&q=80&w=1080',
//       'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjIzNjAyMjQ1&ixlib=rb-1.2.1&q=80&w=1080',
//       'https://images.unsplash.com/photo-1500214751256-2edf09198988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjIzNjAyNDM4&ixlib=rb-1.2.1&q=80&w=1080',
//       'https://images.unsplash.com/photo-1552832230-c0197dd311b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjIzNjAyNzM5&ixlib=rb-1.2.1&q=80&w=1080'
//   );
// });