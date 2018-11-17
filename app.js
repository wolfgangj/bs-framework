var boxedLabel = {
  kind: 'Box',
  style: 'border:20px solid PeachPuff;background:grey;padding:10px;',
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
};

var app = BS.app({
  kind: 'MultiBox',
  class: 'MultiBox--vflex',
  style: 'padding:10px',
  content: [
    {
      kind: 'Text',
      style: 'padding:10px',
      text: 'Hello'
    }
    ,
    {
      kind: 'Text',
      style: 'padding:10px',
      text: 'world!'
    }
    ,
    boxedLabel
  ]
});
