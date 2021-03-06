var Plugin = {};

var BS = {
  app: function(id, config) {
    return BS.make(document.getElementById(id), config);
  }
  ,
  make: function(element, config) {
    element.className = 'BS-Element ' + config.kind;
    return new Plugin[config.kind](element, config);
  }
  ,
  plugin: function(name, body) {
    var creator = function(element, config) {
      body.element = element;
      body.plugin = this;
      config.self = config.self || {};
      this.self = config.self; // needed if later calling config() w/o self.
      this.self.plugin = this;
      this.self.element = element;
      body.init(config);
    };
    Plugin[name] = creator;
    Plugin[name].prototype = {
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
                setter.bind(body)(config[attr]);
              } else {
                console.warn('unknown configuration attribute "' + attr + '" for ' +
                             Object.getPrototypeOf(this).pluginName);
              }
          }
        }
      }
    }
  }
  ,
  lib: {
    clearElementContent: function(element) {
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    }
  }
};
