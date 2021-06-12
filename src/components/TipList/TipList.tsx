/* Core */
import { FC, useContext } from 'react';
import { TipViewMode } from '../../types';

/* Components */
import { Tip } from './Tip';

/* Other */
import { TagContext } from '../../lib';
import { useTips } from '../../hooks';
import { fetchify } from '../../helpers';

type Props = {
    tipViewMode: TipViewMode;
};

export const TipList: FC<Props> = ({ tipViewMode }) => {
    const query = useTips();
    const [selectedTagId] = useContext<any>(TagContext);
    let tips = query.data;

    if (tipViewMode === 'topic-by-tag') {
        tips = tips?.filter((tip) => tip.tag.id === selectedTagId);
    }

    const tipsJSX = tips?.map((tip) => <Tip key = { tip.id } { ...tip } />);

    return <section className = 'tip-list'>{ fetchify(query.isFetched, tipsJSX) }</section>;
};
