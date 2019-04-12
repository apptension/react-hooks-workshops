import { sortWith, prop, ascend, descend } from 'ramda';

export const formatDate = input => {
  const date = new Date(input);
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
};

export const getSortedData = (data, hasAscOrder) => {
  const comparator = hasAscOrder ? ascend : descend;
  return sortWith([comparator(prop('created'))])(data);
};
