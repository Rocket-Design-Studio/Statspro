import {games} from "$db/games";
import type { PageServerLoad } from './$types';

export  const load: PageServerLoad =async function() {
    const data = await games.find({ "sportTemplate.sport.name": "Rugby"}, { projection
    : {
        forTeam: 1,
        againstTeam : 1,
        _id: 0,
        venue: 1,
        kickOffTime: 1,
    }}).toArray();

    return {
            games: data 
    }
}