Package.describe({
  name: 'gravitum:popup-views',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Easily manage popups (especially bootstrap modals)',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/gravitum/meteor-popup-views',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles('modal.js', 'client');
  api.addFiles('popups.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('gravitum:popup-views');
  api.addFiles('popups-tests.js');
});
