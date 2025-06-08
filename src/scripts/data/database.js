import { openDB } from 'idb';

const DATABASE_NAME = 'foodinary';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'favorites-food';

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
        if (!database.objectStoreNames.contains(OBJECT_STORE_NAME)) {
            database.createObjectStore(OBJECT_STORE_NAME, {
                keyPath: 'id',
            });
        }
    },
});

export const getAllFavorites = async () => {
    const db = await dbPromise;
    return db.getAll(OBJECT_STORE_NAME);
};

export const getFavorite = async (id) => {
    const db = await dbPromise;
    return db.get(OBJECT_STORE_NAME, id);
};

export const addFavorite = async (recipe) => {
    const db = await dbPromise;
    return db.put(OBJECT_STORE_NAME, recipe);
};

export const removeFavorite = async (id) => {
    const db = await dbPromise;
    return db.delete(OBJECT_STORE_NAME, id);
};

export { dbPromise };
