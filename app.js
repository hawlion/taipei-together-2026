const tripData = {
  days: [
    {
      id: "day-1",
      tabDate: "4/10",
      tabDay: "Fri",
      badge: "Arrival Day",
      title: "금요일, 시먼 첫날",
      caption: "도착 후 체크인, 예약 저녁, 홍러우 술자리까지",
      events: [
        {
          id: "d1-flight",
          time: "12:45",
          title: "인천 출발",
          place: "인천공항",
          note: "출국",
          category: "flight",
          details: [
            "출발 2시간 전 공항 도착 권장",
            "여권, 탑승권, 충전기, 상비약 마지막 확인",
          ],
        },
        {
          id: "d1-arrival",
          time: "14:20",
          title: "타이베이 도착",
          place: "타오위안 공항",
          note: "입국",
          category: "arrival",
          details: [
            "입국 후 수하물 수령",
            "통신, 환전, 교통카드 상태 빠르게 점검",
          ],
        },
        {
          id: "d1-transit",
          time: "15:30 - 16:30",
          title: "공항에서 시먼 이동",
          place: "공항 MRT",
          note: "Taipei Main 환승",
          category: "transit",
          status: "같이 이동",
          statusTone: "blue",
          featured: true,
          details: [
            "Taipei Main에서 환승",
            "시먼 도착 후 바로 호텔로 이동",
            "짐이 많으면 역 출구에서 택시도 고려",
          ],
        },
        {
          id: "d1-hotel",
          time: "16:30 - 17:00",
          title: "호텔 체크인",
          place: "Westgate Hotel",
          note: "잠깐 휴식",
          category: "hotel",
          details: [
            "숙소에서 짐만 정리하고 바로 첫날 일정 시작",
            "저녁 전 20 - 30분 정도 짧게 쉬기",
          ],
        },
        {
          id: "d1-walk",
          time: "17:00 - 18:20",
          title: "시먼딩 산책",
          place: "시먼 상권",
          note: "홍러우 주변",
          category: "walk",
          details: [
            "홍러우 주변을 가볍게 둘러보기",
            "간식, 카페, 기념품 동선 미리 체크",
          ],
        },
        {
          id: "d1-dinner",
          time: "19:00 - 20:30",
          title: "저녁",
          place: "Tien Hsia San Chueh",
          note: "3인 예약",
          category: "meal",
          status: "예약 완료",
          statusTone: "red",
          featured: true,
          details: [
            "3인 예약 완료",
            "예약 시간보다 10분 정도 먼저 도착 추천",
            "저녁 후 홍러우 2차 동선으로 자연스럽게 연결",
          ],
        },
        {
          id: "d1-drink",
          time: "21:00 - 23:30",
          title: "술",
          place: "시먼 홍러우",
          note: "1차 / 2차",
          category: "drink",
          details: [
            "첫날 가볍게 분위기 즐기기",
            "호텔 복귀 동선이 짧아 마무리하기 좋은 구간",
          ],
        },
      ],
    },
    {
      id: "day-2",
      tabDate: "4/11",
      tabDay: "Sat",
      badge: "Free Split Day",
      title: "토요일, 흩어졌다가 다시 합류",
      caption: "브런치 후 자유 일정, 신의 저녁, 린장 야시장",
      events: [
        {
          id: "d2-morning",
          time: "09:30 - 10:30",
          title: "아침 / 준비",
          place: "호텔 주변",
          note: "가벼운 식사",
          category: "cafe",
          details: [
            "브런치 시간에 맞춰 느긋하게 준비",
            "커피나 간단한 식사로 컨디션 조절",
          ],
        },
        {
          id: "d2-brunch",
          time: "11:15 - 12:30",
          title: "브런치",
          place: "A Cheng Goose 吉林二店",
          note: "3인 예약",
          category: "meal",
          status: "예약 완료",
          statusTone: "red",
          featured: true,
          details: [
            "3인 예약 완료",
            "브런치 후 바로 중산 쪽으로 이동",
            "토요일 메인 식사 포인트",
          ],
        },
        {
          id: "d2-transit",
          time: "12:30 - 13:00",
          title: "이동 / 카페",
          place: "중산",
          note: "브런치 후 이동",
          category: "transit",
          details: [
            "중산으로 이동",
            "개인 일정 시작 전 짧게 쉬는 구간",
          ],
        },
        {
          id: "d2-free",
          time: "13:00 - 17:30",
          title: "개인 일정",
          place: "각자 이동",
          note: "토요일 오후 자유 시간",
          category: "free",
          status: "자유 일정",
          statusTone: "blue",
          featured: true,
          details: [
            "오후 5시 30분까지 각자 자유롭게 이동",
            "합류 전까지 사진, 쇼핑, 카페를 가볍게 즐기기",
          ],
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
        },
        {
          id: "d2-dinner",
          time: "18:30 - 19:30",
          title: "저녁",
          place: "朱記 신의점",
          note: "가볍게 1차",
          category: "meal",
          status: "합류",
          statusTone: "blue",
          details: [
            "자유 일정 후 다시 만나는 저녁",
            "야시장 전 가볍게 먹는 1차 느낌",
          ],
        },
        {
          id: "d2-market",
          time: "20:00 - 22:00",
          title: "야시장",
          place: "Linjiang Night Market",
          note: "통화 야시장",
          category: "market",
          details: [
            "린장 야시장에서 간식과 구경",
            "시간이 남으면 주변 산책도 가능",
          ],
        },
        {
          id: "d2-return",
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
      badge: "Departure Day",
      title: "일요일, 마지막 식사 후 공항",
      caption: "짐 정리, 시먼 마지막 한 끼, 쇼핑 후 귀국",
      events: [
        {
          id: "d3-checkout",
          time: "09:00 - 10:00",
          title: "체크아웃 준비",
          place: "호텔",
          note: "짐 정리",
          category: "hotel",
          details: [
            "체크아웃 전 짐을 먼저 정리",
            "충전기, 여권, 영수증을 마지막으로 확인",
          ],
        },
        {
          id: "d3-meal",
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
          id: "d3-shopping",
          time: "11:00 - 11:40",
          title: "시먼딩 쇼핑",
          place: "시먼 상권",
          note: "기념품",
          category: "shopping",
          details: [
            "기념품과 마지막 쇼핑",
            "시간이 짧아서 살 물건을 미리 정해두면 편함",
          ],
        },
        {
          id: "d3-transit",
          time: "12:00",
          title: "공항 이동",
          place: "MRT",
          note: "타오위안 공항으로 이동",
          category: "transit",
          status: "같이 이동",
          statusTone: "blue",
          featured: true,
          details: [
            "공항 MRT로 이동",
            "늦지 않게 공항 도착해서 체크인 마무리",
          ],
        },
        {
          id: "d3-depart",
          time: "15:30",
          title: "타이베이 출발",
          place: "타오위안 공항",
          note: "귀국",
          category: "flight",
          status: "출발",
          statusTone: "red",
          details: [
            "출발 전 면세품, 수하물, 탑승구 확인",
            "보딩 시간보다 조금 여유 있게 이동",
          ],
        },
        {
          id: "d3-arrive",
          time: "19:05",
          title: "인천 도착",
          place: "인천공항",
          note: "여행 종료",
          category: "arrival",
          details: [
            "인천 도착 후 각자 이동",
            "이번 2박 3일 여행 일정 마무리",
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
  openEventId: null,
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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
              <span>${escapeHtml(plan.plan)}</span>
              <p>${escapeHtml(plan.detail)}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderDetails(event) {
  return `
    <div class="event__details-inner">
      <div class="event__facts">
        <div class="event__fact">
          <span>시간</span>
          <strong>${escapeHtml(event.time)}</strong>
        </div>
        <div class="event__fact">
          <span>장소</span>
          <strong>${escapeHtml(event.place)}</strong>
        </div>
        <div class="event__fact">
          <span>메모</span>
          <strong>${escapeHtml(event.note)}</strong>
        </div>
        ${
          event.status
            ? `
              <div class="event__fact">
                <span>상태</span>
                <strong class="event__fact-status event__fact-status--${escapeHtml(event.statusTone || "blue")}">
                  ${escapeHtml(event.status)}
                </strong>
              </div>
            `
            : ""
        }
      </div>
      <ul class="event__detail-list">
        ${(event.details || [])
          .map((detail) => `<li>${escapeHtml(detail)}</li>`)
          .join("")}
      </ul>
      ${event.personalPlans ? renderPersonalPlans(event.personalPlans) : ""}
    </div>
  `;
}

function renderEvent(event) {
  const isOpen = state.openEventId === event.id;
  const detailId = `${event.id}-details`;

  return `
    <div class="event${event.featured ? " event--featured" : ""}">
      <div class="event__icon event__icon--${escapeHtml(event.category)}">
        ${iconMap[event.category] || iconMap.free}
      </div>
      <div class="event__shell">
        <button
          class="event__card${isOpen ? " is-open" : ""}${event.featured ? " event__card--featured" : ""}"
          type="button"
          data-event-id="${escapeHtml(event.id)}"
          aria-expanded="${isOpen}"
          aria-controls="${escapeHtml(detailId)}"
        >
          <div class="event__top">
            <div class="event__copy">
              <h3>${escapeHtml(event.title)}</h3>
              <p>${escapeHtml(event.place)}</p>
            </div>
            <span class="event__time">(${escapeHtml(event.time)})</span>
          </div>
          <div class="event__bottom">
            <span class="event__note">${escapeHtml(event.note)}</span>
            <span class="event__action${isOpen ? " is-open" : ""}">
              <span>${isOpen ? "Close" : "View details"}</span>
              <span class="event__chevron${isOpen ? " is-open" : ""}" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
              </span>
            </span>
          </div>
        </button>
        <div
          id="${escapeHtml(detailId)}"
          class="event__details${isOpen ? " is-open" : ""}"
          aria-hidden="${!isOpen}"
        >
          ${renderDetails(event)}
        </div>
      </div>
    </div>
  `;
}

function renderActiveDay() {
  const day = tripData.days.find((item) => item.id === state.activeDayId) || tripData.days[0];

  return `
    <section class="day-panel" aria-label="${escapeHtml(day.title)}">
      <div class="timeline">
        ${day.events.map((event) => renderEvent(event)).join("")}
      </div>
    </section>
  `;
}

function renderApp(options = {}) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="itinerary">
      <div class="day-tabs" role="tablist" aria-label="날짜 선택">
        ${renderTabs()}
      </div>

      ${renderActiveDay()}
    </section>
  `;

  bindEvents();

  requestAnimationFrame(() => {
    const timeline = document.querySelector(".timeline");

    if (timeline && typeof options.timelineScrollTop === "number") {
      timeline.scrollTop = options.timelineScrollTop;
    }

    if (options.scrollToEventId) {
      requestAnimationFrame(() => {
        const target = document.querySelector(
          `[data-event-id="${options.scrollToEventId}"]`,
        );

        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      });
    }
  });
}

function bindEvents() {
  document.querySelectorAll("[data-day-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeDayId = button.dataset.dayTab;
      state.openEventId = null;
      renderApp();
    });
  });

  document.querySelectorAll("[data-event-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const timeline = document.querySelector(".timeline");
      const timelineScrollTop = timeline ? timeline.scrollTop : 0;
      const clickedEventId = button.dataset.eventId;

      state.openEventId = state.openEventId === clickedEventId ? null : clickedEventId;
      renderApp({
        timelineScrollTop,
        scrollToEventId: state.openEventId,
      });
    });
  });
}

renderApp();
