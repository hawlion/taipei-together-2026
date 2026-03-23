const tripData = {
  title: "Trip Itinerary",
  subtitle: "Taipei Together",
  meta: "2026.04.10 - 2026.04.12 · 3 Friends · Westgate Hotel",
  days: [
    {
      id: "day-1",
      tabDate: "4/10",
      tabDay: "Fri",
      title: "금요일, 시먼 첫날",
      caption: "도착 후 체크인, 예약 저녁, 홍러우 술자리까지",
      badge: "Arrival Day",
      events: [
        {
          time: "12:45",
          title: "인천 출발",
          place: "인천공항",
          note: "출국",
          category: "flight",
          details: [
            "출발 2시간 전 공항 도착을 권장",
            "여권, 탑승권, 충전기, 상비약을 한 번 더 확인",
          ],
        },
        {
          time: "14:20",
          title: "타이베이 도착",
          place: "타오위안 공항",
          note: "입국",
          category: "arrival",
          details: [
            "입국 후 수하물 수령",
            "통신, 환전, 교통카드 상태를 바로 체크",
          ],
        },
        {
          time: "15:30 - 16:30",
          title: "공항에서 시먼 이동",
          place: "공항 MRT",
          note: "Taipei Main 환승",
          category: "transit",
          status: "같이 이동",
          featured: true,
          details: [
            "Taipei Main에서 환승",
            "시먼 도착 후 바로 호텔로 이동",
            "짐이 많으면 역 출구에서 택시도 고려",
          ],
        },
        {
          time: "16:30 - 17:00",
          title: "호텔 체크인",
          place: "Westgate Hotel",
          note: "잠깐 휴식",
          category: "hotel",
          details: [
            "Westgate Hotel 기준으로 짐 정리",
            "저녁 전 20 - 30분 정도 휴식",
          ],
        },
        {
          time: "17:00 - 18:20",
          title: "시먼딩 산책",
          place: "시먼 상권",
          note: "홍러우 주변",
          category: "walk",
          details: [
            "홍러우 주변을 가볍게 둘러보기",
            "편의점, 카페, 기념품 동선 미리 체크",
          ],
        },
        {
          time: "19:00 - 20:30",
          title: "저녁",
          place: "Tien Hsia San Chueh",
          note: "3인 예약",
          category: "meal",
          status: "예약 완료",
          featured: true,
          details: [
            "3인 예약 완료",
            "예약 시간에 맞춰 늦지 않게 이동",
            "첫날 메인 식사라서 사진 찍기 좋음",
          ],
        },
        {
          time: "21:00 - 23:30",
          title: "술",
          place: "시먼 홍러우",
          note: "1차 / 2차",
          category: "drink",
          details: [
            "가볍게 1차, 2차로 이어가기",
            "호텔 복귀 동선이 짧아 마무리하기 좋음",
          ],
        },
      ],
    },
    {
      id: "day-2",
      tabDate: "4/11",
      tabDay: "Sat",
      title: "토요일, 흩어졌다가 다시 합류",
      caption: "브런치 후 자유 일정, 신의 저녁, 린장 야시장",
      badge: "Free Split Day",
      events: [
        {
          time: "09:30 - 10:30",
          title: "아침 / 준비",
          place: "호텔 주변",
          note: "가벼운 식사",
          category: "cafe",
          details: [
            "늦지 않게 브런치 시간에 맞춰 컨디션 정리",
            "가벼운 커피나 샌드위치 정도로 시작",
          ],
        },
        {
          time: "11:15 - 12:30",
          title: "브런치",
          place: "A Cheng Goose 吉林二店",
          note: "3인 예약",
          category: "meal",
          status: "예약 완료",
          featured: true,
          details: [
            "3인 예약 완료",
            "중산 쪽 이동 후 바로 식사",
            "토요일 동선을 여는 핵심 식사",
          ],
        },
        {
          time: "12:30 - 13:00",
          title: "이동 / 카페",
          place: "중산",
          note: "브런치 후 이동",
          category: "transit",
          details: [
            "중산으로 이동",
            "짧게 쉬면서 오후 일정 나누기",
          ],
        },
        {
          time: "13:00 - 17:30",
          title: "개인 일정",
          place: "각자 이동",
          note: "토요일 오후 자유 시간",
          category: "free",
          status: "자유 일정",
          featured: true,
          personalPlans: [
            {
              name: "덕기",
              plan: "고궁박물관 + 중정기념관",
              detail: "대표 명소 위주로 여유 있게",
            },
            {
              name: "린이",
              plan: "리쿼샵 투어",
              detail: "중산 / 동구 라인 중심",
            },
            {
              name: "레오",
              plan: "개인 일정",
              detail: "자유롭게 이동",
            },
          ],
          details: [
            "오후 5시 30분까지 각자 자유롭게 이동",
            "합류 전까지 사진, 쇼핑, 카페를 가볍게 즐기기",
          ],
        },
        {
          time: "18:30 - 19:30",
          title: "저녁",
          place: "朱記 신의점",
          note: "가볍게 1차",
          category: "meal",
          status: "합류",
          details: [
            "다시 합류해서 저녁 먹기",
            "야시장 전 가볍게 1차 느낌으로",
          ],
        },
        {
          time: "20:00 - 22:00",
          title: "야시장",
          place: "Linjiang Night Market",
          note: "통화 야시장",
          category: "market",
          details: [
            "린장 야시장에서 간식과 구경",
            "통화 야시장 느낌으로 여유 있게",
          ],
        },
        {
          time: "22:30",
          title: "호텔 복귀",
          place: "시먼",
          note: "휴식",
          category: "hotel",
          details: [
            "시먼으로 돌아와 쉬기",
            "다음 날 체크아웃을 위해 짐 정리도 미리",
          ],
        },
      ],
    },
    {
      id: "day-3",
      tabDate: "4/12",
      tabDay: "Sun",
      title: "일요일, 마지막 식사 후 공항",
      caption: "짐 정리, 시먼 마지막 한 끼, 쇼핑 후 귀국",
      badge: "Departure Day",
      events: [
        {
          time: "09:00 - 10:00",
          title: "체크아웃 준비",
          place: "호텔",
          note: "짐 정리",
          category: "hotel",
          details: [
            "짐을 먼저 정리하고 체크아웃 준비",
            "충전기, 여권, 영수증을 마지막으로 확인",
          ],
        },
        {
          time: "10:00 - 11:00",
          title: "마지막 식사",
          place: "御真牛牛肉麵",
          note: "시먼",
          category: "meal",
          details: [
            "시먼에서 마지막 한 끼",
            "가볍게 먹고 쇼핑 동선으로 이어가기",
          ],
        },
        {
          time: "11:00 - 11:40",
          title: "시먼딩 쇼핑",
          place: "시먼 상권",
          note: "기념품",
          category: "shopping",
          details: [
            "기념품과 마지막 쇼핑",
            "시간이 짧아서 미리 살 물건을 정해두면 좋음",
          ],
        },
        {
          time: "12:00",
          title: "공항 이동",
          place: "MRT",
          note: "타오위안 공항으로 이동",
          category: "transit",
          status: "같이 이동",
          featured: true,
          details: [
            "공항 MRT로 이동",
            "늦지 않게 공항 도착해서 체크인 마무리",
          ],
        },
        {
          time: "15:30",
          title: "타이베이 출발",
          place: "타오위안 공항",
          note: "귀국",
          category: "flight",
          status: "출발",
          details: [
            "출발 전 면세품, 수하물, 탑승구 확인",
            "보딩 시간보다 조금 여유 있게 이동",
          ],
        },
        {
          time: "19:05",
          title: "인천 도착",
          place: "인천공항",
          note: "여행 종료",
          category: "arrival",
          details: [
            "귀국 후 공항에서 각자 이동",
            "이 일정으로 2박 3일 여행 종료",
          ],
        },
      ],
    },
  ],
};

const iconMap = {
  flight:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 16v-2l-8-3V5.5a1.5 1.5 0 0 0-3 0V11L2 14v2l8-1.5V20l2-1 2 1v-5.5z"/></svg>',
  arrival:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19h16v2H4zm8-16 6 10h-4v4h-4v-4H6z"/></svg>',
  transit:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 17h14l1 2v1H4v-1zm1-13h12a2 2 0 0 1 2 2v8H4V6a2 2 0 0 1 2-2m1 8a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 7 12m10 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"/></svg>',
  hotel:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 13h18v7h-2v-2H5v2H3zm3-5h4a3 3 0 0 1 3 3H6zm8 1h4a3 3 0 0 1 3 3h-7zM5 4h2v4H5z"/></svg>',
  walk:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 5.5A2.5 2.5 0 1 1 11 3a2.5 2.5 0 0 1 2.5 2.5M9 22l1.2-5.2-2.2-2.1a2 2 0 0 1-.5-2.1L8.7 9a2 2 0 0 1 1.9-1.3h2.5a2 2 0 0 1 1.8 1.1l1.1 2.2-1.8.9-1-1.8h-.7l1.4 3 2.8 2.4-1.3 1.6-2.7-2.2-.8 3.3L11 22z"/></svg>',
  meal:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h2v8a2 2 0 0 1-2 2v8H6v-8a2 2 0 0 1-2-2V3h2v4h2zm7 0h3a2 2 0 0 1 2 2v16h-2v-7h-3z"/></svg>',
  drink:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10l-1.1 6.2A5 5 0 0 1 12 15v4h3v2H9v-2h3v-4a5 5 0 0 1-3.9-4.8z"/></svg>',
  cafe:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h13v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zm14 1h1a2 2 0 0 1 0 4h-1zM6 4h2a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2h2"/></svg>',
  free:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9h-2a7 7 0 1 1-2.05-4.95L14 10h7V3l-2.66 2.66A8.95 8.95 0 0 0 12 3"/></svg>',
  market:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5 5.5 4h13L20 7.5V10a2 2 0 0 1-2 2 2 2 0 0 1-2-1 2 2 0 0 1-4 0 2 2 0 0 1-4 0 2 2 0 0 1-4 1zm1 6h14v7H5z"/></svg>',
  shopping:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7V6a5 5 0 0 1 10 0v1h3l-1.2 13H5.2L4 7zm2 0h6V6a3 3 0 1 0-6 0z"/></svg>',
};

const state = {
  activeDayId: tripData.days[0].id,
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function injectStyles() {
  if (document.getElementById("trip-app-styles")) {
    return;
  }

  const style = document.createElement("style");
  style.id = "trip-app-styles";
  style.textContent = `
    :root {
      --taipei-red: #cf202d;
      --taipei-blue: #204a9c;
      --taipei-ink: #151515;
      --taipei-muted: #6e6e74;
      --taipei-line: rgba(32, 74, 156, 0.14);
      --taipei-surface: #ffffff;
      --taipei-surface-soft: #fbfcff;
      --taipei-border: rgba(20, 20, 20, 0.08);
    }

    body {
      background: #fff !important;
      color: var(--taipei-ink);
    }

    body::before,
    body::after {
      display: none !important;
    }

    .page-shell {
      width: min(100%, 560px);
      margin: 0 auto;
      padding: 22px 14px 40px;
      min-height: 100vh;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }

    .trip-app {
      width: 100%;
      background: linear-gradient(180deg, #ffffff 0%, #fbfcff 100%);
      border: 1px solid var(--taipei-border);
      border-radius: 40px;
      box-shadow: 0 28px 80px rgba(0, 0, 0, 0.08);
      overflow: hidden;
      position: relative;
    }

    .trip-app::before {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      background:
        radial-gradient(circle at top right, rgba(32, 74, 156, 0.08), transparent 22%),
        radial-gradient(circle at bottom left, rgba(207, 32, 45, 0.08), transparent 22%);
    }

    .trip-app__inner {
      position: relative;
      z-index: 1;
      padding: 18px 18px 22px;
    }

    .topbar {
      display: grid;
      grid-template-columns: 42px 1fr 42px;
      align-items: center;
      gap: 10px;
    }

    .topbar__button {
      width: 42px;
      height: 42px;
      border-radius: 16px;
      border: 1px solid rgba(32, 74, 156, 0.12);
      background: #fff;
      display: grid;
      place-items: center;
      color: var(--taipei-ink);
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
    }

    .topbar__button svg {
      width: 22px;
      height: 22px;
      fill: currentColor;
    }

    .topbar__title {
      text-align: center;
    }

    .topbar__title small,
    .day-header__caption,
    .event__note,
    .event__detail,
    .event__status,
    .event__place,
    .split-plan__detail,
    .day-meta,
    .meta-chip {
      color: var(--taipei-muted);
    }

    .topbar__title small {
      display: block;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .topbar__title strong {
      display: block;
      margin-top: 3px;
      font-family: "Outfit", sans-serif;
      font-size: 1.5rem;
      color: var(--taipei-ink);
      letter-spacing: -0.03em;
    }

    .day-meta {
      margin: 14px 0 0;
      font-size: 0.88rem;
      line-height: 1.5;
      text-align: center;
    }

    .meta-chip-row {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 12px;
    }

    .meta-chip {
      display: inline-flex;
      align-items: center;
      min-height: 34px;
      padding: 0 12px;
      border-radius: 999px;
      background: var(--taipei-surface-soft);
      border: 1px solid rgba(32, 74, 156, 0.08);
      font-size: 0.82rem;
    }

    .day-tabs {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 10px;
      padding: 10px;
      margin-top: 16px;
      border-radius: 24px;
      background: #f8fbff;
      border: 1px solid rgba(32, 74, 156, 0.08);
    }

    .day-tab {
      border: 0;
      border-radius: 18px;
      background: #fff;
      min-height: 68px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      color: var(--taipei-ink);
      box-shadow: inset 0 0 0 1px rgba(32, 74, 156, 0.06);
    }

    .day-tab strong {
      font-family: "Outfit", sans-serif;
      font-size: 1rem;
    }

    .day-tab span {
      font-size: 0.78rem;
      color: var(--taipei-muted);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .day-tab.is-active {
      background: linear-gradient(135deg, var(--taipei-red), #eb4a41);
      color: #fff;
      box-shadow: 0 12px 22px rgba(207, 32, 45, 0.2);
    }

    .day-tab.is-active span {
      color: rgba(255, 255, 255, 0.88);
    }

    .day-panel {
      margin-top: 18px;
    }

    .day-header {
      display: flex;
      justify-content: space-between;
      gap: 14px;
      align-items: flex-start;
      padding: 2px 2px 14px;
    }

    .day-header__eyebrow {
      display: inline-flex;
      align-items: center;
      min-height: 32px;
      padding: 0 12px;
      border-radius: 999px;
      background: rgba(32, 74, 156, 0.08);
      color: var(--taipei-blue);
      font-size: 0.76rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 800;
    }

    .day-header h1 {
      margin: 12px 0 8px;
      font-family: "Outfit", sans-serif;
      font-size: clamp(1.8rem, 6vw, 2.4rem);
      line-height: 1.02;
      letter-spacing: -0.04em;
      color: var(--taipei-ink);
    }

    .day-header__caption {
      margin: 0;
      line-height: 1.7;
      max-width: 32ch;
    }

    .day-badge {
      flex-shrink: 0;
      min-width: 96px;
      padding: 12px 14px;
      border-radius: 18px;
      border: 1px solid rgba(32, 74, 156, 0.08);
      background: linear-gradient(180deg, #ffffff, #f8fbff);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
      text-align: right;
      font-size: 0.84rem;
      color: var(--taipei-blue);
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .timeline {
      position: relative;
      display: grid;
      gap: 14px;
      margin-top: 6px;
    }

    .timeline::before {
      content: "";
      position: absolute;
      top: 12px;
      bottom: 12px;
      left: 24px;
      width: 2px;
      background: linear-gradient(180deg, rgba(32, 74, 156, 0.22), rgba(207, 32, 45, 0.18));
    }

    .event {
      position: relative;
      display: grid;
      grid-template-columns: 50px 1fr;
      gap: 12px;
      align-items: start;
    }

    .event__icon {
      position: relative;
      z-index: 1;
      width: 50px;
      height: 50px;
      border-radius: 18px;
      display: grid;
      place-items: center;
      background: #fff;
      border: 1px solid rgba(32, 74, 156, 0.08);
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.05);
    }

    .event__icon svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    .event__icon--flight,
    .event__status--flight {
      color: var(--taipei-blue);
    }

    .event__icon--arrival,
    .event__status--arrival {
      color: var(--taipei-red);
    }

    .event__icon--transit,
    .event__status--transit {
      color: #2f6fcb;
    }

    .event__icon--hotel,
    .event__status--hotel {
      color: #3b7cba;
    }

    .event__icon--walk,
    .event__status--walk {
      color: #d34d4d;
    }

    .event__icon--meal,
    .event__status--meal {
      color: var(--taipei-red);
    }

    .event__icon--drink,
    .event__status--drink {
      color: var(--taipei-blue);
    }

    .event__icon--cafe,
    .event__status--cafe {
      color: #3f6fb3;
    }

    .event__icon--free,
    .event__status--free {
      color: var(--taipei-blue);
    }

    .event__icon--market,
    .event__status--market {
      color: #cf202d;
    }

    .event__icon--shopping,
    .event__status--shopping {
      color: #2f6fcb;
    }

    .event details {
      border-radius: 24px;
    }

    .event summary {
      list-style: none;
    }

    .event summary::-webkit-details-marker {
      display: none;
    }

    .event__card {
      border: 1px solid rgba(32, 74, 156, 0.08);
      border-radius: 24px;
      background: linear-gradient(180deg, #ffffff, #fbfcff);
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.05);
      overflow: hidden;
    }

    .event__summary {
      width: 100%;
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 14px;
      align-items: center;
      padding: 16px 16px 14px;
      background: transparent;
      border: 0;
      color: inherit;
      text-align: left;
      cursor: pointer;
    }

    .event__summary-main {
      min-width: 0;
    }

    .event__summary-title {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
    }

    .event__summary-title h3 {
      margin: 0;
      font-family: "Outfit", sans-serif;
      font-size: 1.08rem;
      color: var(--taipei-ink);
    }

    .event__pill {
      display: inline-flex;
      align-items: center;
      min-height: 26px;
      padding: 0 9px;
      border-radius: 999px;
      background: rgba(32, 74, 156, 0.08);
      color: var(--taipei-blue);
      font-size: 0.7rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .event__place {
      margin-top: 4px;
      font-size: 0.93rem;
      line-height: 1.45;
    }

    .event__time {
      flex-shrink: 0;
      font-family: "Outfit", sans-serif;
      font-size: 0.9rem;
      color: #9097a8;
      font-weight: 700;
      white-space: nowrap;
    }

    .event__summary-side {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 6px;
    }

    .event__chevron {
      width: 20px;
      height: 20px;
      margin-left: 6px;
      color: var(--taipei-muted);
      transition: transform 180ms ease;
      flex-shrink: 0;
    }

    .event details[open] .event__chevron {
      transform: rotate(180deg);
    }

    .event__panel {
      border-top: 1px solid rgba(32, 74, 156, 0.08);
      padding: 14px 16px 16px;
      background: linear-gradient(180deg, rgba(248, 251, 255, 0.75), #fff);
    }

    .event__status-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 12px;
    }

    .event__status {
      display: inline-flex;
      align-items: center;
      min-height: 28px;
      padding: 0 10px;
      border-radius: 999px;
      background: rgba(32, 74, 156, 0.06);
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .event__detail-list {
      margin: 0;
      padding: 0;
      list-style: none;
      display: grid;
      gap: 8px;
    }

    .event__detail-list li {
      position: relative;
      padding-left: 16px;
      line-height: 1.55;
      font-size: 0.92rem;
      color: var(--taipei-muted);
    }

    .event__detail-list li::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.7em;
      width: 6px;
      height: 6px;
      border-radius: 999px;
      background: var(--taipei-red);
    }

    .split-plan-list {
      display: grid;
      gap: 10px;
      margin-top: 14px;
    }

    .split-plan {
      padding: 12px 14px;
      border-radius: 18px;
      background: #f8fbff;
      border: 1px solid rgba(32, 74, 156, 0.08);
    }

    .split-plan strong {
      display: block;
      margin-bottom: 4px;
      color: var(--taipei-ink);
      font-family: "Outfit", sans-serif;
    }

    .event__card.is-open {
      border-color: rgba(207, 32, 45, 0.24);
      box-shadow: 0 14px 30px rgba(207, 32, 45, 0.08);
    }

    .event--featured .event__card {
      border-color: rgba(32, 74, 156, 0.16);
      background: linear-gradient(180deg, #ffffff, #f9fbff);
    }

    @media (max-width: 640px) {
      .page-shell {
        padding: 14px 10px 26px;
      }

      .trip-app {
        border-radius: 34px;
      }

      .trip-app__inner {
        padding: 16px 14px 20px;
      }

      .day-header {
        flex-direction: column;
      }

      .day-badge {
        width: fit-content;
        text-align: left;
      }

      .event {
        grid-template-columns: 44px 1fr;
        gap: 10px;
      }

      .event__icon {
        width: 44px;
        height: 44px;
        border-radius: 16px;
      }

      .timeline::before {
        left: 21px;
      }

      .event__summary {
        grid-template-columns: 1fr;
        gap: 10px;
      }

      .event__summary-side {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .event__time {
        text-align: left;
      }
    }
  `;
  document.head.appendChild(style);
}

function renderTabs() {
  return tripData.days
    .map(
      (day) => `
        <button
          class="day-tab${day.id === state.activeDayId ? " is-active" : ""}"
          type="button"
          data-day-tab="${escapeHtml(day.id)}"
          aria-selected="${day.id === state.activeDayId}"
          role="tab"
        >
          <strong>${escapeHtml(day.tabDate)}</strong>
          <span>${escapeHtml(day.tabDay)}</span>
        </button>
      `,
    )
    .join("");
}

function renderPersonalPlans(plans) {
  return `
    <div class="split-plan-list">
      ${plans
        .map(
          (plan) => `
            <article class="split-plan">
              <strong>${escapeHtml(plan.name)}</strong>
              <div class="split-plan__detail">${escapeHtml(plan.plan)}</div>
              ${plan.detail ? `<div class="split-plan__detail">${escapeHtml(plan.detail)}</div>` : ""}
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderEvent(event, index) {
  const openByDefault = Boolean(event.featured);
  const detailsId = `${state.activeDayId}-event-${index}`;

  return `
    <div class="event${openByDefault ? " event--featured" : ""}">
      <div class="event__icon event__icon--${escapeHtml(event.category)}">
        ${iconMap[event.category] || iconMap.free}
      </div>
      <details class="event__card${openByDefault ? " is-open" : ""}" ${openByDefault ? "open" : ""} data-event-id="${escapeHtml(detailsId)}">
        <summary class="event__summary" aria-controls="${escapeHtml(detailsId)}-panel">
          <div class="event__summary-main">
            <div class="event__summary-title">
              <h3>${escapeHtml(event.title)}</h3>
              ${event.status ? `<span class="event__pill">${escapeHtml(event.status)}</span>` : ""}
            </div>
            <div class="event__place">${escapeHtml(event.place)}</div>
          </div>
          <div class="event__summary-side">
            <div class="event__time">${escapeHtml(event.time)}</div>
            <svg class="event__chevron" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m12 15.25-6.3-6.3 1.4-1.4L12 12.45l4.9-4.9 1.4 1.4z"/></svg>
          </div>
        </summary>
        <div class="event__panel" id="${escapeHtml(detailsId)}-panel">
          <div class="event__status-row">
            <span class="event__status event__status--${escapeHtml(event.category)}">${escapeHtml(event.note)}</span>
            <span class="event__status event__status--${escapeHtml(event.category)}">${escapeHtml(event.category)}</span>
          </div>
          <ul class="event__detail-list">
            ${(event.details || [])
              .map((detail) => `<li>${escapeHtml(detail)}</li>`)
              .join("")}
          </ul>
          ${event.personalPlans ? renderPersonalPlans(event.personalPlans) : ""}
        </div>
      </details>
    </div>
  `;
}

function renderActiveDay() {
  const day = tripData.days.find((item) => item.id === state.activeDayId) || tripData.days[0];

  return `
    <section class="day-panel" aria-labelledby="${escapeHtml(day.id)}-title">
      <header class="day-header">
        <div>
          <span class="day-header__eyebrow">${escapeHtml(day.tabDate)} ${escapeHtml(day.tabDay)}</span>
          <h1 id="${escapeHtml(day.id)}-title">${escapeHtml(day.title)}</h1>
          <p class="day-header__caption">${escapeHtml(day.caption)}</p>
        </div>
        <div class="day-badge">${escapeHtml(day.badge)}</div>
      </header>
      <div class="timeline">
        ${day.events.map((event, index) => renderEvent(event, index)).join("")}
      </div>
    </section>
  `;
}

function renderApp() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <main class="trip-app">
      <div class="trip-app__inner">
        <header class="topbar">
          <button class="topbar__button" type="button" aria-label="뒤로">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 5.3 8 12l6.7 6.7-1.4 1.4L5.2 12l8.1-8.1z"/></svg>
          </button>
          <div class="topbar__title">
            <small>${escapeHtml(tripData.subtitle)}</small>
            <strong>${escapeHtml(tripData.title)}</strong>
          </div>
          <button class="topbar__button" type="button" aria-label="메뉴">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/></svg>
          </button>
        </header>

        <div class="day-meta">${escapeHtml(tripData.meta)}</div>
        <div class="meta-chip-row">
          <span class="meta-chip">Tap each item for details</span>
          <span class="meta-chip">White UI · Red / Blue accents</span>
        </div>

        <div class="day-tabs" role="tablist" aria-label="여행 날짜 선택">
          ${renderTabs()}
        </div>

        ${renderActiveDay()}
      </div>
    </main>
  `;

  bindEvents();
}

function bindEvents() {
  document.querySelectorAll("[data-day-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeDayId = button.dataset.dayTab;
      renderApp();
    });
  });

  document.querySelectorAll(".event__card").forEach((details) => {
    details.addEventListener("toggle", () => {
      details.classList.toggle("is-open", details.open);
    });
  });
}

injectStyles();
renderApp();
