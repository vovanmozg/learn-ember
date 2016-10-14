//app/controllers/index.js

import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  isDisabled: Ember.computed.empty('emailAddress'),

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  actions: {
    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  },

  actualEmailAddress: Ember.computed('emailAddress', function() {
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),

  emailAddressChanged: Ember.observer('emailAddress', function() {
    console.log('observer is called', this.get('emailAddress'));
  })
});


