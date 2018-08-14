function AppController($state, $stateParams, ItemsService) {
    'ngInject';
    let $ctrl = this;
    this.search = (searchParam) => {
        $state.go('app.results', {
            search: searchParam, result: result
        });
    };

    $ctrl.$onInit = () => {
        if ($stateParams.search) {
            this.searchParam = $stateParams.search
        }
    }
}

export default AppController;