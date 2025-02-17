const d = document;
const wrap = d.querySelector('.wrap');
const items = d.querySelector('.items');
const itemCount = d.querySelectorAll('.item').length;
const scroller = d.querySelector('.scroller');
let pos = 0;
const transform = Modernizr.prefixed('transform');

function setTransform() {
    items.style[transform] = 'translate3d(' + (-pos * items.offsetWidth) + 'px,0,0)';
}

function prev() {
    pos = Math.max(pos - 1, 0);
    setTransform();
}
function next() {
    pos = Math.min(pos + 1 , itemCount - 1);
    setTransform();
}
window.addEventListener('resize', setTransform);