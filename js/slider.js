slide = 0


document.querySelectorAll(".controls__item").forEach((e,i) => {
    e.onclick = ()=>{
        slide = i
        setSlides()
    }
});

function setSlides(){
    document.querySelectorAll(".slider__item").forEach((e,i) => {
        e.style = `transform: translateX(${100*(i-slide)}%);`
    });
}


setSlides()

