import {coaches} from "$db/coaches";
import type { PageServerLoad } from './$types';

export  const load: PageServerLoad =async function() {
    const data = await coaches.find({roles: "coach"}).toArray();
    
    return {
            coaches: data 
    }
}