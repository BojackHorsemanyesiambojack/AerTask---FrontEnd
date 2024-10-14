export interface EmailVerificationForm {
    id: number;          // code_id
    token: string;       // code
    email: string;       // email
    user: number;        // user_id
    expiresAt: Date;     // expires_at
  }

  export const VoidEmailVerificationForm:EmailVerificationForm = {
    id:-1,
    token:'',
    email:'',
    user:-1,
    expiresAt:new Date()
  }
  