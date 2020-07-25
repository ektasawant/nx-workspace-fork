module.exports = {
  name: 'products-index-page',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/products/index-page',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
