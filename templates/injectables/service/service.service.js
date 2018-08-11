function {{ properCase name }}Service($http) {
    'ngInject';

  this.name = '{{ properCase name }}Service';

  let getName = () => {
    return this.name;
  }
  let getItems = () => {
    return $http({
      method: 'GET', url: '/services/items' }
    );
  }

  return {
    getName,
    getItems
  };
}

export default {{ properCase name }}Service;
