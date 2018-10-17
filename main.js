const lB = document.querySelector('.lB');
const rB = document.querySelector('.rB');
const h2 = document.querySelector('h2');
const img = document.querySelector('img');

const state = {
    slider: [
        {
            id: 1,
            url: 'img/1.jpg',
            title: 'This is text riba 1'
        },
        {
            id: 2,
            url: 'img/2.jpg',
            title: 'This is text riba 2'
        },
        {
            id: 3,
            url: 'img/3.jpg',
            title: 'This is my text 3'
        }
    ]
};

img.setAttribute('myID', state.slider[0].id); // default Photo

lB.addEventListener('click', changeDom);
rB.addEventListener('click', changeDom);

function changeDom(e, direction='l') {
    let id = img.getAttribute('myID');
    if (direction === 'l') {
        if (id == state.slider[0].id) {
            id = state.slider.length;
        } else {
            id--;
        }
        changeImgTitle(id);
    } else {
        if (id == state.slider.length) {
            id = state.slider[0].id;
        } else {
            id++;
        }
        changeImgTitle(id);
    }
}

function changeImgTitle(id) {
    const idFind = state.slider.find((item)=> id === item.id);
    img.setAttribute('src', idFind.url);
    img.setAttribute('myID', idFind.id);
    h2.innerText = idFind.title;
}