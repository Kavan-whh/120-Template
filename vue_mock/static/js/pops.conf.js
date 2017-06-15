// var popConfig={
//   yunschool:{//云校接口
//     groupApi:'/backend/role-group/group',
//     userApi:'/backend/user/lists',
//     searchApi:'/backend/role/search-api'
//
//   },
//   corp:{//企业通讯录接口
//     groupApi:'/wechat/backend/corp-contact/api-contacts',
//     userApi:'/wechat/backend/corp-contact/user-list',
//     searchApi:'/wechat/backend/corp-contact/search-api'
//   },
//   auth:'/auths/backend/manager/get-contact-auth'
// }


// 上线前
var popConfig={
  yunschool:{//云校接口
    groupApi:'/api/yunschool/group',
    userApi:'/api/yunschool/lists',
    searchApi:'/api/yunschool/search-api'

  },
  corp:{//企业通讯录接口
    groupApi:'/api/corp/api-contacts',
    userApi:'/api/corp/user-list',
    searchApi:'/api/corp/csearch-api'
  },
  auth:'/api/get-contact-auth'
}

var STATIC_PATH = "../../static/"
