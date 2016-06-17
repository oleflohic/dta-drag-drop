export function DtaDropDirective () {
  return {
    scope: {
      dtaDrop: '&'
    },
    restrict: 'A',
    link: function (scope, element, attrs) {
      element[0].addEventListener('dragover', evt => {
        evt.preventDefault()
      }, false)
      element.on('drop', evt => {
        evt.preventDefault()
        scope.$apply(function () {
          scope.dtaDrop()
        })
      })
    }
  }
}
