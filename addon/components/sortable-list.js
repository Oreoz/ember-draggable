import Ember from 'ember';
import layout from '../templates/components/sortable-list';
import { Sortable } from '@shopify/draggable';

export default Ember.Component.extend({
  layout,

  classNames: 'sortable-list',

  didRender() {
    this._super(...arguments);

    new Sortable(this.$(), {
      draggable: '.sortable-object'
    })
      .on('sortable:start', () => console.log('sortable:start'))
      .on('sortable:sorted', () => console.log('sortable:sorted'))
      .on('sortable:stop', () => console.log('sortable:stop'));
  },
});
