import { requestPasswordReset, submitNewPassword } from '../../../data/api';

const ResetPasswordPresenter = {
    async requestResetLink(email) {
        return await requestPasswordReset(email);
    },

    async resetPassword({ email, token, newPassword }) {
        return await submitNewPassword({ email, token, newPassword });
    },
};

export default ResetPasswordPresenter;
