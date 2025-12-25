/*********************************
 * 🦠 바이러스 몬스터
 *********************************/
const virusMonsters = [
  // 하급
  {
    id: "virus_low_1",
    faction: "virus",
    tier: "low",
    name: "침투 포자",
    img: "assets/virus/virus_low_1.png",
    atk: 7,
    hp: 16,
    effect: "없음"
  },
  {
    id: "virus_low_2",
    faction: "virus",
    tier: "low",
    name: "광대 바이러스",
    img: "assets/virus/virus_low_2.png",
    atk: 6,
    hp: 18,
    effect: "없음"
  },
  {
    id: "virus_low_3",
    faction: "virus",
    tier: "low",
    name: "점액 생명체",
    img: "assets/virus/virus_low_3.png",
    atk: 8,
    hp: 14,
    effect: "플레이어 공격 시 표식(2턴)"
  },

  // 중급
  {
    id: "virus_mid_1",
    faction: "virus",
    tier: "mid",
    name: "감염 탐사체",
    img: "assets/virus/virus_mid_1.png",
    atk: 9,
    hp: 26,
    effect: "없음"
  },
  {
    id: "virus_mid_2",
    faction: "virus",
    tier: "mid",
    name: "변이 돌격체",
    img: "assets/virus/virus_mid_2.png",
    atk: 11,
    hp: 22,
    effect: "없음"
  },
  {
    id: "virus_mid_3",
    faction: "virus",
    tier: "mid",
    name: "비행 변이체",
    img: "assets/virus/virus_mid_3.png",
    atk: 10,
    hp: 24,
    effect: "플레이어 공격 시 표식(2턴)"
  },

  // 상급
  {
    id: "virus_high_1",
    faction: "virus",
    tier: "high",
    name: "숙주 지배체",
    img: "assets/virus/virus_high_1.png",
    atk: 9,
    hp: 48,
    effect: "강제 공격 대상 / 받은 피해의 30% 반사"
  },
  {
    id: "virus_high_2",
    faction: "virus",
    tier: "high",
    name: "신경 오염체",
    img: "assets/virus/virus_high_2.png",
    atk: 14,
    hp: 34,
    effect: "플레이어 공격 시 표식(2턴)"
  },
  {
    id: "virus_high_3",
    faction: "virus",
    tier: "high",
    name: "재앙 군체핵",
    img: "assets/virus/virus_high_3.png",
    atk: 10,
    hp: 52,
    effect: "없음"
  }
];


/*********************************
 * 💉 백신 몬스터
 *********************************/
const vaxMonsters = [
  // 하급
  {
    id: "vax_low_1",
    faction: "vax",
    tier: "low",
    name: "주사병",
    img: "assets/vax/vax_low_1.png",
    atk: 6,
    hp: 18,
    effect: "없음"
  },
  {
    id: "vax_low_2",
    faction: "vax",
    tier: "low",
    name: "소독 요원",
    img: "assets/vax/vax_low_2.png",
    atk: 7,
    hp: 16,
    effect: "없음"
  },
  {
    id: "vax_low_3",
    faction: "vax",
    tier: "low",
    name: "방역 드론",
    img: "assets/vax/vax_low_3.png",
    atk: 5,
    hp: 20,
    effect: "없음"
  },

  // 중급
  {
    id: "vax_mid_1",
    faction: "vax",
    tier: "mid",
    name: "항체 방패병",
    img: "assets/vax/vax_mid_1.png",
    atk: 7,
    hp: 30,
    effect: "없음"
  },
  {
    id: "vax_mid_2",
    faction: "vax",
    tier: "mid",
    name: "면역 수호자",
    img: "assets/vax/vax_mid_2.png",
    atk: 10,
    hp: 24,
    effect: "없음"
  },
  {
    id: "vax_mid_3",
    faction: "vax",
    tier: "mid",
    name: "정화 공병",
    img: "assets/vax/vax_mid_3.png",
    atk: 9,
    hp: 26,
    effect: "없음"
  },

  // 상급
  {
    id: "vax_high_1",
    faction: "vax",
    tier: "high",
    name: "면역 사령관",
    img: "assets/vax/vax_high_1.png",
    atk: 12,
    hp: 44,
    effect: "없음"
  },
  {
    id: "vax_high_2",
    faction: "vax",
    tier: "high",
    name: "백신 배양체",
    img: "assets/vax/vax_high_2.png",
    atk: 9,
    hp: 52,
    effect: "없음"
  },
  {
    id: "vax_high_3",
    faction: "vax",
    tier: "high",
    name: "항원 제압기",
    img: "assets/vax/vax_high_3.png",
    atk: 14,
    hp: 40,
    effect: "없음"
  }
];


/*********************************
 * 전체 몬스터 목록
 *********************************/
const allMonsters = [...virusMonsters, ...vaxMonsters];
