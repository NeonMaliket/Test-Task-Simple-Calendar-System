# Simple Calendar System

A web-based calendar application that allows users to manage events. Users can create, update, delete, and view events. The system supports time zone-aware timestamps and displays them in the user's local time.

## Run with Docker

```bash
docker-compose up --build
```
## Tech Stack

### Backend
- Java 17
- Spring Boot
- Maven
- MySQL
- Flyway
- Docker

### Frontend
- React 18
- TypeScript
- React Router
- FullCalendar
- Day.js
- Material UI

## Features

- Monthly calendar view with events
- Add new events (Title, Description, Location, Start/End DateTime)
- Edit and delete events
- Date/time validation (end must be after start)
- Local time zone support for input and display

## API Endpoints

| Method | Endpoint       | Description                |
|--------|----------------|----------------------------|
| GET    | `/events`      | Retrieve all events        |
| GET    | `/events/{id}` | Retrieve a specific event  |
| POST   | `/events`      | Create a new event         |
| PUT    | `/events/{id}` | Update an existing event   |
| DELETE | `/events/{id}` | Delete an event            |
