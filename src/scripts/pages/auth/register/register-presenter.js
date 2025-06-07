export default class RegisterPresenter {
    #view;
    #model;

    constructor({ view, model }) {
        this.#view = view;
        this.#model = model;
    }

    async getRegistered({ name, email, password, confirmPassword }) {
        if (password !== confirmPassword) {
            this.#view.registeredFailed("Konfirmasi password tidak cocok.");
            return;
        }
        
        try {
            const response = await this.#model.getRegistered({ name, email, password, confirmPassword });

            if (!response.ok) {
                console.error('getRegistered: response:', response);
                this.#view.registeredFailed(response.message);
                return;
            }

            this.#view.registeredSuccessfully(response.message, response.data);
        } catch (error) {
            console.error('getRegistered: error:', error);
            this.#view.registeredFailed(error.message);
        }
    }

}
