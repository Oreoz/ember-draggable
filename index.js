/* eslint-env node */
'use strict';

const FastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-draggable',

  options: {
    nodeAssets: {
      '@shopify/draggable': {
        vendor: {
          srcDir: 'lib',
          include: ['draggable.js'],
          processTree(input) {
            return FastbootTransform(input);
          }
        }
      }
    }
  },

  included() {
    this._super.included.apply(this, arguments);
    this._ensureThisImport();

    this.import('vendor/@shopify/draggable/draggable.js');
    this.import('vendor/shims/draggable.js', {
      exports: {
        '@shopify/draggable': ['default', 'Draggable', 'Droppable', 'Sortable', 'Swappable']
      }
    });
  },

  _ensureThisImport() {
    if (!this.import) {
      this._findHost = function findHostShim() {
        let current = this;
        let app;

        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));
        return app;
      };
      this.import = function importShim(asset, options) {
        let app = this._findHost();
        app.import(asset, options);
      };
    }
  }
};
