import 'app/app.styles'
import templateUrl from 'app/app.template'

const controller = class MyAppController {
  constructor ($log, $state, localStorageService) {
    'ngInject'
    $log.log('my-app...')

    this.aCityName = "King's Landing"
    this.aPersonGivenName = "Arya"
    this.aPersonFamilyName = "Stark"
  }
}

export const myApp = {
  controller,
  templateUrl,
  controllerAs: 'app'
}
