// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.

var selectMulti__triggers = document.querySelectorAll('[data-behavior~="select-multi"]');

// Utility method to loop thru NodeList correctly
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

// Utilitity method
var getClosest = function(elem, selector){

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

    // Get the closest matching element
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.matches( selector ) ) return elem;
    }
    return null;

};

// iterate thru trigger elements and set click handler
forEach(selectMulti__triggers, function(index, value) {
  var _el = value;
  _el.addEventListener('click', function(e){

    var _check = e.target;
    //var _parent = el.closest('ry-select-multi');
    var _parent = getClosest(_el, '.fry-select-multi');
    var _selectAll = _parent.querySelector('[data-behavior~="select-multi-all"]');

    if(_el != _selectAll){

      var _len = _parent.querySelectorAll('[data-behavior~="select-multi"]').length;
      var _lenChecked = _parent.querySelectorAll('[data-behavior~="select-multi"]:checked').length
      var _count = _len - _lenChecked;

      if( _el.checked){
        if(!_selectAll.checked){
          if( _count <= 1 ){
            _selectAll.indeterminate = false;
            _selectAll.checked = true;
          } else {
            _selectAll.indeterminate = true;
            _selectAll.checked = false;
          }
        }
      } else {
        if(_selectAll.checked){
          _selectAll.indeterminate = true;
          _selectAll.checked = false;
        } else if(_count == (_len)) {
          _selectAll.indeterminate = false;
          _selectAll.checked = false;
        }
      }

    } else {
      var _cbs = _parent.querySelectorAll('[data-behavior~="select-multi"]');
      forEach(_cbs, function (index, value) {
        value.checked = _selectAll.checked;
      });
      _selectAll.indeterminate = false;
    }

  }, false);
});

function selectMulti__setState(){

  var _selectAll = document.querySelectorAll('[data-behavior~="select-multi-all"]');
  forEach(_selectAll, function (index, value) {

    //console.log(typeof value);
    //var _parent = value.closest('.fry-select-multi');
    var _parent = getClosest(value, '.fry-select-multi');
    var _selectAll = value;

    var _len = _parent.querySelectorAll('[data-behavior~="select-multi"]').length;
    var _lenChecked = _parent.querySelectorAll('[data-behavior~="select-multi"]:checked').length
    var _count = _len - _lenChecked;

    if( _count <= 1 ){
      _selectAll.indeterminate = false;
      _selectAll.checked = true;
    } else {
      _selectAll.indeterminate = true;
      _selectAll.checked = false;
    }
  });
}


selectMulti__setState();
