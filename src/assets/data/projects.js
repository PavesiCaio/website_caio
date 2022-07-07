import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/PLogotipo.png';

const projects = [
  {
    id: uuidv4(),
    link: 'Project7',
    name: 'RACING OFF-ROAD VEHICLE',
    desc:
      '2022 - BAJA SAE, competition provided by SAE BRASIL, team: "Velocirpator BAJA UDESC" - to compete.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    link: 'Project5',
    name: 'LOGISTIC STARTUP',
    desc:
      '2021 - Startup: "FLIEβEN" incubated in the COCREATION LAB program using the TXM METHODS methodology.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    link: 'Project4',
    name: 'FINANCE APP',
    desc:
      '2020 - FACEBOOK INNOVATION CAMP, competition provided by Facebook & JA, app: "Dreamcatcher" - 2nd place.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    link: 'Project3',
    name: 'AUTONOMOUS DRONE',
    desc:
      '2019 - FORMULA DRONE, competition provided by SAE BRASIL, team: "Ases do Sul" - 11th place.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    link: 'Project2',
    name: 'ACCESSIBLE KART',
    desc:
      '2019 - SENAI CHALLENGE, competition provided by SENAI/SC, team unable to compete.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    link: 'Project1',
    name: 'COMPACT CAR',
    desc:
      '2018 - SENAI CHALLENGE, competition provided by SENAI/SC, driver: "João Silva" - 1st place.',
    img: ProjectImg,
  },
];

export default projects;
