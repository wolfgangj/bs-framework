bs.plugin('Text', function(config) {
  this.plugin.config(config);
}, {
  configurator: {
    text: function(element, value) {
      this.setText(element, value);
    }
  }
  ,
  setText: function(element, value) {
    element.innerHTML = '';
    element.appendChild(document.createTextNode(value));
  }
});
