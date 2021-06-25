/* Core */
import axios from 'axios';

/* Other */
import { ITipModel, ITagModel } from '../types';
import { AuthHeader } from '../types/AuthHeader';
import { ISignUpFormShape } from '../components/forms/SignUpForm/config';
import { ILoginFormShape } from '../components/forms/LoginForm/config';
import { AuthStore } from '../lib/mobx/AuthStore';

export const api = {
    async getTags() {
        const { data: tags } = await axios.get<ITagModel[]>(
            `${process.env.REACT_APP_API_URL}/tags`,
        );

        return tags;
    },
    async getTips() {
        const { data: tips } = await axios.get<ITipModel[]>(
            `${process.env.REACT_APP_API_URL}/tips`,
        );

        return tips;
    },
    async getTipById(id: string) {
        const { data: tipById } = await axios.get<ITipModel>(
            `${process.env.REACT_APP_API_URL}/tips/${id}`,
        );

        return tipById;
    },
    async createTip(tip: ITipModel, token: AuthStore) {
        const config: AuthHeader = {};

        if (typeof token === 'string' && token) {
            config.headers = {
                authorization: `Bearer ${token}`,
            };
        }

        const { data: newTip } = await axios.post(
            `${process.env.REACT_APP_API_URL}/tips`,
            tip,
            config,
        );

        return newTip;
    },
    async login(credentials: ILoginFormShape) {
        const { email, password } = credentials;
        const { data } = await axios.get(
            `${process.env.REACT_APP_API_URL}/auth/login`,
            {
                headers: {
                    authorization: `Basic ${btoa(`${email}:${password}`)}`,
                },
            },
        );

        return data;
    },
    async signUp(credentials: ISignUpFormShape) {
        const { confirmPassword, ...body } = credentials;
        const { data } = await axios.post(
            `${process.env.REACT_APP_API_URL}/auth/registration`,
            body,
        );

        return data;
    },
};
