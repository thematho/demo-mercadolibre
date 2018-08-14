export default (scope, el, attrs, ctrl) => {
  const events = 'keydown keypress';
  el.bind(events, (ev) => {
    let keyCode = ev.which || ev.keyCode;

    if (keyCode === 13) {
      scope.$apply(function () {
        scope.$eval(attrs.onEnter, { '$event': ev });

      });
      ev.preventDefault();
    }
  });

  scope.$on('$destroy', () => {
    el.off('events');
  });
}
