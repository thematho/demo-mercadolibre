function SearchResultController($state, $stateParams, ItemsService) {
  'ngInject';

  let $ctrl = this;

  this.openDetails = () => {
    $state.go('app.details', { id: 1 });
  }

  $ctrl.$onInit = () => {
    ItemsService.search($stateParams.search)
      .then((result) => {

      });
  };

}

export default SearchResultController;
