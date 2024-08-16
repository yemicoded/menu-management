export interface IVerifyEmail {
  email: string;
  otp: string;
}

export interface IResetPassword {
  password: string;
  confirmPassword: string;
}
