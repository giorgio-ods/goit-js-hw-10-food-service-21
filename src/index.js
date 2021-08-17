import dishCards from '../templates/dishes.hbs';
import dishes from '../src/menu.json';


console.log(dishCards(dishes));
console.log(dishes);

module.exports = {
    data: 'src/markup/data',
    decorators: 'src/markup/decorators',
    helpers: 'src/markup/helpers',
    layouts: 'src/markup/layouts',
    partials: 'src/markup/partials',
};



const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const themeToggle = document.getElementById('theme-switch-toggle');
themeToggle.addEventListener('change', onThemeToggleSwitch);


function onThemeToggleSwitch() {
    if (themeToggle.checked) {
        document.body.classList.add(Theme.DARK),
            localStorage.setItem('theme', Theme.DARK)

    } else {
        document.body.classList.replace(Theme.DARK, Theme.LIGHT),
            localStorage.setItem('theme', Theme.LIGHT)
    }
}

function setDefTheme() {
    const defTheme = localStorage.getItem('theme')
    document.body.classList.add(defTheme);
    if (defTheme === Theme.DARK) { themeToggle.checked = true }
}

setDefTheme();

const dishesContainer = document.getElementById('dishesMenu');
const dishesMarkup = createDishesMarkup(dishes);
 
console.log(dishesMarkup);
console.log(dishesContainer);

function createDishesMarkup(dishes) {
    return dishes.map(dishCards).join('');
 }

dishesContainer.insertAdjacentHTML('beforeend', dishesMarkup);  