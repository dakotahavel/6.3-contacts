var Backbone = require('backbone');
var $ = require('jquery');

var contactFormTemplate = require('../../templates/contact_form_template.hbs');
var contactItemTemplate = require('../../templates/contact_item_template.hbs');

var ContactFormView = Backbone.View.extend({
  tagName: 'form'

  , events: {
    'submit': 'addContact'
  }
  , template: contactFormTemplate

  , addContact: function(e){
    e.preventDefault();

    var $name = $('#name');
    var $alias = $('#alias');
    var $rank = $('#rank');
    var $agency = $('#agency');
    var $nationality = $('#nationality');
    this.collection.create({name: $name.val(),alias: $alias.val(),rank: $rank.val(),agency: $agency.val(),nationality: $nationality.val()});
    $name.val('');
    $alias.val('');
    $rank.val('');
    $agency.val('');
    $nationality.val('');

  }
  , render: function(){
    this.$el.html(this.template);
    return this;
  }

});

var ContactListView = Backbone.View.extend({
  tagName: 'ul'

  , className: 'list-group'

  , initialize: function(){
    this.listenTo(this.collection, 'add', this.renderContact)
  }
  , render: function(){
    return this;
  }
  , renderContact: function(contact){
    var contactListItem = new ContactListItemView({model: contact})
    this.$el.prepend(contactListItem.render().el);
    return this;
  }

})

var ContactListItemView = Backbone.View.extend({
  tagName: 'li'

  , className: 'list-group-item clearfix list-item'

  , template : contactItemTemplate

  , events: {
    'click .delete-btn': 'removeContact'
  }
  , removeContact: function(){
    this.model.destroy();
  }
  , initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
  }
  , render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  }

});






module.exports = {
  ContactFormView : ContactFormView
  , ContactListView : ContactListView
  , ContactListItemView : ContactListItemView
}
