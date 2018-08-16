function SearchResultController($state, $stateParams, ItemsService, CategoriesService) {
  'ngInject';

  let $ctrl = this,
    loadCategoriesPath = () => {
      return CategoriesService
        .get(this.results[0].category_id)
        .then((response) => {
          this.category = response;
        });
    };
  this.onItemClick = (id) => {
    $state.go('app.details', { id });
  };


  $ctrl.$onInit = () => {
    ItemsService.search($stateParams.search)
      .then((response) => {
        this.results = response.results;
      })
      .then(loadCategoriesPath);
  };
}

export default SearchResultController;
