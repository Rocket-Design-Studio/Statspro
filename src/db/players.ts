import db from '$db/mongo';

export const players = db.collection('players')