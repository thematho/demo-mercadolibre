function transformItemResponse() {
  'ngInject';

  let transformResponse = (data) => {
    data.item.description = data.item.description.split('\n');
    return data;
  };

  return transformResponse;
}

export default transformItemResponse;
