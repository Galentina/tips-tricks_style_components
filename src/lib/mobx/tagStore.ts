import { makeAutoObservable } from 'mobx';

export class TagStore {
    selectedTagId: null|string = null;

    constructor() {
        makeAutoObservable(this);
    }

    setSelectedTagId(nextTag:string) {
        console.log('this');
        console.log(this);
        this.selectedTagId = nextTag;
    }

    get getSelectedTagId() : null|string {
        return this.selectedTagId;
    }
}
