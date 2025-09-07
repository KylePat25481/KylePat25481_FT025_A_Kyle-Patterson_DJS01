/**
 * render.js
 * Handles rendering podcasts and modal
 */

export function renderGrid(container, list, onClick) {
  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML = `<p class="no-results">No podcasts found.</p>`;
    return;
  }

  list.forEach((podcast) => {
    const card = document.createElement("div");
    card.className = "podcast-card";

    card.innerHTML = `
      <img src="${podcast.image}" alt="${podcast.title}" />
      <div class="card-body">
        <h3>${podcast.title}</h3>
        <p>${podcast.description || "No description available."}</p>
        <p class="date">Last updated: ${new Date(
          podcast.updated
        ).toLocaleDateString()}</p>
      </div>
    `;

    card.addEventListener("click", () => onClick(podcast.id));
    container.appendChild(card);
  });
}

export function renderStats(el, count) {
  el.textContent = `${count} podcast${count !== 1 ? "s" : ""} available`;
}

export function renderDetails(container, id, data) {
  const podcast = data.find((p) => p.id === id);
  if (!podcast) {
    container.innerHTML = "<p>Podcast not found.</p>";
    return;
  }

  container.innerHTML = `
    <img src="${podcast.image}" alt="${podcast.title}" />
    <h2>${podcast.title}</h2>
    <p>${podcast.description || "No description available."}</p>
    <p class="date">Last updated: ${new Date(
      podcast.updated
    ).toLocaleDateString()}</p>
    <h3>Seasons</h3>
    <ul>
      ${
        podcast.seasons && podcast.seasons.length
          ? podcast.seasons
              .map(
                (s) =>
                  `<li>${s.title} — ${s.episodes} episode${
                    s.episodes !== 1 ? "s" : ""
                  }</li>`
              )
              .join("")
          : "<li>No season data available.</li>"
      }
    </ul>
  `;
}

