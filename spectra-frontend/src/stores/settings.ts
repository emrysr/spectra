import { settingsMenu } from '../router/settings'
import { createMenuStore } from './menuStoreFactory'

export const useSettingsMenuStore = createMenuStore(settingsMenu, 'settings-menu')
