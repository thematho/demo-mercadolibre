export default (/* injections*/) => {
  'ngInject';

  let name = '{{ properCase name }}Service',
    getName = function () {
      return name;
    };

  return {
    getName
  };
};
