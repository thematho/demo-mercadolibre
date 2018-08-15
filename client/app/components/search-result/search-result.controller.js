function SearchResultController($state, $stateParams, ItemsService) {
  'ngInject';

  let $ctrl = this;

  this.onItemClick = (id) => {
    $state.go('app.details', { id });
  }

  $ctrl.$onInit = () => {
    ItemsService.search($stateParams.search)
      .then((response) => {
        this.results = response.results;
      });
  };

}

export default SearchResultController;
