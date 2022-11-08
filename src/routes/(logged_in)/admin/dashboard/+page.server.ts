import {users} from "$db/users";
import type { PageServerLoad } from './$types';

export  const load: PageServerLoad =async function() {
    const data = await users.find({}, {limit:50, projection: {
        emails : 1,
        profile : 1,
        _id:0,
    }}).toArray();

    console.log('data', data);
    
    return {
            users: data 
    }
}