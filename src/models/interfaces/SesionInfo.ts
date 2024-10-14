    export interface Sesion {
        userId: number;
        sessionToken: string;
        createdAt: Date;
        expiresAt: Date;
    }

    export const emptySesion:Sesion = {
        userId:-1,
        sessionToken:'',
        createdAt:new Date,
        expiresAt:new Date
    }
