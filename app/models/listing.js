import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  owner: DS.attr(),
  contact: DS.attr(),
  date: DS.attr('string'),
  category: DS.belongsTo('category', {async: true})
});
