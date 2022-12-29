let div = document.createElement('div')
document.body.appendChild(div)


let h1 = document.createElement('h1')
h1.innerText = 'LIght mode'

div.appendChild(h1)

let p = document.createElement('p')

p.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum rerum voluptate veritatis, officiis dolore, ex assumenda facilis, tenetur optio
ea cumque enim Quisquam animi molestiae similique guis.Ouia
voluotate doloribus voluntatibus inventore praesentium sint laborum
expedita, mollitia, impedit optio totam nobis conseguatur
consequuntur vero exercitationem dianissimos beatae quas seaui.
    Aliquam'`

div.appendChild(p)





let creatButton1 = document.createElement('button')
let cls1 = creatButton1.classList.add('light')
let value1 = creatButton1.textContent = 'light mode'
document.body.appendChild(creatButton1)



let creatButton2 = document.createElement('button')
let clsss = creatButton1.classList.add('dark')
let value2 = creatButton2.textContent = 'dark mode'
document.body.appendChild(creatButton2)


let button1 = document.querySelector('.light')

button1.onclick = function () {
    div.style.backgroundColor = '#111d2b'
    h1.innerText = 'dark mode'
}



let button2 = document.querySelector('.dark')


button2.onclick = function () {
    div.style.backgroundColor = 'white';
    h1.innerText = 'dark mode'
}