import categoriesPath from './categories-path'
import CategoriesPathController from './categories-path.controller';
import categoriesPathComponent from './categories-path.component';
import categoriesPathTemplate from './categories-path.html';

describe('Component: categoriesPath', () => {
  let $rootScope, makeController;

  beforeEach(window.module(categoriesPath));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      let $ctrl = new CategoriesPathController();
      $ctrl.$onInit();
      return $ctrl;
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(categoriesPathTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = categoriesPathComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(categoriesPathTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CategoriesPathController);
      });
  });
});
