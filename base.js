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
  plugin: function(name, init, body) {
    var creator = function(element, config) {
      this.self = config.self;
      config.self.plugin = this;
      config.self.element = element;
      init.bind(config.self)(config);
    };
    plugin[name] = creator;
    plugin[name].prototype = {
      pluginName: name,
      constructor: creator,
      config: function(data) {
        data.self = data.self || this.self;
        var element = data.self.element;
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
            case 'self':
              break;
            case 'onclick':
              element.onclick = data.self[data.onclick].bind(data.self);
              break;
            default:
              var setter = body.setters[attr];
              if(setter) {
                setter.bind(body)(element, data[attr]);
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
