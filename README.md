# React Native assignment

> Shift booking application

Implement a shift booking application with React Native and utilize the provided mock API.
See __[documentation](api/README.md)__ for the API.

The application must implement the following views according the [design spec](./design-spec.pdf):

* __My shifts__
  * lists all booked shifts
  * shifts are grouped by dates
  * shifts can be cancelled
* __Available shifts__
  * filter shifts by the city
  * shifts are grouped by dates
  * shifts can be booked or cancelled

Relevant assets can be found in [`./assets`](./assets).

Considerations:

* we expect clean and robust state management
* we do not expect you to use a lot of time for the setup - you may use a starter repo
* the UI design is a reference and 1:1 implementation is not absolutely necessary
* creative skills can be used to improve the design

Submission:

* the API is not required to be included in the answer, but can be
* include instructions how to run the app
* 3rd party libraries may be used

## Mock API run instructions

Requirements:

* Node.js (recommended v. >=9)
* NPM v. >=5

```bash
npm install
npm start
```

API server runs at `localhost:8080`
