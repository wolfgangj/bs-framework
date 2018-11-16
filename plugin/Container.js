bs.plugin('Container', {
  init: function(plugin, config) {
    plugin.contentNode = document.createElement('div');
    plugin.element.appendChild(plugin.contentNode);

    plugin.config(config);
  }
  ,
  configurator: {
    content: function(plugin, value) {
      bs.make(plugin.contentNode, value);
    }
  }
});
