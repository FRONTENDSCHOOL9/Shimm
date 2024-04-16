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
        extra: {
          birthday: '1995-04-14',
        },
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
        extra: {
          birthday: '1997-03-25',
        },
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
        mainImages: [
          {
            path: `/files/02-Shimm/bg-theme-02.png`,
            name: 'bg-theme-03.png',
            originalname: 'sea.png',
          },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          background: 'linear-gradient(45deg, #93DADF 0%, #4E81EB 100%)',
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
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 1,
        price: 0,
        shippingFees: 0,
        show: true,
        active: true,
        name: '밤하늘 Night Sky',
        quantity: 99999,
        buyQuantity: 1,
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
          {
            _id: 5,
            seller_id: 1,
            state: 'OS020',
            name: '밤하늘 Night Sky',
            image: {
              path: `/files/02-Shimm/bg-theme-05.png`,
              name: 'bg-theme-05.png',
              originalname: 'nightsky.png',
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
    post: [],
    // 코드
    code: [],
    // 설정
    config: [],
  };
};
