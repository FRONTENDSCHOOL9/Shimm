import Button from '@components/button/Button';
import Loading from '@components/loading/Loading';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import FeedList from '@pages/community/feed/FeedList';
import { NoPost } from '@pages/mypage/myactivity/MyActivity.style';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import useUserStore from '@zustand/user';
import { produce } from 'immer';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';
import { useNavigate } from 'react-router-dom';

function MyPosts() {
  const { user } = useUserStore();
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, fetchNextPage, isFetching, isLoading } = useInfiniteQuery({
    queryKey: ['myposts'],
    queryFn: ({ pageParam = 1 }) =>
      axios.get(`/posts/users/${user._id}?type=community`, {
        params: {
          page: pageParam,
          limit: 3,
          sort: JSON.stringify({ _id: -1 }),
        },
      }),
    select: response => {
      response = {
        items: response.pages.map(page => page.data.item.item),
        totalPages: response.pages.at(-1).data.item.pagination.totalPages,
        page: response.pages.at(-1).data.item.pagination.page,
      };
      return response;
    },

    getNextPageParam: lastPage => {
      const pagination = lastPage.data.item.pagination;
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

  console.log(data);
  async function handleDelete(id) {
    try {
      await axios.delete(`/posts/${id}`);

      const newPagesArray =
        produce(data.items, draft =>
          draft.forEach(item => {
            _.remove(item.item, item => item._id === id);
          }),
        ) || [];

      queryClient.setQueryData(['myposts'], data => ({
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
      ) : data.items[0].length === 0 ? (
        <NoPost>
          <p>작성한 글이 없습니다.</p>
          <Button
            size="full"
            bgColor="dark"
            handleClick={() => navigate('/community/new')}
          >
            글쓰러 가기
          </Button>
        </NoPost>
      ) : (
        <InfiniteScroll
          key={0}
          pageStart={1}
          loadMore={fetchNextPage}
          hasMore={!isFetching && hasNext}
          loader={<Loading key={0} />}
        >
          {list}
        </InfiniteScroll>
      )}
    </>
  );
}

export default MyPosts;
