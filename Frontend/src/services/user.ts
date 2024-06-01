import axios from "axios";
import { createUrl, createError } from "./utils";

export async function signupUser(firstName: string, lastName: string, email: string, password: string): Promise<any> {
    try {
        const url = createUrl('user/signup');
        const body = {
            firstName, lastName, email, password
        };
        const result = await axios.post(url, body);
        return result.data;
    } catch (error) {
        console.error('Signup failed:', error);
        throw createError(error);
    }
}

export async function signinUser(email: string, password :string ) {
    try{
        const url = createUrl('user/signin');
        console.log(url)
        const body : {
            email : string, password: string
        }  ={
            email,password
        }
        const result = await axios.post('http://localhost:3000/user/signin', body);
        return result.data

    } catch(error) {
        console.error('Signin failed:', error);
        throw createError(error);
    }
    
}
