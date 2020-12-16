const tab1 = document.getElementById('tab_01')
const tab2 = document.getElementById('tab_02')
const tab3 = document.getElementById('tab_03')

const link1 = document.getElementById('tab-link_01')
const link2 = document.getElementById('tab-link_02')
const link3 = document.getElementById('tab-link_03')

const tabs = [tab1, tab2, tab3]
const links = [link1, link2, link3]

const showTab = ({ target }) => {
  const id = parseInt(target.id[target.id.length - 1]) - 1
  links.forEach((link) => link.classList.remove('active'))
  links[id].classList.add('active')
  tabs.forEach((tab) => (tab.style.display = 'none'))
  tabs[id].style.display = 'block'
}

link1.addEventListener('click', showTab)
link2.addEventListener('click', showTab)
link3.addEventListener('click', showTab)
