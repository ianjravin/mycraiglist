import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    addListing() {
      this.set('addNewListing', true);
    },
    saveListing() {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        owner: this.get('owner'),
        contact: this.get('contact'),
        date: moment(),
        category: this.get('category')
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing', params);
    }
  }
});
