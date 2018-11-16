var app = bs.app({
  kind: 'Container',
  style: 'border:20px;background:grey;',
  content: {
    kind: 'Text',
    text: 'It worked!',
    class: 'Text--em',
    onclick: 'click',
    self: {
      foo: 'Woohoo!',
      click: function() {
        this.plugin.config({ text: this.foo });
      }
    }
  }
});
