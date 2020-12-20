const links = [...document.getElementsByClassName('tabs__item')]
const tabs = [...document.getElementsByClassName('tabs__block')]

const showTab = ({ target }) => {
  const id = parseInt(target.id[target.id.length - 1]) - 1

  if (links[id].classList.contains('disabled')) return

  links.forEach((link) => link.classList.remove('active'))
  tabs.forEach((tab) => (tab.style.display = 'none'))

  links[id].classList.add('active')
  tabs[id].style.display = 'block'
}

links.forEach((link) => link.addEventListener('click', showTab))
