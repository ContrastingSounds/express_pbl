import { LookerEmbedSDK } from '@looker/embed-sdk'

LookerEmbedSDK.init(globalConfig.instance, '/auth')

function changeEmbed(e) {
  console.log('changeEmbed e.target', e.target);

  var category = e.target.attributes['looker-category'].value
  var reference = e.target.attributes['looker-reference'].value

  if (category === 'dashboard') {
    showDashboard(reference)
  } else if (category === 'explore') {
    showExplore(reference)
  } else if (category === 'look') {
    showLook(reference)
  }
}

function resizeContent(height) {
  var elem = document.getElementById('main-container').firstChild
  elem.setAttribute('height', height)
}

function linkPageToDashboard(dashboard) {
  navbarImage.addEventListener('click', (e) => {
    console.log('navbarImage event', e);
    dashboard.updateFilters({'State': 'California'});
    dashboard.run()
  })
}

function showDashboard(dashboardId) {
  var mainContainer = document.getElementById('main-container')
  mainContainer.innerHTML = '';

  LookerEmbedSDK.createDashboardWithId(dashboardId)
    .appendTo('#main-container')
    .withClassName('looker-embed')
    .withClassName('looker-dashboard')
    .withTheme(globalConfig.lookerTheme)
    .on('page:properties:changed', (e) => resizeContent(e.height))
    .on('dashboard:filters:changed', (e) => console.log('Filters changed:', e.dashboard.dashboard_filters))
    .build()
    .connect()
    .then(linkPageToDashboard)
}

function showExplore(exploreId) {
  var mainContainer = document.getElementById('main-container')
  mainContainer.innerHTML = '';

  LookerEmbedSDK.createExploreWithId(exploreId)
    .appendTo('#main-container')
    .withClassName('looker-embed')
    .withClassName('looker-explore')
    .on('explore:state:changed', () => resizeContent(680))
    .build()
    .connect()
}

function showLook(lookId) {
  var mainContainer = document.getElementById('main-container')
  mainContainer.innerHTML = '';
  LookerEmbedSDK.createLookWithId(lookId)
    .appendTo('#main-container')
    .withClassName('looker-embed')
    .withClassName('looker-look')
    .on('look:run:start', () => resizeContent(680))
    // .withFilters({ 'users.state': 'California' })
    .build()
    .connect()
}

function showStaticPage(e) {
  var mainContainer = document.getElementById('main-container')
  mainContainer.innerHTML = '';

  var contentFrame = document.createElement('iframe')
  contentFrame.setAttribute('src', '')
  contentFrame.setAttribute('width', '100%' )
  contentFrame.setAttribute('height', '680' )
  contentFrame.setAttribute('frameBorder', '0')
  contentFrame.setAttribute('scrolling', "no" )
  contentFrame.setAttribute('name', "content-frame" )
  contentFrame.setAttribute('id', "content-frame")
  contentFrame.setAttribute('title', "content-frame")
  mainContainer.appendChild(contentFrame)

  var pageURL =  'html/' + globalConfig.navbarMenu[e.target.textContent]
  console.log('showStaticPage e', pageURL, e)
  contentFrame.setAttribute('src', pageURL)
  escapeButton.setAttribute('href', 'https://' + globalConfig.instance)
}

// BROWSER TITLE

var title = document.getElementById('title')
title.textContent = globalConfig.title

var favicon = document.getElementById('favicon')
favicon.setAttribute('href',  'img/' + globalConfig.favicon)

// NAV BAR

var navbar = document.getElementById('navbar')
navbar.classList.add(globalConfig.navbarBackgroundColor)

var navbarImage = document.getElementById('navbar-logo')
navbarImage.setAttribute('src', 'img/' + globalConfig.logo)
if (globalConfig.logoClass) {
  navbarImage.classList.add(globalConfig.logoClass)
}
var logoStyle = 'position: relative; height:' + globalConfig.logoHeight + '; top:' + globalConfig.logoTop
navbarImage.setAttribute('style', logoStyle)

var navbarHome = document.getElementById('navbar-home')
navbarHome.classList.add(globalConfig.navbarTextColor + '-text')
if (globalConfig.navbarTextColorModifier) {
  navbarHome.classList.add(globalConfig.navbarTextColorModifier)
}
navbarHome.innerHTML += globalConfig.logoText

var navMenu = document.getElementById('nav-menu')
var navbarMenuItems = Object.keys(globalConfig.navbarMenu)
for (let i = 0; i < navbarMenuItems.length; i++) {
  let li  = document.createElement('li')
  let a = document.createElement('a')

  a.setAttribute('href', '#')
  a.className = globalConfig.navbarTextColor + '-text'
  if (globalConfig.navbarTextColorModifier) {
    a.classList.add(globalConfig.navbarTextColorModifier)
  }
  a.innerHTML = navbarMenuItems[i]
  
  li.appendChild(a)
  li.addEventListener('click', showStaticPage)

  navMenu.appendChild(li)
}

// GO TO LOOKER BUTTON

var escapeButton = document.getElementById('escape-button')
if (globalConfig.navbarTextColor == 'white') {
  escapeButton.classList.add('white')
  escapeButton.classList.add(globalConfig.navbarBackgroundColor + '-text' )
  if (globalConfig.navbarBackgroundColorModifier) {
    escapeButton.classList.add(globalConfig.navbarBackgroundColorModifier)
  }
} else {
  escapeButton.classList.add(globalConfig.navbarTextColor)
  if (globalConfig.navbarTextColorModifier) {
    escapeButton.classList.add(globalConfig.navbarTextColorModifier.substr(5)) // substr removes the 'text-' prefix
  }
}
escapeButton.setAttribute('href', 'https://' + globalConfig.instance)

// SIDEBAR

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

var sidebarBackgroundImage = document.getElementById('sidebar-image')
sidebarBackgroundImage.setAttribute('src',  'img/' + globalConfig.sidebarBackgroundImage)

var sidebarLogo = document.getElementById('sidebar-logo')
sidebarLogo.setAttribute('src',  'img/' + globalConfig.sidebarImage)

var sidebarTitle = document.getElementById('sidebar-title')
sidebarTitle.textContent = globalConfig.title

var slideOutMenu = document.getElementById('slide-out')
for (let i = 0; i < globalConfig.sidebarItems.length; i++) {
  var item = globalConfig.sidebarItems[i]
  if (item.type == 'li') {
    let li = document.createElement('li')
    let a = document.createElement('a')

    a.className = 'waves-effect'
    a.setAttribute('href', '#!')
    a.setAttribute('looker-link', item.label)
    a.setAttribute('looker-category', item.category)
    a.setAttribute('looker-reference', item.reference)
    a.innerHTML = '<i class="material-icons">' + item.icon + '</i>' + item.label

    a.addEventListener('click', changeEmbed)

    li.appendChild(a)
    slideOutMenu.appendChild(li)
  } else if (item.type == 'subheader') {
    let divider = document.createElement('li')
    divider.innerHTML = '<div class="divider"></div>'
    slideOutMenu.appendChild(divider)

    let li = document.createElement('li')
    li.innerHTML = '<a class="subheader">' + item.text + '</a>'
    slideOutMenu.appendChild(li)
  }
}

// CREATE DEFAULT DASHBOARD
showDashboard(globalConfig.sidebarItems[0].reference);
