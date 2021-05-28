/* Core */
import { useMutation } from 'react-query';

/* Other */
import { api } from '../api';

export const useSignUp = () => {
    const mutation = useMutation((credentials) => {
        return api.signUp(credentials);
    });

    localStorage.setItem('jwt', mutation.data?.token);

    return mutation;
};
