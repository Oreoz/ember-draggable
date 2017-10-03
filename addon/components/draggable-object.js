import { Draggable } from '@shopify/draggable';
import Component from '@ember/component';
import layout from '../templates/components/draggable-object';

export default Component.extend({
  layout,

  classNames: 'draggable-object',

  didReceiveAttrs() {
    this._super(...arguments);

    new Draggable(this.$('.draggable-object'))
      .on('drag:start', () => console.log('drag:start'))
      .on('drag:move', () => console.log('drag:move'))
      .on('drag:stop', () => console.log('drag:stop'));
  },

});
