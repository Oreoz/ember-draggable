import { Draggable } from '@shopify/draggable';
import Component from '@ember/component';
import layout from '../templates/components/draggable-object';

export default Component.extend({
  layout,

  classNames: 'draggable-object draggable-source',

  didRender() {
    this._super(...arguments);

    new Draggable(document.querySelectorAll('ul'), {
      draggable: 'li',
      delay: 0
    })
      .on('drag:start', () => console.log('drag:start'))
      .on('drag:move', () => console.log('drag:move'))
      .on('drag:stop', () => console.log('drag:stop'));
  },

});
