import { useMutation, useQueryClient } from 'react-query';
import { api } from '../api/api';

export const useCreateTip = () => {
    const client = useQueryClient();

    const mutation = useMutation(
        (tip: any) => {
            return api.createTip(tip);
        },
        {
            onSettled() {
                client.invalidateQueries('/tips');
            },
        },
    );

    return mutation;
};
