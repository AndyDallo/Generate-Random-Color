const app = document.querySelector('#app')
const sizes =
{
    height: window.innerHeight + 'px',
    width: window.innerWidth + 'px'
}

app.style.height = sizes.height
app.style.width = sizes.width

app.style.transition = 'background 500ms'

const randomRGB = (min, max) => {
        return Math.round(Math.random() * (max - min ) + min) 
    }
    
let random = randomRGB(0, 255)
    
const getRandomColor = ()=> {
    app.style.backgroundColor = `rgb(${randomRGB(0, 255)}, ${randomRGB(0, 255)}, ${randomRGB(0, 255)}`
}

window.onclick = getRandomColor