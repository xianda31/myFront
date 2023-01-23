import { Member } from '../../member.interface';

export const tableColumns = [
  {
    columnDef: 'lastName',
    header: 'Nom',
    cell: (element: Member) => `${element.lastName}`,
  },
  {
    columnDef: 'firstName',
    header: 'Prénom',
    cell: (element: Member) => `${element.firstName}`,
  },
  {
    columnDef: 'license',
    header: 'N° licence',
    cell: (element: Member) => `${element.license}`,
  },
  {
    columnDef: 'mail',
    header: 'mail',
    cell: (element: Member) => `${element.mail}`,
  },
  {
    columnDef: 'city',
    header: 'ville',
    cell: (element: Member) => `${element.city}`,
  },

  {
    columnDef: 'tel',
    header: 'tel',
    cell: (element: Member) => `${element.tel}`,
  },
  {
    columnDef: 'icon',
    header: 'anomalie',
    cell: (element: Member) => `${element.license % 2 ? 'thumb_up' : 'thumb_down'}`,
  },
];
