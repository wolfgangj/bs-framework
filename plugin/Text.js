bs.plugin('Text', function(element, config) {
  this.config(element, config);
}, {
  setters: {
    text: function(element, value) {
      element.innerHTML = '';
      element.appendChild(document.createTextNode(value));
    }
  }
});
