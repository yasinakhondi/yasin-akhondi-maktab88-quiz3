let tehran = document.querySelector('.tehran')
let tokyo = document.querySelector('.tokyo')
let london = document.querySelector('.london')

let geth1 = document.querySelector('.h1')
let getp = document.querySelector('p')


tehran.onclick = function () {
    geth1.textContent = 'tehran'
    getp.textContent = 'thran is captal city in iran'
}


tokyo.onclick = function () {
    geth1.textContent = 'tokyo'
    getp.textContent = 'tokyo is captal city in japa'
}

london.onclick = function () {
    geth1.textContent = 'london'
    getp.textContent = 'london is captal city in england'
}