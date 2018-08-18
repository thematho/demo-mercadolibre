import angular from 'angular';
import onEnter from './on-enter';

describe('Directive: on-enter', () => {
  let $compile, $timeout, $scope,
    el, htmlStr;

  // Modules import
  beforeEach(window.module(onEnter));
  beforeEach(inject(($injector) => {
    $compile = $injector.get('$compile');
    $timeout = $injector.get('$timeout');
    $scope = $injector.get('$rootScope').$new();
    htmlStr = `<input id="testInput" type="text" on-input="doTest()"/>`;
    // Make Angular resolve the string
    el = angular.element(htmlStr);

    // Trigger digest cycle in order to see changes if needed
    $scope.$digest();
    // Compile the Element into a new scope
    $compile(el)($scope)


  }));

  it('input text should have focus [REMOVE]', () => {
    let testFn = () => {},
      stub = sinon.stub(),
      event = document.createEvent("KeyboardEvent");
    let initMethod = typeof event.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";

    event[initMethod](
      "keydown", // event type : keydown, keyup, keypress
      true, // bubbles
      true, // cancelable
      window, // viewArg: should be window
      false, // ctrlKeyArg
      false, // altKeyArg
      false, // shiftKeyArg
      false, // metaKeyArg
      13, // keyCodeArg : unsigned long the virtual key code, else 0
    );
    // event.keyCode = 13;
    $scope.doTest = stub;
    $scope.$apply();
    el.find('input').triggerHandler(event);
    expect(stub).to.have.been.calledOnce;
  });
});

