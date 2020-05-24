lookerEmbedSDK = LookerEmbedSDK.LookerEmbedSDK

lookerEmbedSDK.init('demo.looker.com', '/auth')



// Looker event handling – unused events
tileEvents = [
  'dashboard:tile:start',
  'dashboard:tile:complete',
]

dashboardEvents = [
  'dashboard:run:start',
  'dashboard:run:complete'
]

exploreEvents = [
  'explore:state:changed',
  'explore:run:start',
  'explore:run:complete',
]


title = document.getElementById('title')
title.textContent = globalConfig.title

favicon = document.getElementById('favicon')
favicon.setAttribute('href',  'img/' + globalConfig.favicon)

// NAV BAR

navbar = document.getElementById('navbar')
navbar.classList.add(globalConfig.navbarBackgroundColor)

navbarImage = document.getElementById('navbar-logo')
navbarImage.setAttribute('src', 'img/' + globalConfig.logo)
if (globalConfig.logoClass) {
  navbarImage.classList.add(globalConfig.logoClass)
}
logoStyle = 'position: relative; height:' + globalConfig.logoHeight + '; top:' + globalConfig.logoTop
navbarImage.setAttribute('style', logoStyle)

navbarHome = document.getElementById('navbar-home')
navbarHome.classList.add(globalConfig.navbarTextColor + '-text')
if (globalConfig.navbarTextColorModifier) {
  navbarHome.classList.add(globalConfig.navbarTextColorModifier)
}
navbarHome.innerHTML += globalConfig.logoText

navMenu = document.getElementById('nav-menu')
navbarMenuItems = Object.keys(globalConfig.navbarMenu)
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

escapeButton = document.getElementById('escape-button')
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
escapeButton.setAttribute('href', globalConfig.baseURL)

// SIDEBAR

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

sidebarBackgroundImage = document.getElementById('sidebar-image')
sidebarBackgroundImage.setAttribute('src',  'img/' + globalConfig.sidebarBackgroundImage)

sidebarLogo = document.getElementById('sidebar-logo')
sidebarLogo.setAttribute('src',  'img/' + globalConfig.sidebarImage)

sidebarTitle = document.getElementById('sidebar-title')
sidebarTitle.textContent = globalConfig.title

slideOutMenu = document.getElementById('slide-out')
for (let i = 0; i < globalConfig.sidebarItems.length; i++) {
  item = globalConfig.sidebarItems[i]
  if (item.type == 'li') {
    let li = document.createElement('li')
    let a = document.createElement('a')

    a.className = 'waves-effect'
    a.setAttribute('href', '#!')
    a.setAttribute('looker-link', item.label)
    a.innerHTML = '<i class="material-icons">' + item.icon + '</i>' + item.label

    // a.addEventListener('click', changeDashboard)

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
showDashboard(159);

// window.addEventListener('message', function(event) {
//   if (event.source === mainDashboard.contentWindow) {
//     if (event.origin == globalConfig.baseURL) {
//       payload = JSON.parse(event.data)
//       handleEmbedEvent(payload)
//     }
//   }
// });

// NOTE: most events are ignored. Placeholders below will make it easy to add
//       new handlers if required.
// function handleEmbedEvent(e) {
//   console.log(e.type)
//   if (e.type == 'page:properties:changed') {
//     mainDashboard.setAttribute('height', e.height)
//   } else if ( e.type == 'page:changed' ) {
//     escapeButton.setAttribute('href', e.page.absoluteUrl.replace('embed/', ''))
//   } else if (e.type == 'dashboard:filters:changed') {
//     console.log('Filters changed:', e.dashboard.dashboard_filters)
//   } else if (e.type == 'explore:state:changed') {
//     mainDashboard.setAttribute('height', 600)
//   } else if ( tileEvents.includes(e.type) ) {
//     //
//   } else if ( dashboardEvents.includes(e.type) ) {
//     //
//   } else if ( exploreEvents.includes(e.type) ) {
//     //
//   } else {
//     console.log('Looker:', e.type, e)
//   }
// }


// function sendEmbedEvent(e) {
//   mainDashboard.contentWindow.postMessage(e, globalConfig.baseURL)
// }


// function changeDashboard(e) {
//   var label = e.target.attributes['looker-link'].value
//   for (i = 0; i < globalConfig.sidebarItems.length; i++) {
//     console.log('changeDashboard()', label, globalConfig.sidebarItems[i].label)
//     if (globalConfig.sidebarItems[i].label == label) {
//       content = globalConfig.sidebarItems[i]
//       break
//     } else {
//       content = globalConfig.sidebarItems[0]
//     }
//   }
//   newURL = getEmbedURL(content)

//   // header.textContent = newDash
//   mainDashboard.setAttribute('src', newURL)
//   if (content.category == 'explore') {
//     mainDashboard.setAttribute('height', '600')
//   } 
//   mainDashboard.style.display = 'block'
// }

function showDashboard(dashboardId) {
  var mainContainer = document.getElementById('main-container')
  mainContainer.innerHTML = '';

  lookerEmbedSDK.createDashboardWithId(dashboardId)
  .appendTo('#main-container')
  .withClassName('looker-embed')
  .withTheme('LookerWhite')
  // .on('dashboard:run:start',
  //     () => updateState('#dashboard-state', 'Running')
  // )
  // .on('dashboard:run:complete',
  //     () => updateState('#dashboard-state', 'Done')
  // )
  .build()
  .connect()
  // .then(setupDashboard)


}

function showStaticPage(e) {
  var mainContainer = document.getElementById('main-container')
  mainContainer.innerHTML = '';

  var contentFrame = document.createElement('iframe')
  contentFrame.setAttribute('src', '')
  contentFrame.setAttribute('width', '100%' )
  contentFrame.setAttribute('height', '2500' )
  contentFrame.setAttribute('frameBorder', '0')
  contentFrame.setAttribute('scrolling', "no" )
  contentFrame.setAttribute('name', "content-frame" )
  contentFrame.setAttribute('id', "content-frame")
  contentFrame.setAttribute('title', "content-frame")
  mainContainer.appendChild(contentFrame)

  pageURL =  'html/' + globalConfig.navbarMenu[e.target.textContent]
  console.log('showStaticPage e', pageURL, e)
  contentFrame.setAttribute('src', pageURL)
  escapeButton.setAttribute('href', globalConfig.baseURL)
}


function getEmbedURL(content) {
  let embedURL = globalConfig.baseURL
        + '/embed/'
        + content.category
        + '/'
        + content.reference
        + '?embed_domain='
        + globalConfig.embedDomain

  if (content.category == 'dashboards') {
    embedURL += '&hide_title=true&theme=' + globalConfig.lookerTheme
  }

  return embedURL
}

