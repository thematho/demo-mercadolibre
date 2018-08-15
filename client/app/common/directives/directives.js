import angular from 'angular';
import onEnter from './on-enter/on-enter';
import divider from './divider/divider';

let directivesModule = angular.module('app.common.directives', [
    onEnter,
    divider,
])
    .name;

export default directivesModule;
