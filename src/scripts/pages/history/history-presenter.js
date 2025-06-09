import { getAllHistory, removeHistory } from '../../data/database';

const HistoryPresenter = {
    async getHistoryEntries() {
        try {
            const history = await getAllHistory();
            return history.map(entry => ({
                ...entry,
                formattedIngredients: entry.recipe.bahan
                    ? entry.recipe.bahan.slice(0, 5).filter(item => item && item.trim()) // Limit to 5 non-empty items
                    : ['No ingredients listed'],
            }));
        } catch (error) {
            console.error('Error fetching history:', error);
            throw new Error('Failed to load history');
        }
    },

    async deleteHistoryEntry(id) {
        try {
            await removeHistory(id);
        } catch (error) {
            console.error('Error deleting history entry:', error);
            throw new Error('Failed to delete history entry');
        }
    },
};

export default HistoryPresenter;