import divider from './divider'
import dividerComponent from './divider.component';
import dividerTemplate from './divider.html';

describe('Component: divider', () => {
  let $rootScope;

  beforeEach(window.module(divider));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
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
  });
});
