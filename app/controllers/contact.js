import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',

  isEmailDisabled: Ember.computed.empty('emailAddress'),
  isMessageEmpty: Ember.computed.lte('message.length', 5),
  isNotValidate: Ember.computed.or('isEmailDisabled', 'isMessageEmpty'),

  actions: {
    sendMessage() {
      console.log(`Message sent: ${this.get('message')}`);
    }
  },

});
