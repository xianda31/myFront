import { Team } from "./tournament.interface";

export const tournamentTableColumns = [
  {
    columnDef: 'lastName_A',
    header: 'Nom joueur A',
    cell: (element: Team) => `${element.playerA.lastName}`,
  },
  {
    columnDef: 'firstName_A',
    header: 'Prénom joueur A',
    cell: (element: Team) => `${element.playerA.firstName}`,
  },
  {
    columnDef: 'lastName_B',
    header: 'Nom joueur B',
    cell: (element: Team) => `${element.playerB.lastName}`,
  },
  {
    columnDef: 'firstName_B',
    header: 'Prénom joueur B',
    cell: (element: Team) => `${element.playerB.firstName}`,
  },
  {
    columnDef: 'icon',
    header: 'anomalie',
    cell: (element: Team) => `${element.teamNbr % 2 ? 'thumb_up' : 'thumb_down'}`,
  },
];
