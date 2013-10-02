/*
 * typeahead.js
 * https://github.com/twitter/typeahead
 * Copyright 2013 Twitter, Inc. and other contributors; Licensed MIT
 */

var Callback = function() {
    function Callback(o) {
      utils.bindAll(this);
      o = utils.isFunction(o) ? {
          data: o
      } : o;
      this.fn = o.data;
    }
    utils.mixin(Callback.prototype, {

        // public methods
        // --------------

        get: function(query, cb) {
          var data = this.fn(query);
          cb && cb(data);
        }
    });
    return Callback;
}();

