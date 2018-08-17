function CategoriesService($resource) {
  'ngInject';

  this.categoriesAPI = $resource('http://localhost:8080/api/categories/:id', { }, {
    get: {
      method: 'GET',
      isArray: true
    }
  });

  let get = (id) => {
    return this.categoriesAPI
      .get({ id: id })
      .$promise;
  };

  return {
    get
  };
}

export default CategoriesService;
