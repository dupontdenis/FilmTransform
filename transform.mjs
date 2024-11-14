// FILE: transform.mjs
import { films } from './dataFilms.mjs';

// Example transformation: Add a new field 'rating' to each film
const transformedFilms = films.map(film => ({
    ...film,
    rating: Math.floor(Math.random() * 5) + 1 // Random rating between 1 and 5
}));

export { transformedFilms };