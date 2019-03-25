import Address from './Address';
import HasId from './HasId';

export default interface Person extends HasId {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  id: string;
  address: Address;
}
