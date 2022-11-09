import {sport} from "$db/sport";
import type { PageServerLoad } from './$types';

export  const load: PageServerLoad =async function() {
    const data = await sport.find({}, {limit:50, projection: {
        name : 1,
        _id:0,
    }}).toArray();

    return {
            sport: data 
    }
}