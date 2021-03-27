import menu from '../data/menu.json';
import templates from '../templates/menu.hbs';
import theme from './theme';

console.log(menu);
console.log(templates);
console.log(theme);

const refs = {
    menuList: document.querySelector('.js-menu'),
    body: document.body,
    switcher: document.querySelector('#theme-switch-toggle')

}

const changeClass = (add, rem) => {
    refs.body.classList.add(add)
    refs.body.classList.remove(rem)
    localStorage.setItem('theme', add)

}

const markup = templates(menu);
refs.menuList.insertAdjacentHTML('beforeend', markup);
refs.switcher.checked = localStorage.getItem('theme') === theme.DARK

const saveSetting = localStorage.getItem('theme') === null ? theme.LIGHT:localStorage.getItem('theme');
refs.body.classList.add(saveSetting);

refs.switcher.addEventListener('change', ({target}) => {

    if(target.checked) {
        changeClass(theme.DARK, theme.LIGHT)
    }
    else {
        changeClass(theme.LIGHT, theme.DARK)
}
})