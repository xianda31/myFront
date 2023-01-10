import { Adherent } from '../../adherent.interface';

export const tableColumns = [
  {
    columnDef: 'lastName',
    header: 'Nom',
    cell: (element: Adherent) => `${element.lastName}`,
  },
  {
    columnDef: 'firstName',
    header: 'Prénom',
    cell: (element: Adherent) => `${element.firstName}`,
  },
  {
    columnDef: 'license',
    header: 'N° licence',
    cell: (element: Adherent) => `${element.license}`,
  },
  {
    columnDef: 'adh_key',
    header: 'key',
    cell: (element: Adherent) => `${element.adh_key}`,
  },
  {
    columnDef: 'icon',
    header: 'anomalie',
    cell: (element: Adherent) => `${element.license % 2 ? 'thumb_up' : 'thumb_down'}`,
  },
];
