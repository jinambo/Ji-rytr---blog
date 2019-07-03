let loadBtn = document.querySelector('.load-more');
let getBody = document.body;

let layer = document.createElement('div');
let loader = document.createElement('div');

loadBtn.addEventListener('click', function() {
    layer.style.display = 'block';

    layer.appendChild(loader);
    loader.classList.add('loader');

    getBody.appendChild(layer);
    layer.classList.add('load-layer');
    setTimeout(() => {
        layer.style.opacity = 1;
    }, 100);
    
    setTimeout(() => {
        layer.style.display = 'none';
        layer.classList.remove('load-layer');
        loadBtn.classList.remove('loader');
    }, 1000);
});