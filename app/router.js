import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('first');
  this.route('second');
  this.route('third');
  this.route('with');
  this.route('if');
});

export default Router;
