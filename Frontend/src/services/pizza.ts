import axios from "axios";
import { createUrl, createError } from "./utils";

export async function getAllPizzas() {
    try{
        const url = createUrl("pizza");
        const result = await axios.get(url,{timeout: 5000});
        return result.data;
    }catch(error){
        console.log('Getting Pizza Fail:' , error);
        throw(createError(error));
    }
}