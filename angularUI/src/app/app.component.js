import 'app/app.styles'
import templateUrl from 'app/app.template'

const controller = class MyAppController {
  constructor ($log, $state, localStorageService) {
    'ngInject'
    $log.log('my-app...')
  }
}

export const myApp = {
  controller,
  templateUrl,
  controllerAs: 'app'
}
