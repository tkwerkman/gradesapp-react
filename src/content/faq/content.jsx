import React from 'react';

const offSetLengths = [
  { name: 'Scraper', standard: '5', minimum: '3', maximum: '10' },
  { name: 'Dozer', standard: '3', minimum: '2', maximum: '6' },
  { name: 'Grader', standard: '3', minimum: '1', maximum: '5' },
  { name: 'Excavator', standard: '5', minimum: '1', maximum: '10' },
];

const minimumSafeDistances = [
  { name: 'Scraper', empty: '5', loaded: '10' },
  { name: 'Rock Truck', empty: '5', loaded: '10' },
  { name: 'Excavator', empty: '10', loaded: '15' },
  { name: 'Dozer', empty: '3', loaded: 'NA' },
  { name: 'Grader', empty: '3', loaded: 'NA' },
];

const copy = {
  offSetLengths:
    'Often, grades personnel will  have to decide how far to offset sticks without direction from supervisors or operators. The table below can assist you with this as you start offsetting sticks around site, but should not be taken as absolute gospel. Remember to listen to operators and supervisors over this reference guide.',
  minimumSafeDistances:
    "Use the table below as a reference guide for the approximate distance to stay away from equipment while on site. As always, if you don't feel safe with the situation you're in, retreat to a distance at which you feel safe - this table is only for reference.",
};

export default function faqInfo() {
  return {
    lengths: offSetLengths,
    distances: minimumSafeDistances,
    copy: copy,
  };
}
