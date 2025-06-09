import Swal from 'sweetalert2';
import { getLogout } from '../../utils/auth';
import { getMyUserInfo } from '../../data/api';
import { getAllFavorites, getAllHistory } from '../../data/database';

export const setupDashboardPresenter = async () => {
    setupLogoutHandler();
    await updateFavoriteCount();
    await updateHistoryCount();
    await renderUserInfo();
    setupSidebarToggle();
};

const setupLogoutHandler = () => {
    const logoutBtn = document.getElementById('logout-btn');
    if (!logoutBtn) return;

    logoutBtn.addEventListener('click', async (event) => {
        event.preventDefault();
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will be logged out from Foodinary.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, logout',
            cancelButtonText: 'Cancel',
        });

        if (result.isConfirmed) {
            getLogout();
            Swal.fire({
                title: 'Logged Out',
                text: 'You have been successfully logged out.',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
            });
            setTimeout(() => {
                location.hash = '/';
            }, 1500);
        }
    });
};

const updateFavoriteCount = async () => {
    try {
        const favorites = await getAllFavorites();
        const countElement = document.getElementById('total-favorite-count');
        if (countElement) countElement.textContent = favorites.length;
    } catch (error) {
        console.error('Gagal mengambil total favorite:', error);
    }
};

const updateHistoryCount = async () => {
    try {
        const history = await getAllHistory();
        const countElement = document.getElementById('total-history-count');
        if (countElement) countElement.textContent = history.length;
    } catch (error) {
        console.error('Gagal mengambil total history:', error);
    }
};

const renderUserInfo = async () => {
    try {
        const response = await getMyUserInfo();
        if (response.ok && response.user) {
            const { name, profilePictureUrl } = response.user;
            const greeting = document.getElementById('user-greeting');
            const subtitle = document.getElementById('dashboard-subtitle');
            const avatar = document.getElementById('user-avatar');

            if (greeting) greeting.textContent = `${name}`;
            if (subtitle) subtitle.textContent = `Hi, ${name}. Welcome back to Foodinary!`;
            if (avatar && profilePictureUrl) avatar.src = profilePictureUrl;
        } else {
            console.warn('Gagal mendapatkan data user:', response.message || response);
        }
    } catch (error) {
        console.error('Error mengambil info user:', error);
    }
};

const setupSidebarToggle = () => {
    const avatar = document.getElementById('user-avatar');
    const sidebar = document.querySelector('.db-sidebar');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    const toggleSidebar = () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    };

    const closeSidebar = () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    };

    const manageAvatarClick = () => {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        avatar.removeEventListener('click', toggleSidebar);
        overlay.removeEventListener('click', closeSidebar);

        if (isMobile && avatar && sidebar) {
            avatar.style.cursor = 'pointer';
            avatar.addEventListener('click', toggleSidebar);
            overlay.addEventListener('click', closeSidebar);
        } else {
            avatar.style.cursor = 'default';
            closeSidebar();
        }
    };

    manageAvatarClick();
    window.addEventListener('resize', manageAvatarClick);
};
