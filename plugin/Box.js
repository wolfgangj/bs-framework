BS.plugin('Box', {
  init: function(config) {
    this.contentNode = document.createElement('div');
    this.element.appendChild(this.contentNode);

    this.plugin.config(config);
  }
  ,
  configurator: {
    content: function(value) {
      BS.make(this.contentNode, value);
    }
  }
});
