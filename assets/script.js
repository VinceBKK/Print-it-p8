let activeIndex = 0

document.addEventListener('DOMContentLoaded', function() {
    
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
		},
	]

	const slideContainer = document.querySelector('.slide-container');
    const dotsContainer = document.querySelector('.dots');
    
    // Initialiser les slides et les dots
    slides.forEach((slide, index) => {
        // Créer l'élément slide
        const slideElement = document.createElement('div');
        slideElement.classList.add('slide');
        if(index === 0) slideElement.classList.add('active');

        // Ajouter l'image
        const imageElement = document.createElement('img');
        imageElement.src = `./assets/images/slideshow/${slide.image}`;
        imageElement.alt = `Slide ${index + 1}`;
        imageElement.classList.add('banner-img');
        slideElement.appendChild(imageElement);

        // Ajouter le tagline
        const taglineElement = document.createElement('p');
        taglineElement.innerHTML = slide.tagLine;
        slideElement.appendChild(taglineElement);

        // Ajouter le slide au conteneur
        slideContainer.appendChild(slideElement);

        // Créer les dots
        const dotElement = document.createElement('div');
        dotElement.classList.add('dot');
        if(index === 0) dotElement.classList.add('dot_selected');
        dotsContainer.appendChild(dotElement);
    });

    const leftArrow = document.querySelector('.arrow_left');
    const rightArrow = document.querySelector('.arrow_right');

	function updateDots() {
        const allDots = document.querySelectorAll('.dots .dot');
        const allSlides = document.querySelectorAll('.slide'); // Assurez-vous que cette ligne est bien présente
        const activeSlide = document.querySelector('.slide.active');
        activeIndex = Array.from(allSlides).indexOf(activeSlide);

        // Utiliser la longueur de slides pour déterminer l'index du dot actif
        activeIndex = activeIndex % slides.length;

        allDots.forEach((dot, index) => {
            dot.classList.remove('dot_selected');
            if (index === activeIndex) {
                dot.classList.add('dot_selected');
            }
        });
    }

    function setActiveSlide(slide) {
        // Supprimer la classe 'active' de toutes les slides
        document.querySelectorAll('.slide').forEach(slide => slide.classList.remove('active'));

        // Ajouter la classe 'active' à la slide actuelle
        slide.classList.add('active');
        updateDots();
    }

    function prevSlide() {
        console.log("Flèche gauche cliquée");
        let currentSlide = document.querySelector('.slide.active');
        let prevSlide = currentSlide.previousElementSibling || slideContainer.lastElementChild;
        console.log("vérification ",prevSlide)
        setActiveSlide(prevSlide);
    }

    function nextSlide() {
        console.log("Flèche droite cliquée");
        let currentSlide = document.querySelector('.slide.active');
        let nextSlide = currentSlide.nextElementSibling;
        console.log("vérification ",slideContainer.firstElementChild)
        if (activeIndex >= slides.length){
            activeIndex = 0;
        }else {
            setActiveSlide(nextSlide);  
        }
    }

    leftArrow.addEventListener('click', prevSlide);
    rightArrow.addEventListener('click', nextSlide);

    // Initialise le slider sur le premier slide
    setActiveSlide(document.querySelector('.slide'));
});

