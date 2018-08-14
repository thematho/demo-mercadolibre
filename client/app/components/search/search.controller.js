function SearchController() {
  'ngInject';

  let $ctrl = this;
  this.onAction = (searchParam) => {
    if (searchParam) {
      return this.onSearch({ searchParam: searchParam });
    }
  };
}

export default SearchController;
