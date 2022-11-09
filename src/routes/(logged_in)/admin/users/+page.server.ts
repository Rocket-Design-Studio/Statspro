import {users} from "$db/users";
import type { PageServerLoad } from './$types';

export  const load: PageServerLoad =async function() {
    const data = await users.find({}, {projection: {
        emails : 1,
        profile : 1,
        _id:0,
    }}).toArray();

    return {
            users: data 
    }
}