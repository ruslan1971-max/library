const hamburger = document.querySelector(".header__burger");
const navMenu = document.querySelector(".header__nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".header__nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

//  *********************** caourusel slider ****************

const buttonsWrapper = document.querySelector(".about__pagination");
const slides = document.querySelector(".about__slider");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-100%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-200%)';
      e.target.classList.add('active');
    }
	   else if (e.target.classList.contains('fourth')){
		  slides.style.transform = 'translatex(-300%)';
		  e.target.classList.add('active');
	  }
     else if (e.target.classList.contains('fifth')){
	    slides.style.transform = 'translatex(-400%)';
	    e.target.classList.add('active');
    }
  }
});

// *********************** fade-in fade-out **********************

const elementsWrapper = document.querySelectorAll('.feader')

let imageIndex = 0;

function changeWrapper() {
	// Remove .showing class from current .favorites__inner-wrapper
  elementsWrapper[imageIndex].classList.remove('showing');

	// increment the image index bu one
	imageIndex++;

	// if the image index is more than there are elements, set it to the 0
	if(imageIndex >= elementsWrapper.length) {
		imageIndex = 0;
	}

	// add the .showing class to the next .favorites__inner-wrapper
	elementsWrapper[imageIndex].classList.add('showing');
}

  let interval = setInterval(changeWrapper, 2000);
  
	const favoritesInput = document.querySelectorAll('.favorites__input')

	Array.from(favoritesInput).forEach((elem) => {
		elem.addEventListener('click', function() {
			clearInterval(interval);
		})
	})
