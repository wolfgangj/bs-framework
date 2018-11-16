plugin.Text = function(element, config) {
  this.config(element, config);
}

plugin.Text.prototype = {
  constructor: plugin.Text, pluginName: 'Text'
  ,
  config: function(element, config) {
    for(var attr in config) {
      switch(attr) {
        case 'text':
          element.innerHTML = '';
          element.appendChild(document.createTextNode(config.text));
          break;
        case 'style':
          element.setAttribute('style', config.style);
          break;
        case 'class':
          element.className += ' ' + config.class;
          break;

          // error handling 
        case 'kind':
          if(config.kind !== this.pluginName) {
            console.error('internal error: "' + config.kind + '" !== "' + this.pluginName + '"');
          }
          break;
        default:
          console.warn('unknown configuration attribute "' + attr + '" for ' +
                       Object.getPrototypeOf(this).pluginName);
      }
    }
  }
}
