/* Core */
import { useMutation, useQueryClient } from 'react-query';

/* Other */
import { api } from '../api';

export const useLogin = () => {
    const client = useQueryClient();

    const mutation = useMutation(
        (credentials) => {
            return api.login(credentials);
        },
        {
            onSettled() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                client.invalidateQueries('/auth/registration');
            },
        },
    );

    return mutation;
};
