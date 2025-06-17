// src/stores/messages.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue'; // Import ref and computed for Composition API style
import { apiFetcher } from '@/utils/apiFetcher'; // Adjust path as needed

interface MessageState {
    messages: string[];
    isLoading: boolean;
    error: string | null;
}

export const useMessageStore = defineStore('messages', () => {
    const messages = ref<MessageState['messages']>([]);
    const isLoading = ref<MessageState['isLoading']>(false);
    const error = ref<MessageState['error']>(null);

    const allMessages = computed(() => messages.value);
    const hasError = computed(() => error.value !== null);

    const fetchMessages = async () => {
        isLoading.value = true;
        error.value = null;
        try {
            return await apiFetcher<string[]>('messages');
        } catch (err) {
            error.value = (err as Error).message || 'Failed to fetch messages.';
            console.error('Action Error: Failed to fetch messages:', err);
        } finally {
            isLoading.value = false;
        }
        return []
    }
    const loadMessages = async () => {
        // fetch and set value
        messages.value = await fetchMessages();
    }
    return {
        messages,
        isLoading,
        error,

        allMessages,
        hasError,

        loadMessages,
    };
});
