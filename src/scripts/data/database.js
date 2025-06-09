import { openDB } from 'idb';

const DATABASE_NAME = 'foodinary';
const DATABASE_VERSION = 2; // Increment version for schema change
const FAVORITES_STORE_NAME = 'favorites-food';
const HISTORY_STORE_NAME = 'history';

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database, oldVersion, newVersion, transaction) {
        // Create favorites store if not exists
        if (!database.objectStoreNames.contains(FAVORITES_STORE_NAME)) {
            database.createObjectStore(FAVORITES_STORE_NAME, {
                keyPath: 'id',
            });
        }
        // Create history store if not exists
        if (!database.objectStoreNames.contains(HISTORY_STORE_NAME)) {
            const historyStore = database.createObjectStore(HISTORY_STORE_NAME, {
                keyPath: 'id',
            });
            historyStore.createIndex('timestamp', 'timestamp');
        }
    },
});

// Favorites functions
export const getAllFavorites = async () => {
    const db = await dbPromise;
    return db.getAll(FAVORITES_STORE_NAME);
};

export const getFavorite = async (id) => {
    const db = await dbPromise;
    return db.get(FAVORITES_STORE_NAME, id);
};

export const addFavorite = async (recipe) => {
    const db = await dbPromise;
    return db.put(FAVORITES_STORE_NAME, recipe);
};

export const removeFavorite = async (id) => {
    const db = await dbPromise;
    return db.delete(FAVORITES_STORE_NAME, id);
};

// History functions
export const addHistory = async (entry) => {
    const db = await dbPromise;
    return db.put(HISTORY_STORE_NAME, entry);
};

export const getAllHistory = async () => {
    const db = await dbPromise;
    const tx = db.transaction(HISTORY_STORE_NAME, 'readonly');
    const store = tx.objectStore(HISTORY_STORE_NAME);
    const index = store.index('timestamp');

    const results = [];
    let cursor = await index.openCursor(null, 'prev'); // 'prev' means descending

    while (cursor) {
        results.push(cursor.value);
        cursor = await cursor.continue();
    }

    return results;
};


export const removeHistory = async (id) => {
    const db = await dbPromise;
    return db.delete(HISTORY_STORE_NAME, id);
};

export { dbPromise };