(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': Draggable,
      'Draggable': Draggable.Draggable,
      'Droppable': Draggable.Droppable,
      'Sortable': Draggable.Sortable,
      'Swappable': Draggable.Swappable
    };
  }

  define('@shopify/draggable', [], vendorModule);
})();
