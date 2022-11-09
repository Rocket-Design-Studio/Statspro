import {players} from "$db/players";
import type { PageServerLoad } from './$types';

export  const load: PageServerLoad =async function() {
    const data = await players.find({}, {}).toArray();

    return {
            players: data 
    }
}