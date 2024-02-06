export default [
  {
    method: 'GET',
    path: '/prev-next/:uid/:id',
    handler: 'prevNext.items',
    config: {
      policies: [],
      auth: false,
    },
  },
];
