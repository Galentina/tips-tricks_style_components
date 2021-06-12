// @ts-nocheck
/* Core */
import { FC } from 'react';

/* Components */
import { useSelector } from 'react-redux';
import { Tip } from './Tip';

/* Other */
import { useTips } from '../../hooks';
import { fetchify } from '../../helpers';
import { getTagId } from '../../lib/redux/selectors';

export const TipList: FC = ({ tipViewMode }) => {
    const query = useTips();

    let tips = query.data;

    const selectedTagId = useSelector(getTagId);


    if (tipViewMode === 'topic-by-tag' && selectedTagId) {
        tips = tips?.filter((tip) => tip.tag.id === selectedTagId);
    }

    const tipsJSX = tips?.map((tip) => <Tip key = { tip.id } { ...tip } />);

    return <section className = 'tip-list'>{ fetchify(query.isFetched, tipsJSX) }</section>;
};
