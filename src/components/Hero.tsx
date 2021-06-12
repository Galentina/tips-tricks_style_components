/* Components */
import { FC } from 'react';
import { TipViewMode } from '../types';
import { Tags } from './Tags';

type Props = {
    tipViewMode: TipViewMode;
};

export const Hero: FC<Props> = ({ tipViewMode }) => {
    const subTitle = tipViewMode === 'all-topics' ? 'Все темы' : 'По тегу';

    return (
        <section className = 'hero'>
            <div className = 'title'>
                <h1>Типсы и Триксы</h1>
                <h2>{ subTitle }</h2>
            </div>
            <Tags tipViewMode = { tipViewMode } />
        </section>
    );
};
