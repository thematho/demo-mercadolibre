function ItemsService($resource) {
  'ngInject';

  this.itemsAPI = $resource('http://localhost:8080/api/items/:id', {}, {
    get: {
      method: 'GET'
    },
    query: {
      method: 'GET'
    }
  });

  let search = (searchParams) => {
    return this.itemsAPI  
      .query({ search: searchParams })
      .$promise;
  };
  let get = (id) => {
    return this.itemsAPI
      .get({ id: id })
      .$promise;
  };

  return {
    search,
    get
  };
}

export default ItemsService;
