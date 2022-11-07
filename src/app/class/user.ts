import { Iuser } from '../interface/Iuser';

export class User implements Iuser {
  id?: number | undefined;
  name?: string | undefined;
  username?: string | undefined;
  email?: string | undefined;
  website?: string | undefined;
  // votes?: number;
}
