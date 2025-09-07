// Render podcast cards (grid view)
export function renderGrid(podcasts, container, openModalCallback) {
  container.innerHTML = "";
    const card = document.createElement("div");
    card.classList.add("podcast-card");
    card.innerHTML = `
      <div class="podcast-cover"></div>
      <h3 class="podcast-title">${podcasts.title}</h3>
      <p class="podcast-seasons">${podcasts.seasons} Seasons</p>
      <div class="genre-tags">
        ${podcasts.genres.map((g) => `<span>${g}</span>`).join("")}
      </div>
      <small class="updated">Updated ${podcasts.updated}</small>
    `;
    card.addEventListener("click", () => openModalCallback(podcasts));
    container.appendChild(card);
  }

// Render modal window details
export function renderDetails(podcasts, modal) {
  modal.querySelector(".modal-title").textContent = podcasts.title;
  modal.querySelector(".modal-description").textContent = podcasts.description;
  modal.querySelector(".modal-genres").innerHTML = podcasts.genres
    .map((g) => `<span>${g}</span>`)
    .join("");
  modal.querySelector(".modal-updated").textContent = `Last updated: ${podcasts.updated}`;

  modal.querySelector(".modal-seasons").innerHTML = podcasts.seasonDetails
    ? podcasts.seasonDetails
        .map(
          (s, i) => `
        <div class="season">
          <div>
            <strong>Season ${i + 1}: ${s.title}</strong><br>
            <small>${s.description}</small>
          </div>
          <span>${s.episodes} episodes</span>
        </div>
      `
        )
        .join("")
    : "";
}
