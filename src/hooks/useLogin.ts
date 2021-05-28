/* Core */
import { useMutation } from 'react-query';

/* Other */
import { api } from '../api';

export const useLogin = () => {
    const mutation = useMutation((credentials) => {
        return api.login(credentials);
    });

    localStorage.setItem('jwt', mutation.data?.data);

    return mutation;
};
