BS.plugin('MultiBox', {
  init: function(plugin, config) {
    plugin.config(config);
  }
  ,
  configurator: {
    content: function(plugin, value) {
      this.clean(plugin);
      for(var i = 0; i < value.length; i++) {
        this.add(plugin, value[i]);
      }
    }
  }
  ,
  clean: function(plugin) {
    while (plugin.element.firstChild) {
      plugin.element.removeChild(element.firstChild);
    }
  }
  ,
  add: function(plugin, config) {
    var node = document.createElement('div');
    BS.make(node, config);
    plugin.element.appendChild(node);
  }
});
