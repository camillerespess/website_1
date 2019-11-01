let image = document.querySelector('#forestphoto');

image.onclick = () => {
   image.style.display = 'none';
};

const image2 = document.querySelector('#archphoto');
image2.onmouseenter = (e) => {
   e.target.classList.add('rotate-left');
};
image2.onmouseleave = (e) => {
   e.target.classList.remove('rotate-left');
};
// credit: Mindy McAdams https://jsfiddle.net/macloo/z6mq5x2c/ 
