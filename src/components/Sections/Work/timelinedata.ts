export type TimeLineData = {
  date: string;
  position: string;
  name: string;
  link: string | null;
  content: string[];
};

export const timeLineData: TimeLineData[] = [
  {
    date: '2017.03 ~ 2022.02',
    position: 'Student of IT Media Engineering in Technology department',
    name: 'Duksung Woman University',
    link: null,
    content: [
      'Study basic theories and programming methods for software and IT media design skills such as using Adobe design tools, 3ds Max graphic programs',
      'Study abroad as an exchange student in Lincoln University, NZ',
      'Build simple mobile application with Android and get elected in university union graduation contest',
    ],
  },
  {
    date: '2022.01 ~ 2022.04',
    position: 'Frontend Developer Intern',
    name: 'Konstellation & VegaX Holdings',
    link: 'https://vegaxholdings.com/',
    content: [
      'Study basics of web development, component styling using HTML, CSS and integrate as a responsive web',
      'Participate in an NFT project and build features for P2E game',
      'Communicate with international team members of engineers, designers, producers, marketers on daily and weekly basis',
    ],
  },
  {
    date: '2022.04 ~ 2022.12',
    position: 'Frontend Developer Full-time ',
    name: 'Konstellation & VegaX Holdings',
    link: 'https://vegaxholdings.com/',
    content: [
      'Build B2B Client Dashboard, Terminal web pages in VegaX team',
      'Discuss and integrate coding conventions and share feedbacks through code reviews in VegaX frontend team ',
    ],
  },
];
