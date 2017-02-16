var Backbone = require('backbone');

var LoginModel = Backbone.Model.extend({

  idAttribute: '_id'

})

var LoginCollection = Backbone.Collection.extend({

  model: LoginModel
  , url: 'https://tiny-lasagna-server.herokuapp.com/collections/login'

  , parse: function(response){
    console.log('login',response);
    return response;
  }

});

module.exports = {
  LoginModel : LoginModel
  , LoginCollection : LoginCollection

}
