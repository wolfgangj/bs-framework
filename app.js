var app = bs.app({
  kind: 'Text',
  text: 'It worked!',
  class: 'Text--em',
  style: 'color:red',
  onclick: 'click',
  self: {
    foo: 'Woohoo!',
    click: function() {
      this.plugin.config({ text: this.foo });
    }
  }
});
