import useCustomAxios from '@hooks/useCustomAxios';
import { StyledFeed } from '@pages/community/feed/Feed.style';
import FeedList from '@pages/community/feed/FeedList';
import FeedCreate from '@pages/community/feed/create/FeedCreate';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { produce } from 'immer';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';
import Loading from '@components/loading/Loading';

function Feed() {
  const axios = useCustomAxios();
  const queryClient = useQueryClient();

  const { data, fetchNextPage, isFetching, isLoading } = useInfiniteQuery({
    queryKey: ['community'],
    queryFn: ({ pageParam = 1 }) =>
      axios.get('/posts?type=community', {
        params: {
          page: pageParam,
          limit: 2,
          sort: JSON.stringify({ _id: -1 }),
        },
      }),
    select: response => {
      response.items = response.pages.map(page => page.data.item);
      response.totalPages = response.pages.at(-1).data.pagination.totalPages;
      response.page = response.pages.at(-1).data.pagination.page;
      return response;
    },
    getNextPageParam: lastPage => {
      const pagination = lastPage.data.pagination;
      let nextPage =
        pagination.page < pagination.totalPages ? pagination.page + 1 : false;
      return nextPage;
    },
  });

  let list = [];
  let hasNext = false;
  if (data) {
    list = _.flatten(data.items).map(item => {
      return (
        <FeedList key={item._id} item={item} handleDelete={handleDelete} />
      );
    });
    hasNext = data.page < data.totalPages;
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`/posts/${id}`);

      const newPagesArray =
        produce(data.pages, draft =>
          draft.forEach(page => {
            _.remove(page.data.item, item => item._id === id);
          }),
        ) || [];

      queryClient.setQueryData(['community'], data => ({
        pages: newPagesArray,
        pageParams: data.pageParams,
      }));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledFeed>
          <InfiniteScroll
            key={0}
            pageStart={1}
            loadMore={fetchNextPage}
            hasMore={!isFetching && hasNext}
            loader={<Loading key={0} />}
          >
            {list}
          </InfiniteScroll>

          <FeedCreate />
        </StyledFeed>
      )}
    </>
  );
}

export default Feed;
