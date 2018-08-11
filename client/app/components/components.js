import angular from 'angular';
import ItemDetailsModule from './item-details/item-details';
import SearchModule from './search/search';
import SearchResultModule from './search-result/search-result';

let componentModule = angular.module('app.components', [
  SearchModule,
  SearchResultModule,
  ItemDetailsModule,
])

.name;

export default componentModule;
