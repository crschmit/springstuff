import ngLocalStorage from 'angular-local-storage'
import ngUiRouter from 'angular-ui-router'

import LibModule from 'lib.module'
import SrcModule from 'src.module'

import { myApp } from 'app/app.component'
import { config } from 'app/app.config'
import { run } from 'app/app.run'

export default ng
  .module('my.app', [
    ngLocalStorage,
    ngUiRouter,
    LibModule,
    SrcModule
  ])
  .component('myApp', myApp)
  .config(config)
  .run(run)
  .name
