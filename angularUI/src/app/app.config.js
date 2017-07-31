export const config =
  ($stateProvider,
   $logProvider,
   $locationProvider,
   $urlRouterProvider,
   localStorageServiceProvider) => {

    'ngInject'

    $logProvider.debugEnabled(true)
    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/')

    localStorageServiceProvider
      .setPrefix('myApp')

    $stateProvider.state({
      name: 'simplePerson',
      url: '/',
      component: 'simplePerson',
      resolve: {

      }
    })
  }
