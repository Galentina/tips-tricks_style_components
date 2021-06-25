import { sortByDate } from '../sortByDate';

const fakeData = [
    {
        id:      '',
        author:  '',
        preview: '',
        body:    '',
        title:   '',
        created: '2021-05-19T19:29:11.055Z',
        tag:     {
            id:   '',
            name: '',
        },
    },
    {
        id:      '',
        author:  '',
        preview: '',
        body:    '',
        title:   '',
        created: '2021-04-19T18:37:08.005Z',
        tag:     {
            id:   '',
            name: '',
        },
    },
    {
        id:      '',
        author:  '',
        preview: '',
        body:    '',
        title:   '',
        created: '2021-04-19T18:37:08.005Z',
        tag:     {
            id:   '',
            name: '',
        },
    },
];

describe('sortByDate Test', () => {
    test('Should return difference between dates', () => {
        // @ts-ignore
        // eslint-disable-next-line max-len
        // const expectedResult = new Date(fakeData[ 1 ].created).getMilliseconds() - new Date(fakeData[ 0 ].created).getMilliseconds();
        // const sortResult = sortByDate(fakeData[ 0 ], fakeData[ 1 ]);
        // expect(sortResult).toEqual(expectedResult);
        expect(sortByDate(fakeData[ 0 ], fakeData[ 1 ])).toBeLessThan(0);
        expect(sortByDate(fakeData[ 2 ], fakeData[ 0 ])).toBeGreaterThan(0);
        expect(sortByDate(fakeData[ 1 ], fakeData[ 2 ])).toBe(0);
    });
});
