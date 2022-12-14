const size = {
  mobile: '576px',
  tablet: '768px',
  laptop: '992px',
  desktop: '1200px',
};

const device = {
  mobile: `(max-width:${size.mobile})`,
  tablet: `(max-width:${size.tablet})`,
  laptop: `(max-width:${size.laptop})`,
  desktop: `(max-width:${size.desktop})`,
};

export default device;
