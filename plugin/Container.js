var Container = function(element, config) {
  this.config(element, config);
}

Container.prototype = {
  constructor: Container
  ,
  config: function(element, config) {
    for(var attr in config) {
      switch(attr) {
        case 'text':
          element.innerHTML = '<p style="color: blue;">' + config.text + '</p>';
          break;
        default:
          console.warn('unknown configuration attribute "' + attr + '"');
      }
    }
  }
}
