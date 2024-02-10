const box = document.createElement('div')
const button = document.createElement('button')
const button2 = document.createElement('button')
const container = document.getElementById('container')
const score = document.getElementById('score')
const time = document.getElementById('timer')

box.className = 'box'
box.id = 'box'
button.className = 'button'
button.innerText = 'Start Game'
button2.className = 'button'
button2.innerText = 'Restart Game'
container.appendChild(button)
container.appendChild(button2)
container.appendChild(box)

button2.hidden = true
box.hidden = true

const start = () => {
    let count = 10
    let iterate = 0

    button.hidden = true
    button2.hidden = true
    box.hidden = false

    const timer = setInterval( () => {
        time.innerText = `Time remaining: ${count}`
        count--;
        if (count == -1) {
            clearInterval(timer);
            box.hidden = true
            button2.hidden = false
        }
    }, 1000);

    score.innerText = `Score: ${iterate}`
    time.innerText = `Time remaining: ${count}`
    
    box.addEventListener('click', () => {
        const clickBox = box.getBoundingClientRect()
        const maxY = container.offsetWidth - clickBox.width
        const maxX = container.offsetHeight - clickBox.height
        const randomY = Math.floor(Math.random() * maxY)
        const randomX = Math.floor(Math.random() * maxX)
        
        box.style.top = randomY + "px"
        box.style.left = randomX + "px"
        
        iterate++
        
        score.innerText = `Score: ${iterate}`
    })
}

button.addEventListener('click', start)
button2.addEventListener('click', start)