import searchResult from './search-result'
import SearchResultController from './search-result.controller';
import searchResultComponent from './search-result.component';
import searchResultTemplate from './search-result.html';

describe('Component: searchResult', () => {
  let $rootScope, makeController;

  beforeEach(window.module(searchResult));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      let $ctrl = new SearchResultController();
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
      expect(searchResultTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = searchResultComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(searchResultTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SearchResultController);
      });
  });
});
