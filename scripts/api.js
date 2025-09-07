// Responsible for reading the provided data structures and exposing query helpers.
import { podcasts, genres, seasons } from "../data.js";

export function getAllPodcasts(podcasts) {
  return podcasts || [];
}


export function getAllGenres() {
  return genres.map(g => ({ ...g }));
}

export function getSeasonsByPodcastId(id) {
  const entry = seasons.find(s => s.id === id);
  return entry ? entry.seasonDetails.map(s => ({ ...s })) : [];
}

export function getGenreById(id) {
  return genres.find(g => g.id === id) || null;
}

export function getPodcastById(id) {
  return podcasts.find(p => p.id === id) || null;
}
