/* Core */
import { makeAutoObservable } from 'mobx';

export class TagStore {
    selectedTagId: null | string = null;

    constructor() {
        makeAutoObservable(this);
    }

    setSelectedTagId(nextTag: string) {
        this.selectedTagId = nextTag;
    }

    get getSelectedTagId() {
        return this.selectedTagId;
    }
}
