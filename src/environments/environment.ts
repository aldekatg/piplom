// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBX-g-QdUVK-Q-QiqutixvI1Ee8aHsXV0s',
    authDomain: 'piplom-a951a.firebaseapp.com',
    databaseURL: 'https://piplom-a951a.firebaseio.com',
    projectId: 'piplom-a951a',
    storageBucket: 'piplom-a951a.appspot.com',
    messagingSenderId: '550188338493',
    appId: '1:550188338493:web:19b2ef7d6f1fcd0004c954',
    measurementId: 'G-D3WTSS85NY',
  },
  database: 'firebase',
  socialAuthEnabled: true,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
