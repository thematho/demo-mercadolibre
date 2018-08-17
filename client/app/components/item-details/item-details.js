import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import component from './item-details.component';
import itemsServiceModule from '../../services/items/items';
import categoriesPath from './../../common/components/categories-path/categories-path';

export default angular
  .module('app.itemDetails', [
    uiRouter,
    itemsServiceModule,
    categoriesPath,
  ])
  .component('itemDetails', component)
  .name;
