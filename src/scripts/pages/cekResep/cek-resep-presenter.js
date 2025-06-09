import { BASE_URL, ACCESS_TOKEN_KEY } from '../../config.js';

const CekResepPresenter = {
    async generateUploadSignature() {
        try {
            const token = localStorage.getItem(ACCESS_TOKEN_KEY);
            if (!token) {
                throw new Error('No access token found. Please log in.');
            }

            const response = await fetch(`${BASE_URL}/generate-upload-signature`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            console.log('Response status:', response.status);
            console.log('Response status text:', response.statusText);

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Gagal mendapatkan signature: ${response.status} ${errorText}`);
            }

            const data = await response.json();
            console.log('Response body:', data);
            return data;
        } catch (error) {
            console.error('Error generating upload signature:', error);
            throw error;
        }
    },

    async uploadToCloudinary(file, signatureData) {
        const { apiKey, timestamp, signature, cloudName } = signatureData;
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('api_key', apiKey);
        formData.append('timestamp', timestamp);
        formData.append('signature', signature);

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Gagal upload ke Cloudinary');

            const result = await response.json();
            return result.secure_url;
        } catch (error) {
            console.error('Error uploading to Cloudinary:', error);
            throw error;
        }
    },

    async predictFood(imageUrl) {
        try {
            const token = localStorage.getItem(ACCESS_TOKEN_KEY);
            if (!token) {
                throw new Error('No access token found. Please log in.');
            }

            const response = await fetch(`${BASE_URL}/predict`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ imageUrl }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Gagal mendapatkan prediksi: ${response.status} ${errorText}`);
            }

            const result = await response.json();
            console.log('Prediction result:', result);

            return {
                foodName: result.prediction?.label || 'Unknown',
                recipe: result.recipe || {}
            };
        } catch (error) {
            console.error('Error predicting food:', error);
            throw error;
        }
    },
};

export default CekResepPresenter;