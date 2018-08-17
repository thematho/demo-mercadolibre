function ItemDetailsController($stateParams, ItemsService, CategoriesService) {
  'ngInject';

  let $ctrl = this;

  let getCategoriesPath = (categoryId) => {
    CategoriesService.get(categoryId)
      .then((response) => {
        this.categories = response;
      });
  };

  this.getConditionText = () => {
    if (this.item) {
      let condition = this.item.condition === 'new' ? 'Nuevo' : 'Usado';
      return `${condition} - ${this.item.sold_quantity} Vendidos`;
    }
    return '';
  };

  $ctrl.$onInit = () => {
    this.categories = $stateParams.categories;
    ItemsService.get($stateParams.id)
      .then((response) => {
        this.item = response.item;
      })
      .then(() => {
        if (!$stateParams.categories) {
          getCategoriesPath(this.item.category_id);
        }
      });
  };
}

export default ItemDetailsController;
