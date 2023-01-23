export class Member {
  _id !: number;
  firstName !: string;
  lastName !: string;
  mail !: string ;
  tel ?: string;
  address ?: string;
  city !: string;
  zip !: string;
  license !:number;
  status !: number;
}

export const WhiteMember ={
  _id : 0,
  firstName : '',
  lastName : '',
  mail :''  ,
  tel :'' ,
  address :'' ,
  city : '',
  zip : '',
  license : 0,
  status : 0,
}
