import { fetchify } from '../fetchify';

const fakeData = {
    isFetched1: false,
    isFetched2: true,
    content1:   'content',
    content2:   '',
};

describe('fetchify Test', () => {
    test('Should return Загрузка... of content', () => {
        const sortResult1 = fetchify(fakeData.isFetched1, fakeData.content1);
        const sortResult2 = fetchify(fakeData.isFetched1, fakeData.content2);
        const sortResult3 = fetchify(fakeData.isFetched2, fakeData.content1);
        const sortResult4 = fetchify(fakeData.isFetched2, fakeData.content2);
        expect(sortResult1).toBe('content');
        expect(sortResult2).toBe('Загрузка...');
        expect(sortResult3).toBe('content');
        expect(sortResult4).toBe(null);
    });
});
