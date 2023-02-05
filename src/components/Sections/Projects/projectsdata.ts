export type ProjectsData = {
  title: string;
  summary: string;
  skills: string[];
  link: string;
  img: string;
};

export const projectsData: ProjectsData[] = [
  {
    title: 'Squid Squad OG',
    summary:
      'Motif by Squid Game, SSOG is one of the Solana DApp project as a P2E game. 456 players play a game of rock-paper-scissors using their own Squid NFTs, and get rewarded with tokens.',
    skills: [
      'React',
      'TypeScript',
      'Chakra UI',
      'Redux',
      'Solana Web3 JavaScript API',
    ],
    link: 'https://www.notion.so/Squid-Squad-OG-4d19d5b286f54497966bb3363b5e01c9',
    img: '/img/ssog.png',
  },
  {
    title: 'VegaX Terminal',
    summary:
      "Created with the motif of Bloomberg Terminal, a homepage that delivers real-time data and breaking news in blockchain industry and introduces VegaX's products.",
    skills: ['React', 'TypeScript', 'Styled-Component', 'Redux', 'Redux Saga'],
    link: 'https://www.notion.so/VegaX-Terminal-f03448cdbbc348f084fdb67f4a2f382a',
    img: '/img/terminalshort.png',
  },
  {
    title: 'B2B Client Dashboard',
    summary:
      'A dashboard for VegaX clients to check product descriptions and their own investment status of strategies released by VegaX.',
    skills: [
      'Vite',
      'TypeScript',
      'Styled-Component',
      'Ant Design',
      'React-Query',
    ],
    link: 'https://www.notion.so/B2B-Client-Dashboard-821d7386163c435294ba9c1ab0d81984',
    img: '/img/clientdashboard.png',
  },
];
