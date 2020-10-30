const imgbx = document.querySelector('.imgbx');

const slides = document.getElementsByTagName('img');

let i = 0;

function nextslide (){
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
}
function prevslide (){
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
}


//Start controls content

const contentbx = document.querySelector('.contentbx');

const slidescontent = document.getElementsByTagName('div');

let j = 0;

function nextslidecontent(){
    slidescontent[j].classList.remove('active');
    j = (j + 1) % slidescontent.length;
    slidescontent[j].classList.add('active');
}
function prevslidecontent(){
    slidescontent[j].classList.remove('active');
    j = (j - 1 + slidescontent.length) % slidescontent.length;
    slidescontent[j].classList.add('active');
}