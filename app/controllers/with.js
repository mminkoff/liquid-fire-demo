import Ember from 'ember';

export default Ember.ArrayController.extend({
  model: [{name:"foo"},{name:"bar"},{name:"baz"}],

  actions: {
    next: function() {
      var curr = this.get('currentIndex')
      if (curr >= this.get('model.length') - 1) {
	curr = 0;
      } else {
	curr++;
      }
      this.set('currentIndex',curr);
    }
  },

  currentIndex: 0,

  currentModel: function() {
    return this.get('model').objectAt(this.get('currentIndex'));
  }.property('currentIndex')
});
