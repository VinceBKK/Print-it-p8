const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
]
let currentIndex = 0;
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
function updateSlider(){
        // Initialisation de la premiere slide/tag line
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    tagLine.innerHTML = slides[currentIndex].tagLine;
        //Mise a jour class pour dot selectionne
    const allDots = document.querySelectorAll('.dot');
    allDots.forEach((dot, index) => {
        dot.classList.remove('dot_selected');
        if (index === currentIndex) {
          dot.classList.add('dot_selected');
        }
      });
}
    // Fleche gauche
arrowLeft.addEventListener("click", () => {
    currentIndex--;
    // Retour a la derniere slide
    if(currentIndex < 0){
        currentIndex = slides.length - 1;
    }
    updateSlider();
});
    // Fleche droite
arrowRight.addEventListener("click", () => {
    currentIndex++;
    //Retour a la premiere slide
    if(currentIndex >= slides.length){
        currentIndex = 0;
    }
    updateSlider();
})
    //Initialisation du html des dots
for(let i = 0; i < slides.length; i++){
    dots.innerHTML +=
    '<span id="dot' +
    i +
    '" class="dot" title="Image ' +
    (i + 1) +
    '"></span>';
}
