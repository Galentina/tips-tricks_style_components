/* Core */
import { useMutation } from 'react-query';

/* Other */
import { api } from '../api';

export const useLogin = () => {
    const mutation = useMutation((credentials) => {
        return api.login(credentials);
    },
    {
        onError(error) {
            console.log('useLogin error', error);
        },
    });


    return mutation;
};
