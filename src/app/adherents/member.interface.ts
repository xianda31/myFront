export class Member {
  _id !: number;
  adh_key !: number;
  firstName !: string;
  lastName !: string;
  email !: string ;
  phone ?: string;
  address ?: string;
  city !: string;
  zip !: string;
  license !:number;
  status !: number;
}

export const WhiteMember ={
  _id : 0,
  adh_key : 0,
  firstName : '',
  lastName : '',
  email :''  ,
  phone :'' ,
  address :'' ,
  city : '',
  zip : '',
  license : 0,
  status : 0,
}
