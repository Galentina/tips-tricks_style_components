/* Core */
import { FC } from 'react';
import { observer } from 'mobx-react-lite';

/* Components */
import { Tip } from './Tip';

/* Other */
import { useStore, useTips } from '../../hooks';
import { fetchify } from '../../helpers';
import { TipViewMode } from '../../types';

export const TipList: FC<IPropTypes> = observer(({ tipViewMode }) => {
    const { tagStore } = useStore();
    const query = useTips();

    let tips = query.data;
    const { selectedTagId } = tagStore;

    if (tipViewMode === 'topic-by-tag') {
        tips = tips?.filter((tip) => tip.tag.id === selectedTagId);
    }

    const tipsJSX = tips?.map((tip) => <Tip key = { tip.id } { ...tip } />);

    return <section className = 'tip-list'>{ fetchify(query.isFetched, tipsJSX) }</section>;
});

interface IPropTypes {
    tipViewMode: TipViewMode;
}
