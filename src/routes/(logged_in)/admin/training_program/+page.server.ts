import {trainingProgram} from "$db/training_program";
import type { PageServerLoad } from './$types';

export  const load: PageServerLoad =async function() {
    const data = await trainingProgram.find().toArray();

    return {
        trainingProgram: data 
    }
}