BS.plugin('MultiBox', {
  init: function(config) {
    this.plugin.config(config);
  }
  ,
  configurator: {
    content: function(value) {
      this.clean();
      for(var i = 0; i < value.length; i++) {
        this.add(value[i]);
      }
    }
  }
  ,
  clean: function() {
    var element = this.plugin.element;
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  ,
  add: function(config) {
    var node = document.createElement('div');
    BS.make(node, config);
    this.plugin.element.appendChild(node);
  }
});
