import angular from 'angular';
import itemsServiceModule from './items/items';

let serviceModule = angular.module('app.services', [
    itemsServiceModule
])

.name;

export default serviceModule;
