var Backbone = require('backbone');
var $ = require('jquery');

var loginTemplate = require('../../templates/login_template.hbs');

var LoginView = Backbone.View.extend({
  tagName: 'form'

  , initialize: function(){
    this.collection.create({name:"admin",password:"password1"});
    this.collection.create({name:"Dan",password:"Dietz"});
    this.collection.create({name:"Andrea",password:"Baty"});
    this.collection.create({name:"Ryan",password:"Barron"});
    this.collection.create({name:"Sean",password:"McKeon"});
    this.collection.create({name:"Evan",password:"Miller"});
    this.collection.create({name:"Dylan",password:"Greg"});
    this.collection.create({name:"Greg",password:"Robison"});
    this.collection.create({name:"John",password:"Baldwin"});
    this.collection.create({name:"Nathan",password:"Stalwart"});

  }

  , events: {
    'submit': 'checkPass'
  }
  , template: loginTemplate

  , checkPass: function(e){
    e.preventDefault();
    var $username = $('#username').val();
    var $password = $('#password').val();
    $('#username').val('');
    $('#password').val('');
    var validName = this.collection.findWhere({name: $username});
    var validPass;
    validName ? validPass = validName.get('password') : $('#warn').html(' Invalid Username and/or ');
    $password == validPass ? ($('.FOUO').fadeIn(2500), $('.login-screen').hide(), $('body').removeClass('login-bg')): $('#warn').append(' Invalid Password ');
  }
  , render: function(){
    this.$el.html(this.template);
    return this;
  }

});

module.exports = {
  LoginView : LoginView
}
