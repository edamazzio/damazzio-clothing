export interface IUser {
    displayName: string
    email: string
    id: string,
    createdAt: Date,
}

export interface IUserSignUp {
    displayName: string
    email: string
    password: string
    confirmPassword:string
}