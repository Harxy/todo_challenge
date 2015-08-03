var todoApp = angular.module('TodoApp', ['xeditable']);

todoApp.run(function(editableOptions) {
  editableOptions.theme = 'bs1';
});
