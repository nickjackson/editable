var Editable = require('editable')


function createEditable(){
  var el = document.querySelector('.editables')
    , h1 = document.createElement('h1');
  
  el.innerHTML = '';
  el.appendChild(h1);
  return h1;
}

describe('editable', function(){
  it('should exist as a fn', function(){
    expect(Editable).to.be.a('function')
  })
  
  it('adds contenteditable', function(){
    var el = createEditable();
    Editable(el);
    expect(el.getAttribute('contenteditable')).to.eql('true');
  })
  
  describe('.text()', function(){
    var editable;
    
    before(function(){
      var el = createEditable();
      editable = Editable(el);
    })
    
    it('should set text', function(){
      editable.text('FOOBAR');
      expect(editable.el.textContent).to.eql('FOOBAR');
    })
    
    it('should emit text', function(done){
      editable.on('text', function(value){
        expect(value).to.eql('Foo');
        done();
      })
      editable.text('Foo');
    })
    
    it('should get text', function(){
      editable.el.innerText = 'Foo Bar Baz';
      expect(editable.text()).to.eql('Foo Bar Baz');
    })
  })
  
  
  describe('.html()', function(){
    var editable;
    
    before(function(){
      var el = createEditable();
      editable = Editable(el);
    })
    
    it('should set html', function(){
      editable.html('<span>Hello World</span>');
      expect(editable.el.innerHTML).to.eql('<span>Hello World</span>');
    })
    
    it('should emit html', function(done){
      editable.on('html', function(value){
        expect(value).to.eql('<span>Foo</span>');
        done();
      })
      editable.html('<span>Foo</span>');
    })
    
    it('should get html', function(){
      editable.el.innerHTML = '<span>Foo Bar Baz</span>';
      expect(editable.html()).to.eql('<span>Foo Bar Baz</span>');
    })
  })
})


