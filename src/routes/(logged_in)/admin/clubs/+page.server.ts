import {clubs} from "$db/clubs";
import type { PageServerLoad } from './$types';

export  const load: PageServerLoad =async function() {
    const data = await clubs.find().toArray();

    return {
            clubs: data 
    }
}

