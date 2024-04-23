import moment from 'moment';

function getDay(day = 0) {
  return moment().add(day, 'days').format('YYYY.MM.DD');
}
function getTime(day = 0, second = 0) {
  return moment()
    .add(day, 'days')
    .add(second, 'seconds')
    .format('YYYY.MM.DD HH:mm:ss');
}

export const initData = async nextSeq => {
  return {
    // 회원
    user: [
      {
        _id: await nextSeq('user'),
        email: 'kiho@test.com',
        password:
          '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '요가맨',
        phone: '01011112222',
        type: 'user',
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        birthday: '1995-04-14',
        profileImage: `yogaman.png`,
      },
      {
        _id: await nextSeq('user'),
        email: 'yogagirl@test.com',
        password:
          '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '요가걸',
        phone: '01011112222',
        type: 'user',
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        birthday: '1995-04-14',
        profileImage: `yogagirl.png`,
      },
      {
        _id: await nextSeq('user'),
        email: 'seller@test.com',
        password:
          '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '판매자',
        phone: '01011112222',
        type: 'seller',
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        birthday: '1997-03-25',
        profileImage: `icon-user-default.png`,
      },
    ],
    // 상품
    product: [
      {
        _id: await nextSeq('product'),
        seller_id: 1,
        price: 0,
        shippingFees: 0,
        show: true,
        active: true,
        name: '숲 Forest',
        quantity: 99999,
        buyQuantity: 1,
        content: '숲 테마로 명상을 진행해 보세요.',
        mainImages: [
          {
            path: `/files/02-Shimm/bg-theme-01.png`,
            name: 'bg-theme-01.png',
            originalname: 'forest.png',
          },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          background: 'linear-gradient(45deg, #B5DE13 0%, #06B7AC 100%)',
          music:
            'https://soundcloud.com/1qza8k6e3opg/gihgcldr6xby?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 1,
        price: 0,
        shippingFees: 0,
        show: true,
        active: true,
        name: '바다 Sea',
        quantity: 99999,
        buyQuantity: 1,
        content: '바다 테마로 명상을 진행해 보세요.',
        mainImages: [
          {
            path: `/files/02-Shimm/bg-theme-02.png`,
            name: 'bg-theme-02.png',
            originalname: 'sea.png',
          },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          background: 'linear-gradient(45deg, #93DADF 0%, #4E81EB 100%)',
          music:
            'https://soundcloud.com/1qza8k6e3opg/qdasktrrrqjj?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 1,
        price: 0,
        shippingFees: 0,
        show: true,
        active: true,
        name: '아침 Morning',
        quantity: 99999,
        buyQuantity: 1,
        content: '아침 테마로 명상을 진행해 보세요.',
        mainImages: [
          {
            path: `/files/02-Shimm/bg-theme-03.png`,
            name: 'bg-theme-03.png',
            originalname: 'morning.png',
          },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          background: 'linear-gradient(45deg, #60E66D 0%, #F6815B 100%)',
          music:
            'https://soundcloud.com/1qza8k6e3opg/x4cfcirlsxtp?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 1,
        price: 1000,
        shippingFees: 0,
        show: true,
        active: true,
        name: '노을 Sunset',
        quantity: 99999,
        buyQuantity: 1,
        content: '노을 테마로 명상을 진행해 보세요.',
        mainImages: [
          {
            path: `/files/02-Shimm/bg-theme-04.png`,
            name: 'bg-theme-04.png',
            originalname: 'sunset.png',
          },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          background: 'linear-gradient(45deg, #FF8541 0%, #F0B31A 100%)',
          music:
            'https://soundcloud.com/1qza8k6e3opg/ql4zikqixman?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 1,
        price: 1000,
        shippingFees: 0,
        show: true,
        active: true,
        name: '밤하늘 Night Sky',
        quantity: 99999,
        buyQuantity: 1,
        content: '밤하늘 테마로 명상을 진행해 보세요.',
        mainImages: [
          {
            path: `/files/02-Shimm/bg-theme-05.png`,
            name: 'bg-theme-05.png',
            originalname: 'nightsky.png',
          },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          background: 'linear-gradient(45deg, #9A17C8 0%, #4E81EB 100%)',
          music:
            'https://soundcloud.com/1qza8k6e3opg/umoti9kegdyo?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
      },
    ],
    // 주문
    order: [
      {
        _id: await nextSeq('order'),
        user_id: 1,
        state: 'OS020',
        products: [
          {
            _id: 1,
            seller_id: 1,
            state: 'OS020',
            name: '숲 Forest',
            image: {
              path: `/files/02-Shimm/bg-theme-01.png`,
              name: 'bg-theme-01.png',
              originalname: 'forest.png',
            },
            quantity: 1,
            price: 0,
          },
          {
            _id: 2,
            seller_id: 1,
            state: 'OS020',
            name: '바다 Sea',
            image: {
              path: `/files/02-Shimm/bg-theme-02.png`,
              name: 'bg-theme-02.png',
              originalname: 'sea.png',
            },
            quantity: 1,
            price: 0,
          },
          {
            _id: 3,
            seller_id: 1,
            state: 'OS020',
            name: '아침 Morning',
            image: {
              path: `/files/02-Shimm/bg-theme-03.png`,
              name: 'bg-theme-03.png',
              originalname: 'morning.png',
            },
            quantity: 1,
            price: 0,
          },
        ],
        cost: {
          products: 0,
          shippingFees: 0,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 0,
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },
    ],
    // 후기
    reply: [],
    // 장바구니
    cart: [],
    // 즐겨찾기/북마크
    bookmark: [],
    // QnA, 공지사항, 게시판
    post: [
      {
        _id: await nextSeq('post'),
        type: 'community',
        title: '게시물 제목',
        content: '요가 하시는 분 있나요~?',
        user: {
          _id: 1,
          name: '요가맨',
          profile: 'yogaman.png',
        },
        replies: [
          {
            _id: 1,
            user: {
              _id: 2,
              name: '요가걸',
              profile: 'yogagirl.png',
            },
            content: '요가 …짱!',
            createdAt: getTime(-2, -60 * 60 * 20),
            updatedAt: getTime(-2, -60 * 60 * 2),
          },
          {
            _id: 2,
            user: {
              _id: 2,
              name: '요가걸',
              profile: 'yogagirl.png',
            },
            content: '요가좋툐',
            createdAt: getTime(-2, -60 * 60 * 10),
            updatedAt: getTime(-2, -60 * 60 * 1),
          },
          {
            _id: 3,
            user: {
              _id: 2,
              name: '요가걸',
              profile: 'yogagirl.png',
            },
            content: '굿',
            createdAt: getTime(-2, -60 * 60 * 9),
            updatedAt: getTime(-1, -60 * 60 * 20),
          },
        ],
        createdAt: getTime(-3, -60 * 60 * 2),
        updatedAt: getTime(-3, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('post'),
        type: 'community',
        title: '게시물 제목',
        content: '피곤하네여…',
        image: 'yogagirl.png',
        user: {
          _id: 2,
          name: '요가걸',
          profile: 'yogagirl.png',
        },
        replies: [
          {
            _id: 1,
            user: {
              _id: 1,
              name: '요가맨',
              profile: '/files/02-Shimm/yogaman.png',
            },
            content: '힘내요!',
            createdAt: getTime(-2, -60 * 60 * 20),
            updatedAt: getTime(-2, -60 * 60 * 2),
          },
          {
            _id: 2,
            user: {
              _id: 1,
              name: '요가맨',
              profile: 'yogaman.png',
            },
            content: '화이토화이토',
            createdAt: getTime(-2, -60 * 60 * 10),
            updatedAt: getTime(-2, -60 * 60 * 1),
          },
          {
            _id: 3,
            user: {
              _id: 2,
              name: '요가걸',
              profile: 'yogagirl.png',
            },
            content: '밥 잘 챙겨드셔요',
            createdAt: getTime(-2, -60 * 60 * 9),
            updatedAt: getTime(-1, -60 * 60 * 20),
          },
        ],
        createdAt: getTime(-3, -60 * 60 * 2),
        updatedAt: getTime(-3, -60 * 60 * 2),
      },
    ],
    // 코드
    code: [],
    // 설정
    config: [],
  };
};
