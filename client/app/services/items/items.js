import angular from 'angular';
import service from './items.service';

export default angular
  .module('app.services.items', [])
  .service('ItemsService', service)
  .name;
