import search from './search'
import SearchController from './search.controller';
import searchComponent from './search.component';
import searchTemplate from './search.html';

describe('Component: search', () => {
  let $rootScope, makeController;

  beforeEach(window.module(search));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      let $ctrl = new SearchController();
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
      expect(searchTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = searchComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(searchTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SearchController);
      });
  });
});
