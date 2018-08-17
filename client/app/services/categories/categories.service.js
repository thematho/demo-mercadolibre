function CategoriesService($resource) {
  'ngInject';

  this.categoriesAPI = $resource('/api/categories/:id', { }, {
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
