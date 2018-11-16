var plugin = {};

var bs = {
  app: function(config) {
    return bs.make(document.getElementById('app'), config);
  }
  ,
  make: function(element, config) {
    element.className = config.kind;
    return new plugin[config.kind](element, config);
  }
  ,
  plugin: function(name, init, setters) {
    plugin[name] = init;
    plugin[name].prototype = {
      constructor: init, pluginName: name
      ,
      config: function(element, data) {
        for(var attr in data) {
          switch(attr) {
            case 'style':
              element.setAttribute('style', data.style);
              break;
            case 'class':
              element.className += ' ' + data.class;
              break;
            case 'kind':
              if(data.kind !== this.pluginName) {
                console.error('internal error: "' + data.kind + '" !== "' + this.pluginName + '"');
              }
              break;
            default:
              var setter = setters[attr];
              if(setter) {
                setter.bind(this)(element, data[attr]);
              } else {
                console.warn('unknown configuration attribute "' + attr + '" for ' +
                             Object.getPrototypeOf(this).pluginName);
              }
          }
        }
      }
    }
  }
};
