import { sortByDate } from '../sortByDate';

const fakeData = [
    {
        id:      '20b371a4-8536-48c2-a0ed-ff22496bf6f8',
        author:  'аноним',
        preview: 'Семь раз отмерь — один раз отрежь v4.5.8',
        body:    'Wherever possible, try to put as much of the logic for calculating a new state into the appropriate reducer, rather than in the code that prepares and dispatches the action (like a click handler). This helps ensure that more of the actual app logic is easily testable, enables more effective use of time-travel debugging, and helps avoid common mistakes that can lead to mutations and bugs.\n\nThere are valid cases where some or all of the new state should be calculated first (such as generating a unique ID), but that should be kept to a minimum.',
        title:   'Повторение мать учения! v4.5.8',
        created: '2021-05-19T19:29:11.055Z',
        tag:     {
            id:   '9c0f285c-79c2-4975-b6b8-9fe8c6661446',
            name: 'React',
        },
    },
    {
        id:      'd7434a4f-472a-4591-8700-1ba2d0c036af',
        author:  'аноним',
        preview: 'Семь раз отмерь — один раз отрежь v9.5.8',
        body:    'similique ex reprehenderit quisquam debitis quam enim voluptate aut dolor odit voluptas impedit nihil neque placeat eum blanditiis natus velit reprehenderit sed aperiam provident cumque harum vel qui iure amet rerum laboriosam pariatur labore sit',
        title:   'Повторение мать учения! v9.5.8',
        created: '2021-04-19T18:37:08.005Z',
        tag:     {
            id:   '9c0f285c-79c2-4975-b6b8-9fe8c6661446',
            name: 'React',
        },
    },
];

describe('sortByDate Test', () => {
    test('Should return difference between dates', () => {
        // @ts-ignore
        // eslint-disable-next-line max-len
        const expectedResult = new Date(fakeData[ 1 ].created).getMilliseconds() - new Date(fakeData[ 0 ].created).getMilliseconds();
        const sortResult = sortByDate(fakeData[ 0 ], fakeData[ 1 ]);
        expect(sortResult).toEqual(expectedResult);
    });
});
