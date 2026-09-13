# CineNova Movie Ticket Booking System

CineNova is a browser-based movie ticket booking application built with HTML, CSS, and vanilla JavaScript. Users can browse movies, filter by genre, view movie details, choose a theatre and show time, select seats, and receive a booking confirmation. Administrators can manage movies, theatres, and bookings from the admin dashboard.

## Features

### Customer experience

- Cinematic homepage with a hero movie slider.
- Movie poster cards for Now Showing and Coming Soon titles.
- Search movies by title or genre.
- Filter movies by genre.
- View movie posters, banners, synopsis, cast, rating, language, and duration.
- Choose a theatre, date, and show time.
- Select available seats from a visual seat map.
- Review booking details before confirmation.
- View saved bookings from My Bookings.
- Responsive layout for desktop and mobile screens.

### Authentication

- User registration and login pages.
- Current user session stored in browser local storage.
- Logout support.
- Admin-only dashboard access.

### Admin dashboard

- View all movies in a management table.
- Add new movies with poster and banner URLs.
- Edit existing movie details.
- Delete movies from the catalog.
- View all bookings.
- View configured theatres.

## Technology Stack

- HTML5 for page structure.
- CSS3 for layout, responsive design, animations, theme, cards, forms, and booking UI.
- Vanilla JavaScript for application logic and page interactions.
- Browser `localStorage` for movies, users, theatres, bookings, and seat maps.
- Browser `sessionStorage` for the active booking flow.
- External image URLs for movie posters and banners.
- Google Fonts: Inter and Bebas Neue.

No backend server or database is required for the current demo implementation.

## Project Structure

```text
Movie_ticket_booking_system/
|
|-- index.html                  # Homepage, hero slider, search, filters, movie grids
|-- login.html                  # User login page
|-- register.html               # New user registration page
|-- movie-details.html          # Movie information and booking form
|-- seat-selection.html         # Seat selection workflow
|-- booking-summary.html        # Booking review page
|-- booking-confirmation.html   # Final booking confirmation
|-- my-bookings.html            # Current user's booking history
|-- admin-dashboard.html        # Admin movie, booking, and theatre management
|
|-- css/
|   `-- style.css               # Shared theme and responsive styles
|
|-- js/
|   |-- data.js                 # Seed movies, theatres, shows, and initial users
|   `-- app.js                  # Shared utility functions and navigation helpers
|
`-- README.md                   # Project documentation
```

## Getting Started

### Requirements

- A modern web browser such as Chrome, Edge, Firefox, or Safari.
- Optional: a local static file server for the best browser experience.
- Internet access is recommended because posters, banners, and Google Fonts use external URLs.

### Run directly

Open `index.html` in a browser.

### Run with a local server

From the project folder, run one of these commands:

```bash
# Python
python -m http.server 5500
```

Then open:

```text
http://localhost:5500/index.html
```

If Python is not installed, the project can also be opened with the VS Code Live Server extension or another static HTTP server.

## Demo Accounts

The application seeds an administrator account on first load:

```text
Email: admin@cinenova.com
Password: admin
```

Users can create additional accounts from the registration page. This authentication is for demonstration purposes only and is stored in browser local storage, so it is not suitable for production security.

## Booking Flow

1. Open the homepage.
2. Select a movie from Now Showing.
3. Click Book Now or Book Tickets.
4. Select a theatre, date, and show time.
5. Continue to seat selection.
6. Choose available seats.
7. Review the booking summary.
8. Confirm the booking.
9. Open My Bookings to see saved booking details.

The booking flow stores temporary booking information in `sessionStorage` and finalized bookings in `localStorage`.

## Movie Data

Movie seed data is defined in `js/data.js` inside the `mockMovies` array. Each movie includes:

```javascript
{
  id: 'm1',
  title: 'Movie title',
  poster: 'poster-image-url',
  banner: 'banner-image-url',
  genre: 'Action, Thriller',
  duration: '2h 15m',
  language: 'English',
  rating: '8.6',
  status: 'now_showing',
  synopsis: 'Movie description',
  cast: 'Cast names'
}
```

Valid movie status values are:

- `now_showing`
- `upcoming`

`data.js` refreshes the movie and theatre seed data whenever it loads. Changes made from the admin dashboard are therefore intended for the current browser session/demo and may be replaced when the seed script runs again.

## Local Storage Keys

The application uses these browser storage keys:

| Key | Purpose |
| --- | --- |
| `movies` | Current movie catalog |
| `theatres` | Theatre list |
| `shows` | Available show times |
| `users` | Registered users and the default admin account |
| `currentUser` | Current login session |
| `bookings` | Confirmed bookings |
| `seatMaps` | Seat availability data |
| `currentBooking` | Temporary booking selection between pages |

To reset the demo data, open the browser developer console and run:

```javascript
localStorage.clear();
sessionStorage.clear();
location.reload();
```

## Admin Movie Management

1. Log in with the demo administrator account.
2. Open Admin from the navigation bar.
3. Use Manage Movies to view the catalog.
4. Select Add Movie to create a movie.
5. Enter the title, genre, duration, language, rating, poster URL, banner URL, synopsis, cast, and status.
6. Use Edit or Delete to update the catalog.

Poster and banner URLs must point to accessible image files. The homepage uses the poster for cards and the banner for hero/detail backgrounds.

## Design Notes

- The interface uses a dark cinema-inspired theme with red primary actions, warm gold ratings, and teal glass-like surfaces.
- The homepage hero uses the movie banner images and rotates through currently showing movies.
- The shared stylesheet in `css/style.css` controls the visual design across all pages.
- The layout uses responsive grid and flexbox rules for smaller screens.

## Important Limitations

This is a frontend demonstration project. It does not currently include:

- A real backend API.
- A production database.
- Secure password hashing.
- Server-side authentication or authorization.
- Payment gateway integration.
- Email or SMS booking notifications.
- Real-time seat locking across multiple users.
- Persistent cloud storage.

For production use, authentication, payments, booking validation, and seat availability should be moved to a secure backend service.

## GitHub Repository

The project is published at:

<https://github.com/PranaliPujari/Movie_ticket-Booking_system>

The default branch is `main`.

## License

This project is provided as an educational software engineering project. Movie images and external assets remain subject to their respective owners' terms of use.
