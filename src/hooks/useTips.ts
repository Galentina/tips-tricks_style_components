import { useQuery } from 'react-query';
import { api } from '../api';

export const useTips = () => {
    const query = useQuery('tips', api.getTips);

    return query;
};
