const tripData = {
  title: "Taipei Together",
  subtitle: "친구들과 보는 2박 3일 타이베이 일정",
  description:
    "시먼 숙소를 베이스로 금요일 밤 분위기부터 토요일 자유 일정, 마지막 날 공항 이동까지 한 번에 확인할 수 있게 정리했어요.",
  dateRange: "2026.04.10 - 2026.04.12",
  route: ["Incheon", "Taoyuan", "Ximending", "Zhongshan", "Xinyi", "Linjiang"],
  hotel: "Westgate Hotel",
  group: "3 friends",
  reservations: "2 booked meals",
  tripStart: "2026-04-10T00:00:00+08:00",
  notes: [
    "금요일 저녁 `Tien Hsia San Chueh` 3인 예약",
    "토요일 브런치 `A Cheng Goose 吉林二店` 3인 예약",
    "토요일 13:00 - 17:30은 각자 자유 일정",
    "일요일에는 체크아웃 후 시먼에서 마지막 식사와 쇼핑",
  ],
  quickCards: [
    {
      label: "Stay",
      value: "Westgate Hotel",
      tone: "sunset",
    },
    {
      label: "Base Area",
      value: "Ximending",
      tone: "ocean",
    },
    {
      label: "Reservations",
      value: "2 spots booked",
      tone: "berry",
    },
    {
      label: "Weekend Flow",
      value: "City walk + night market",
      tone: "citrus",
    },
  ],
  guideCards: [
    {
      title: "금요일 동선",
      description: "공항 MRT로 시먼 이동 후 체크인, 산책, 예약 저녁, 홍러우에서 술.",
    },
    {
      title: "토요일 포인트",
      description: "브런치 후 자유 일정으로 흩어졌다가 저녁에 다시 합류해 야시장까지.",
    },
    {
      title: "일요일 리듬",
      description: "체크아웃 준비를 먼저 끝내고 마지막 식사, 쇼핑 후 공항 이동.",
    },
  ],
  days: [
    {
      id: "day-1",
      label: "DAY 1",
      shortLabel: "4/10 금",
      date: "2026.04.10 금요일",
      theme: "Arrival + Ximending Night",
      summary: "인천 출발, 시먼 체크인, 예약 저녁 후 홍러우에서 첫날 밤.",
      accent: "sunset",
      highlights: ["공항 MRT 이동", "저녁 예약", "시먼 홍러우 술자리"],
      events: [
        {
          time: "12:45",
          title: "인천 출발",
          place: "인천공항",
          note: "출국",
          category: "flight",
        },
        {
          time: "14:20",
          title: "타이베이 도착",
          place: "타오위안 공항",
          note: "입국",
          category: "arrival",
        },
        {
          time: "15:30 - 16:30",
          title: "공항에서 시먼 이동",
          place: "공항 MRT",
          note: "Taipei Main 환승",
          category: "transit",
        },
        {
          time: "16:30 - 17:00",
          title: "호텔 체크인",
          place: "Westgate Hotel",
          note: "휴식",
          category: "hotel",
        },
        {
          time: "17:00 - 18:20",
          title: "시먼딩 산책",
          place: "시먼 상권",
          note: "홍러우 주변",
          category: "walk",
        },
        {
          time: "19:00 - 20:30",
          title: "저녁",
          place: "Tien Hsia San Chueh",
          note: "3인 예약",
          category: "meal",
          reservation: true,
          mustMeet: true,
        },
        {
          time: "21:00 - 23:30",
          title: "술",
          place: "시먼 홍러우",
          note: "1차 / 2차",
          category: "drink",
        },
      ],
    },
    {
      id: "day-2",
      label: "DAY 2",
      shortLabel: "4/11 토",
      date: "2026.04.11 토요일",
      theme: "Brunch + Personal Plans + Night Market",
      summary: "느긋한 아침, 예약 브런치, 자유 일정, 저녁 합류 후 린장 야시장.",
      accent: "ocean",
      highlights: ["브런치 예약", "13:00 - 17:30 자유 일정", "Linjiang Night Market"],
      events: [
        {
          time: "09:30 - 10:30",
          title: "아침 / 준비",
          place: "호텔 주변",
          note: "가벼운 식사",
          category: "cafe",
        },
        {
          time: "11:15 - 12:30",
          title: "브런치",
          place: "A Cheng Goose 吉林二店",
          note: "3인 예약",
          category: "meal",
          reservation: true,
          mustMeet: true,
        },
        {
          time: "12:30 - 13:00",
          title: "이동 / 카페",
          place: "중산",
          note: "브런치 후 이동",
          category: "transit",
        },
        {
          time: "13:00 - 17:30",
          title: "개인 일정",
          place: "각자 이동",
          note: "자유 시간",
          category: "free",
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
          time: "18:30 - 19:30",
          title: "저녁",
          place: "朱記 신의점",
          note: "가볍게 1차",
          category: "meal",
          mustMeet: true,
        },
        {
          time: "20:00 - 22:00",
          title: "야시장",
          place: "Linjiang Night Market",
          note: "통화 야시장",
          category: "market",
        },
        {
          time: "22:30",
          title: "호텔 복귀",
          place: "시먼",
          note: "휴식",
          category: "hotel",
        },
      ],
    },
    {
      id: "day-3",
      label: "DAY 3",
      shortLabel: "4/12 일",
      date: "2026.04.12 일요일",
      theme: "Checkout + Last Meal + Back Home",
      summary: "짐 정리 후 마지막 식사와 시먼 쇼핑, 공항 이동 뒤 인천 복귀.",
      accent: "citrus",
      highlights: ["체크아웃 준비", "시먼 마지막 식사", "공항 MRT 이동"],
      events: [
        {
          time: "09:00 - 10:00",
          title: "체크아웃 준비",
          place: "호텔",
          note: "짐 정리",
          category: "hotel",
        },
        {
          time: "10:00 - 11:00",
          title: "마지막 식사",
          place: "御真牛牛肉麵",
          note: "시먼",
          category: "meal",
        },
        {
          time: "11:00 - 11:40",
          title: "시먼딩 쇼핑",
          place: "시먼 상권",
          note: "기념품",
          category: "shopping",
        },
        {
          time: "12:00",
          title: "공항 이동",
          place: "MRT",
          note: "타오위안 공항으로 이동",
          category: "transit",
          mustMeet: true,
        },
        {
          time: "15:30",
          title: "타이베이 출발",
          place: "타오위안 공항",
          note: "귀국",
          category: "flight",
          mustMeet: true,
        },
        {
          time: "19:05",
          title: "인천 도착",
          place: "인천공항",
          note: "여행 종료",
          category: "arrival",
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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatNote(note) {
  return String(note)
    .split(/`([^`]+)`/g)
    .map((segment, index) =>
      index % 2 === 1 ? `<strong>${escapeHtml(segment)}</strong>` : escapeHtml(segment),
    )
    .join("");
}

function renderRouteChips() {
  return tripData.route
    .map(
      (stop, index) => `
        <span class="route-stop">
          ${escapeHtml(stop)}
          ${index < tripData.route.length - 1 ? '<span class="route-divider"></span>' : ""}
        </span>
      `,
    )
    .join("");
}

function getCountdownLabel() {
  const now = new Date();
  const start = new Date(tripData.tripStart);
  const msPerDay = 1000 * 60 * 60 * 24;
  const dayDiff = Math.ceil((start - now) / msPerDay);

  if (dayDiff > 1) {
    return `${dayDiff} DAYS TO GO`;
  }

  if (dayDiff === 1) {
    return "1 DAY TO GO";
  }

  if (dayDiff === 0) {
    return "STARTS TODAY";
  }

  return "TRIP MEMORIES";
}

function renderQuickCards() {
  return tripData.quickCards
    .map(
      (card) => `
        <article class="metric-card metric-card--${card.tone} reveal">
          <span>${escapeHtml(card.label)}</span>
          <strong>${escapeHtml(card.value)}</strong>
        </article>
      `,
    )
    .join("");
}

function renderPhoneCards() {
  const [firstDay, secondDay, thirdDay] = tripData.days;
  return `
    <div class="device-showcase reveal">
      <article class="phone-card phone-card--destination">
        <div class="phone-card__top">
          <span class="mini-pill">Trip Details</span>
          <span class="mini-dots"></span>
        </div>
        <div class="destination-art">
          <div>
            <p>${escapeHtml(firstDay.shortLabel)}</p>
            <strong>Ximending Night</strong>
          </div>
        </div>
        <div class="phone-card__content">
          <h3>첫날 포인트</h3>
          <p>체크인 후 산책, 예약 저녁, 홍러우 술자리까지.</p>
          <div class="mini-stats">
            <span>Flight</span>
            <span>Check-in</span>
            <span>Dinner</span>
          </div>
        </div>
      </article>

      <article class="phone-card phone-card--timeline">
        <div class="phone-card__top">
          <span class="mini-pill mini-pill--soft">${escapeHtml(secondDay.shortLabel)}</span>
          <span class="mini-label">${escapeHtml(secondDay.theme)}</span>
        </div>
        <div class="mini-timeline">
          ${secondDay.events
            .slice(0, 4)
            .map(
              (event) => `
                <div class="mini-timeline__item">
                  <strong>${escapeHtml(event.time)}</strong>
                  <span>${escapeHtml(event.title)}</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </article>

      <article class="phone-card phone-card--notes">
        <div class="phone-card__top">
          <span class="mini-pill mini-pill--blue">${escapeHtml(thirdDay.shortLabel)}</span>
          <span class="mini-label">Easy Checkout Flow</span>
        </div>
        <div class="note-grid">
          <div class="note-grid__item note-grid__item--sunset">
            <span>Meal</span>
            <strong>御真牛牛肉麵</strong>
          </div>
          <div class="note-grid__item note-grid__item--ocean">
            <span>Shopping</span>
            <strong>시먼딩</strong>
          </div>
          <div class="note-grid__item note-grid__item--berry">
            <span>Airport</span>
            <strong>12:00 MRT</strong>
          </div>
          <div class="note-grid__item note-grid__item--ink">
            <span>Landing</span>
            <strong>19:05 ICN</strong>
          </div>
        </div>
      </article>
    </div>
  `;
}

function renderHero() {
  return `
    <section class="hero-grid">
      <div class="hero-copy reveal">
        <span class="eyebrow">FRIENDS TRIP TO TAIPEI</span>
        <h1>${escapeHtml(tripData.subtitle)}</h1>
        <p class="hero-description">${escapeHtml(tripData.description)}</p>

        <div class="hero-tags">
          <span class="tag-chip tag-chip--solid">${escapeHtml(tripData.dateRange)}</span>
          <span class="tag-chip">Base in ${escapeHtml(tripData.hotel)}</span>
          <span class="tag-chip">${escapeHtml(tripData.group)}</span>
        </div>

        <div class="hero-actions">
          <a class="action-button action-button--primary" href="#itinerary">일정 바로 보기</a>
          <a class="action-button action-button--ghost" href="#reservations">예약 체크</a>
        </div>

        <div class="hero-panel">
          <div class="countdown-card">
            <span>Countdown</span>
            <strong>${getCountdownLabel()}</strong>
            <p>2026년 4월 10일 금요일부터 2박 3일 일정</p>
          </div>
          <div class="route-card">
            <span>Route</span>
            <div class="route-flow">${renderRouteChips()}</div>
          </div>
        </div>
      </div>

      ${renderPhoneCards()}
    </section>
  `;
}

function renderGuideCards() {
  return tripData.guideCards
    .map(
      (card, index) => `
        <article class="guide-card reveal" style="transition-delay:${index * 90}ms">
          <span class="guide-card__index">0${index + 1}</span>
          <h3>${escapeHtml(card.title)}</h3>
          <p>${escapeHtml(card.description)}</p>
        </article>
      `,
    )
    .join("");
}

function renderReservations() {
  const fixedEvents = tripData.days.flatMap((day) =>
    day.events
      .filter((event) => event.reservation || event.mustMeet)
      .map((event) => ({
        ...event,
        day: day.shortLabel,
        accent: day.accent,
        statusLabel: event.reservation ? "예약 완료" : "집합 체크",
      })),
  );

  return `
    <section id="reservations" class="section-block">
      <div class="section-heading reveal">
        <div>
          <span class="section-kicker">Fixed Moments</span>
          <h2>예약 & 고정 일정</h2>
        </div>
        <p>시간이 딱 정해진 일정만 먼저 모아둬서 합류 포인트를 바로 확인할 수 있어요.</p>
      </div>
      <div class="reservation-grid">
        ${fixedEvents
          .map(
            (event, index) => `
              <article class="reservation-card reservation-card--${event.accent} reveal" style="transition-delay:${index * 100}ms">
                <span class="reservation-card__day">${escapeHtml(event.day)} · ${escapeHtml(event.statusLabel)}</span>
                <h3>${escapeHtml(event.title)}</h3>
                <strong>${escapeHtml(event.place)}</strong>
                <p>${escapeHtml(event.time)} · ${escapeHtml(event.note)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderPersonalPlans(plans) {
  return `
    <div class="personal-plan-card">
      <div class="personal-plan-card__header">
        <span class="section-kicker">Saturday Split</span>
        <strong>13:00 - 17:30 자유 일정</strong>
      </div>
      <div class="personal-plan-grid">
        ${plans
          .map(
            (plan) => `
              <article class="personal-plan">
                <span>${escapeHtml(plan.name)}</span>
                <h4>${escapeHtml(plan.plan)}</h4>
                <p>${escapeHtml(plan.detail)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderEvent(event, accent, index) {
  const icon = iconMap[event.category] || iconMap.free;
  return `
    <article class="timeline-item reveal" style="transition-delay:${index * 70}ms">
      <div class="timeline-item__time">${escapeHtml(event.time)}</div>
      <div class="timeline-item__line">
        <span class="timeline-dot timeline-dot--${accent}">
          ${icon}
        </span>
      </div>
      <div class="timeline-item__content">
        <div class="timeline-item__header">
          <div>
            <h4>${escapeHtml(event.title)}</h4>
            <p>${escapeHtml(event.place)}</p>
          </div>
          ${event.reservation ? '<span class="reservation-badge">예약</span>' : ""}
        </div>
        <span class="timeline-note">${escapeHtml(event.note)}</span>
        ${event.personalPlans ? renderPersonalPlans(event.personalPlans) : ""}
      </div>
    </article>
  `;
}

function renderDays() {
  return tripData.days
    .map(
      (day, dayIndex) => `
        <section id="${escapeHtml(day.id)}" class="day-section day-section--${day.accent}">
          <div class="day-section__header reveal">
            <div>
              <span class="day-label">${escapeHtml(day.label)}</span>
              <h2>${escapeHtml(day.date)}</h2>
              <p>${escapeHtml(day.summary)}</p>
            </div>
            <div class="day-theme-card">
              <span>${escapeHtml(day.theme)}</span>
              <strong>${escapeHtml(day.shortLabel)}</strong>
            </div>
          </div>
          <div class="day-highlights reveal" style="transition-delay:${dayIndex * 80}ms">
            ${day.highlights
              .map((highlight) => `<span>${escapeHtml(highlight)}</span>`)
              .join("")}
          </div>
          <div class="timeline">
            ${day.events.map((event, index) => renderEvent(event, day.accent, index)).join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

function renderNavigation() {
  return `
    <nav class="floating-nav reveal" aria-label="일정 빠른 이동">
      <a href="#overview" data-nav="overview" class="floating-nav__link is-active">Overview</a>
      ${tripData.days
        .map(
          (day) =>
            `<a href="#${escapeHtml(day.id)}" data-nav="${escapeHtml(day.id)}" class="floating-nav__link">${escapeHtml(day.shortLabel)}</a>`,
        )
        .join("")}
    </nav>
  `;
}

function renderApp() {
  const app = document.getElementById("app");

  app.innerHTML = `
    ${renderHero()}
    ${renderNavigation()}

    <section id="overview" class="section-block">
      <div class="section-heading reveal">
        <div>
          <span class="section-kicker">At A Glance</span>
          <h2>이번 여행의 톤</h2>
        </div>
        <p>깔끔하고 가볍게 움직이는 일정이라 친구들이 중간에 확인해도 흐름이 바로 보여요.</p>
      </div>

      <div class="metrics-grid">
        ${renderQuickCards()}
      </div>

      <div class="guides-grid">
        ${renderGuideCards()}
      </div>

      <div class="note-board reveal">
        <div class="note-board__header">
          <span class="section-kicker">Quick Notes</span>
          <strong>함께 체크하면 좋은 포인트</strong>
        </div>
        <ul>
          ${tripData.notes
            .map((note) => `<li>${formatNote(note)}</li>`)
            .join("")}
        </ul>
      </div>
    </section>

    ${renderReservations()}

    <section id="itinerary" class="section-block">
      <div class="section-heading reveal">
        <div>
          <span class="section-kicker">Full Itinerary</span>
          <h2>날짜별 일정</h2>
        </div>
        <p>시간, 장소, 비고를 모두 넣어서 친구들이 화면만 보고도 바로 움직일 수 있게 정리했습니다.</p>
      </div>
      <div class="day-stack">
        ${renderDays()}
      </div>
    </section>

    <footer class="site-footer reveal">
      <p>${escapeHtml(tripData.title)} · ${escapeHtml(tripData.dateRange)}</p>
      <span>항공과 식사 시간은 출발 전에 한 번만 다시 확인하면 더 좋아요.</span>
    </footer>
  `;
}

function setupScrollSpy() {
  const navLinks = [...document.querySelectorAll("[data-nav]")];
  const sections = ["overview", ...tripData.days.map((day) => day.id)]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      const id = visible.target.id;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.dataset.nav === id);
      });
    },
    {
      rootMargin: "-35% 0px -45% 0px",
      threshold: [0.2, 0.45, 0.7],
    },
  );

  sections.forEach((section) => observer.observe(section));
}

function setupRevealAnimation() {
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  revealItems.forEach((item) => observer.observe(item));
}

renderApp();
setupScrollSpy();
setupRevealAnimation();
