BS.plugin('MultiBox', {
  init: function(plugin, config) {
    plugin.config(config);
  }
  ,
  configurator: {
    content: function(plugin, value) {
      var children = [];
      for(var i = 0; i < value.length; i++) {
        var node = document.createElement('div');
        BS.make(node, value[i]);
        plugin.element.appendChild(node);
        //children.push(node);
      }
      //plugin.element.children = children;
    }
  }
});
