/* Core */
import { FC } from 'react';

/* Components */
import { observer } from 'mobx-react-lite';
import { Tip } from './Tip';

/* Other */
import { useTips } from '../../hooks';
import { fetchify } from '../../helpers';
import { TipViewMode } from '../../types';
import { useStore } from '../../hooks/useStore';

export const TipList: FC<IPropTypes> = observer(({ tipViewMode }) => {
    const query = useTips();
    const { tagStore } = useStore();
    const { selectedTagId } = tagStore;
    let tips = query.data;

    if (tipViewMode === 'topic-by-tag') {
        tips = tips?.filter((tip) => tip.tag.id === selectedTagId);
    }

    const tipsJSX = tips?.map((tip) => <Tip key = { tip.id } { ...tip } />);

    return <section className = 'tip-list'>{ fetchify(query.isFetched, tipsJSX) }</section>;
});

interface IPropTypes {
    tipViewMode: TipViewMode;
}
