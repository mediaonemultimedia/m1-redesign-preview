/* ==========================================================================
   M1 Dashboard — redesign reference prototype
   Static, no build step. Hash routes. Illustrative data only (shapes mirror
   the live app; numbers are representative, not live).
   ========================================================================== */

/* ---------- Icons (1.6 stroke, 24 grid) ---------- */
const I = {
  today: '<svg viewBox="0 0 24 24"><path d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
  inbox: '<svg viewBox="0 0 24 24"><path d="M4 13h4l2 3h4l2-3h4"/><path d="M5.5 5h13L21 13v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6z"/></svg>',
  clients: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  bd: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/></svg>',
  ads: '<svg viewBox="0 0 24 24"><path d="M4 10v4a1 1 0 0 0 1 1h3l6 4V5L8 9H5a1 1 0 0 0-1 1z"/><path d="M18 9a4 4 0 0 1 0 6"/></svg>',
  socials: '<svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12z"/></svg>',
  team: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2A6.5 6.5 0 0 1 21.5 20"/></svg>',
  drive: '<svg viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  ai: '<svg viewBox="0 0 24 24"><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="M12 7.5 13.6 10.4 16.5 12 13.6 13.6 12 16.5 10.4 13.6 7.5 12 10.4 10.4z"/></svg>',
  system: '<svg viewBox="0 0 24 24"><circle cx="7" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><circle cx="7" cy="17" r="3"/><path d="M14 17h6M17 14v6"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  collapse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/></svg>',
  spark: '<svg viewBox="0 0 24 24"><path d="M12 3.5 13.9 9 19.5 11 13.9 13 12 18.5 10.1 13 4.5 11 10.1 9z"/><path d="M19 3v3M17.5 4.5h3"/></svg>',
  refresh: '<svg viewBox="0 0 24 24"><path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/></svg>',
  moon: '<svg viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/></svg>',
  chevL: '<svg viewBox="0 0 24 24"><path d="m15 6-6 6 6 6"/></svg>',
  chevR: '<svg viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>',
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  filter: '<svg viewBox="0 0 24 24"><path d="M4 5h16l-6 7.5V19l-4 1.5v-8z"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  menu: '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  bug: '<svg viewBox="0 0 24 24"><rect x="7" y="8" width="10" height="12" rx="5"/><path d="M12 8V5M9 5l1.5 2M15 5l-1.5 2M3 13h4M17 13h4M4 19l3-2M20 19l-3-2"/></svg>',
};
const LOGO = '<svg viewBox="0 0 100.1 65.44" aria-label="M1"><path fill="currentColor" d="M65.84,64.75l-32,.49-.57-26.41-13.51,26.19c-6.32.41-12.81.82-19.76-.3L32.57.29l19.9.23.28,61.99,12.63-23.98.47,26.22Z"/><path fill="currentColor" d="M81.65,65.17l-.3-47.53-4.24-1.28c2.58-5.63,4.68-10.7,7.65-15.89,5.07-.56,9.68-.66,15.27-.04l.08,64.44-18.45.3Z"/></svg>';

/* ---------- Illustrative data ---------- */
const CLIENTS = [
  { slug: 'northline', name: 'Northline', ini: 'NL', brand: '#C8102E', since: 'Mar 2023', budget: 91, hoursLeft: 5.9, ad: 4897, sent: 46, flag: ['warn', 'Budget 91%'], pinned: true },
  { slug: 'cedarview', name: 'Cedarview Health', ini: 'CH', brand: '#14424B', since: 'Jan 2022', budget: 148, hoursLeft: -221, ad: 1210, sent: 31, flag: ['crit', 'Over 148%'], pinned: true },
  { slug: 'ridgeway', name: 'Ridgeway Timber Homes', ini: 'RT', brand: '#7A4B2A', since: 'Jun 2024', budget: 162, hoursLeft: -312, ad: 0, sent: null, flag: ['crit', 'Over 162%'], pinned: true },
  { slug: 'saltwater', name: 'Saltwater Bay Nation', ini: 'SB', brand: '#2E5A6E', since: 'Aug 2024', budget: 133, hoursLeft: -64, ad: 0, sent: null, flag: ['crit', 'Over 133%'] },
  { slug: 'prairie', name: 'Prairie Co-op Energy', ini: 'PCE', brand: '#3E7D3A', since: 'Feb 2023', budget: 74, hoursLeft: 18, ad: 2140, sent: 53, flag: ['warn', 'Sentiment watch'] },
  { slug: 'gridcoop', name: 'Grid Co-ops Alliance', ini: 'GA', brand: '#1F5FA8', since: 'Apr 2024', budget: 66, hoursLeft: 26, ad: 980, sent: 51, flag: ['warn', 'Sentiment watch'] },
  { slug: 'harbourlight', name: 'Harbourlight Foundation', ini: 'HF', brand: '#1D3557', since: 'Sep 2023', budget: 58, hoursLeft: 31, ad: 760, sent: null, flag: null },
  { slug: 'meridian', name: 'The Meridian Institute', ini: 'MI', brand: '#8C1D18', since: 'May 2025', budget: 62, hoursLeft: 70, ad: 0, sent: null, flag: ['info', '14 docs unread'] },
  { slug: 'westbrook', name: 'Westbrook Society', ini: 'WS', brand: '#5B3F8C', since: 'Nov 2022', budget: 47, hoursLeft: 22, ad: 430, sent: null, flag: null },
  { slug: 'north-aspen', name: 'North Aspen Power', ini: 'NA', brand: '#2D6A4F', since: 'Mar 2024', budget: 52, hoursLeft: 19, ad: 1320, sent: 61, flag: null },
  { slug: 'coastal', name: 'Coastal Treaty Society', ini: 'CT', brand: '#0F4C5C', since: 'Jul 2024', budget: 70, hoursLeft: 36, ad: 0, sent: null, flag: null },
  { slug: 'tidewater', name: 'Tidewater First Nation', ini: 'TF', brand: '#3D5A80', since: 'Jan 2025', budget: 44, hoursLeft: 40, ad: 0, sent: null, flag: null },
  { slug: 'inlet', name: 'Inlet Tribe Government', ini: 'IT', brand: '#6B4226', since: 'Feb 2025', budget: 81, hoursLeft: 9, ad: 0, sent: null, flag: ['warn', '6 meeting actions'] },
  { slug: 'hollis', name: "Hollis Provisions", ini: 'HP', brand: '#A23B2A', since: 'Oct 2024', budget: 55, hoursLeft: 24, ad: 310, sent: null, flag: null },
  { slug: 'island-fc', name: 'Island Friendship Centre', ini: 'IF', brand: '#B5651D', since: 'Aug 2023', budget: 38, hoursLeft: 30, ad: 0, sent: null, flag: null },
  { slug: 'm1', name: 'M1 Agency', ini: 'M1', brand: '#161614', since: 'Internal', budget: 49, hoursLeft: 120, ad: 640, sent: 86, flag: null },
];
const C = Object.fromEntries(CLIENTS.map(c => [c.slug, c]));

const ATTENTION = [
  { sev: 'crit', src: 'Budget', client: 'ridgeway', title: 'Ridgeway Timber Homes is 312h over budget', detail: '812h worked against 500h budgeted (162%)', age: '2mo', route: '#/clients/ridgeway' },
  { sev: 'crit', src: 'Socials', client: 'cedarview', title: 'Cedarview Health sentiment is pressing (31)', detail: '18 new comments across 2 channels, mostly wait times', age: '6h', route: '#/socials' },
  { sev: 'crit', src: 'Budget', client: 'cedarview', title: 'Cedarview Health is 221h over budget', detail: '681h worked against 460h budgeted (148%)', age: '3w', route: '#/clients/cedarview' },
  { sev: 'warn', src: 'Advertising', client: 'northline', title: 'Northline conversions down 54% month to date', detail: 'Clicks −30%, impressions +46%: traffic quality, not volume', age: '1d', route: '#/advertising' },
  { sev: 'warn', src: 'Meetings', client: 'inlet', title: '6 meeting action items waiting on a decision', detail: 'Proposed 61 days ago, no owner assigned', age: '7d', route: '#/drive' },
  { sev: 'warn', src: 'Budget', client: 'saltwater', title: 'Saltwater Bay Nation is 64h over budget', detail: '258h worked against 194h budgeted (133%)', age: '1mo', route: '#/clients/saltwater' },
  { sev: 'warn', src: 'Budget', client: 'cedarview', title: '62h logged on a budget with no estimate', detail: '“Website maintenance retainer” has no ceiling to measure against', age: '13d', route: '#/clients/cedarview' },
  { sev: 'info', src: 'Drive', client: null, title: '17 meeting notes matched no client', detail: 'Filed against nobody, so their action items belong to nobody', age: '2mo', route: '#/drive' },
  { sev: 'info', src: 'Drive', client: 'meridian', title: '14 Meridian Institute documents are unread', detail: 'Claude can’t answer questions about them yet', age: '19d', route: '#/drive' },
];

const PEOPLE = [
  { name: 'Alex Rivera', ini: 'AR', c: '#127C82', cap: 103, q: 311, dated: 8 },
  { name: 'Kevin Cave', ini: 'KC', c: '#3A6EA5', cap: 52, q: 156, dated: 2 },
  { name: 'Priya Nair', ini: 'PN', c: '#8A5A9E', cap: 41, q: 115, dated: 16 },
  { name: 'Jordan Lee', ini: 'JL', c: '#B8873B', cap: 32, q: 88, dated: 9 },
  { name: 'Sam Kowal', ini: 'SK', c: '#4E8A3E', cap: 22, q: 66, dated: 1 },
  { name: 'Theo Grant', ini: 'TG', c: '#C2452D', cap: 20, q: 61, dated: 5 },
  { name: 'Mina Park', ini: 'MP', c: '#55524C', cap: 12, q: 36, dated: 1 },
];

/* ---------- Helpers ---------- */
const $ = s => document.querySelector(s);
const fmt$ = n => '$' + n.toLocaleString('en-CA');
let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const logoTile = c => `<span class="logo-tile" style="background:${c.brand};view-transition-name:vt-${c.slug}">${c.ini}</span>`;
const sevLabel = { crit: 'Critical', warn: 'Notable', info: 'FYI' };
const avatar = p => `<span class="avatar" style="background:${p.c}">${p.ini}</span>`;

function spark(vals, w = 160, h = 28) {
  const mx = Math.max(...vals), mn = Math.min(...vals);
  const pts = vals.map((v, i) => [i / (vals.length - 1) * w, h - 2 - (v - mn) / (mx - mn || 1) * (h - 6)]);
  const d = 'M' + pts.map(p => p.map(n => n.toFixed(1)).join(',')).join(' L');
  return `<svg class="spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><path class="area" d="${d} L${w},${h} L0,${h} Z"/><path d="${d}"/></svg>`;
}
function donut(parts, size = 132) {
  const r = 52, cx = 66, cy = 66, circ = 2 * Math.PI * r; let off = 0;
  const segs = parts.map(p => { const len = p.v / 100 * circ; const s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${p.c}" stroke-width="16" stroke-dasharray="${len - 2} ${circ}" stroke-dashoffset="${-off}" transform="rotate(-90 66 66)"/>`; off += len; return s; }).join('');
  return `<svg class="donut" viewBox="0 0 132 132">${segs}<text x="66" y="64" text-anchor="middle" font-family="Barlow Condensed" font-weight="600" font-size="30" fill="var(--text)">58h</text><text x="66" y="82" text-anchor="middle" font-size="10.5" fill="var(--text-3)">October</text></svg>`;
}
function ring(pct) {
  const r = 14, c = 2 * Math.PI * r, v = Math.min(pct, 100) / 100 * c;
  const col = pct > 100 ? 'var(--crit)' : pct > 80 ? 'var(--warn)' : 'var(--accent)';
  return `<svg class="ring" viewBox="0 0 34 34"><circle cx="17" cy="17" r="${r}" fill="none" stroke="var(--surface-3)" stroke-width="4"/><circle cx="17" cy="17" r="${r}" fill="none" stroke="${col}" stroke-width="4" stroke-linecap="round" stroke-dasharray="${v} ${c}" transform="rotate(-90 17 17)"/></svg>`;
}
function heat(weeks = 17) {
  seed = 5; let h = '';
  for (let w = 0; w < weeks; w++) for (let d = 0; d < 5; d++) {
    const r = rnd(); const lv = w < 4 ? 0 : r < .3 ? 0 : r < .5 ? 1 : r < .7 ? 2 : r < .88 ? 3 : 4;
    h += `<i style="background:var(--seq-${lv})" title="${lv * 7} calls"></i>`;
  }
  return `<div class="heat" style="grid-template-columns:repeat(${weeks},1fr)">${h}</div>`;
}

/* ---------- Shell ---------- */
const NAV = [
  { group: null, items: [{ id: 'today', label: 'Today', icon: 'today', count: [3, 'crit'] }] },
  { group: 'Clients', items: [{ id: 'clients', label: 'All clients', icon: 'clients', count: [23, 'quiet'] }] },
  { group: 'Growth', items: [
    { id: 'bd', label: 'BD pipeline', icon: 'bd', count: [18, 'quiet'] },
    { id: 'advertising', label: 'Advertising', icon: 'ads', count: [1, 'warn'] },
    { id: 'socials', label: 'Socials', icon: 'socials', count: [1, 'crit'] },
  ] },
  { group: 'Team', items: [{ id: 'resourcing', label: 'Resourcing', icon: 'team', count: [1, 'warn'] }] },
  { group: 'Knowledge & AI', items: [
    { id: 'drive', label: 'Drive & meetings', icon: 'drive', count: [2, 'quiet'] },
    { id: 'ai', label: 'AI control panel', icon: 'ai' },
  ] },
];

function renderSidebar(active) {
  const pinned = CLIENTS.filter(c => c.pinned);
  $('#sidebar').innerHTML = `
    <div class="sb-head">
      <a class="sb-logo" href="#/today">${LOGO}<span>AGENCY</span></a>
      <button class="sb-collapse" id="collapse" title="Collapse sidebar">${I.collapse}</button>
    </div>
    <button class="sb-search" id="open-cmdk">${I.search.replace('<svg', '<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8"')}<span>Search or jump to…</span><kbd>⌘K</kbd></button>
    ${NAV.map(g => `
      ${g.group ? `<div class="sb-group">${g.group}</div>` : ''}
      ${g.items.map(it => `<a class="sb-item ${active === it.id ? 'on' : ''}" href="#/${it.id}">${I[it.icon]}<span class="sb-label">${it.label}</span>${it.count ? `<span class="sb-count ${it.count[1]}">${it.count[0]}</span>` : ''}</a>`).join('')}
      ${g.group === 'Clients' ? pinned.map(c => `<a class="sb-item ${location.hash === '#/clients/' + c.slug ? 'on' : ''}" href="#/clients/${c.slug}" style="height:30px;font-size:13px"><span class="sb-pin" style="background:${c.brand}">${c.ini.slice(0, 2)}</span><span class="sb-label">${c.name}</span>${c.flag && c.flag[0] === 'crit' ? '<span class="sb-count crit dot" style="min-width:8px;width:8px;height:8px;padding:0"></span>' : ''}</a>`).join('') : ''}
    `).join('')}
    <div class="sb-foot">
      <a class="sb-item ${active === 'system' ? 'on' : ''}" href="#/system">${I.system}<span class="sb-label">Design system</span></a>
      <a class="sb-item" href="#/today">${I.bug}<span class="sb-label">Report a bug</span></a>
      <div class="sb-user"><span class="avatar" style="background:#3A6EA5">KC</span><span class="sb-label">Kevin Cave</span></div>
    </div>`;
  $('#collapse').onclick = () => $('#app').classList.toggle('collapsed');
  $('#open-cmdk').onclick = openCmdk;
}

function renderTopbar(crumbs, fresh) {
  $('#topbar').innerHTML = `
    <button class="btn ghost icon-btn mob-only" id="mnav">${I.menu}</button>
    <div class="crumbs">${crumbs.map((c, i) => i === crumbs.length - 1 ? `<b>${c}</b>` : `<a href="${c[1]}">${c[0]}</a><i>/</i>`).join('')}</div>
    ${fresh ? `<span class="fresh ${fresh.stale ? 'stale' : ''}">${fresh.text}</span>` : ''}
    <div class="tb-space"></div>
    <div class="seg style-toggle" title="Switch design mode"><button data-style="standard" class="${STYLE === 'standard' ? 'on' : ''}">Standard</button><button data-style="premium" class="${STYLE === 'premium' ? 'on' : ''}">Premium</button></div>
    <button class="btn ghost icon-btn" id="theme" title="Toggle theme">${I.moon}</button>
    <button class="btn ask" id="ask">${I.spark} <span>Ask Claude</span></button>`;
  $('#theme').onclick = () => { const r = document.documentElement; r.dataset.theme = r.dataset.theme === 'dark' ? 'light' : 'dark'; };
  $('#ask').onclick = openCmdk;
  document.querySelectorAll('.style-toggle button').forEach(b => b.onclick = () => setStyle(b.dataset.style));
  const m = $('#mnav'); if (m) m.onclick = () => $('#app').classList.toggle('mnav');
}

/* ---------- Pages ---------- */
const attnCard = a => `<a class="attn ${a.sev}" href="${a.route}"><div class="attn-top">${a.src}<span class="n">${a.n ?? ''}</span></div><div class="attn-title">${a.title}</div><div class="attn-meta">${a.detail}</div></a>`;
const inboxRow = a => `<a class="inbox-row" href="${a.route}"><span class="dot ${a.sev}"></span><div style="min-width:0"><div class="t">${a.title}</div><div class="d">${a.client ? C[a.client].name + ' · ' : ''}${a.detail}</div></div><span class="tag">${a.src}</span><div class="row"><span class="age">${a.age}</span><button class="btn sm act" onclick="event.preventDefault();this.closest('.inbox-row').style.opacity=.35">Snooze</button></div></a>`;

function pageToday() {
  const crit = ATTENTION.filter(a => a.sev === 'crit').length;
  const tickets = {
    'Not started': [['Harbourlight Foundation', 'Giving Tuesday: 15 ad versions', 'Due Oct 20', '#9'], ['M1 Agency', 'Build and schedule newsletter', 'No date', '#508', true], ['M1 Agency', 'Meta Ads video: 3 sizes', 'No date', '#499', true]],
    'In progress': [['Northline', 'Make the Switch: CTV cut-downs', 'Due Oct 17', '#612'], ['Cedarview Health', 'Website maintenance sprint', 'Due Oct 24', '#588']],
    'In review': [['Tidewater First Nation', 'Annual report layout', 'Due Oct 16', '#601'], ['Harbourlight Foundation', 'Donor email series', 'Due Oct 18', '#9b']],
    'Done this week': [['The Meridian Institute', 'Report cover options', 'Done Oct 14', '#590'], ['Westbrook Society', 'Social calendar Nov', 'Done Oct 13', '#577']],
  };
  return `
  <section class="ph">
    <div>
      <div class="ph-kicker">Thursday, October 15</div>
      <h1>Good morning, Kevin</h1>
      <p><b>${crit} things need you today.</b> Everything else is on track. Critical items are first, and each one links straight to where you fix it.</p>
    </div>
    <div class="ph-actions"><button class="btn">${I.refresh} Check now</button><button class="btn primary">${I.plus} New ticket</button></div>
  </section>

  <section class="attn-strip">
    ${attnCard({ sev: 'crit', src: 'Over budget', n: 3, title: 'Ridgeway, Cedarview Health and Saltwater Bay are past their hours', detail: '597h over in total. Ridgeway is the worst at 162%', route: '#/clients' })}
    ${attnCard({ sev: 'crit', src: 'Sentiment', n: 1, title: 'Cedarview Health is pressing (31)', detail: 'Wait-time complaints across 2 channels', route: '#/socials' })}
    ${attnCard({ sev: 'warn', src: 'Advertising', n: 1, title: 'Northline conversions −54% MTD', detail: 'Clicks down while impressions rise', route: '#/advertising' })}
    ${attnCard({ sev: 'warn', src: 'Decisions', n: 12, title: 'Meeting action items waiting', detail: 'Oldest proposed 61 days ago', route: '#/drive' })}
  </section>

  <section class="grid g-side">
    <div class="panel flush">
      <div class="panel-h" style="padding:var(--s-4) var(--s-5) 0;margin-bottom:var(--s-3)">
        <h3>Attention inbox</h3><span class="meta">${ATTENTION.length} open · sorted by severity, then age</span>
        <div class="r"><div class="seg"><button class="on">All</button><button><span class="dot crit"></span>Critical</button><button><span class="dot warn"></span>Notable</button><button>FYI</button></div></div>
      </div>
      <div class="inbox">${ATTENTION.map(inboxRow).join('')}</div>
    </div>
    <div class="grid" style="align-content:start">
      <div class="panel">
        <div class="panel-h"><h3>My week</h3><span class="meta">37 open tickets</span></div>
        <div class="stackbar">
          <div style="flex:26;background:var(--idle)">26</div><div style="flex:6;background:var(--accent)">6</div><div style="flex:3;background:var(--info)">3</div><div style="flex:2;background:var(--ok)">2</div>
        </div>
        <div class="legend"><span><i style="background:var(--idle)"></i>Not started</span><span><i style="background:var(--accent)"></i>In progress</span><span><i style="background:var(--info)"></i>Review</span><span><i style="background:var(--ok)"></i>Done</span></div>
        <div class="explain">19 of the 26 “not started” tickets haven’t been touched in over a year. Archiving them would make this view honest.</div>
        <button class="btn sm mt-4">Review 19 stale tickets</button>
      </div>
      <div class="panel">
        <div class="panel-h"><h3>Due soon</h3><a class="r meta" href="#/today">All</a></div>
        ${[['Annual report layout', 'Tidewater', 'Tomorrow', 'warn'], ['CTV cut-downs', 'Northline', 'Sat', 'idle'], ['Donor email series', 'Harbourlight', 'Sun', 'idle'], ['Giving Tuesday ads', 'Harbourlight', 'Tue', 'idle']].map(r => `<div class="row between" style="padding:8px 0;border-top:1px solid var(--line)"><div><div style="font-weight:500">${r[0]}</div><div class="muted" style="font-size:12px">${r[1]}</div></div><span class="pill ${r[3]}">${r[2]}</span></div>`).join('')}
      </div>
    </div>
  </section>

  <section>
    <div class="sec"><h2>My tickets</h2><span class="meta">Stale tickets are dimmed</span><div class="sec-actions"><div class="seg"><button>List</button><button class="on">Board</button><button>Chart</button></div></div></div>
    <div class="kanban">${Object.entries(tickets).map(([k, ts]) => `
      <div class="kcol"><div class="kcol-h">${k}<span class="c">${ts.length}</span></div>
      ${ts.map(t => `<div class="ticket ${t[4] ? 'stale' : ''}"><div class="client">${t[0]}</div><div class="t">${t[1]}</div><div class="m"><span>${t[4] ? 'Untouched 1y+' : t[2]}</span><span class="id">${t[3]}</span></div></div>`).join('')}
      </div>`).join('')}</div>
  </section>`;
}

function pageClients() {
  return `
  <section class="ph">
    <div><div class="ph-kicker">Clients</div><h1>23 active clients</h1><p>Every client has one hub with budget, advertising, sentiment, documents and meetings together. Problems float to the top.</p></div>
    <div class="ph-actions"><div class="seg"><button class="on">Cards</button><button>Table</button></div><button class="btn primary">${I.plus} Onboard client</button></div>
  </section>
  <section class="row wrap">
    <span class="chip on">All <span class="c">23</span></span><span class="chip"><span class="dot crit"></span>Over budget <span class="c">3</span></span><span class="chip"><span class="dot warn"></span>Needs attention <span class="c">7</span></span><span class="chip">Running ads <span class="c">9</span></span><span class="chip">Archived <span class="c">2</span></span>
    <div class="tb-space"></div><span class="select">Sort: Most urgent ▾</span>
  </section>
  <section class="clients-grid">
    ${[...CLIENTS].sort((a, b) => b.budget - a.budget).map(c => {
      const st = c.budget > 100 ? 'crit' : c.budget > 85 ? 'warn' : 'ok';
      return `<a class="ccard" href="#/clients/${c.slug}">
        <div class="ccard-top">${logoTile(c)}<div style="min-width:0"><h4>${c.name}</h4><div class="since">Client since ${c.since}</div></div></div>
        <div style="min-height:20px">${c.flag ? `<span class="pill ${c.flag[0]}">${c.flag[1]}</span>` : '<span class="pill ok">On track</span>'}</div>
        <div><div class="row between" style="font-size:12px;margin-bottom:6px"><span class="muted">October hours</span><span class="num">${c.budget}%</span></div><div class="meter ${st}"><b style="width:${Math.min(c.budget, 100)}%"></b>${c.budget > 100 ? '' : ''}</div></div>
        <div class="row between" style="font-size:12px"><span class="muted">Ad spend MTD</span><span class="num">${c.ad ? fmt$(c.ad) : '—'}</span></div>
        <div class="row between" style="font-size:12px"><span class="muted">Sentiment</span>${c.sent ? `<span class="score ${c.sent >= 70 ? 'hi' : c.sent >= 45 ? 'mid' : 'lo'}" style="${c.sent < 45 ? 'background:var(--crit-soft);color:var(--crit-ink)' : ''}">${c.sent}</span>` : '<span class="muted">—</span>'}</div>
      </a>`;
    }).join('')}
  </section>
  <div class="explain">Brand colour lives only in each client’s logo tile and hub edge. It never tints status or charts, so 23 brands don’t compete with the signals that matter.</div>`;
}

function pageClient(slug) {
  const c = C[slug] || C.northline;
  const items = ATTENTION.filter(a => a.client === c.slug);
  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  const vals = [62, 88, 71, 104, 118, 96, 109, 122, 99, 131, 112, 126, 109];
  return `
  <section class="hub-head" style="--brand:${c.brand}">
    ${logoTile(c)}
    <div><div class="ph-kicker" style="margin:0 0 4px">Client since ${c.since}</div><h1>${c.name}</h1></div>
    <div class="hub-stats">
      <div><span class="l">Hours left</span><span class="v" style="color:${c.hoursLeft < 0 ? 'var(--crit-ink)' : 'inherit'}">${c.hoursLeft}h</span></div>
      <div><span class="l">Budget used</span><span class="v">${c.budget}%</span></div>
      <div><span class="l">Ad spend MTD</span><span class="v">${c.ad ? fmt$(c.ad) : '—'}</span></div>
      <div><span class="l">Sentiment</span><span class="v">${c.sent ?? '—'}</span></div>
    </div>
  </section>
  <nav class="tabs"><span class="tab on">Overview</span><span class="tab">Budget</span><span class="tab">Advertising</span><span class="tab">Socials</span><span class="tab">Documents <span class="c">115</span></span><span class="tab">Meetings <span class="c">6</span></span><span class="tab">Production</span></nav>
  ${items.length ? `<section class="attn-strip">${items.map(a => attnCard({ ...a, n: '' })).join('')}</section>` : `<section class="panel row" style="gap:12px"><span class="dot ok"></span><b>Nothing needs attention for ${c.name}.</b><span class="muted">Budget, ads, sentiment and documents are all within range.</span></section>`}
  <section class="grid g-main">
    <div class="panel">
      <div class="panel-h"><h3>Budget burn</h3><span class="meta">Hours worked vs each month’s plan</span><div class="r"><div class="seg"><button>6 mo</button><button class="on">13 mo</button></div></div></div>
      <div style="position:relative">
        <div style="position:absolute;left:0;right:0;bottom:${100 / 140 * 100}%;border-top:1.5px dashed var(--line-strong)"></div>
        <div class="bars-v">${vals.map((v, i) => `<div class="${i === vals.length - 1 ? 'cur' : v > 100 ? 'over' : ''}" style="height:${v / 140 * 100}%;${v > 100 && i !== vals.length - 1 ? 'opacity:.85' : ''}" title="${v}%" data-tip="${months[i]} · ${v}% of plan"></div>`).join('')}</div>
        <div class="axis">${months.map(m => `<span>${m}</span>`).join('')}</div>
      </div>
      <div class="legend"><span><i style="background:var(--seq-2)"></i>Within plan</span><span><i style="background:var(--crit)"></i>Over plan</span><span><i style="background:var(--accent)"></i>This month</span><span><i style="background:none;border-top:1.5px dashed var(--line-strong);height:0;width:14px;border-radius:0"></i>100% of plan</span></div>
      <div class="explain">October opened 112h in deficit, carried since February. 8 of the last 13 months ran over plan, so the retainer estimate is likely too low rather than a one-off spike.</div>
    </div>
    <div class="panel">
      <div class="panel-h"><h3>Where October’s hours went</h3></div>
      <div class="row" style="gap:20px;align-items:center">
        ${donut([{ v: 29, c: 'var(--seq-5)' }, { v: 27, c: 'var(--seq-4)' }, { v: 23, c: 'var(--seq-3)' }, { v: 15, c: 'var(--seq-2)' }, { v: 6, c: 'var(--seq-1)' }])}
        <div style="flex:1;display:flex;flex-direction:column;gap:7px;font-size:12px">
          ${[['Social management', 29, 5], ['Campaign management', 27, 4], ['Graphic design', 23, 3], ['Website', 15, 2], ['Project mgmt', 6, 1]].map(r => `<div class="row between"><span class="row"><i style="width:9px;height:9px;border-radius:2px;background:var(--seq-${r[2]})"></i>${r[0]}</span><span class="num muted">${r[1]}%</span></div>`).join('')}
        </div>
      </div>
    </div>
  </section>
  <section class="grid g-3">
    <div class="panel"><div class="panel-h"><h3>Advertising</h3><a class="r meta" href="#/advertising">Open ${I.arrow.replace('<svg', '<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"')}</a></div>
      <div class="row between"><span class="muted">Spend MTD</span><span class="num" style="font-size:18px">${fmt$(c.ad || 0)}</span></div>
      <div class="row between mt-2"><span class="muted">Leads</span><span class="row"><span class="num">7</span><span class="delta down">↓54%</span></span></div>
      <div class="row between mt-2"><span class="muted">Cost per lead</span><span class="num">$320</span></div>
      ${spark([12, 14, 13, 18, 21, 19, 24, 28, 26, 31, 33, 36], 300, 40)}
    </div>
    <div class="panel"><div class="panel-h"><h3>Sentiment</h3><a class="r meta" href="#/socials">Open</a></div>
      <div class="row" style="gap:14px"><span style="font-family:var(--font-display);font-size:44px;line-height:.9;font-weight:600;color:var(--sent-risk)">${c.sent ?? '—'}</span><div><span class="pill warn">At risk</span><div class="muted mt-2" style="font-size:12px">31 comments · 2 channels</div></div></div>
      <div class="explain">Top question this week: “Will my rate change if I switch?”</div>
    </div>
    <div class="panel"><div class="panel-h"><h3>Documents Claude can read</h3><a class="r meta" href="#/drive">Open</a></div>
      <div class="row between" style="font-size:12px;margin-bottom:6px"><span class="muted">91 of 115 read</span><span class="num">79%</span></div>
      <div class="meter"><b style="width:79%"></b></div>
      <div class="row between mt-4"><span>23 unread</span><button class="btn sm">Read them now</button></div>
      <div class="row between mt-2"><span class="muted">1,010 searchable passages</span></div>
    </div>
  </section>`;
}

function pageBD() {
  const rows = [
    ['Northern River Nation', 'Northern Tribal Council', 'BC Northern', 1, 8.7, 'Content', 'ok', 'Done', PEOPLE[3]],
    ['Lakeshore First Nation', 'Interior Tribal Council', 'BC Northern', 1, 8.6, 'Content', 'warn', 'Draft', null],
    ['Estuary First Nation', '', 'Vancouver Island', 1, 8.5, 'Content', 'warn', 'Draft', PEOPLE[4]],
    ['Highland Nation Development Corp.', '', 'BC Northern', 1, 8.5, 'Prospect', 'crit', 'Blocked', null],
    ['Channel Tribe', '', 'Vancouver Island', 1, 8.5, 'Content', 'warn', 'Draft', PEOPLE[4]],
    ['Interior Tribal Council', '', 'BC Northern', 1, 8.4, 'Intel', 'ok', 'Done', null],
    ['Long Lake Nation', '', 'BC Northern', 1, 8.4, 'Intel', 'ok', 'Done', null],
    ['Harbourside First Nation', '', 'Vancouver Island', 1, 8.4, 'Intel', 'ok', 'Done', null],
    ['Clearwater First Nations', 'Prairie Chiefs Ventures Inc.', 'Treaty 6', 1, 8.3, 'Content', 'ok', 'Done', PEOPLE[3]],
    ['Riverbend Nation', '', 'BC Northern', 1, 8.3, 'Intel', 'crit', 'Blocked', null],
    ['Northshore First Nation', '', 'North Coast / Haida Gwaii', 1, 8.3, 'Intel', 'crit', 'Blocked', null],
    ['Westcoast First Nation', '', 'Vancouver Island', 2, 7.4, 'Intel', 'idle', 'Idle', null],
    ['Bayside First Nation', '', 'Lower Mainland', 2, 6.9, 'Prospect', 'info', 'Running', PEOPLE[1]],
  ];
  return `
  <section class="ph">
    <div><div class="ph-kicker">Growth · BD pipeline</div><h1>First Nations</h1><p>295 organisations scored for fit. Start with Tier 1 accounts that have no owner. They’re the highest-value gap.</p></div>
    <div class="ph-actions"><button class="btn ask">${I.spark} Ask Claude about this list</button><button class="btn primary">${I.plus} Add organisation</button></div>
  </section>
  <nav class="tabs"><span class="tab">Co-ops <span class="c">64</span></span><span class="tab on">First Nations <span class="c">295</span></span><span class="tab">Inbound <span class="c">12</span></span><span class="tab">Modern treaty</span><span class="tab">Outreach</span><span class="tab">Opportunities <span class="c">9</span></span><span class="tab">Map</span></nav>
  <section class="kpis k4">
    <div class="kpi"><span class="l">Tier 1 · unassigned</span><span class="v" style="color:var(--warn-ink)">18</span><span class="s">Highest fit, nobody on it</span></div>
    <div class="kpi"><span class="l">Blocked</span><span class="v" style="color:var(--crit-ink)">23</span><span class="s">Waiting on intel or intro</span></div>
    <div class="kpi"><span class="l">In outreach</span><span class="v">41</span><span class="s"><span class="delta up">↑6</span> this month</span></div>
    <div class="kpi"><span class="l">Won this quarter</span><span class="v">3</span><span class="s">$184k in proposals</span></div>
  </section>
  <section class="panel flush">
    <div class="table-tools">
      <span class="search">${I.search.replace('<svg', '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"')} Search organisations…</span>
      <span class="chip on">All <span class="c">295</span></span><span class="chip"><span class="dot warn"></span>Tier 1 · unassigned <span class="c">18</span></span><span class="chip"><span class="dot crit"></span>Blocked <span class="c">23</span></span><span class="chip">My accounts <span class="c">12</span></span>
      <div class="tb-space"></div>
      <span class="select">Region: All ▾</span><span class="select">Treaty: All ▾</span><span class="select">Tier: All ▾</span><button class="btn sm ghost">${I.filter} More</button>
    </div>
    <table class="t">
      <thead><tr><th style="width:36px"><span class="cb"></span></th><th>Organisation</th><th>Region</th><th>Tier</th><th>Fit</th><th>Stage</th><th>Status</th><th>Owner</th></tr></thead>
      <tbody>${rows.map((r, i) => `<tr class="${i === 3 ? 'sel' : ''}"><td><span class="cb"></span></td><td><div class="name">${r[0]}</div>${r[1] ? `<div class="sub">${r[1]}</div>` : ''}</td><td>${r[2]}</td><td class="num">T${r[3]}</td><td><span class="score ${r[4] >= 8 ? 'hi' : r[4] >= 7 ? 'mid' : 'lo'}">${r[4]}</span></td><td><span class="tag">${r[5]}</span></td><td><span class="pill ${r[6]}">${r[7]}</span></td><td>${r[8] ? `<span class="row">${avatar(r[8])}<span>${r[8].name.split(' ')[0]}</span></span>` : '<button class="btn sm ghost" style="color:var(--warn-ink)">Assign</button>'}</td></tr>`).join('')}</tbody>
    </table>
    <div class="row between" style="padding:12px 16px;font-size:12px;color:var(--text-3)"><span>Showing 13 of 295 · sorted by fit</span><span class="row"><button class="btn sm">Previous</button><button class="btn sm">Next</button></span></div>
  </section>`;
}

function pageAds() {
  const flights = [
    ['search: energy provider', 1, 2, 70, 'Google Ads'], ['brand: services', 1, 10, 88, 'Google Ads'], ['YouTube: make the switch', 1, 34, 52, 'Google Ads'],
    ['CTV: brand', 2, 18, 64, 'StackAdapt'], ['Remarketing: display', 2, 4, 92, 'StackAdapt'], ['M1 leads', 3, 26, 58, 'Meta'], ['Whitepaper: service areas', 4, 40, 44, 'Taboola'],
  ];
  return `
  <section class="ph">
    <div><div class="ph-kicker">Growth · Advertising</div><h1>Northline · October</h1><p>Spend is pacing well, but conversions fell sharply while impressions rose. Look at targeting before spending more.</p></div>
    <div class="ph-actions"><div class="seg"><button>${I.chevL.replace('<svg', '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"')}</button><button class="on">Oct 2026 · day 15/31</button><button>${I.chevR.replace('<svg', '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"')}</button></div><button class="btn">${I.refresh} Re-pull data</button><button class="btn primary">Set budget</button></div>
  </section>
  <section class="row wrap"><span class="chip on">${logoTile(C.northline).replace('logo-tile', 'logo-tile" style="width:18px;height:18px;font-size:8px;border-radius:4px;background:#C8102E')} Northline <span class="c">5</span></span>${['prairie', 'gridcoop', 'cedarview', 'north-aspen', 'westbrook', 'harbourlight', 'm1'].map(s => `<span class="chip">${C[s].name}${s === 'gridcoop' ? ' <span class="c">1</span>' : ''}</span>`).join('')}</section>
  <section class="kpis">
    <div class="kpi hero"><span class="l">Spend · month to date</span><span class="v">$4,897</span><span class="s"><span class="delta up">↑28%</span> vs Sep 1–15 · no budget set</span>${spark([3, 5, 4, 7, 9, 8, 11, 13, 12, 15, 17, 16, 19, 21, 24], 300, 30)}</div>
    <div class="kpi"><span class="l">Impressions</span><span class="v">407K</span><span class="s"><span class="delta up">↑46%</span> vs last month</span></div>
    <div class="kpi"><span class="l">Clicks</span><span class="v">2.5K</span><span class="s"><span class="delta down">↓30%</span> 0.61% CTR</span></div>
    <div class="kpi" style="border-color:color-mix(in oklab,var(--crit) 35%,var(--line))"><span class="l" style="color:var(--crit-ink)">Conversions</span><span class="v">7</span><span class="s"><span class="delta down">↓54%</span> $320 per lead</span></div>
  </section>
  <section class="grid g-main">
    <div class="panel">
      <div class="panel-h"><h3>Campaign flights</h3><span class="meta">October · by platform</span><div class="r"><div class="seg"><button>Calendar</button><button class="on">Timeline</button></div></div></div>
      <div class="gantt">
        <div></div><div class="gh" style="grid-template-columns:repeat(4,1fr)"><span>Oct 1</span><span>Oct 8</span><span>Oct 15</span><span>Oct 22</span></div>
        ${flights.map(f => `<div class="gl"><span class="dot" style="background:var(--series-${f[1]})"></span><span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${f[0]}</span></div><div class="gt"><div class="today" style="left:46%"></div><div class="b" style="left:${f[2]}%;width:${f[3]}%;background:var(--series-${f[1]})">${f[4]}</div></div>`).join('')}
      </div>
      <div class="legend"><span><i style="background:var(--series-1)"></i>Google Ads</span><span><i style="background:var(--series-2)"></i>StackAdapt</span><span><i style="background:var(--series-3)"></i>Meta</span><span><i style="background:var(--series-4)"></i>Taboola</span><span><i style="background:var(--crit);width:2px"></i>Today</span></div>
    </div>
    <div class="panel flush">
      <div class="panel-h" style="padding:var(--s-4) var(--s-5) 0"><h3>Findings</h3><span class="meta">This month</span><span class="r meta">2 cleared</span></div>
      <div class="inbox">
        ${[['crit', 'Conversion tracking dropped on brand: services', 'Google Ads · since Oct 9'], ['warn', 'search: energy provider CPC up 41%', 'Google Ads · 4 days'], ['warn', 'M1 leads frequency above 4.0', 'Meta · audience fatigue'], ['info', 'CTV: brand counts view-through conversions', 'StackAdapt · excluded from leads'], ['ok', 'Whitepaper: service areas within targets', 'Taboola']].map(r => `<div class="inbox-row" style="grid-template-columns:10px 1fr auto"><span class="dot ${r[0]}"></span><div style="min-width:0"><div class="t">${r[1]}</div><div class="d">${r[2]}</div></div>${I.chevR.replace('<svg', '<svg width="14" height="14" fill="none" stroke="var(--text-3)" stroke-width="2"')}</div>`).join('')}
      </div>
    </div>
  </section>
  <section class="panel">
    <div class="panel-h"><h3>Leads by platform</h3><span class="meta">7 leads · view-through platforms excluded</span></div>
    <div class="stackbar"><div style="flex:7;background:var(--series-1)">Google Ads · 7 · $320/ea</div><div style="flex:.01;background:var(--series-3)"></div></div>
    <div class="explain">StackAdapt attributes conversions to views rather than clicks, so it’s not the same measure. Its spend, impressions and clicks still count above.</div>
  </section>`;
}

function pageSocials() {
  const s = [['cedarview', 31, 'pressing', 'Pressing', 18, 2, '“Why is the wait so long for an intake call?”', [52, 48, 44, 40, 37, 33, 28]], ['northline', 46, 'risk', 'At risk', 31, 2, '“Will my rate change if I switch?”', [58, 55, 51, 49, 47, 45, 44]], ['gridcoop', 51, 'watch', 'Watch', 28, 2, '“Where can I see outage maps?”', [44, 46, 47, 45, 49, 48, 48]], ['prairie', 53, 'watch', 'Watch', 3, 1, '“Is the rebate still available?”', [55, 52, 54, 50, 51, 49, 50]], ['north-aspen', 61, 'watch', 'Watch', 77, 2, '“When is the AGM?”', [50, 52, 55, 54, 57, 58, 58]], ['m1', 89, 'healthy', 'Healthy', 9, 2, '“Are you hiring designers?”', [80, 82, 85, 84, 86, 88, 89]]];
  const col = { pressing: 'var(--sent-pressing)', risk: 'var(--sent-risk)', watch: 'var(--sent-watch)', healthy: 'var(--sent-healthy)' };
  const pill = { pressing: 'crit', risk: 'crit', watch: 'warn', healthy: 'ok' };
  return `
  <section class="ph">
    <div><div class="ph-kicker">Growth · Socials</div><h1>Client sentiment</h1><p>Worst first. The score blends tone, volume and response time over 30 days. One client is pressing and needs a reply plan today.</p></div>
    <div class="ph-actions"><span class="fresh">Updated 6:13 a.m.</span><button class="btn">${I.refresh} Refresh</button></div>
  </section>
  <section class="panel row wrap" style="gap:24px;padding:14px 20px">
    <span class="muted" style="font-size:12px">Scale</span>
    ${[['Pressing', '0–39', 'pressing'], ['At risk', '40–45', 'risk'], ['Watch', '46–69', 'watch'], ['Healthy', '70–100', 'healthy']].map(r => `<span class="row" style="font-size:12px"><i style="width:22px;height:6px;border-radius:3px;background:${col[r[2]]}"></i><b style="font-weight:500">${r[0]}</b><span class="muted num">${r[1]}</span></span>`).join('')}
  </section>
  <section class="grid g-3">
    ${s.map(r => { const c = C[r[0]]; return `<div class="sent" style="--c:${col[r[2]]}">
      <div class="row between"><span class="row">${logoTile(c).replace('logo-tile"', 'logo-tile" style="width:28px;height:28px;font-size:11px;border-radius:6px;background:' + c.brand + '"')}<b style="font-weight:600;font-size:14px">${c.name}</b></span><span class="pill ${pill[r[2]]}">${r[3]}</span></div>
      <div class="row between" style="align-items:flex-end"><span class="score-big">${r[1]}</span><div style="width:120px">${spark(r[7], 120, 32).replace('class="spark"', 'class="spark" style="height:32px"')}</div></div>
      <div class="row between muted" style="font-size:12px"><span>${r[4]} comments · ${r[5]} channel${r[5] > 1 ? 's' : ''}</span><span>7-day trend</span></div>
      <div style="font-size:12.5px;border-top:1px solid var(--line);padding-top:10px">${r[6]}</div>
    </div>`; }).join('')}
  </section>`;
}

function pageResourcing() {
  const tm = [['M1 Agency', 232, 4, 6, 2], ['Northline', 201, 5, 4, 2], ['The Meridian Institute', 189, 3, 4, 2], ['Coastal Treaty', 119, 3, 3, 1], ['Inlet Tribe', 84, 3, 2, 1], ['Unattributed', 79, 'u', 2, 1], ['Grid Co-ops', 76, 2, 2, 1], ['14 smaller', 68, 1, 2, 1], ["Hollis Provisions", 54, 2, 2, 1], ['Island Forest Group', 45, 1, 2, 1], ['North Aspen', 38, 1, 2, 1], ['Ridgeway', 37, 1, 2, 1]];
  return `
  <section class="ph">
    <div><div class="ph-kicker">Team · Resourcing</div><h1>Workload</h1><p>2,103 hours queued. One person is over capacity, and 643 hours have no owner. Fix ownership before scheduling.</p></div>
    <div class="ph-actions"><div class="seg"><button class="on">Workload</button><button>Overdue <span class="num">14</span></button></div><button class="btn primary">${I.plus} Onboard a project</button></div>
  </section>
  <section class="kpis">
    <div class="kpi hero"><span class="l">Queued work</span><span class="v">2,103h</span><span class="s">361 open tasks · 66 of 101 closed in 30d</span>${spark([1800, 1850, 1920, 1990, 2010, 2060, 2103], 300, 30)}</div>
    <div class="kpi"><span class="l">Assigned</span><span class="v">1,461h</span><span class="s">69% of queue</span></div>
    <div class="kpi"><span class="l" style="color:var(--warn-ink)">Unowned</span><span class="v">643h</span><span class="s">Needs an owner</span></div>
    <div class="kpi"><span class="l" style="color:var(--crit-ink)">Over 6 months old</span><span class="v">1,181h</span><span class="s">Likely stale. Review.</span></div>
  </section>
  <section class="panel">
    <div class="panel-h"><h3>Open queue by status</h3><span class="meta">Click a segment to open the list</span></div>
    <div class="stackbar"><div style="flex:211;background:var(--idle)">211 not started</div><div style="flex:99;background:var(--accent)">99 ongoing</div><div style="flex:84;background:var(--warn)">84 on hold</div><div style="flex:35;background:var(--info)">35</div><div style="flex:16;background:var(--line-strong);color:var(--text-2)">16</div></div>
    <div class="legend"><span><i style="background:var(--idle)"></i>Not started</span><span><i style="background:var(--accent)"></i>Ongoing</span><span><i style="background:var(--warn)"></i>On hold</span><span><i style="background:var(--info)"></i>In progress</span><span><i style="background:var(--line-strong)"></i>Other</span></div>
  </section>
  <section class="grid g-main">
    <div class="panel">
      <div class="panel-h"><h3>Team capacity</h3><span class="meta">Next 4 weeks</span><div class="r"><div class="seg"><button class="on">Month</button><button>Quarter</button><button>Half year</button></div></div></div>
      ${PEOPLE.map(p => `<div class="row" style="gap:14px;padding:10px 0;border-top:1px solid var(--line)">
        ${ring(p.cap)}<div style="width:150px"><div style="font-weight:500">${p.name}</div><div class="muted" style="font-size:11.5px">${p.q}h queued · ${p.dated} dated</div></div>
        <div style="flex:1"><div class="meter ${p.cap > 100 ? 'crit' : p.cap > 80 ? 'warn' : ''}"><b style="width:${Math.min(p.cap, 100)}%"></b></div></div>
        <span class="num" style="width:48px;text-align:right;${p.cap > 100 ? 'color:var(--crit-ink);font-weight:600' : ''}">${p.cap}%</span>
      </div>`).join('')}
      <div class="row" style="gap:14px;padding:10px 0;border-top:1px solid var(--line)"><span class="ring" style="display:grid;place-items:center;border:2px dashed var(--warn);border-radius:50%"></span><div style="width:150px"><div style="font-weight:500;color:var(--warn-ink)">Unassigned</div><div class="muted" style="font-size:11.5px">591h queued</div></div><div style="flex:1"></div><button class="btn sm">Assign work</button></div>
    </div>
    <div class="panel">
      <div class="panel-h"><h3>Hours by client</h3><span class="meta">September · 1,364h</span></div>
      <div class="treemap">${tm.map((t, i) => { const span = i < 3 ? 6 : i < 6 ? 4 : 3; const rows = i < 3 ? 2 : 1; return `<div style="grid-column:span ${span};grid-row:span ${rows};background:${t[2] === 'u' ? 'var(--idle)' : 'var(--seq-' + Math.min(5, t[2] + 1) + ')'};${t[2] === 1 ? 'color:var(--text)' : ''}"><b>${t[0]}</b><span>${t[1]}h</span></div>`; }).join('')}</div>
      <div class="explain">79h (6%) reached no project and is shown in grey rather than shared out.</div>
    </div>
  </section>`;
}

function pageDrive() {
  return `
  <section class="ph">
    <div><div class="ph-kicker">Knowledge · Drive & meetings</div><h1>What Claude can read</h1><p>3,474 passages are searchable. 47 documents are readable but haven’t been read yet. One click fixes that.</p></div>
    <div class="ph-actions"><div class="seg"><button class="on">Coverage</button><button>Cleanup <span class="num">35</span></button><button>Meeting notes</button></div><button class="btn primary">Read the 47 unread</button></div>
  </section>
  <section class="kpis">
    <div class="kpi hero"><span class="l">Searchable passages</span><span class="v">3,474</span><span class="s">from 316 of 366 readable documents</span></div>
    <div class="kpi"><span class="l" style="color:var(--warn-ink)">Readable, unread</span><span class="v">47</span><span class="s">Waiting on the button</span></div>
    <div class="kpi"><span class="l">Opened, no text</span><span class="v">3</span><span class="s">Scans, oversized files</span></div>
    <div class="kpi"><span class="l" style="color:var(--crit-ink)">Hidden by filing</span><span class="v">187</span><span class="s">In 35 unattributed folders</span></div>
  </section>
  <section class="grid g-main">
    <div class="panel">
      <div class="panel-h"><h3>Where it stops</h3><span class="meta">Each bar is a share of everything catalogued</span></div>
      <div class="funnel">
        ${[[1, 'Catalogued', 100, '366'], [2, 'Readable', 100, '366'], [3, 'Read', 86, '316'], [4, 'Searchable', 86, '3,474 passages']].map(r => `<div class="funnel-row"><span class="i">${r[0]}</span><span>${r[1]}</span><div><div class="bar" style="width:${r[2]}%;${r[0] === 4 ? 'background:var(--seq-5)' : ''}"></div></div><span class="num r" style="text-align:right">${r[3]}</span></div>${r[0] === 2 ? '<div class="funnel-drop">↳ −47 nobody has read them yet. <a href="#/drive" style="text-decoration:underline">Read them</a></div>' : ''}`).join('')}
      </div>
      <div class="explain">Only one kind of drop is work. A locked file is a property of the file and won’t change. An unread one is just waiting for the button above.</div>
    </div>
    <div class="panel"><div class="panel-h"><h3>Filing problems</h3></div>
      ${[['crit', '187 documents', 'in 35 folders that match no client'], ['warn', '4 clients', 'have no Drive folder at all'], ['warn', '14 documents', 'filed under the wrong client'], ['info', '17 meeting notes', 'matched no client']].map(r => `<div class="row" style="gap:12px;padding:10px 0;border-top:1px solid var(--line)"><span class="dot ${r[0]}"></span><div><b style="font-weight:600">${r[1]}</b> <span class="muted">${r[2]}</span></div></div>`).join('')}
      <a class="btn mt-4" href="#/drive">Fix it on Cleanup ${I.arrow}</a>
    </div>
  </section>
  <section class="panel flush">
    <div class="panel-h" style="padding:var(--s-4) var(--s-5) 0"><h3>By client: biggest gap first</h3><span class="meta">Sorted by unread, not size</span></div>
    <table class="t"><thead><tr><th>Client</th><th class="r">Unread</th><th class="r">Read</th><th>Coverage</th><th class="r">Passages</th></tr></thead><tbody>
    ${[['northline', 23, 91, 1010], ['meridian', 14, 0, 0], ['westbrook', 3, 17, 258], ['harbourlight', 3, 14, 154], ['island-fc', 1, 40, 309], ['cedarview', 1, 26, 257]].map(r => { const c = C[r[0]]; const pct = Math.round(r[2] / (r[1] + r[2]) * 100); return `<tr><td><span class="row">${logoTile(c).replace('logo-tile"', 'logo-tile" style="width:22px;height:22px;font-size:9px;border-radius:5px;background:' + c.brand + '"')}<span class="name">${c.name}</span></span></td><td class="r num" style="color:var(--warn-ink);font-weight:600">${r[1]}</td><td class="r num">${r[2] || '—'}</td><td style="width:220px"><div class="meter ${pct < 50 ? 'crit' : pct < 90 ? 'warn' : 'ok'}"><b style="width:${pct}%"></b></div></td><td class="r num">${r[3] ? r[3].toLocaleString() : '—'}</td></tr>`; }).join('')}
    </tbody></table>
  </section>`;
}

function pageAI() {
  const money = [['meeting-extract', 1.99, 44], ['unlabelled', .43, 2], ['flag-suggest', .40, 45], ['sentiment-classify', .14, 28], ['opportunity-approach', .09, 7], ['ask:web-reporting', .07, 6], ['client-ask', .04, 2]];
  const jobs = [['Ad alerts: critical + stopped', 'ok', 'Healthy', '5h ago · 4.2s'], ['Constant Contact: list snapshots', 'ok', 'Healthy', '5h ago · 3.9s'], ['Conversion actions: Google', 'ok', 'Healthy', '5h ago · 11.2s'], ['Conversion actions: Google daily', 'ok', 'Healthy', '5h ago · 13.3s'], ['Conversion actions: Meta', 'warn', 'Late', 'expected 2h ago'], ['Drive catalogue', 'ok', 'Healthy', '19d ago · weekly']];
  return `
  <section class="ph">
    <div><div class="ph-kicker">Knowledge · AI control panel</div><h1>Spend & pipeline health</h1><p>Token spend, API cost and pipeline health across every app that touches Claude. Last 30 days.</p></div>
    <div class="ph-actions"><span class="fresh">Read 11:51 a.m.</span><button class="btn">${I.refresh} Refresh</button></div>
  </section>
  <section class="panel row" style="gap:14px;border-color:color-mix(in oklab,var(--ok) 35%,var(--line));background:color-mix(in oklab,var(--ok-soft) 60%,var(--surface))"><span class="dot ok" style="box-shadow:0 0 0 4px var(--ok-soft)"></span><b>All clear</b><span class="muted">23 of 24 jobs healthy · 1 late · 0 failed calls in 30 days</span></section>
  <section class="kpis">
    <div class="kpi hero"><span class="l">Spend · 30 days</span><span class="v">$3.18</span><span class="s">481 calls · $0.0066 avg</span>${spark([2, 3, 2, 5, 4, 6, 9, 7, 8, 11, 9, 12, 10, 8], 300, 30)}</div>
    <div class="kpi"><span class="l">Spend today</span><span class="v">$0.004</span><span class="s"><span class="delta down">↓96%</span> vs yesterday</span></div>
    <div class="kpi"><span class="l">Tokens in / out</span><span class="v">811k</span><span class="s">54.3k out · 0 cache reads</span></div>
    <div class="kpi"><span class="l">Error rate</span><span class="v">0.0%</span><span class="s">0 of 481 calls</span></div>
  </section>
  <section class="grid g-main">
    <div class="panel">
      <div class="panel-h"><h3>Where the money goes</h3><div class="r"><div class="seg"><button class="on">Surface</button><button>App</button><button>Model</button><button>Provider</button></div></div></div>
      ${money.map(m => `<div style="padding:8px 0;border-top:1px solid var(--line)"><div class="row between"><span class="num" style="font-size:12.5px">${m[0]}</span><span class="row"><span class="muted" style="font-size:11.5px">${m[2]} calls</span><span class="num" style="width:56px;text-align:right">$${m[1].toFixed(2)}</span></span></div><div class="meter mt-2" style="height:4px"><b style="width:${m[1] / 1.99 * 100}%"></b></div></div>`).join('')}
      <div class="row between mt-4" style="font-size:12px"><span class="muted">Tavily credits this month</span><span class="row"><span class="num">688 / 1,000</span><span class="pill idle">312 left</span></span></div>
    </div>
    <div class="grid" style="align-content:start">
      <div class="panel"><div class="panel-h"><h3>Activity</h3><span class="meta">Weekdays · 17 weeks</span></div>${heat()}<div class="legend"><span>Less</span>${[0, 1, 2, 3, 4].map(l => `<i style="background:var(--seq-${l})"></i>`).join('')}<span>More</span></div></div>
      <div class="panel flush"><div class="panel-h" style="padding:var(--s-4) var(--s-5) 0"><h3>Pipelines & cron jobs</h3><span class="meta">24</span></div>
        <div class="inbox">${jobs.map(j => `<div class="inbox-row" style="grid-template-columns:1fr auto"><div style="min-width:0"><div class="t">${j[0]}</div><div class="d">${j[3]}</div></div><span class="pill ${j[1]}">${j[2]}</span></div>`).join('')}</div>
      </div>
    </div>
  </section>`;
}

function pageSystem() {
  const sw = (n, v, h) => `<div class="sw"><div class="c" style="background:var(${v})"></div><div class="n"><b>${n}</b><span>${v} · ${h}</span></div></div>`;
  return `
  <section class="ph"><div><div class="ph-kicker">Reference</div><h1>Design system</h1><p>Tokens and primitives used by every page. The full rules are in <b>DESIGN-SYSTEM.md</b>. If a value isn’t here, it doesn’t belong in the UI.</p></div></section>
  <section><div class="sec"><h2>Neutrals: Stone</h2><span class="meta">A specific warm grey, not stock slate</span></div><div class="swatches">${sw('Background', '--bg', '#F5F4F1')}${sw('Surface', '--surface', '#FFFFFF')}${sw('Surface 2', '--surface-2', '#FAF9F7')}${sw('Surface 3', '--surface-3', '#F0EEEA')}${sw('Line', '--line', '#E6E3DD')}${sw('Text', '--text', '#1B1A18')}${sw('Text 2', '--text-2', '#55524C')}${sw('Nav (graphite)', '--nav-bg', '#161614')}</div></section>
  <section><div class="sec"><h2>Accent: Lagoon</h2><span class="meta">Interactive and brand moments only, never status</span></div><div class="swatches">${sw('Lagoon', '--accent', '#127C82')}${sw('Lagoon hover', '--accent-hover', '#0E6A6F')}${sw('Lagoon soft', '--accent-soft', '#E2F0EF')}${sw('Lagoon ink', '--accent-ink', '#0B5A5E')}</div></section>
  <section><div class="sec"><h2>Status & severity</h2><span class="meta">One family. Each has base, soft and ink</span></div><div class="swatches">${sw('Brick: critical', '--crit', '#C2452D')}${sw('Saffron: notable', '--warn', '#C98A12')}${sw('Moss: healthy', '--ok', '#4E8A3E')}${sw('Harbour: info', '--info', '#3A6EA5')}${sw('Fog: idle', '--idle', '#9A968D')}${sw('Ember: at risk', '--sent-risk', '#D9692B')}</div></section>
  <section><div class="sec"><h2>Series & sequential</h2></div><div class="swatches">${sw('Series 1 · Google', '--series-1', '#3A6EA5')}${sw('Series 2 · StackAdapt', '--series-2', '#8A5A9E')}${sw('Series 3 · Meta', '--series-3', '#2AA39C')}${sw('Series 4 · Taboola', '--series-4', '#B8873B')}</div><div class="row mt-4" style="gap:4px">${[0, 1, 2, 3, 4, 5].map(i => `<div style="flex:1;height:36px;border-radius:4px;background:var(--seq-${i})"></div>`).join('')}</div></section>
  <section class="panel"><div class="sec"><h2>Type</h2><span class="meta">Geist (UI) · Geist Mono (numbers) · Barlow Condensed (hero numerals, stand-in for Trade Gothic Condensed)</span></div>
    <div class="type-row"><span class="k">Hero · display 52</span><span style="font-family:var(--font-display);font-size:52px;font-weight:600;line-height:1">$4,897</span></div>
    <div class="type-row"><span class="k">Page title · 28/600</span><span style="font-size:28px;font-weight:600;letter-spacing:-.02em">Good morning, Kevin</span></div>
    <div class="type-row"><span class="k">Section · 16/600</span><span style="font-size:16px;font-weight:600">Attention inbox</span></div>
    <div class="type-row"><span class="k">Panel · 14/600</span><span style="font-size:14px;font-weight:600">Budget burn</span></div>
    <div class="type-row"><span class="k">Body · 13/400</span><span>Each bar is a share of everything catalogued, so the drops are comparable.</span></div>
    <div class="type-row"><span class="k">KPI · mono 26</span><span class="num" style="font-size:26px">1,461h</span></div>
    <div class="type-row"><span class="k">Kicker · 11/600 caps</span><span class="ph-kicker" style="margin:0">Growth · Advertising</span></div>
  </section>
  <section class="grid g-2">
    <div class="panel"><div class="sec"><h2>Status primitives</h2></div>
      <div class="row wrap" style="gap:8px"><span class="pill crit">Blocked</span><span class="pill warn">Draft</span><span class="pill ok">Done</span><span class="pill info">Running</span><span class="pill idle">Idle</span></div>
      <div class="row wrap mt-4" style="gap:14px"><span class="row"><span class="dot crit"></span>critical</span><span class="row"><span class="dot warn"></span>notable</span><span class="row"><span class="dot ok"></span>clear</span><span class="score hi">8.7</span><span class="score mid">7.4</span><span class="score lo">5.1</span><span class="delta up">↑28%</span><span class="delta down">↓54%</span><span class="tag">Content</span></div>
      <div class="row wrap mt-4" style="gap:8px"><button class="btn primary">Primary</button><button class="btn">Secondary</button><button class="btn ghost">Ghost</button><button class="btn ask">${I.spark} Ask Claude</button></div>
    </div>
    <div class="panel"><div class="sec"><h2>Attention card</h2><span class="meta">Severity edge + count + one-line why</span></div><div class="grid g-2">${attnCard({ sev: 'crit', src: 'Over budget', n: 3, title: 'Three clients past their hours', detail: '597h over in total', route: '#/system' })}${attnCard({ sev: 'warn', src: 'Decisions', n: 12, title: 'Meeting actions waiting', detail: 'Oldest 61 days', route: '#/system' })}</div></div>
  </section>`;
}

/* ---------- Router ---------- */
const ROUTES = {
  today: () => ({ nav: 'today', crumbs: ['Today'], fresh: { text: 'Checked 11:18 a.m.' }, html: pageToday() }),
  clients: (s) => s ? ({ nav: 'clients', crumbs: [['Clients', '#/clients'], (C[s] || C.northline).name], fresh: { text: 'Productive synced 6:00 a.m.' }, html: pageClient(s) }) : ({ nav: 'clients', crumbs: ['Clients'], html: pageClients() }),
  bd: () => ({ nav: 'bd', crumbs: [['Growth', '#/bd'], 'BD pipeline'], html: pageBD() }),
  advertising: () => ({ nav: 'advertising', crumbs: [['Growth', '#/advertising'], 'Advertising'], fresh: { text: 'Data to Oct 14 · loaders ran 6:00 a.m.' }, html: pageAds() }),
  socials: () => ({ nav: 'socials', crumbs: [['Growth', '#/socials'], 'Socials'], html: pageSocials() }),
  resourcing: () => ({ nav: 'resourcing', crumbs: [['Team', '#/resourcing'], 'Resourcing'], fresh: { text: 'Productive synced 6:00 a.m.' }, html: pageResourcing() }),
  drive: () => ({ nav: 'drive', crumbs: [['Knowledge & AI', '#/drive'], 'Drive & meetings'], fresh: { text: 'Checked 19 days ago', stale: true }, html: pageDrive() }),
  ai: () => ({ nav: 'ai', crumbs: [['Knowledge & AI', '#/ai'], 'AI control panel'], html: pageAI() }),
  system: () => ({ nav: 'system', crumbs: ['Design system'], html: pageSystem() }),
};
function render() {
  const [, p = 'today', s] = (location.hash || '#/today').split('/');
  const r = (ROUTES[p] || ROUTES.today)(s);
  renderSidebar(r.nav); renderTopbar(r.crumbs, r.fresh);
  $('#view').innerHTML = `<div class="page">${r.html}</div>`;
  document.title = `${typeof r.crumbs.at(-1) === 'string' ? r.crumbs.at(-1) : 'M1'} · M1`;
  $('#app').classList.remove('mnav'); window.scrollTo(0, 0);
  if (STYLE === 'premium') enhance(p, s);
}
function route() {
  // Premium: morph shared elements (client logo tile -> hub header) between pages
  if (STYLE === 'premium' && document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) document.startViewTransition(render);
  else render();
}

/* ---------- Style mode (Standard / Premium) ---------- */
function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
let STYLE = new URLSearchParams(location.search).get('style') || store('m1-style') || 'standard';
function applyStyle() {
  const r = document.documentElement;
  r.dataset.style = STYLE;
  if (!r.dataset.theme) r.dataset.theme = STYLE === 'premium' ? 'dark' : 'light';
}
function setStyle(v) {
  STYLE = v; store('m1-style', v);
  if (location.search.includes('style=')) history.replaceState(null, '', location.pathname + location.hash);
  document.documentElement.dataset.theme = v === 'premium' ? 'dark' : 'light';
  applyStyle(); render();
}
applyStyle();

/* Premium-only enhancements: unit styling, count-up, briefing, chart annotations */
function enhance(page, sub) {
  // 1. Split numbers from units so units can be set smaller and lighter
  document.querySelectorAll('.kpi .v, .hub-stats .v, .score-big, .attn-top .n').forEach(el => {
    const m = el.textContent.trim().match(/^([^\d−-]*)([−-]?[\d,.]+)(.*)$/);
    if (!m) return;
    el.innerHTML = `${m[1] ? `<span class="u">${m[1]}</span>` : ''}<span class="nv">${m[2]}</span>${m[3] ? `<span class="u">${m[3]}</span>` : ''}`;
  });
  // 2. Count up once on page load
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) document.querySelectorAll('.nv').forEach(el => {
    const txt = el.textContent, target = parseFloat(txt.replace(/,/g, '').replace('−', '-'));
    if (!isFinite(target) || Math.abs(target) < 2) return;
    const dec = (txt.split('.')[1] || '').length, comma = txt.includes(','), t0 = performance.now(), dur = 900;
    const f = v => { const s = Math.abs(v).toFixed(dec); const [a, b] = s.split('.'); const w = comma ? Number(a).toLocaleString('en-CA') : a; return (v < 0 ? '−' : '') + w + (b ? '.' + b : ''); };
    const tick = now => { const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 4); el.textContent = f(target * e); if (k < 1) requestAnimationFrame(tick); else el.textContent = txt; };
    requestAnimationFrame(tick);
  });
  // 3. Claude's morning briefing on Today
  if (page === 'today') {
    const ph = $('.page .ph');
    ph.insertAdjacentHTML('afterend', `<section class="brief"><div class="brief-k">${I.spark} Morning briefing · written by Claude at 6:00 a.m.</div>
      <p><em>Cedarview Health</em> needs a reply plan today: sentiment fell to 31 on wait-time complaints. <em>Northline</em> conversions dropped 54% after tracking broke on Oct 9, so fix that before raising spend. <em>Ridgeway</em> is at 162% of budget, which means the estimate needs a reset, not more hours.</p>
      <div class="brief-a"><a href="#/socials">Draft Cedarview Health reply</a><a href="#/advertising">Open Northline findings</a><a href="#/clients/ridgeway">Re-estimate Ridgeway</a></div></section>`);
  }
  // 4. Editorial annotations written onto charts
  const bars = $('.bars-v');
  if (bars) bars.parentElement.insertAdjacentHTML('beforeend', `<div class="annot" style="left:${(4.5 / 13) * 100}%;bottom:${(118 / 140) * 100}%"><span>Deficit begins</span></div>`);
  const gts = document.querySelectorAll('.gantt .gt');
  if (gts[1]) gts[1].insertAdjacentHTML('beforeend', `<div class="annot-v" style="left:28%"><span>Tracking broke · Oct 9</span></div>`);
}
window.addEventListener('hashchange', route);

/* ---------- Command palette ---------- */
const CMD = [
  ...NAV.flatMap(g => g.items.map(i => ({ g: 'Pages', label: i.label, href: '#/' + i.id, k: g.group || '' }))),
  ...CLIENTS.map(c => ({ g: 'Clients', label: c.name, href: '#/clients/' + c.slug, k: c.flag ? c.flag[1] : 'Client hub', brand: c })),
  ...ATTENTION.slice(0, 4).map(a => ({ g: 'Needs attention', label: a.title, href: a.route, k: a.src, sev: a.sev })),
  { g: 'Ask Claude', label: 'Which clients are trending over budget this quarter?', href: '#/clients', k: '↵ to ask' },
];
let cmdSel = 0;
function drawCmd(q = '') {
  const f = CMD.filter(x => x.label.toLowerCase().includes(q.toLowerCase())).slice(0, 12);
  cmdSel = Math.min(cmdSel, f.length - 1);
  const groups = [...new Set(f.map(x => x.g))];
  let idx = 0;
  $('#cmdk-list').innerHTML = groups.map(g => `<div class="cmdk-g"><h6>${g}</h6>${f.filter(x => x.g === g).map(x => `<a class="cmdk-i ${idx++ === cmdSel ? 'on' : ''}" href="${x.href}">${x.brand ? `<span class="logo-tile" style="width:20px;height:20px;font-size:8.5px;border-radius:5px;background:${x.brand.brand}">${x.brand.ini}</span>` : x.sev ? `<span class="dot ${x.sev}"></span>` : g === 'Ask Claude' ? I.spark.replace('<svg', '<svg width="16" height="16" fill="none" stroke="var(--accent)" stroke-width="1.6"') : I.arrow.replace('<svg', '<svg width="15" height="15" fill="none" stroke="var(--text-3)" stroke-width="1.8"')}<span>${x.label}</span><span class="k">${x.k}</span></a>`).join('')}</div>`).join('') || '<div class="cmdk-g"><div class="cmdk-i">No matches. Press ↵ to ask Claude.</div></div>';
  $('#cmdk-list').querySelectorAll('a').forEach(a => a.onclick = closeCmdk);
}
function openCmdk() { $('#cmdk').classList.add('open'); $('#cmdk-input').value = ''; cmdSel = 0; drawCmd(); setTimeout(() => $('#cmdk-input').focus(), 10); }
function closeCmdk() { $('#cmdk').classList.remove('open'); }
$('#cmdk').addEventListener('click', e => { if (e.target.id === 'cmdk') closeCmdk(); });
$('#cmdk-input').addEventListener('input', e => { cmdSel = 0; drawCmd(e.target.value); });
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); $('#cmdk').classList.contains('open') ? closeCmdk() : openCmdk(); }
  if (!$('#cmdk').classList.contains('open')) return;
  if (e.key === 'Escape') closeCmdk();
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); const n = $('#cmdk-list').querySelectorAll('a').length; cmdSel = (cmdSel + (e.key === 'ArrowDown' ? 1 : -1) + n) % n; drawCmd($('#cmdk-input').value); }
  if (e.key === 'Enter') { const a = $('#cmdk-list').querySelectorAll('a')[cmdSel]; if (a) { location.hash = a.getAttribute('href'); closeCmdk(); } }
});

route();
