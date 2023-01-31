import './style.scss';
import * as bootstrap from 'bootstrap';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import './node_modules/waypoints/lib/noframework.waypoints';

let options = {
    strings: ['Food...', 'Drink...'],
    typeSpeed: 80,
    loop : true,
    smartBackspace: true,
    startDelay: 250,
    backSpeed: 50,
    backDelay: 700,
  };
  
var typed = new Typed('.my-type', options);

let toLeft = {
    distance: '100px',
    origin: 'right',
    duration: 500,
    interval: 300 ,
    easing: 'ease-out',
    reset : true
};

ScrollReveal().reveal('.to-left', toLeft);

let toRight = {
    distance: '100px',
    origin: 'left',
    duration: 500,
    interval: 300 ,
    easing: 'ease-out',
    reset : true
};

ScrollReveal().reveal('.to-right', toRight);

let toUp = {
    distance: '100px',
    origin: 'bottom',
    duration: 700,
    easing: 'ease-out',
    reset : true
};

ScrollReveal().reveal('.to-up', toUp);

const menuList = [
    {id : 0, title : "Barbecue Salad", description : "Spicial Delicious Dish", price : 22.2 , currency :"$", image : "https://tse3.mm.bing.net/th?id=OIP.Gs5gAfX_SvuLYZ2Q5tvaHwHaE5&pid=Api&P=0"},
    {id : 1, title : "Salad with fish", description : "Spicial Delicious Dish", price : 30.5 , currency :"$", image : "https://tse1.mm.bing.net/th?id=OIP.p_qmPTK-qRlJJGYqtpR5DwHaFj&pid=Api&P=0"},
    {id : 2, title : "Spainach Salad", description : "Spicial Delicious Dish", price : 30.2 , currency :"$", image : "https://tse3.mm.bing.net/th?id=OIP.gox23kV6h8P1tL0bPhPd0gHaHa&pid=Api&P=0"},
]

const myMenu = document.querySelector('#menu-list');
menuList.forEach((info)=>{
    const myDiv = document.createElement("div");
    myDiv.classList.add("col-8", "col-md-4", "col-lg-2", "mb-4", "mb-md-0");
    myDiv.innerHTML=`
        <div class=" card p-1 border-0 shadow">
            <img src="${info.image}" height="180" alt="" class=" p-2">
            <div class=" card-body">
                <p class=" fs-6 fw-bold">${info.title}</p>
                <p class=" fs-sm cc">${info.description}</p>
                <div class=" d-flex justify-content-between align-items-center">
                    <span>${info.currency} ${info.price}</span>
                    <button class=" btn btn-primary btn-sm bi bi-cart"></button>
                </div>
            </div>
        </div>
    `;
    myMenu.append(myDiv);
});
