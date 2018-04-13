# React Native assignment

> Shift booking application

Implement a shift booking application with React Native and utilize the provided mock API.
See __[documentation](api/README.md)__ for the API.

The application must implement at least the following views:

* Overview
  * amount of booked shifts
  * amount of bookable and available shifts
  * amounts grouped by areas
* My shifts (booked shifts)
  * filter/select/group by area
  * filter/select/group by date
  * cancel shifts
* Shifts list
  * filter/select/group by area
  * filter/select/group by date
  * book cancelled/non-booked shifts

Shifts must be bookable and cancellable according to the API documentation.

Other considerations:

* the API is not required to be included in the answer, but can be
* include instructions how to run the app
* 3rd party libraries may be used; include short explanation why they are used


## Mock API run instructions

Requirements:

* Node.js (recommended v. >=9)
* NPM v. >=5

```bash
npm install
npm start
```

API server runs at `localhost:8080`
