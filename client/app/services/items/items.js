import angular from 'angular';
import service from './items.service';
import TransformItemResponse from './transformItemResponse';

export default angular
.module('app.services.items', [])
.service('ItemsService', service)
.service('TransformItemResponse', TransformItemResponse)
  .name;
