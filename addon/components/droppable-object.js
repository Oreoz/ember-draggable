import Ember from 'ember';
import layout from '../templates/components/droppable-object';
import { Droppable } from '@shopify/draggable';

export default Ember.Component.extend({
  layout,

  classNames: 'droppable-object',

  didRender() {
    this._super(...arguments);

    const droppable = new Droppable(this.$(''), {
      draggable: '.droppable-object',
      droppable: '#dropzone',
    });

    droppable.on('droppable:over', () => console.log('sortable:start'))
    droppable.on('droppable:out', () => console.log('sortable:sorted'));
  },
});
