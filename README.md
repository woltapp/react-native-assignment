# React Native assignment

> Shift booking application

Implement a shift booking application with React Native and utilize the provided mock API.
See __[documentation](api/README.md)__ for the API.

The application must implement at least the following views:

* __My shifts__ (booked shifts)
  * filter/select/group by area
  * filter/select/group by date
  * cancel shifts
* __Shifts__ (all shifts)
  * filter/select/group by area
  * filter/select/group by date
  * book cancelled/non-booked shifts

Shifts must be bookable and cancellable according to the API documentation.

In addition, the following optional view can be implemented:

* __Overview__
  * amount of booked shifts
  * amount of bookable and available shifts
  * amounts grouped by areas

UI/UX considerations:

* the design is up to the assignee and is part of the assignment
* we expect the UI to follow good UX patterns
* impress us with good visual style and animations

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
