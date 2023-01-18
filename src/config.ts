type navLinkProps = {
  name: string;
  url: string;
};

const navLinks: navLinkProps[] = [
  { name: 'About', url: '#about' },
  { name: 'Experience', url: '#experience' },
  { name: 'Work', url: '#work' },
  { name: 'Contact', url: '#contact' },
];

const scrollRevealOptions = {
  origin: 'bottom',
  distance: '50px',
  duration: 800,
  delay: 200,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor: 0.25,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
};

export { navLinks, scrollRevealOptions };
