import angular from 'angular';
import service from './items.service';

export default angular
  .module('ng6Starter.items', [])
  .service('ItemsService', service)
  .name;
