import { createMenuStore } from "../stores/menuStoreFactory";
import { modesMenu } from '../router/modes'

export const useModesMenuStore = createMenuStore(modesMenu, 'modes-menu')