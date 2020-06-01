// Config checklist:
//
// 1. Theme content has been updated, and exports.theme points to it 
// 2. Looker instance is set
// 3. Cors proxy is set (unless client-side calls not being used)
// 4. User is chosen from array of available users
// 5. User definition is correct, in particular:
//    - Permissions granted
//    - Models listed

exports.theme = {
  location: 'themes',
  name: 'default'
}

exports.looker_instance = 'https://demo.looker.com:19999'
exports.cors_proxy = 'http://localhost:8080'

var selected_user = 'standard'

users = {
  standard: {
    "external_user_id": "express_pbl_standard",
    "first_name": "Standard",
    "last_name": "EmbedUser",
    "session_length": 3600,
    "force_logout_login": true,
    "external_group_id": "group1",
    "group_ids": [],
    "permissions": [
      "access_data",
      "see_looks",
      "see_user_dashboards",
      "explore",
      "save_content",
      "embed_browse_spaces"
    ],
    "models": ["powered_by", "thelook", "thelook_adwords"],
    "user_attributes": { 
      "locale": "en_US",
      "state": "California",
      "city": "Albany" 
    }
  },
  viewOnly: {
    "external_user_id": "express_pbl_viewOnly",
    "first_name": "ViewOnly",
    "last_name": "EmbedUser",
    "session_length": 3600,
    "force_logout_login": true,
    "external_group_id": "group1",
    "group_ids": [],
    "permissions": [
      "access_data",
      "see_looks",
      "see_user_dashboards",
      "embed_browse_spaces"
    ],
    "models": ["powered_by", "thelook", "thelook_adwords"],
    "user_attributes": { 
      "locale": "en_US",
      "state": "California",
      "city": "Albany" 
    }
  }
}

exports.user = users[selected_user]
