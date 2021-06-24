// @ts-nocheck
/* eslint-disable node/no-unpublished-import */
// Core
import { renderHook } from '@testing-library/react-hooks';
import nock from 'nock';
import { QueryClient, QueryClientProvider } from 'react-query';

// Other
import { useTipById } from '../useTipById';

const fakeData = {
    id:      'fd765bc7-4365-4ffb-aa02-e4cf5c148f4c',
    author:  'Лектрум',
    preview: 'Не var а const и let',
    body:    'Dolorem1 nihil ratione eum. Quidem qui ut eos. Nisi dolorem sed totam aliquid. Similique quia perferendis voluptatem est quaerat atque. Quia labore ut. Incidunt culpa et illum. Fugiat at reiciendis voluptatem eum consequatur dolore cumque voluptate accusamus. Omnis rerum aut cum perferendis ipsam sint quasi eos nemo. Enim mollitia magni id velit facilis repellat quae voluptatem corporis. Quo doloremque voluptatum. Corporis sed eum sunt repudiandae. Doloribus excepturi quam dolorem quo maxime minus suscipit doloremque exercitationem. Enim est est ipsum laborum architecto. Illum ipsum rerum harum possimus quis dignissimos sed quo. At occaecati sit vel nostrum et consequuntur rerum voluptatibus totam. Odit voluptas corrupti odio qui rerum. Consectetur dolores quo laudantium enim quia laboriosam nihil. Magnam tenetur placeat optio. Eveniet ad asperiores accusamus eveniet libero officiis nulla quas distinctio. Cupiditate animi et exercitationem reprehenderit incidunt velit error non debitis. Accusamus quae qui a eos aut dignissimos aut autem qui. A voluptatem ratione ipsam impedit non hic sed velit ut. Occaecati explicabo commodi. Placeat ullam dolores veritatis et modi. Qui quidem id voluptatum inventore similique placeat. Nostrum velit est in sequi libero recusandae incidunt ab. Nobis cum et asperiores quia cupiditate repellat ut quaerat. Tempora qui asperiores et eaque in qui ea et. Reiciendis eum dicta eos velit et suscipit quis in. Recusandae dolor molestiae non eos dolorum perferendis nobis. Rerum dolores unde voluptas et odio numquam excepturi consequatur eligendi. Magni quo odio magnam similique non. Dolorum dignissimos rerum id in. Quasi et voluptatem qui molestiae et. Qui harum dolorem tempore maiores. Harum veniam quasi quam in. Ratione et voluptatem ut dolorem modi. Sequi error eveniet beatae velit omnis. Iure repellendus nisi est quaerat voluptas accusantium fuga nemo. Unde quis voluptatem laboriosam et.',
    title:   'Пользуйся правильными переменными',
    created: '2021-03-27T16:38:40.011Z',
    tag:     {
        id:   '5184d0d1-5e4d-4437-9967-8085807fc995',
        name: 'JavaScript',
    },
};

nock('https://lab.lectrum.io/rtx/api/tips-and-tricks')
    .get(`/tips/${fakeData.id}`)
    .once()
    .reply(200, fakeData, { 'Access-Control-Allow-Origin': '*' });

describe('useTipById hook', () => {
    let wrapper = null;

    beforeAll(() => {
        const queryClient = new QueryClient();
        wrapper = ({ children }) => (
            <QueryClientProvider client = { queryClient }>
                { children }
            </QueryClientProvider>
        );
    });

    it('should return one tip object', async () => {
        const { result, waitFor } = renderHook(() => useTipById(fakeData.id), { wrapper });

        await waitFor(() => {
            return result.current.isSuccess;
        });

        expect(result.current.data).toEqual(fakeData);
    });
});
