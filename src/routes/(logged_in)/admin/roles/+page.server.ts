import {roles} from "$db/roles";
import type { PageServerLoad } from './$types';

export  const load: PageServerLoad =async function() {
    const data = await roles.find({}, {}).toArray();

    return {
            roles: data 
    }
}