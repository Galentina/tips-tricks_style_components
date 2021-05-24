// @ts-nocheck
/* Core */
import { FC, useContext } from 'react';

/* Components */
import { Tip } from './Tip';

/* API */
import { useTips } from '../../hooks';

/* Other */
import { TagContext } from '../../lib';

export const TipList: FC = ({ tipViewMode }) => {
    const [selectedTagId] = useContext(TagContext);
    const { data: source } = useTips();

    let tips = source;

    if (tipViewMode === 'topics-by-tag') {
        tips = source?.filter((tip) => tip.tag.id === selectedTagId);
    }

    const tipsJSX = tips?.map((tip) => <Tip key = { tip.id } { ...tip } />);

    return (
        <section className = 'tip-list'>
            { tipsJSX }
        </section>
    );
};
