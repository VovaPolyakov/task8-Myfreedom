// Задание 1
// let div = document.querySelector('.popum');

// document.querySelector('.popum-btn').addEventListener('click', function (event) {
//     div.classList.add('opened');
// })
// let close = document.querySelector('.popum__close');
// close.addEventListener('click', function (event) {
//     div.classList.remove('opened');
// })

// Задание 2 

// let open = document.querySelector('.open-menu');
// let close = document.querySelector('.close-menu');
// let menu = document.querySelector('.menu');

// open.addEventListener('click', function (event) {
//     menu.classList.add('opened');
//     open.classList.add('hidden');

// });
// close.addEventListener('click', function (event) {
//     menu.classList.remove('opened');
//     open.classList.remove('hidden');
// })



//Задание 3
let open = document.querySelector('.open-button');
let popun = document.querySelector('.popun');
let i = document.querySelector('button')
let body = document.querySelector('body')
let popum = document.querySelector('.popum')
let close = document.querySelector('.close-button')

open.addEventListener('click', function (event) {
    popun.classList.add("opened");
    open.classList.add('close');
    close.classList.add('open');

});
close.addEventListener('click', function (event) {
    popun.classList.remove('opened');
    open.classList.remove('close');
    close.classList.remove('open')
})
document.addEventListener('click', function (event) {
    if (!popun.contains(event.target) && !open.contains(event.target)) {
        popun.classList.remove('opened');
        open.classList.remove('close');
        close.classList.remove('open')
    }
})



// Задание 4

// let form = document.querySelector('form');
// let input = document.querySelector('.Second');

// form.addEventListener('submit', function (event) {
//     let ul = document.querySelector('ul');
//     event.preventDefault();
//     let close = document.createElement('button');
//     close.innerText = 'x';
//     let li = document.createElement('li');
//     let checkbox = document.createElement('input')
//     checkbox.setAttribute("type", "checkbox");
//     li.innerText = input.value;
//     ul.appendChild(li);
//     li.appendChild(close)
//     li.prepend(checkbox)
//     checkbox.addEventListener('click', function (event) {
//         if (checkbox.checked) {
//             li.style.textDecoration = 'line-through';
//             ul.appendChild(li);
//         } else {
//             li.style.textDecoration = '';
//             ul.prepend(li);
//         }
//     })
//     close.addEventListener('click', function (event) {
//         li.remove();
//     });
//     input.value = '';
// });
