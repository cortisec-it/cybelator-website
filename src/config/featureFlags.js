// Feature Flags for controlling application features
const featureFlags = {
  SHOW_SOURCE_LINKS: false, // Default: hide source URLs
};

export const getSourceLinksSetting = () => {
  const stored = localStorage.getItem('cybelator_show_sources');
  if (stored !== null) {
    return stored === 'false';
  }
  return featureFlags.SHOW_SOURCE_LINKS;
};

export const setSourceLinksSetting = (value) => {
  localStorage.setItem('cybelator_show_sources', value);
  // Dispatch event for components to listen to storage changes within the same window
  window.dispatchEvent(new Event('storage'));
};

export default featureFlags;