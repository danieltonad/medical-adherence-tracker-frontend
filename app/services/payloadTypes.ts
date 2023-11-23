// create user payload
export type CreateAccountPayload = {
    firstname: string;
    suname: string;
    dob: Date;
    gender: Gender;
    email: string;
    phone: string;
    emergency_contact_info: string;
    display_name: string;
    password: string
  };

  enum Gender {
    Male = 'Male',
    Female = 'Female',
  };