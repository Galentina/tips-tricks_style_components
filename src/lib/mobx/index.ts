import { makeAutoObservable } from 'mobx';

import { TagStore } from './tagStore';
// Storages

export class RootStore {
    tagStore: TagStore;

    constructor() {
        makeAutoObservable(this);
        this.tagStore = new TagStore();
    }
}
