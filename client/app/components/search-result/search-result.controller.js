function SearchResultController($state, $stateParams, ItemsService, CategoriesService) {
  'ngInject';

  let $ctrl = this;

  this.onItemClick = (id, categories) => {
    $state.go('app.details', {
      id,
      categories
    });
  };


  $ctrl.$onInit = () => {
    ItemsService.search($stateParams.search)
      .then((response) => {
        this.items = response.items;
        this.categories = response.categories;
      });
  };
}

export default SearchResultController;
