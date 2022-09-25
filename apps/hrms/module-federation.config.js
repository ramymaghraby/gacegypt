module.exports = {
  name: 'hrms',
  exposes: {
    './Module': 'apps/hrms/src/app/remote-entry/entry.module.ts',
  },
};
