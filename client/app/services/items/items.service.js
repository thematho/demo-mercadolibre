function ItemsService($resource, $http, TransformItemResponse) {
  'ngInject';

  this.itemsAPI = $resource('/api/items/:id', {}, {
    get: {
      method: 'GET',
      transformResponse: $http.defaults.transformResponse.concat(TransformItemResponse)
    },
    getDescription: {
      url: '/api/items/:id/description',
      method: 'GET'
    },
    query: {
      method: 'GET'
    }
  });

  let search = (searchParam) => {
    return this.itemsAPI
      .query({ q: searchParam })
      .$promise;
  },
    get = (id) => {
      return this.itemsAPI
        .get({ id: id })
        .$promise;
    },
    getDescription = (id) => {
      return this.itemsAPI
        .getDescription({ id: id })
        .$promise;
    };

  return {
    search,
    get,
    getDescription
  };
}

export default ItemsService;
