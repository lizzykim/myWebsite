import IconGitHub from './github';
import IconLinkedin from './linkedin';

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'LinkedIn':
      return (
        <span>
          <IconLinkedin />
        </span>
      );
    case 'GitHub':
      return (
        <span>
          <IconGitHub />
        </span>
      );

    default:
      return <div></div>;
  }
};

export default Icon;
