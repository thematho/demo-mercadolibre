function SearchController() {
  'ngInject';

  let $ctrl = this;
  this.onAction = (searchParam) => {
    if (searchParam) {
      return this.onSearch({ searchParam: searchParam });
    }
  };
  $ctrl.$onInit = () => {
    this.searchPlaceholder = 'Nunca dejes de buscar';
  };
}

export default SearchController;
