import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import component from './search-result.component';
import itemsServiceModule from '../../services/items/items';

export default angular
  .module('ng6Starter.searchResult', [
    uiRouter,
    itemsServiceModule
  ])
  .component('searchResult', component)
  .name;
