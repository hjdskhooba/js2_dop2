let colorbtn = document.querySelector('.start');
let box = document.querySelector('.Background');

function getRandomColor() {
    let letters = "0123456789ABSDEF"
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

colorbtn.addEventListener('click', ()=>{
    const run = randomColor = setInterval(()=>{
        box.style.backgroundColor = getRandomColor();
    },1000)
    randomColor()
})

