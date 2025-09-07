/**
 * filters.js
 * Functions for filtering and sorting podcasts
 */

/**
 * Filter by genre
 * @param {Array} list - podcasts array
 * @param {string} genre - selected genre
 * @returns {Array} filtered list
 */
export function filterByGenre(list, genre) {
  if (!genre) return list;
  return list.filter((p) => p.genres && p.genres.includes(genre));
}

/**
 * Filter by search query
 * @param {Array} list - podcasts array
 * @param {string} query - search string
 * @returns {Array} filtered list
 */
export function filterByQuery(list, query) {
  if (!query) return list;
  const lower = query.toLowerCase();
  return list.filter(
    (p) =>
      p.title.toLowerCase().includes(lower) ||
      (p.description && p.description.toLowerCase().includes(lower))
  );
}

/**
 * Sort items
 * @param {Array} list - podcasts array
 * @param {string} sortBy - selected sort option
 * @returns {Array} sorted list
 */
export function sortItems(list, sortBy) {
  const copy = [...list];

  switch (sortBy) {
    case "title_asc":
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    case "updated_desc":
    default:
      return copy.sort((a, b) => new Date(b.updated) - new Date(a.updated));
  }
}
