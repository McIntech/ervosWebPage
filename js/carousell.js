var arrow_right = document.getElementById('arrow_right');
var arrow_left = document.getElementById('arrow_left');
var text_1 = document.getElementById('text_1');
var text_2 = document.getElementById('text_2');
var text_3 = document.getElementById('text_3');
var imageContainer = document.querySelector('.section_image_doc_38417293487129'); // Este es el contenedor, no la imagen

var object = {
    slide1: {
        texts: ['DR. JOSUE ROBERTO LOZANO', 'CIRUJANO OFTALMOLOGO', 'CIRUGÍAS'],
        imageUrl: './images/doctor_image.jpg'
    },
    slide2: {
        texts: ['DR. JOSUE ROBERTO LOZANO', 'CIRUGIA DE CATARATA', 'CIRUGÍAS'],
        imageUrl: './images/abuelo_image.jpg'
    },
    slide3: {
        texts: ['DR. JOSUE ROBERTO LOZANO', 'CIRUGIA DE RETINA', 'CIRUGÍAS'],
        imageUrl: './images/ojo_tecno_image.jpg'
    },
    slide4: {
        texts: ['DR. JOSUE ROBERTO LOZANO', 'CIRUGIA LASIK', 'CIRUGÍAS'],
        imageUrl: './images/ojo_laser_image.jpg'
    },
    // ... y así sucesivamente con los otros slides
};

var currentSlideIndex = 0;
var slideKeys = Object.keys(object);

function updateSlide() {
    if (currentSlideIndex >= slideKeys.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slideKeys.length - 1;
    }

    var currentSlide = object[slideKeys[currentSlideIndex]];

    text_1.textContent = currentSlide.texts[0];
    text_2.textContent = currentSlide.texts[1];
    text_3.textContent = currentSlide.texts[2];

    imageContainer.style.backgroundImage = `url('${currentSlide.imageUrl}')`;

    

    
    imageContainer.style.backgroundRepeat = 'no-repeat';
}

arrow_right.addEventListener('click', function() {
    currentSlideIndex++;
    updateSlide();
});

arrow_left.addEventListener('click', function() {
    currentSlideIndex--;
    updateSlide();
});

updateSlide();

// Aquí agregamos la función setInterval para cambiar el slide cada 5 segundos (5000 milisegundos)
setInterval(function() {
    currentSlideIndex++; // Incrementa el índice para ir al siguiente slide
    updateSlide(); // Actualiza el slide
}, 10000); // 5000 milisegundos = 5 segundos


window.addEventListener('resize', (e) => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    console.log(`Ancho: ${width}, Altura: ${height}`);
});