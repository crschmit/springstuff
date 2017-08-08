import 'SimpleCity/simpleCity.styles'
import templateUrl from 'SimpleCity/simpleCity.template'

const controller = class SimpleCityController {

  constructor ($log) {
    'ngInject'
    $log.log('simple-city...')
  }

}

export const simpleCity = {
  controller,
  templateUrl,
  controllerAs: 'simpleCity',
  bindings: {
    cityName: '<'
  }
}
