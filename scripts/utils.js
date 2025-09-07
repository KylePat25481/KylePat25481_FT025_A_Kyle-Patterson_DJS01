export function formatUpdated(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

export function pluralize(word, count) {
  return `${count} ${count === 1 ? word : word + "s"}`;
}
