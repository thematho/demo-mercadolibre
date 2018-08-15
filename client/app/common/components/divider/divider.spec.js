import divider from './divider'
import DividerController from './divider.controller';
import dividerComponent from './divider.component';
import dividerTemplate from './divider.html';

describe('Component: divider', () => {
  let $rootScope, makeController;

  beforeEach(window.module(divider));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      let $ctrl = new DividerController();
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
      expect(dividerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = dividerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(dividerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DividerController);
      });
  });
});
