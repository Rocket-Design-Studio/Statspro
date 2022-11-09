import {exercise} from "$db/exercise";
import type { PageServerLoad } from './$types';

export  const load: PageServerLoad =async function() {
    const data = await exercise.find().toArray();

    return {
            exercise: data 
    }
}