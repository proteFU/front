import { create } from 'zustand';
import axios from 'axios';

interface Profile {
    username: string;
    email: string;
    profileImageUrl: string;
}

interface ProfileStore {
    profile: Profile | null;
    isLoading: boolean;
    error: string | null;
    fetchProfile: () => Promise<void>;
}

const useProfileStore = create<ProfileStore>((set) => ({
    profile: null,
    isLoading: false,
    error: null,
    fetchProfile: async () => {
        try {
            set({ isLoading: true, error: null });
            const response = await axios.get('https://lazy-shaylah-guhyunwoo-777b581b.koyeb.app/users/profile');
            set({ profile: response.data, isLoading: false });
        } catch (error) {
            set({ 
                error: error instanceof Error ? error.message : '프로필을 불러오는데 실패했습니다.', 
                isLoading: false 
            });
        }
    },
}));

export default useProfileStore; 