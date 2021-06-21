import { makeAutoObservable } from 'mobx';
import { SettingsStore } from './settingsStore';
import { TagStore } from './tagStore';
import { AuthStore } from './authStore';
// Storages

export class RootStore {
    tagStore: TagStore;

    authStore: AuthStore;

    settingsStore: SettingsStore;

    constructor() {
        makeAutoObservable(this);
        this.tagStore = new TagStore();
        this.settingsStore = new SettingsStore();
        this.authStore = new AuthStore();
    }
}
