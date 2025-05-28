import { create } from 'zustand';
import api from '../../api/axios';
import { AxiosError } from 'axios';

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
            const response = await api.get('/users/profile');
            set({ profile: response.data, isLoading: false });
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 403) {
                    set({ 
                        error: '로그인이 필요합니다.', 
                        isLoading: false,
                        profile: null
                    });
                } else {
                    set({ 
                        error: error.response?.data?.message || '프로필을 불러오는데 실패했습니다.', 
                        isLoading: false 
                    });
                }
            } else {
                set({ 
                    error: '프로필을 불러오는데 실패했습니다.', 
                    isLoading: false 
                });
            }
        }
    },
}));

export default useProfileStore; 