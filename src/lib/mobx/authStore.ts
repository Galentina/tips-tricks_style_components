import { makeAutoObservable } from 'mobx';

export class AuthStore {
    token: string = '';

    errorMessage: string = '';

    error: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    setToken(state: string) {
        this.token = state;
    }

    setError(state: string) {
        this.errorMessage = state;
        this.error = true;
    }

    resetError() {
        this.errorMessage = '';
        this.error = false;
    }
}
