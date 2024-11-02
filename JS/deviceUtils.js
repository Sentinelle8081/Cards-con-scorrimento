// deviceUtils.js
export const isMobileDevice = () => {
  return window.matchMedia("(max-width: 768px)").matches;
};
