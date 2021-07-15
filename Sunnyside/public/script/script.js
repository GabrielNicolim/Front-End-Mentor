const menu = window.document.getElementById('responsive-menu')
const triangle = window.document.getElementById('triangle')

function showMenu() {
    if(menu.classList == 'hidden') {
        menu.classList.remove('hidden')
        triangle.classList.remove('hidden')
    }
    else {
        menu.classList.add('hidden')
        triangle.classList.add('hidden')
    }
}