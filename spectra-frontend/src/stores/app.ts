import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed } from 'vue';
import type { Message } from '../../env';

interface State {
    messages?: Message[];
    showPages?: boolean;
}
const DEFAULT_STATE = {
    messages: [],
    showPages: false,
} as State

export const useUiStore = defineStore('ui-state', () => {
    const state = useLocalStorage('ui', DEFAULT_STATE);
    const messages = computed(() => state.value.messages);
    const showPages = computed(() => state.value.showPages);

    const deleteAllMessages = () => state.value.messages = []
    const addMessage = (_message: string) => {
        const message = {
            message: _message,
            className: 'is-danger'
        } as Message;
        state.value.messages = [...(state.value.messages || []), message];
    };
    const hideMessage = (message: Message) => {
        message.visible = false;
    }

    const toggleShowPages = () => {
        state.value.showPages = !state.value.showPages;
    };

    return { messages, showPages, deleteAllMessages, addMessage, toggleShowPages, hideMessage }
})