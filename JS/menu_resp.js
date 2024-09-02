const menuBtn = document.querySelector('.menu')
const iconBtn = document.querySelector('.menu i')
const menuResp = document.querySelector('.menu-resp')

menuBtn.onclick = function(){
    menuResp.classList.toggle('open')
    const isOpen = menuResp.classList.contains('open')
    iconBtn.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}