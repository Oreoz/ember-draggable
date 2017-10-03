(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': Draggable,
      'Draggable': Draggable.Draggable
    };
  }

  define('@shopify/draggable', [], vendorModule);
})();
