/**
 * @module Utils
 * Reusable helper functions
 */
const Utils = (() => {
  /**
   * Creates a paragraph element with provided text
   * @param {string} text
   * @returns {HTMLParagraphElement}
   */
  const createParagraph = (text) => {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
  };

  /**
   * Formats ISO date to human-readable string
   * @param {string} isoDate
   * @returns {string}
   */
  const formatDate = (isoDate) => {
    if (!isoDate) return 'N/A';
    const date = new Date(isoDate);
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return { createParagraph, formatDate };
})();
