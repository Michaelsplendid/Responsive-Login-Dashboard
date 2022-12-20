const TOGGLE_REVEAL = document.querySelector('[type=button]')
const PASSWORD_FIELD = document.querySelector('#password')
const ICON = document.querySelector('.material-symbols-outlined')
TOGGLE_REVEAL.addEventListener('click', () => {
  PASSWORD_FIELD.type = PASSWORD_FIELD.matches('[type=password]') ? 'text' : 'password'
  ICON.innerText = PASSWORD_FIELD.matches('[type=password]') ? 'visibility' : 'visibility_off'
})