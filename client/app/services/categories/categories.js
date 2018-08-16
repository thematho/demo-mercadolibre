import angular from 'angular';
import service from './categories.service';

export default angular
  .module('ng6Starter.categories', [])
  .service('CategoriesService', service)
  .name;
