function SearchResultController($state, $stateParams, ItemsService, CategoriesService) {
  'ngInject';

  let $ctrl = this;

  this.onItemClick = (id, categoryId) => {
    $state.go('app.details', {
      id,
      categoryId
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
