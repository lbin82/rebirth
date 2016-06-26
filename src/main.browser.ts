import {DIRECTIVES, PIPES, PROVIDERS} from './platform/browser';
import {ENV_PROVIDERS, decorateComponentRef} from './platform/environment';
import {App, APP_PROVIDERS} from './app';

import './icon.font.json';

import {bootstrap, bootstrapWorkerUi} from '@angular/platform-browser-dynamic';


// platform([WORKER_APP_PLATFORM]).application([WORKER_APP_APPLICATION]).bootstrap

export function main():Promise<any> {

  return bootstrap(App, [
    ...PROVIDERS,
    ...ENV_PROVIDERS,
    ...DIRECTIVES,
    ...PIPES,
    ...APP_PROVIDERS
  ])
    .then(decorateComponentRef)
    .catch(err => console.error(err));

}

// bootstrap when document is ready
document.addEventListener('DOMContentLoaded', () => main());

