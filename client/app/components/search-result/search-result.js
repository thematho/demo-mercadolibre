import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import component from './search-result.component';
import resultItemModule from './result-item/result-item';
import itemsServiceModule from '../../services/items/items';
import categoriesServiceModule from '../../services/categories/categories';
import categoriesPath from './../../common/components/categories-path/categories-path';
import divider from './../../common/components/divider/divider';

export default angular
  .module('app.searchResult', [
    uiRouter,
    categoriesPath,
    divider,
    resultItemModule,
    itemsServiceModule,
    categoriesServiceModule,
  ])
  .component('searchResult', component)
  .name;
