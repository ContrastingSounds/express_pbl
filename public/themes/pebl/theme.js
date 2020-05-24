// On Looker instance:
// admin/embed - Set Embedded Domain Whitelist
// admin/themes - Set Theme (if any – good idea to copy Looker theme and set background to #ffffff )

// All icons refer to the Material Design icon set. Refer to https://materializecss.com/icons.html.

// 1. Update images in img/ folder (usually required)
// 2. Be sure to baseURL and embedDomain
// 3. Update sidebarItems with your chosen dashboards, looks and explores : {} 
//    - Use type: 'li' for a link to content
//      - Use content: '' to refer to one of the keys in your content object (also used for the display text)
//    - Use type: 'subheader' to create a subheader
//      - Use text: '' for the text you want displayed in the sidebar
// 4. Update html in html/ folder (not necessarily required)
 
var globalConfig = {
  baseURL: 'https://pebl.dev.looker.com',
  embedDomain: 'https://pebl.ngrok.io', // This value based on using VS Code with Live Server extension
  lookerTheme: 'PeBL', // Theme
  headerText: 'PeBL',
  title: 'PeBL',
  favicon: 'p-favicon.png',
  logo: 'p-logo.png',
  logoHeight: '50px', // Defaults to 50px, but adjust this setting to get your logo at the optimum size
  logoTop: '8px', // Defaults to 8px, but adjust this setting to get your logo in the right place
  logoClass: '', // Can set this to 'circle' if it helps mask a circular logo with white background
  logoText: 'PeBL Bank',
  
  navbarBackgroundColor: 'green', // Palette here: https://materializecss.com/color.html
  navbarBackgroundColorModifier: 'darken-4', // formula: 'lighten-x' or 'darken-x', with x between 1 and 5
  navbarTextColor: 'white', // tested with 'white' and 'black'
  navbarTextColorModifier: '', // formula: 'text-lighten-x' or 'text-darken-x', with x between 1 and 5

  sidebarImage: 'p-favicon.png',
  sidebarBackgroundImage: 'p-image.jpg',
  sidebarItems: [
    {
      type: 'li',
      icon: 'euro_symbol',
      label: 'Bank Overview',
      category: 'dashboards',
      reference: 2,
    },
    {
      type: 'subheader',
      text: 'Operations',
    },
    {
      type: 'li',
      icon: 'access_time',
      label: 'Customer Account',
      category: 'dashboards',
      reference: 1,
    },
  ],

  navbarMenu: {
    'Themes': 'theme_index.html',
    'Business Value': 'business_value.html',
    'Agile Delivery': 'agile_delivery.html',
    'Cloud Native': 'cloud_native.html',
  },
}