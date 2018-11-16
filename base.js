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
      config.self = config.self || {};
      this.self = config.self;
      config.self.plugin = this;
      config.self.element = element;
      init.bind(config.self)(config);
    };
    plugin[name] = creator;
    plugin[name].prototype = {
      pluginName: name,
      constructor: creator,
      config: function(config) {
        config.self = config.self || this.self;
        var element = config.self.element;
        for(var attr in config) {
          switch(attr) {
            case 'style':
              element.setAttribute('style', config.style);
              break;
            case 'class':
              element.className += ' ' + config.class;
              break;
            case 'kind':
              if(config.kind !== this.pluginName) {
                console.error('internal error: "' + config.kind + '" !== "' + this.pluginName + '"');
              }
              break;
            case 'self':
              break;
            case 'onclick':
              element.onclick = config.self[config.onclick].bind(config.self);
              break;
            default:
              var setter = body.configurator[attr];
              if(setter) {
                setter.bind(body)(this, config[attr]);
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
