// @ts-nocheck
/* Core */
import { FC, useContext } from 'react';

/* Components */
import { Tip } from './Tip';

/* API */
import { useTips } from '../../hooks';

/* Other */
import { TagContext } from '../../lib';
import { fetchify } from '../../helpers';

export const TipList: FC = ({ tipViewMode }) => {
    const [selectedTagId] = useContext(TagContext);
    const { data: source, isFetched } = useTips();

    let tips = source;

    if (tipViewMode === 'topics-by-tag') {
        tips = source?.filter((tip) => tip.tag.id === selectedTagId);
    }

    const tipsJSX = tips?.map((tip) => <Tip key = { tip.id } { ...tip } />);

    return (
        <section className = 'tip-list'>
            { fetchify(isFetched, tipsJSX) }
        </section>
    );
};
