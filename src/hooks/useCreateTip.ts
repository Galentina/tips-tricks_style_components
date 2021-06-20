/* Core */
import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';

/* Other */
import { api } from '../api';
import { getToken } from '../lib/redux/selectors';
import { ITipModel } from '../types';

export const useCreateTip = () => {
    const token = useSelector(getToken);
    const client = useQueryClient();

    const mutation = useMutation(
        (tip: ITipModel) => {
            return api.createTip(tip, token);
        },
        {
            onSettled() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                client.invalidateQueries('/tips');
            },
        },
    );

    return mutation;
};
