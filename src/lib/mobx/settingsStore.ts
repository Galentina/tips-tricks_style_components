import { makeAutoObservable } from 'mobx';

export class SettingsStore {
    isSettingsOpen: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    toggleSettingsIsOpen(state: boolean) {
        this.isSettingsOpen = state;
    }

    get getIsSettingsOpen() {
        return this.isSettingsOpen;
    }
}
