var Backbone = require('backbone');
var $ = require('jquery');

var loginTemplate = require('../../templates/login_template.hbs');

var LoginView = Backbone.View.extend({
  tagName: 'form'

  , initialize: function(){
    this.collection.create({name:"username1",password:"password1"});

  }

  , events: {
    'submit': 'checkPass'
  }
  , template: loginTemplate

  , checkPass: function(e){
    e.preventDefault();
    var $username = $('#username').val();
    var $password = $('#password').val();
    var validName = this.collection.findWhere({name: 'username1'});
    var validPass = validName.get('password');
    $password == validPass ? ($('.FOUO').show(), $('.login-screen').hide()) : console.log('fail')

  }
  , render: function(){
    this.$el.html(this.template);
    return this;
  }

});

module.exports = {
  LoginView : LoginView
}
