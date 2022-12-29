
let arr = ['a',
    'b',
    'c',
    'c',
    'arman',
    'armin',
    'hello world',]
let s = document.getElementById('s')
console.log(s.value)
aaa(arr)
function my() {
    let b;
    console.log(s.value)
    b = arr.filter(name => name.startsWith(s.value));
    aaa(b)
}

function aaa(a) {
    let tag = '';
    for (let i = 0; i < a.length; i++) {
        tag = tag + `<ul>${a[i]}</ul>`;
    }
    let tagList = document.getElementById('list')
    tagList.innerHTML = tag;
    return tag;
}