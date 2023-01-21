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
    columnDef: 'email',
    header: 'mail',
    cell: (element: Member) => `${element.email}`,
  },
  {
    columnDef: 'city',
    header: 'ville',
    cell: (element: Member) => `${element.city}`,
  },

  {
    columnDef: '_id',
    header: 'key',
    cell: (element: Member) => `${element._id}`,
  },
  {
    columnDef: 'icon',
    header: 'anomalie',
    cell: (element: Member) => `${element.license % 2 ? 'thumb_up' : 'thumb_down'}`,
  },
];
