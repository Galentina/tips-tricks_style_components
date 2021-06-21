/* Core */
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

/* Other */
import { api } from '../api';
import { ILoginFormShape } from '../components/forms/LoginForm/config';
import { useStore } from './useStore';


export const useLogin = () => {
    const { authStore } = useStore();
    const navigate = useNavigate();
    const mutation = useMutation((credentials: ILoginFormShape) => {
        return api.login(credentials);
    },
    {
        onError: (error: AxiosError) => {
            const { response } = error;

            if (response?.status === 401) {
                authStore.setError('Неверный логин или пароль. Проверьте корректность введённых данных.');
            } else {
                authStore.setError('Ошибка запроса. Повторите через несколько минут или обратитесь к администратору.');
            }
        },
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            authStore.setToken(mutation.data?.data);
            localStorage.setItem('jwt', mutation.data?.data);
            navigate('/all-topics');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
