/* Core */
import { useMutation, useQueryClient } from 'react-query';

/* Other */
import { api } from '../api';

export const useCreateTip = () => {
    const client = useQueryClient();

    const mutation = useMutation(
        (tip) => {
            return api.createTip(tip);
        },
        {
            onSettled() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                client.invalidateQueries('tips');
            },
        },
    );

    return mutation;
};
