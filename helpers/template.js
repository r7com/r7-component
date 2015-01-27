;(function (root) {

  root.template =  function (selector) {
    var content = $(selector).html();
    return _.template(content ? content : '');
  };

} (R7.helpers));

