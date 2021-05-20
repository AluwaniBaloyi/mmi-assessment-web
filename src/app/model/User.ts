export class User{
  aboutMe?: string;
  interests?: string;
  name?: string;
  picturePath?: string;
  surname?: string;
  username?: string;
}

export class Register{
  firstName?: string;
  lastName?: string;
  file?: any;
  password?: string;
  username?: string;
}

export class Details{
  name?: string;
  surname?: string;
  picturePath?: any;
  aboutMe?: string;
  interests?: string;
  username?: string | null;
  education?: Education[];
}

export class Education{
  completed?: string;
  endDate?: string;
  id?: number;
  institutionName?: string;
  qualification?: string;
  startDate?: string;
  username?: string | null;
}





