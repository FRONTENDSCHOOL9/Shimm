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
        email: 'user@test.com',
        password:
          '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '요가맨',
        phone: '01011112222',
        type: 'user',
        createdAt: getTime(-100, -60 * 60 * 4),
        updatedAt: getTime(-100, -60 * 60 * 4),
        birthday: '1995-04-14',
        profileImage: `yogaman.png`,
      },
      {
        _id: await nextSeq('user'),
        email: 'cloud@test.com',
        password:
          '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '솜사탕',
        phone: '01022223333',
        type: 'user',
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        birthday: '1995-04-14',
        profileImage: `cotton-candy.jpg`,
      },
      {
        _id: await nextSeq('user'),
        email: 'jibmusil@test.com',
        password:
          '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '집무실',
        phone: '01033334444',
        type: 'user',
        createdAt: getTime(-100, -60 * 60 * 2),
        updatedAt: getTime(-100, -60 * 60 * 2),
        birthday: '2003-01-15',
        profileImage: `jibmusil.jpg`,
      },
      {
        _id: await nextSeq('user'),
        email: 'ham@test.com',
        password:
          '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '햄찌',
        phone: '01044445555',
        type: 'user',
        createdAt: getTime(-100, -60 * 60 * 1),
        updatedAt: getTime(-100, -60 * 60 * 1),
        birthday: '1987-12-31',
        profileImage: `ham.jpg`,
      },
      {
        _id: await nextSeq('user'),
        email: 'bacon@test.com',
        password:
          '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '베찌',
        phone: '01055556666',
        type: 'user',
        createdAt: getTime(-100, -60 * 60 * 1),
        updatedAt: getTime(-100, -60 * 60 * 1),
        birthday: '1993-07-06',
        profileImage: `bacon.png`,
      },
      {
        _id: await nextSeq('user'),
        email: 'admin@test.com',
        password:
          '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '관리자',
        phone: '01066667777',
        type: 'seller',
        createdAt: getTime(-100, -60 * 60 * 5),
        updatedAt: getTime(-100, -60 * 60 * 5),
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
            _id: 4,
            seller_id: 1,
            state: 'OS020',
            name: '노을 Sunset',
            image: {
              path: `/files/02-Shimm/bg-theme-04.png`,
              name: 'bg-theme-04.png',
              originalname: 'sunset.png',
            },
            quantity: 1,
            price: 0,
          },
        ],
        cost: {
          products: 1000,
          shippingFees: 0,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 1000,
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
        content: `"어제를 후회하기보다는 내일을 준비하라." - 로버트 H. 슈러러
        오늘 하루 너무 피곤했지만 내일을 위해 다시금 힘을내봅니다!`,
        type: 'community',
        user: {
          _id: 4,
          name: '햄찌',
          profile: 'ham.jpg',
        },
        createdAt: '2024.04.23 09:00:00',
        updatedAt: '2024.04.23 09:00:00',
      },
      {
        _id: await nextSeq('post'),
        content: `'언제 어디서나 할 수 있는 명상법
        어디에서나 1분이면 할 수 있는 명상법이 있다. 기분을 전환하거나 머리를 비우고 싶은 일이 생겼을 때 시도하면 좋다. 우선 자세는 신경 쓰지 말고 눈을 감은 채 자신의 호흡에 의식을 집중한다. 숨을 들이마셨을 때 그 숨이 몸의 어느 부위로 들어가는지, 가슴인지 배인지, 양은 얼마나 되는지에 의식을 집중하면서 편안한 속도로 세번 호흡한다. 이때 자기가 어떤 식으로 호흡하는지에만 의식을 집중한다. 세 번 호흡이 끝나면 그대로 계속 호흡을 관찰한다. 1분에서 3분 동안 시간이 허락하는 범위 안에서 자신의 호흡에 집중한다. 호흡할 때마다 호흡이 점점 더 깊어질 것이다. 호흡을 관찰하면 '지금 여기’에 의식을 집중할 수 있다. 또 호흡에 집중하는 동안은 생각을 내려놓을 수 있어서 기분 전환이 가능하다.'`,
        type: 'community',
        user: {
          _id: 2,
          name: '솜사탕',
          profile: 'cotton-candy.jpg',
        },
        replies: [
          {
            _id: 1,
            user: {
              _id: 3,
              name: '집무실',
              profile: 'jibmusil.jpg',
            },
            content: '퍼가요~♡',
            createdAt: '2024.04.23 14:05:00',
            updatedAt: '2024.04.23 14:05:00',
          },
          {
            _id: 2,
            user: {
              _id: 1,
              name: '요가맨',
              profile: 'yogaman.png',
            },
            content: '우아ㅇㅏ....ㅇ 너무 좋다',
            createdAt: '2024.04.23 21:00:00',
            updatedAt: '2024.04.23 21:00:00',
          },
          {
            _id: 3,
            user: {
              _id: 5,
              name: '베찌',
              profile: 'bacon.png',
            },
            content: '읽지는 않았지만 좋아요',
            createdAt: '2024.04.23 21:07:00',
            updatedAt: '2024.04.23 21:07:00',
          },
        ],
        createdAt: '2024.04.23 14:00:00',
        updatedAt: '2024.04.23 14:00:00',
      },
      {
        _id: await nextSeq('post'),
        content: `하늘이 너무 예뻐서 공유해요`,
        type: 'community',
        extra: {
          image: 'sky.jpeg',
        },
        user: {
          _id: 5,
          name: '베찌',
          profile: 'bacon.jpg',
        },
        replies: [
          {
            _id: 1,
            user: {
              _id: 2,
              name: '솜사탕',
              profile: 'cotton-candy.jpg',
            },
            content: '우아ㅇㅏ....ㅇ 어디죠?!',
            createdAt: '2024.04.23 19:00:00',
            updatedAt: '2024.04.23 19:00:00',
          },
        ],
        createdAt: '2024.04.23 16:25:00',
        updatedAt: '2024.04.23 16:25:00',
      },
      {
        _id: await nextSeq('post'),
        content: `이솝 인센스 좋네요! 포장만 뜯었는데도 향이 엄청 많이 나요 ~ 추천 합니다 !!`,
        type: 'community',
        extra: {
          image: 'aesop.png',
        },
        user: {
          _id: 2,
          name: '솜사탕',
          profile: 'cotton-candy.jpg',
        },
        replies: [
          {
            _id: 1,
            user: {
              _id: 5,
              name: '햄찌',
              profile: 'ham.png',
            },
            content: '음식 냄새 뺄 때 좋겠네요 추천 감사합니다',
            createdAt: '2024.04.24 11:31:00',
            updatedAt: '2024.04.24 11:31:00',
          },
        ],
        createdAt: '2024.04.24 11:00:00',
        updatedAt: '2024.04.24 11:00:00',
      },
      {
        _id: await nextSeq('post'),
        content: `하늘이 너무 예뻐서 공유해요`,
        type: 'community',
        extra: {
          image: 'sky.jpeg',
        },
        user: {
          _id: 5,
          name: '베찌',
          profile: 'bacon.png',
        },
        replies: [
          {
            _id: 1,
            user: {
              _id: 2,
              name: '솜사탕',
              profile: 'cotton-candy.jpg',
            },
            content: '우아ㅇㅏ....ㅇ 어디죠?!',
            createdAt: '2024.04.24 18:32:00',
            updatedAt: '2024.04.24 18:32:00',
          },
        ],
        createdAt: '2024.04.24 18:31:00',
        updatedAt: '2024.04.24 18:31:00',
      },
      {
        _id: await nextSeq('post'),
        content: `오설록... 좋아하시나요? 😎`,
        type: 'community',
        extra: {
          image: 'osulloc.png',
        },
        user: {
          _id: 5,
          name: '집무실',
          profile: 'jibmusil.jpg',
        },
        replies: [
          {
            _id: 1,
            user: {
              _id: 1,
              name: '요가맨',
              profile: 'yogaman.png',
            },
            content: '집무실에 비치되나요~? 기대됩니다',
            createdAt: '2024.04.24 20:10:00',
            updatedAt: '2024.04.24 20:10:00',
          },
          {
            _id: 1,
            user: {
              _id: 2,
              name: '솜사탕',
              profile: 'cotton-candy.png',
            },
            content: '죠아요~~',
            createdAt: '2024.04.24 21:11:00',
            updatedAt: '2024.04.24 21:11:00',
          },
        ],
        createdAt: '2024.04.24 19:58:00',
        updatedAt: '2024.04.24 19:58:00',
      },
      {
        _id: await nextSeq('post'),
        content: `집에서 마사지샵 느낌 내기 참 쉽쥬?`,
        type: 'community',
        extra: {
          image: 'massage.png',
        },
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
              name: '솜사탕',
              profile: 'cotton-candy.jpg',
            },
            content: '와 저도 이거 사고싶었는데!! 사용 후기도 부탁드려요~',
            createdAt: '2024.04.24 20:56:00',
            updatedAt: '2024.04.24 20:56:00',
          },
        ],
        createdAt: '2024.04.24 20:45:00',
        updatedAt: '2024.04.24 20:45:00',
      },
      {
        _id: await nextSeq('post'),
        content: `평소에 10분씩 명상하다가 오늘 20분했는데 온갖 서터레스 다 날아가는 것 같아요!!
        여러분들도 조금씩 시간 늘려보세요`,
        type: 'community',
        extra: {
          image: 'insense.jpeg',
        },
        user: {
          _id: 4,
          name: '햄찌',
          profile: 'ham.jpg',
        },
        replies: [
          {
            _id: 1,
            user: {
              _id: 1,
              name: '요가맨',
              profile: 'yogaman.png',
            },
            content: '오 저도 오늘 함 늘려볼게요',
            createdAt: '2024.04.25 02:38:00',
            updatedAt: '2024.04.25 02:38:00',
          },
        ],
        createdAt: '2024.04.24 20:45:00',
        updatedAt: '2024.04.25 01:30:00',
      },
      {
        _id: await nextSeq('post'),
        content: `편안`,
        type: 'meditation',
        extra: {
          theme: '숲 Forest',
          background: 'linear-gradient(45deg, #B5DE13 0%, #06B7AC 100%)',
          time: '10분',
        },
        user: {
          _id: 1,
          name: '요가맨',
          profile: 'yogaman.png',
        },
        createdAt: '2024.04.23 09:00:00',
        updatedAt: '2024.04.23 09:00:00',
      },
      {
        _id: await nextSeq('post'),
        content: `집중이 잘 됐어요`,
        type: 'meditation',
        extra: {
          theme: '바다 Sea',
          background: 'linear-gradient(45deg, #93DADF 0%, #4E81EB 100%)',
          time: '30분',
        },
        user: {
          _id: 1,
          name: '요가맨',
          profile: 'yogaman.png',
        },
        createdAt: '2024.04.24 10:00:00',
        updatedAt: '2024.04.24 10:00:00',
      },
      {
        _id: await nextSeq('post'),
        content: `마음의 안정`,
        type: 'meditation',
        extra: {
          theme: '아침 Morning',
          background: 'linear-gradient(45deg, #60E66D 0%, #F6815B 100%)',
          time: '5분',
        },
        user: {
          _id: 1,
          name: '요가맨',
          profile: 'yogaman.png',
        },
        createdAt: '2024.04.24 22:00:00',
        updatedAt: '2024.04.24 22:00:00',
      },
      {
        _id: await nextSeq('post'),
        content: `명상 최고`,
        type: 'meditation',
        extra: {
          theme: '노을 Sunset',
          background: 'linear-gradient(45deg, #FF8541 0%, #F0B31A 100%)',
          time: '1시간',
        },
        user: {
          _id: 1,
          name: '요가맨',
          profile: 'yogaman.png',
        },
        createdAt: '2024.04.25 01:00:00',
        updatedAt: '2024.04.25 01:00:00',
      },
    ],
    // 코드
    code: [],
    // 설정
    config: [],
  };
};
