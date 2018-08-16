import angular from 'angular';
import categoriesServiceModule from './categories/categories';
import itemsServiceModule from './items/items';

let serviceModule = angular.module('app.services', [
    categoriesServiceModule,
    itemsServiceModule,
])

.name;

export default serviceModule;
