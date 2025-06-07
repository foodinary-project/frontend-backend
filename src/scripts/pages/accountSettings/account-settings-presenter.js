import { getMyUserInfo, updateProfile } from '../../data/api';

const AccountSettingsPresenter = {
    currentUser: null,

    async loadUserData() {
        const response = await getMyUserInfo();
        if (response.ok && response.user) {
            this.currentUser = response.user;
            return this.currentUser;
        } else {
            throw new Error(response.message || 'Failed to load user data');
        }
    },

    async submitProfileUpdate({ name, email, oldPassword, newPassword, confirmNewPassword }) {
        // Gunakan data lama jika field tidak diubah
        const payload = {
            newName: name || this.currentUser?.name,
            newEmail: email || this.currentUser?.email,
            newProfilePictureUrl: "", // tidak digunakan
        };

        if (oldPassword && newPassword && confirmNewPassword) {
            payload.oldPassword = oldPassword;
            payload.newPassword = newPassword;
            payload.confirmNewPassword = confirmNewPassword;
        }

        const result = await updateProfile(payload);
        return result;
    },
};

export default AccountSettingsPresenter;
