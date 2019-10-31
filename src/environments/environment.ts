// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDqFQaz_nmHA6YWMFu9q1Rhfve_-4zaOj4',
    authDomain: 'movies-88e19.firebaseapp.com',
    databaseURL: 'https://movies-88e19.firebaseio.com',
    projectId: 'movies-88e19',
    storageBucket: 'movies-88e19.appspot.com',
    messagingSenderId: '448582314568',
    appId: '1:448582314568:web:cc5924c4c8766cd7c3067d',
    measurementId: 'G-LWNTBPKQ45'
  },
  movieDbApi: {
    apiKey: '85d084a1dd84fdc10a7d9eb41f92493d',
    apiUrl: 'https://api.themoviedb.org/3/movie',
    imageUrl: 'https://image.tmdb.org/t/p/w500',
    personUrl: 'https://api.themoviedb.org/3/person'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
