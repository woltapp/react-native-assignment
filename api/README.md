# Shift booking mock API

## Shift data model

* `id`: UUID, a unique identifier
* `area`: String, an identifier for an area, one of: 'Helsinki', 'Tampere', 'Turku'
* `booked`: Boolean, true if booked, false if not booked
* `startTime`: Int, Unix epoch timestamp, the starting time for the shift
* `endTime`: Int, Unix epoch timestamp, the ending time for the shift

## End-points

All end-points implement parameter validation and error handling.

### `GET /shifts`

> Returns all shifts

Example:

`GET /shifts`

```json
[
  {
    "id": "95a2aaca-bab8-4504-8646-f75b325ec0e7",
    "booked": false,
    "area": "Helsinki",
    "startTime": 1523610000000,
    "endTime": 1523617200000
  },
  {
    "id": "001e40e5-05dc-4b9d-bdc5-cae63f651970",
    "booked": true,
    "area": "Tampere",
    "startTime": 1523602800000,
    "endTime": 1523610000000
  }
]
```

### `GET /shifts/{id}`

> Returns a single shift by ID

Example:

`GET /shifts/95a2aaca-bab8-4504-8646-f75b325ec0e7`

```json
{
  "id": "95a2aaca-bab8-4504-8646-f75b325ec0e7",
  "booked": false,
  "area": "Helsinki",
  "startTime": 1523610000000,
  "endTime": 1523617200000
}
```

### `POST /shifts/{id}/book`

> Books a shift by ID

__Notes__:
* Already booked shifts cannot be booked
* Already started shifts cannot be booked
* Shifts with overlapping times cannot be booked

Example:

`POST /shifts/95a2aaca-bab8-4504-8646-f75b325ec0e7/book`

```json
{
  "id": "95a2aaca-bab8-4504-8646-f75b325ec0e7",
  "booked": true,
  "area": "Helsinki",
  "startTime": 1523610000000,
  "endTime": 1523617200000
}
```

### `POST /shifts/{id}/cancel`

> Cancels a shift by ID

__Notes__:
* Already cancelled/non-booked shifts cannot be cancelled

Example:

`POST /shifts/95a2aaca-bab8-4504-8646-f75b325ec0e7/cancel`

```json
{
  "id": "95a2aaca-bab8-4504-8646-f75b325ec0e7",
  "booked": false,
  "area": "Helsinki",
  "startTime": 1523610000000,
  "endTime": 1523617200000
}
```

---

Bugs in the API? Please report any bugs with a GitHub issue.
