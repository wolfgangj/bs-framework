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
};
