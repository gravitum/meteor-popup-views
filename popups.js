var $popupContainer, names, popupContainer;

$(function() {
  return $popupContainer.appendTo($("body"));
});

$popupContainer = $('<div></div>');

popupContainer = $popupContainer[0];

(function() {
  var indexify, zIndexSniffer;
  zIndexSniffer = function() {
    var c;
    c = popupContainer;
    c.__appendChild = c.appendChild;
    return c.appendChild = function() {
      c.__appendChild.apply(c, arguments);
      return indexify(c);
    };
  };
  indexify = function(element) {
    var el, i, j, len, ref, ref1, ref2;
    ref = element.childNodes;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      el = ref[i];
      if ((ref1 = el.style) != null) {
        ref1.zIndex = i + 1050;
      }
      if ((ref2 = el.style) != null) {
        ref2.position = 'fixed';
      }
    }
    return 'asd';
  };
  return zIndexSniffer();
})();

names = {};
var popDown =  Meteor.popDown = function popDown (name) {
  var err, error, mod;
  try {
    if (!name) {
      throw " popUp " + name + " not found";
    }
    mod = $(names[name]).find(".modal");
    if (mod.length) {
      mod.on('hidden.bs.modal', function() {
        delete $(names[name]).remove();
        return null;
      });
      mod.modal("hide");
    } else {
      delete $(names[name]).remove();
    }
    return null;
  } catch (error) {
    err = error;
    lg(err);
    return null;
  }
};

Meteor.popUp = function popUp (name, arg, cb) {
  var $wraper, err, error, frag, wraper;
  try {
    if (names[name]) {
      delete $(names[name]).remove();
    }
    frag = UI.renderWithData(Template[name], arg);
    $wraper = $("<div>");
    wraper = $wraper[0];
    popupContainer.appendChild(wraper);
    UI.insert(frag, wraper);
    $wraper.find(".modal").on("hidden.bs.modal", function() {
      delete $(wraper).remove();
      if (cb) {
        return cb();
      }
    });
    $wraper.find(".modal").modal("show");
    names[name] = wraper;
    return $wraper.on("popDown", function() {
      return popDown(name);
    });
  } catch (error) {
    err = error;
    lg(err);
    lg(err.stack);
    window.__err = err;
    return null;
  }
};

