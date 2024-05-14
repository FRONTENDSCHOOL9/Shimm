import Loading from '@components/loading/Loading';
import useCustomAxios from '@hooks/useCustomAxios';
import { ReplySection } from '@pages/community/feed/reply/Reply.style';
import ReplyItem from '@pages/community/feed/reply/ReplyItem';
import ReplyNew from '@pages/community/feed/reply/ReplyNew';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import useUserStore from '@zustand/user';
import { produce } from 'immer';
import _ from 'lodash';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

function ReplyList({ id, pid }) {
  const axios = useCustomAxios();
  const { user } = useUserStore();
  const queryClient = useQueryClient();

  const { data, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['replies'],
    queryFn: ({ pageParam = 1 }) =>
      axios.get(`/posts/${pid}/replies`, {
        params: {
          page: pageParam,
          limit: 5,
          sort: JSON.stringify({ createdAt: -1 }),
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
    list = _.flatten(data.items).map((item, index) => {
      return <ReplyItem key={index} item={item} handleDelete={handleDelete} />;
    });
    hasNext = data.page < data.totalPages;
  }

  async function handleDelete(reply_id) {
    await axios.delete(`/posts/${pid}/replies/${reply_id}`);

    const newPagesArray =
      produce(data.pages, draft =>
        draft.forEach(page => {
          _.remove(page.data.item, item => item._id === reply_id);
        }),
      ) || [];

    queryClient.setQueryData(['replies'], data => ({
      pages: newPagesArray,
      pageParams: data.pageParams,
    }));
  }

  return (
    <ReplySection>
      <InfiniteScroll
        key={0}
        pageStart={1}
        loadMore={fetchNextPage}
        hasMore={!isFetching && hasNext}
        loader={<Loading key={0} />}
      >
        {list}
      </InfiniteScroll>
      {user && <ReplyNew user={user} id={id} />}
    </ReplySection>
  );
}

ReplyList.propTypes = {
  id: PropTypes.number.isRequired,
  pid: PropTypes.number,
};

export default ReplyList;
