// On Looker instance:
// admin/embed - Set Embedded Domain Whitelist
// admin/themes - Set Theme (if any – good idea to copy Looker theme and set background to #ffffff )

// All icons refer to the Material Design icon set. Refer to https://materializecss.com/icons.html.

// 1. Update images in img/ folder (usually required)
// 2. Be sure to baseURL and embedDomain
// 3. Update content: {} with your chosen dashboards, looks and explores 
//    - 'Main Dashboard' is required, and will be the dashboard shown by default
// 4. Update sidebarItems: {} 
//    - Use type: 'li' for a link to content
//      - Use content: '' to refer to one of the keys in your content object (also used for the display text)
//    - Use type: 'subheader' to create a subheader
//      - Use text: '' for the text you want displayed in the sidebar
// 5. Update html in html/ folder (not necessarily required)

var themeLocation = '/themes/purple/'

var globalConfig = {
  baseURL: 'https://demo.looker.com',
  embedDomain: 'http://127.0.0.1:5500', // This value based on using VS Code with Live Server extension
  lookerTheme: 'LookerWhite', // Theme
  headerText: 'Introduction to Looker',
  title: 'Looker Proof of Value',
  favicon: themeLocation + 'img/favicon.ico',
  logo: themeLocation + 'img/logo.png',
  logoHeight: '50px', // Defaults to 50px, but adjust this setting to get your logo at the optimum size
  logoTop: '8px', // Defaults to 8px, but adjust this setting to get your logo in the right place
  logoClass: '', // Can set this to 'circle' if it helps mask a circular logo with white background
  logoText: 'Powered By Looker',
  
  navbarBackgroundColor: 'purple', // Palette here: https://materializecss.com/color.html
  navbarBackgroundColorModifier: 'darken-4', // formula: 'lighten-x' or 'darken-x', with x between 1 and 5
  navbarTextColor: 'white', // tested with 'white' and 'black'
  navbarTextColorModifier: '', // formula: 'text-lighten-x' or 'text-darken-x', with x between 1 and 5
  
  sidebarImage: themeLocation + 'img/logo.png',
  sidebarBackgroundImage: themeLocation + 'img/image.jpg',
  sidebarItems: [
    {
      type: 'li',
      icon: 'euro_symbol',
      label: 'Business Pulse',
      category: 'dashboards',
      reference: 159
    },
    {
      type: 'li',
      icon: 'dashboard',
      label: 'Brand Analytics',
      category: 'dashboards',
      reference: 8,
    },
    {
      type: 'subheader',
      text: 'Operations',
    },
    {
      type: 'li',
      icon: 'access_time',
      label: 'Shipping Logistics',
      category: 'dashboards',
      reference: 3322,
    },
    {
      type: 'subheader',
      text: 'Salesforce',
    },
    {
      type: 'li',
      icon: 'euro_symbol',
      label: 'All Sales Pulse',
      category: 'dashboards',
      reference: 317,
    },
    {
      type: 'subheader',
      text: 'Data Exploration',
    },
    {
      type: 'li',
      icon: 'shopping_cart',
      label: 'Orders',
      category: 'explore',
      reference: 'thelook/order_items',
    },
  ],

  navbarMenu: {
    'Themes': themeLocation + 'html/theme_index.html',
    'Business Value': themeLocation + 'html/business_value.html',
    'Agile Delivery': themeLocation + 'html/agile_delivery.html',
    'Cloud Native': themeLocation + 'html/cloud_native.html',
  },
}