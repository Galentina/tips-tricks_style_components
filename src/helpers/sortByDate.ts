// Хелпер функция для сортировки дат.
import { ITipModel } from '../types';

export const sortByDate = (a: ITipModel, b: ITipModel) => {
    return new Date(b.created).getTime() - new Date(a.created).getTime();
};
