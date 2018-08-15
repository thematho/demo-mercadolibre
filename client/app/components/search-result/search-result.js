import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import component from './search-result.component';
import resultItemModule from './result-item/result-item';
import itemsServiceModule from '../../services/items/items';
import divider from './../../common/components/divider/divider';

export default angular
  .module('app.searchResult', [
    uiRouter,
    divider,
    resultItemModule,
    itemsServiceModule
  ])
  .component('searchResult', component)
  .name;
