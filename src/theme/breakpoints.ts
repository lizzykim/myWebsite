export const size = {
  mobile: '576px',
  tablet: '768px',
  laptop: '992px',
  desktop: '1200px',
  max: '1800px',
};

const device = {
  mobile: `(max-width:${size.mobile})`,
  tablet: `(max-width:${size.tablet})`,
  laptop: `(max-width:${size.laptop})`,
  desktop: `(max-width:${size.desktop})`,
  max: `(max-width:${size.max})`,
};

export default device;
