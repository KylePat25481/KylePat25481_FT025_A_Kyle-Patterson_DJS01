/**
 * main.js
 * Wires up Podcast App functionality
 */

import { filterByGenre, filterByQuery, sortItems } from "./filters.js";
import { state, subscribe } from "./state.js";
import { renderGrid, renderStats, renderDetails } from "./render.js";
import { podcasts } from "../data.js";

/* DOM references */
const searchBtn = document.getElementById("searchBtn");
const genreSelectEl = document.getElementById("genre");
const sortEl = document.getElementById("sort");
const gridEl = document.getElementById("grid");
const statsEl = document.getElementById("stats");
const dialog = document.getElementById("detailsDialog");
const detailsBody = document.getElementById("detailsBody");
const closeDetailsBtn = document.getElementById("closeDetails");

/* Search button → prompt */
searchBtn.addEventListener("click", () => {
  const query = prompt("Enter podcast name to search:");
  if (query !== null) {
    state.set({ query });
  }
});

/* Dropdowns */
genreSelectEl.addEventListener("change", (e) => {
  state.set({ genre: e.target.value });
});

sortEl.addEventListener("change", (e) => {
  state.set({ sort: e.target.value });
});

/* Render */
function computeAndRender() {
  let list = filterByGenre(podcasts, state.genre);
  list = filterByQuery(list, state.query || "");
  list = sortItems(list, state.sort || "updated_desc");

  renderGrid(gridEl, list, openDetailsForId);
  renderStats(statsEl, list.length);
}

/* Modal open */
function openDetailsForId(id) {
  renderDetails(detailsBody, id, podcasts);

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.style.display = "block";
  }
}

/* Modal close */
function closeDetails() {
  if (typeof dialog.close === "function") dialog.close();
  else dialog.style.display = "none";
}
closeDetailsBtn.addEventListener("click", closeDetails);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (dialog.open || dialog.style.display === "block") closeDetails();
  }
});

/* Subscribe + initial render */
subscribe(() => computeAndRender());
computeAndRender();
