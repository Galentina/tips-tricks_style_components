/* Core */
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

/* Other */
import { api } from '../api';
import { authActions } from '../lib/redux/actions';
import { ILoginFormShape } from '../components/forms/LoginForm/config';

export const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mutation = useMutation((credentials: ILoginFormShape) => {
        return api.login(credentials);
    },
    {
        onError: (error: AxiosError) => {
            const { response } = error;

            if (response?.status === 401) {
                dispatch(authActions.setError('Неверный логин или пароль. Проверьте корректность введённых данных.'));
            } else {
                dispatch(authActions.setError('Ошибка запроса. Повторите через несколько минут или обратитесь к администратору.'));
            }
        },
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            dispatch(authActions.setToken(mutation.data?.data));
            localStorage.setItem('jwt', mutation.data?.data);
            navigate('/all-topics');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
