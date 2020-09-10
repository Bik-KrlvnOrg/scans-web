import { hashSync, compareSync } from 'bcryptjs'

export const generateHashPassword = (password: string): string => {
    const salt = 10;
    return hashSync(password, salt)
}

export const validateHashPassword = (password: string, hashPassword: string): boolean => {
    return compareSync(password, hashPassword)
}