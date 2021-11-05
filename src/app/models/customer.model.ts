export class Customer {
  _id:string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  dob: string;
  department: string;

  constructor(){
    this._id='';
    this.firstName='';
    this.lastName='';
    this.emailAddress='';
    this.phoneNumber='';
    this.dob='';
    this.department='';
  }
}
