/**
 * 틴트라이프 지점 설정 파일
 * 새 가맹점 사이트를 만들 때 이 파일만 수정하면 됩니다.
 */

const branchConfig = {
  brand: {
    name: '틴트라이프',
    nameEn: 'TINTLIFE',
    tagline: '허브로 완성하는 건강한 컬러 라이프',
    description:
      '자연에서 온 허브 성분으로 두피와 모발을 건강하게 지키는\n프리미엄 헤어 컬러 살롱입니다.',
  },

  branch: {
    name: '수원광교 본점',
    fullName: '틴트라이프 수원광교 본점',
    phone: '0507-1432-0329',
    address: '경기 수원시 영통구 대학1로8번길 76 1층',
    hours: '09:00 ~ 18:00',
  },

  links: {
    booking: 'https://booking.naver.com/booking/13/bizes/480522',
    blog: 'https://blog.naver.com/tintlife',
    instagram: 'https://www.instagram.com/tint.life',
    kakao: '',
  },

  nav: [
    { label: '브랜드 소개', href: '#about' },
    { label: '시술 안내', href: '#services' },
    { label: '가격표', href: '#pricing' },
    { label: '고객 후기', href: '#reviews' },
    { label: '오시는 길', href: '#location' },
  ],

  pricing: [
    {
      category: '뿌리염색',
      items: [
        { name: '베이직', desc: '1cm 이하', price: 35000 },
        { name: '프리미엄', desc: '1cm 이하', price: 48000 },
      ],
    },
    {
      category: '염색 Short',
      items: [
        { name: '베이직', desc: '목선까지', price: 45000 },
        { name: '프리미엄', desc: '목선까지', price: 58000 },
      ],
    },
    {
      category: '염색 Medium',
      items: [
        { name: '베이직', desc: '어깨라인', price: 55000 },
        { name: '프리미엄', desc: '어깨라인', price: 68000 },
      ],
    },
    {
      category: '염색 Long',
      items: [
        { name: '베이직', desc: '어깨라인 아래', price: 65000 },
        { name: '프리미엄', desc: '어깨라인 아래', price: 78000 },
      ],
    },
  ],

  hero: {
    slides: [
      {
        eyebrow: '수원광교 본점',
        title: '허브로 완성하는\n건강한 컬러 라이프',
        subtitle: '자연유래 허브 성분으로 두피 자극 없이\n선명하고 지속력 있는 컬러를 경험하세요',
        bg: 'from-[#1E0E08] via-[#2C1810] to-[#3D2010]',
      },
      {
        eyebrow: '새치 고민 해결',
        title: '새치, 이제는\n걱정하지 마세요',
        subtitle: '완벽한 새치 커버로 자연스럽고\n생기 있는 헤어를 되찾으세요',
        bg: 'from-[#0E1520] via-[#1A2535] to-[#2C1810]',
      },
      {
        eyebrow: '맞춤 컬러 제안',
        title: '당신만을 위한\n맞춤 컬러',
        subtitle: '전문 컬리스트가 피부톤과 스타일에 맞는\n최적의 컬러를 제안해드립니다',
        bg: 'from-[#1A1A1A] via-[#2C2218] to-[#2C1810]',
      },
    ],
  },

  about: {
    title: '틴트라이프만의\n염색 전문 케어',
    description:
      '틴트라이프 광교경기대점은 염색 전문 헤어샵입니다.\n\n커트 없이 오직 염색에만 집중합니다.\n허브 6종 자연 성분을 담은 프리미엄 염모제로\n두피 자극 없이 선명하고 오래 지속되는 컬러를 완성합니다.\n\n붉은기 없는 고급스러운 브라운 컬러,\n새치를 자연스럽게 덮어주는 맞춤 컬러링까지.\n전문 컬리스트와의 1:1 상담으로\n나에게 꼭 맞는 컬러를 찾아드립니다.',
    features: [
      { symbol: '✦', title: '허브 성분', desc: '자연유래 허브 추출물 함유' },
      { symbol: '◆', title: '전문 컬리스트', desc: '1:1 맞춤 컬러 상담 제공' },
      { symbol: '❖', title: '두피 케어', desc: '시술 중 두피 자극 최소화' },
      { symbol: '✿', title: '지속력', desc: '선명하고 오래 가는 컬러' },
    ],
  },

  services: [
    {
      id: 'greyhair',
      title: '새치커버',
      titleEn: 'Grey Hair Coverage',
      description:
        '허브 성분이 두피를 보호하며 완벽한 새치 커버를 실현합니다. 자극 없이 자연스러운 컬러로 젊고 건강한 모발을 유지하세요.',
      symbol: '✦',
      image: '/img/root_color.jpg',
    },
    {
      id: 'tonedown',
      title: '톤다운',
      titleEn: 'Tone Down',
      description:
        '과도한 밝기를 자연스럽게 낮춰 깊이 있는 컬러를 완성합니다. 허브의 영양으로 모발을 케어하면서 풍성하고 윤기있는 헤어를.',
      symbol: '◆',
      image: '/img/tone_down.jpg',
    },
    {
      id: 'carob',
      title: '케롭브라운',
      titleEn: 'Carob Brown',
      description:
        '케롭 열매에서 영감받은 따뜻하고 고급스러운 브라운 컬러. 동양인 피부에 가장 잘 어울리는 자연스러운 브라운 계열을 경험하세요.',
      symbol: '❖',
      image: '/img/kerob_color.jpg',
    },
  ],

  /**
   * 블로그 후기 목록
   * 새 후기를 추가하려면 아래 배열에 항목을 추가하세요.
   * thumbnail: null 이면 기본 플레이스홀더가 표시됩니다.
   * thumbnail: '/images/review-1.jpg' 처럼 이미지 경로를 지정할 수 있습니다.
   */
  reviews: [
    {
      id: 1,
      title: '새치가 말끔히 커버됐어요! 틴트라이프 수원광교 방문 후기',
      thumbnail: null,
      date: '2025.01.15',
      url: 'https://blog.naver.com/tintlife',
      tags: ['새치커버', '수원광교'],
    },
    {
      id: 2,
      title: '두피 자극 없는 허브 염색, 틴트라이프에서 처음 경험해봤어요',
      thumbnail: null,
      date: '2025.01.08',
      url: 'https://blog.naver.com/tintlife',
      tags: ['허브염색', '두피케어'],
    },
    {
      id: 3,
      title: '케롭브라운으로 환절기 컬러 변신 성공! 광교 헤어샵 추천',
      thumbnail: null,
      date: '2024.12.28',
      url: 'https://blog.naver.com/tintlife',
      tags: ['케롭브라운', '광교헤어샵'],
    },
    {
      id: 4,
      title: '임산부도 안심하고 받을 수 있는 천연 염색 전문 살롱',
      thumbnail: null,
      date: '2024.12.20',
      url: 'https://blog.naver.com/tintlife',
      tags: ['천연염색', '임산부'],
    },
    {
      id: 5,
      title: '수원광교 미용실 재방문 후기 — 케어 서비스가 너무 좋아요',
      thumbnail: null,
      date: '2024.12.15',
      url: 'https://blog.naver.com/tintlife',
      tags: ['재방문', '수원광교'],
    },
    {
      id: 6,
      title: '50대 새치 고민 해결! 자연스러운 컬러가 너무 마음에 들어요',
      thumbnail: null,
      date: '2024.12.10',
      url: 'https://blog.naver.com/tintlife',
      tags: ['새치커버', '5060헤어'],
    },
  ],
};

export default branchConfig;
