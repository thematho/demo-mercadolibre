import itemDetails from './item-details'
import ItemDetailsController from './item-details.controller';
import itemDetailsComponent from './item-details.component';
import itemDetailsTemplate from './item-details.html';

describe('Component: itemDetails', () => {
  let $rootScope, makeController;

  beforeEach(window.module(itemDetails));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      let $ctrl = new ItemDetailsController();
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
      expect(itemDetailsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = itemDetailsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(itemDetailsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ItemDetailsController);
      });
  });
});
