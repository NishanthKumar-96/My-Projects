module.exports = {
  name: 'myauthapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/myauthapp',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
