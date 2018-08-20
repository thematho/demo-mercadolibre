import angular from 'angular';

// @see: https://docs.angularjs.org/guide/production
// for more details about produciton performance improvements

let app = angular.module('app'),
  ProductionConfigModule = angular.module('app.productionConfig', [])
    .config(function ($compileProvider) {
      'ngInject';
      $compileProvider.debugInfoEnabled(false);
    })
    .name;

app.requires.push(ProductionConfigModule);

export default ProductionConfigModule;
