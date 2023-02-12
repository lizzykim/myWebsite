import IconGitHub from './github';
import IconLinkedin from './linkedin';

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'LinkedIn':
      return <IconLinkedin />;
    case 'GitHub':
      return <IconGitHub />;

    default:
      return '';
  }
};

export default Icon;
