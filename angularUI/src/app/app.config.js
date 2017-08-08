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

    // $stateProvider.state({
    //   name: 'simplePerson',
    //   url: '/{givenName}/{familyName}',
    //   component: 'simplePerson',
    //   resolve: {
    //     givenName: ($transition$) => {
    //       return $transition$.params().givenName
    //     },
    //     familyName: ($transition$) => {
    //       return $transition$.params().familyName
    //     }
    //   }
    // })

    $stateProvider
      .state({
        name: 'myApp',
        url: '/myapp',
        abstract: true
      })
      .state({
        name: 'myApp.acity',
        url: '/{cityName}',
        component: 'simpleCity',
        resolve: {
          cityName: ($transition$) => {
            return $transition$.params().cityName
          }
        }
      })
      .state({
        name: 'myApp.aperson',
        url: '/{givenName}/{familyName}',
        component: 'simplePerson',
        resolve: {
          givenName: ($transition$) => {
            return $transition$.params().givenName
          },
          familyName: ($transition$) => {
            return $transition$.params().familyName
          }
        }
      })
  }
