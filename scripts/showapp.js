/**
 * @file showApp.js
 * Main application logic for rendering shows
 */

/**
 * @class Show
 * Represents a show/podcast
 */
class Show {
  constructor({ title, genres = [], seasons = 0, lastUpdated = '', description = '' }) {
    this.title = title;
    this.genres = genres;
    this.seasons = seasons;
    this.lastUpdated = lastUpdated;
    this.description = description;
  }

  getFormattedLastUpdated() {
    return Utils.formatDate(this.lastUpdated);
  }

  getGenreList() {
    return this.genres.length ? this.genres.join(', ') : 'N/A';
  }
}

/**
 * @class ShowCardRenderer
 * Handles rendering show cards and modal interactions
 */
class ShowCardRenderer {
  constructor(container) {
    this.container = container;
  }

  render(show) {
    const card = document.createElement('div');
    card.className = 'show-card';

    const title = document.createElement('h3');
    title.textContent = show.title;
    card.appendChild(title);

    card.appendChild(Utils.createParagraph(`Genres: ${show.getGenreList()}`));
    card.appendChild(Utils.createParagraph(`Seasons: ${show.seasons || 'N/A'}`));
    card.appendChild(Utils.createParagraph(`Last Updated: ${show.getFormattedLastUpdated()}`));
    card.appendChild(Utils.createParagraph(show.description || 'No description available'));

    card.addEventListener('click', () => this.openShowModal(show));

    this.container.appendChild(card);
  }

  renderAll(shows) {
    shows.forEach((show) => this.render(show));
  }

  openShowModal(show) {
    const modalContent = document.createElement('div');
    modalContent.appendChild(Utils.createParagraph(`Title: ${show.title}`));
    modalContent.appendChild(Utils.createParagraph(`Genres: ${show.getGenreList()}`));
    modalContent.appendChild(Utils.createParagraph(`Seasons: ${show.seasons || 'N/A'}`));
    modalContent.appendChild(Utils.createParagraph(`Last Updated: ${show.getFormattedLastUpdated()}`));
    modalContent.appendChild(Utils.createParagraph(`Description: ${show.description || 'No description available'}`));

    ModalManager.openModal(modalContent);
  }
}

// ----------------------
// Initialize App
// ----------------------
const showsData = [
  {
    title: 'Mystery Series',
    genres: ['Drama', 'Mystery'],
    seasons: 3,
    lastUpdated: '2025-09-01T12:00:00Z',
    description: 'An exciting series full of drama and mystery.'
  },
  {
    title: 'Science Talk',
    genres: ['Science', 'Education'],
    seasons: 5,
    lastUpdated: '2025-08-20T10:30:00Z',
    description: 'Discussing latest scientific discoveries and topics.'
  }
];

const shows = showsData.map(data => new Show(data));
const container = document.getElementById('shows-container');
const renderer = new ShowCardRenderer(container);
renderer.renderAll(shows);
