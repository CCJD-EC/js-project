export interface User{
  id?:number,
  first_name?:string,
  last_name?:string,
  birth_date?:string,
  address?:string,
  phone_number?:string,
  DNI?:string,
  emailAddress?:string,
  password?:string,
  roles?:number[],
  albums?:number[]
}
