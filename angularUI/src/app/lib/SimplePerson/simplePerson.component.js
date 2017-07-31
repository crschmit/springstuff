import 'SimplePerson/simplePerson.styles'
import templateUrl from 'SimplePerson/simplePerson.template'

const controller = class SimplePersonController {

  constructor ($log) {
    'ngInject'
    $log.log('simple-person...')
  }

}

export const simplePerson = {
  controller,
  templateUrl,
  controllerAs: 'simplePerson'
}
