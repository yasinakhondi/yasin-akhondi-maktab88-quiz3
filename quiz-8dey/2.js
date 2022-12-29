let div = document.createElement('div')
let clasdiv = div.classList.add('div1')

document.body.appendChild(div)

let div2 = document.createElement('div')
let clasdiv2 = div2.classList.add('div2')

div.appendChild(div2)

// let number = document.createElement('p')
// p.textContent = '10%'
// div.appendChild(p)



let button = document.createElement('button')
let cls = button.classList.add('clsbutton')
let value = button.textContent = 'ADD 10%'
document.body.appendChild(button)


let getbutton = document.querySelector('.clsbutton')


getbutton.addEventListener('click', function () {
    div2.style.width = "50%"
})




