import resultItem from './result-item'
import ResultItemController from './result-item.controller';
import resultItemComponent from './result-item.component';
import resultItemTemplate from './result-item.html';

describe('Component: resultItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(resultItem));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      let $ctrl = new ResultItemController();
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
      expect(resultItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = resultItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(resultItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ResultItemController);
      });
  });
});
