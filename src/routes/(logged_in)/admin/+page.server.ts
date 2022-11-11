import {clubs} from "$db/clubs";
import {teams} from "$db/teams";
import {players} from '$db/players';

import type { PageServerLoad } from './$types';

export  const load: PageServerLoad =async function() {
    const data = await clubs.find({}, {projection: {
        name : 1,
        sports : 1,
        _id:0,
    }}).toArray();

    const data2 = await teams.find({}, {projection: {
        name : 1,
        sport : 1,
        _id:0,
    }}).toArray();

    const data3= await players.find({}, {projection: {
        sport : 1,
        _id:0,
    }}).toArray();

    return {
            clubs: data,
            teams: data2,
            players: data3,
    }
}


