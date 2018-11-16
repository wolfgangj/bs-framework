bs.plugin('Text', function(config) {
  this.plugin.textNode = document.createTextNode('');
  this.element.appendChild(this.plugin.textNode);

  this.plugin.config(config);
}, {
  configurator: {
    text: function(plugin, value) {
      plugin.textNode.data = value.toString();
    }
  }
  ,
  setText: function(element, value) { // TODO: remove this
    element.innerHTML = '';
    element.appendChild(document.createTextNode(value));
  }
});
