BS.plugin('MultiBox', {
  init: function(config) {
    this.plugin.config(config);
  }
  ,
  configurator: {
    content: function(value) {
      BS.lib.clearElementContent(this.plugin.element);
      for(var i = 0; i < value.length; i++) {
        this.add(value[i]);
      }
    }
  }
  ,
  add: function(config) {
    var node = document.createElement('div');
    BS.make(node, config);
    this.plugin.element.appendChild(node);
  }
});
