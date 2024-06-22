slide = 0


document.querySelector("#prev").onclick = ()=>{
    slide -= 1
    if (slide == -1) slide = 13 
    setSlides()
}
document.querySelector("#next").onclick = ()=>{
    slide += 1
    if (slide == 14) slide = 0 
    setSlides()
}

function setSlides(){
    document.querySelectorAll(".slider__item").forEach((e,i) => {
        e.style = `transform: translateX(${100*(i-slide)}%);`
    });
}


setSlides()

