exports.theme = {
  location: 'themes',
  name: 'default',
  user: 'standard'
}

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

exports.user = users[this.theme.user]
