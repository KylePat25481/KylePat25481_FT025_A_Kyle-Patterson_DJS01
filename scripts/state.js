/**
 * state.js
 * Simple reactive state manager
 */

export const state = {
  genre: "",
  query: "",
  sort: "updated_desc",
};

/* List of subscribers (functions to call on update) */
let listeners = [];

/**
 * Subscribe to state changes
 * @param {Function} fn - callback function
 */
export function subscribe(fn) {
  listeners.push(fn);
}

/**
 * Update state and notify subscribers
 * @param {Object} patch - partial state
 */
export function set(newValues) {
  Object.assign(state, newValues);
  listeners.forEach((fn) => fn(state));
}

/* Expose a consistent interface */
export const StateAPI = {
  state,
  set,
  subscribe,
};
