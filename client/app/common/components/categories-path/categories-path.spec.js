import categoriesPath from './categories-path'
import categoriesPathComponent from './categories-path.component';
import categoriesPathTemplate from './categories-path.html';

describe('Component: categoriesPath', () => {
  let $rootScope, template, scope, element, compiled;

  beforeEach(window.module(categoriesPath));
  beforeEach(function () {

    //set our view html.
    template = '<categories-path path-list="list"></categories-path>';

    inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      element = angular.element(template);
      compiled = $compile(element);
      compiled(scope);
      scope.$digest();
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = categoriesPathComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(categoriesPathTemplate);
    });
    it('should display proper path', () => {
      scope.list = [{ name: 'ParentA' }, { name: 'ParentB' }];
      scope.$apply();
      let paths = element.find('a');
      expect(paths[0].text).to.be.equals('ParentA > ');
      expect(paths[1].text).to.be.equals('ParentB');
    });
  });
});
