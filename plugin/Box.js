BS.plugin('Box', {
  init: function(plugin, config) {
    plugin.contentNode = document.createElement('div');
    plugin.element.appendChild(plugin.contentNode);

    plugin.config(config);
  }
  ,
  configurator: {
    content: function(plugin, value) {
      BS.make(plugin.contentNode, value);
    }
  }
});
