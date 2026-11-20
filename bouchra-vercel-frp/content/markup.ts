// The page markup. Edit text here.
// Résumé, voice recording and photos live in content/media-1.ts to media-5.ts.
import { RESUME } from "./media-1";
import { VOICE_A } from "./media-2";
import { VOICE_B } from "./media-3";
import { PH_HEAD, PH_PENT, PH_UCLA } from "./media-4";
import { PH_PLOT, PH_SF } from "./media-5";
const VOICE = VOICE_A + VOICE_B;
export const markup = String.raw`
<div class="guides" aria-hidden="true"></div>
<div class="backdrop" aria-hidden="true">
  <div class="glow"></div><div class="ledger"></div><div class="margin"></div><div class="grid"></div>
  <svg class="cross" id="cross"></svg>
  <svg class="trend" viewBox="0 0 1440 900" preserveAspectRatio="none"><path d="M0 640 C 180 630, 260 600, 380 610 S 560 560, 660 520 S 820 470, 900 400 S 1060 330, 1150 250 S 1320 160, 1440 120"/><circle cx="1150" cy="250" r="4"/></svg>
</div>

<header class="nav">
  <div class="wrap">
    <a class="brand" href="#home" aria-label="Home"><span class="dot">BA</span><span class="full">Bouchra Alioua</span></a>
    <nav class="links" aria-label="Pages"><span class="hl"></span><span class="act"></span>
      <a href="#home" data-r="/">Home</a>
      <a href="#why-me" data-r="/why-me">Why me</a>
      <a href="#my-ships" data-r="/my-ships">My ships</a>
      <a href="#why-vercel" data-r="/why-vercel">Why Vercel</a>
    </nav>
    <div class="tools">
      <button class="kbd" id="theme" aria-label="Toggle dark mode">◐</button>
      <button class="kbd" id="open-k" aria-label="Open command menu">⌘K</button>
      <a class="btn ghost" href="${RESUME}" download="Bouchra_Alioua_Resume.pdf">Résumé ↓</a>
    </div>
  </div>
</header>

<main>
<!-- ============================ HOME ============================ -->
<section class="route" data-route="/">
  <div class="wrap home">
    <div class="hero">
      <div class="hero-l">
        <p class="kicker hero-status"><i></i>Applying · Vercel Finance Rotational Program</p>
        <h1>Bouchra<br/>Alioua</h1>
        <p class="hero-sub">Economics at UCLA, minor in Statistics &amp; Data Science, class of 2027. Six finance roles across media, healthcare, venture research and nonprofits.</p>
        <div class="hero-cta">
          <a class="btn lg" href="#my-ships">See what I built →</a>
          <button class="btn ghost lg" onclick="openK()"><span class="mono" style="font-size:12px">⌘K</span> Jump anywhere</button>
        </div>
      </div>
      <figure class="portrait">
        <div class="ph"><img src="${PH_HEAD}" alt="Bouchra Alioua"/></div>
        <figcaption class="mono"><span>Los Angeles</span><span>UCLA ’27</span></figcaption>
      </figure>
    </div>

    <div class="carousel" aria-label="Where I have worked">
      <div class="car-track"><div class="car-item"><dt>Media</dt><span class="lg" aria-hidden="true">PAR</span><dd><b>Paramount · CBS Studios</b><span>FP&amp;A Intern</span></dd></div><div class="car-item"><dt>Media</dt><span class="lg" aria-hidden="true">NBCU</span><dd><b>NBCUniversal</b><span>Production Finance Intern</span></dd></div><div class="car-item"><dt>Healthcare</dt><span class="lg" aria-hidden="true">KP</span><dd><b>Kaiser Permanente</b><span>FP&amp;A Intern</span></dd></div><div class="car-item"><dt>Venture research</dt><span class="lg" aria-hidden="true">HP</span><dd><b>HP Tech Ventures</b><span>Startup research externship</span></dd></div><div class="car-item"><dt>Nonprofit</dt><span class="lg" aria-hidden="true">IRC</span><dd><b>International Rescue Committee</b><span>Finance Intern</span></dd></div><div class="car-item"><dt>Healthcare</dt><span class="lg" aria-hidden="true">SFV</span><dd><b>SFV Mental Health Center</b><span>Finance &amp; Accounting Intern</span></dd></div><div class="car-item"><dt>Campus</dt><span class="lg" aria-hidden="true">UCLA</span><dd><b>UCLA DataRes</b><span>VP of Finance</span></dd></div><div class="car-item"><dt>Campus</dt><span class="lg" aria-hidden="true">UCLA</span><dd><b>UCLA · appointed by the Chancellor</b><span>Undergraduate representative, campus funding</span></dd></div><div aria-hidden="true" style="display:contents"><div class="car-item"><dt>Media</dt><span class="lg" aria-hidden="true">PAR</span><dd><b>Paramount · CBS Studios</b><span>FP&amp;A Intern</span></dd></div><div class="car-item"><dt>Media</dt><span class="lg" aria-hidden="true">NBCU</span><dd><b>NBCUniversal</b><span>Production Finance Intern</span></dd></div><div class="car-item"><dt>Healthcare</dt><span class="lg" aria-hidden="true">KP</span><dd><b>Kaiser Permanente</b><span>FP&amp;A Intern</span></dd></div><div class="car-item"><dt>Venture research</dt><span class="lg" aria-hidden="true">HP</span><dd><b>HP Tech Ventures</b><span>Startup research externship</span></dd></div><div class="car-item"><dt>Nonprofit</dt><span class="lg" aria-hidden="true">IRC</span><dd><b>International Rescue Committee</b><span>Finance Intern</span></dd></div><div class="car-item"><dt>Healthcare</dt><span class="lg" aria-hidden="true">SFV</span><dd><b>SFV Mental Health Center</b><span>Finance &amp; Accounting Intern</span></dd></div><div class="car-item"><dt>Campus</dt><span class="lg" aria-hidden="true">UCLA</span><dd><b>UCLA DataRes</b><span>VP of Finance</span></dd></div><div class="car-item"><dt>Campus</dt><span class="lg" aria-hidden="true">UCLA</span><dd><b>UCLA · appointed by the Chancellor</b><span>Undergraduate representative, campus funding</span></dd></div></div></div>
    </div>

    <div class="doors">
      <a class="door" href="#why-me">
        <div class="top"><h2>Why me</h2><span class="arrow">→</span></div>
        <p>Six roles, four industries, and the decisions that connect them. Told in my own voice, with a live transcript.</p>
        <div class="peek">
          <div style="display:flex;justify-content:space-between;font-size:12px;align-items:center"><span style="display:flex;gap:8px;align-items:center"><span class="pp">▶</span>Listen</span><span class="mono" style="color:var(--mute)" id="wt">0:00 / 1:42</span></div>
          <div class="wave" id="wave"></div>
          <p class="cap-line" id="capline">My first finance roles taught me how numbers get recorded, checked and explained.</p>
        </div>
      </a>
      <a class="door" href="#my-ships">
        <div class="top"><h2>My ships</h2><span class="arrow">→</span></div>
        <p>Two self-conceptualized finance applications built at CBS Studios, both adopted by the team, plus CloudMargin. Run them yourself.</p>
        <div class="peek sp">
          <div class="sp-row"><i class="sd"></i><div><b>LRP variance app</b><small>CBS Studios · adopted</small></div><span class="sp-m mono">2 hrs → &lt;10 s</span></div>
          <div class="sp-row"><i class="sd"></i><div><b>Revenue allocation app</b><small>CBS Studios · adopted</small></div><span class="sp-m mono">$700M / yr</span></div>
          <div class="sp-row"><i class="sd live"></i><div><b>CloudMargin</b><small>Independent · live</small></div><span class="sp-m mono">live ↗</span></div>
        </div>
      </a>
      <a class="door" href="#why-vercel">
        <div class="top"><h2>Why Vercel</h2><span class="arrow">→</span></div>
        <p>I was always the quiet technologist on finance teams. Here’s why I want to be somewhere that’s the job.</p>
        <div class="peek pair" id="vpeek"></div>
      </a>
    </div>
  </div>
</section>

<!-- ============================ WHY ME ============================ -->
<section class="route" data-route="/why-me">
  <div class="wrap page-head">
    <p class="kicker">01 · Why me</p>
    <h1 class="h-page" style="margin-top:14px">Why me</h1>
    <p class="lead">A two-minute story in my own voice, and the scale of the work behind it.</p>
  </div>
  <div class="wrap" style="padding-bottom:44px">
    <div class="player" id="w-story">
      <div class="stage">
        <div class="scene" id="scene"></div>
        <div class="controls">
          <button class="play" id="play" aria-label="Play">▶</button>
          <div class="bar" id="bar"><div class="fill" id="fill"></div></div>
          <span class="time" id="time">0:00 / 2:10</span>
          <button class="speed" id="speed">1×</button>
        </div>
        <div class="chapters" id="chapters"></div>
      </div>
      <div>
        <div class="mode"><div class="seg" id="tmode"><button class="on" data-m="listen">Listen</button><button data-m="read">Read</button></div></div>
        <div class="transcript" id="transcript"></div>
        <audio id="vo" preload="auto" src="${VOICE}"></audio>
        <div id="photos" hidden><img data-k="ucla" src="${PH_UCLA}" alt=""/><img data-k="pent" src="${PH_PENT}" alt=""/><img data-k="plot" src="${PH_PLOT}" alt=""/><img data-k="sf" src="${PH_SF}" alt=""/></div>
      </div>
    </div>
  </div>




  <div class="sec"><div class="wrap">
    <p class="kicker" id="w-scale">The scale I’ve worked at</p>
    <div class="scale">
      <div><b>$700M</b><span>Paramount+ revenue a year, allocated by an app I built</span></div>
      <div><b>$6.4M</b><span>over-allocation I found, fixed and presented to the CFO</span></div>
      <div><b>$600M</b><span>Kaiser Permanente budget, 27 locations, 200 cost centers</span></div>
      <div><b>$45M</b><span>campus funding I advise on, appointed by the UCLA Chancellor</span></div>
      <div><b>$5.5M</b><span>overseen across 10 trust accounts as student-government Director of Budget &amp; Finance</span></div>
    </div>
  </div></div>

  <div class="sec" id="w-map"><div class="wrap">
    <p class="kicker">Every stop so far · hover or tap a stop</p>
    <div class="jm-card" id="jmcard"><svg class="jm-map" viewBox="0 0 760 480" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
<defs><pattern id="jm-dg" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" class="jm-gd"/></pattern></defs>
<rect width="760" height="560" fill="url(#jm-dg)"/><path d="M0,409.2 L0.0,409.2 L79.2,420.0 L158.3,409.2 L237.5,430.8 L285.0,473.8 L324.6,516.9 L356.3,549.2 L364.2,560.0 L0,560 Z" class="jm-sea"/><polyline points="0.0,0.0 0.0,409.2 79.2,420.0 158.3,409.2 237.5,430.8 285.0,473.8 324.6,516.9 356.3,549.2 364.2,560.0" class="jm-coast"/>
<text x="40" y="465" class="jm-ocean">PACIFIC OCEAN</text>
<path d="M117.2,124.9 Q348.5,354.2 672.9,383.4 Q572.0,179.2 364.2,86.2 Q321.2,217.9 372.1,346.8 Q474.5,372.7 570.0,327.4 Q568.4,269.7 530.4,226.2" class="jm-route" pathLength="1"/>
<path d="M530.4,214.2 C550.4,106.19999999999999 650.4,66.19999999999999 680.4,18" class="jm-next"/>
<text x="736" y="30" text-anchor="end" class="jm-sf">↑ 7 · Hopefully, the Bay Area</text>
<g class="jm-stop" data-i="0" tabindex="0" role="button" aria-label="Stop 1 details" style="--d:0.3s"><circle cx="117.2" cy="124.9" r="12" class="jm-halo"/><text x="117.2" y="128.9" text-anchor="middle" class="jm-num">1</text><text x="135.2" y="123.9" text-anchor="start" class="jm-org">Kaiser Permanente</text><text x="135.2" y="139.9" text-anchor="start" class="jm-meta">Nov 2023 · Woodland Hills</text></g><g class="jm-stop" data-i="1" tabindex="0" role="button" aria-label="Stop 2 details" style="--d:0.6499999999999999s"><circle cx="672.9" cy="383.4" r="12" class="jm-halo"/><text x="672.9" y="387.4" text-anchor="middle" class="jm-num">2</text><text x="654.9" y="407.4" text-anchor="end" class="jm-org">Intl. Rescue Committee</text><text x="654.9" y="423.4" text-anchor="end" class="jm-meta">Aug 2024 · Los Angeles</text></g><g class="jm-stop" data-i="2" tabindex="0" role="button" aria-label="Stop 3 details" style="--d:1.0s"><circle cx="364.2" cy="86.2" r="12" class="jm-halo"/><text x="364.2" y="90.2" text-anchor="middle" class="jm-num">3</text><text x="382.2" y="85.2" text-anchor="start" class="jm-org">SFV Mental Health Center</text><text x="382.2" y="101.2" text-anchor="start" class="jm-meta">Sep 2024 · San Fernando Valley</text></g><g class="jm-stop" data-i="3" tabindex="0" role="button" aria-label="Stop 4 details" style="--d:1.3499999999999999s"><circle cx="372.1" cy="346.8" r="12" class="jm-halo"/><text x="372.1" y="350.8" text-anchor="middle" class="jm-num">4</text><text x="354.1" y="345.8" text-anchor="end" class="jm-org">UCLA</text><text x="354.1" y="361.8" text-anchor="end" class="jm-meta">Sep 2025 · Westwood</text></g><g class="jm-stop" data-i="4" tabindex="0" role="button" aria-label="Stop 5 details" style="--d:1.7s"><circle cx="570.0" cy="327.4" r="12" class="jm-halo"/><text x="570.0" y="331.4" text-anchor="middle" class="jm-num">5</text><text x="588.0" y="343.4" text-anchor="start" class="jm-org">Paramount · CBS Studios</text><text x="588.0" y="359.4" text-anchor="start" class="jm-meta">Jun 2026 · Hollywood</text></g><g class="jm-stop" data-i="5" tabindex="0" role="button" aria-label="Stop 6 details" style="--d:2.05s"><circle cx="530.4" cy="226.2" r="12" class="jm-halo"/><text x="530.4" y="230.2" text-anchor="middle" class="jm-num">6</text><text x="548.4" y="208.2" text-anchor="start" class="jm-org">NBCUniversal</text><text x="548.4" y="224.2" text-anchor="start" class="jm-meta">Oct 2026 · Hollywood</text></g></svg><div class="jm-tip" id="jmtip" hidden></div></div>
  </div></div>
  <a class="next wrap" href="#my-ships"><span class="kicker">Next</span><b>My ships <span>→</span></b></a>
</section>

<!-- ============================ SHIPS ============================ -->
<section class="route" data-route="/my-ships">
  <div class="wrap page-head">
    <p class="kicker">02 · My ships</p>
    <h1 class="h-page" style="margin-top:14px">My ships</h1>
    <p class="lead">Two self-conceptualized applications I built at CBS Studios, both adopted into the team’s workflow, plus CloudMargin, built independently. Each starts with the real story, then a version you can run.</p>
  </div>
  <div class="ship-nav"><div class="wrap">
    <a href="#s-how" data-s="s-how" class="on">How I ship</a>
    <a href="#s-var" data-s="s-var">01 Variance &amp; reconciliation</a>
    <a href="#s-alloc" data-s="s-alloc">02 Revenue allocation</a>
    <a href="#s-cm" data-s="s-cm">03 CloudMargin</a>
  </div></div>

  <!-- How I ship: simple stepper -->
  <div class="wrap" id="s-how" style="padding-top:36px;padding-bottom:12px">
    <p class="kicker">How I ship</p>
    <h2 class="h-sec" style="margin-top:10px;max-width:24ch">I build the way Vercel says it builds.</h2>
    <div class="steps6" id="steps6"></div>
    <div class="step-panel" id="steppanel"></div>
  </div>

  <div class="wrap chain" id="chain">

    <!-- ===== SHIP 01 ===== -->
    <article class="ship" id="s-var">
      <div class="ship-head">
        <div>
          <p class="kicker">01 · Paramount · CBS Studios · 2026</p>
          <h2 class="h-sec">Understand the process before automating it.</h2>
        </div>
        <dl class="ship-meta">
          <div><dt>What</dt><dd>Long-range plan variance &amp; reconciliation, driven by production schedules</dd></div>
          <div><dt>Result</dt><dd>~2 hours by hand → under 10 seconds, plus KPI insights</dd></div>
          <div><dt>Status</dt><dd>Self-initiated and built alone; adopted into the team’s monthly workflow</dd></div>
        </dl>
      </div>

      <div class="story">
        <p>Every month, production schedules arrived by email as PDFs. A single shifted production date could move money between years in the <b>1,000+ line long-range plan</b>, which held the strategy for future slates and titles.</p>
        <p>My tool took the whole email at once. It pulled out the PDFs, read the production dates, matched them to the plan, ran every reconciliation, and added KPI insights on what moved and why.</p>
        <p>The VP of Strategy then planned to run it from his own Claude: find the new schedule in his inbox, check it against that month’s plan, and send him the variance report.</p>
      </div>
      <div class="flowline">
        <span class="fl"><i>✉</i>Email with production schedules (PDFs)</span><b>→</b>
        <span class="fl"><i>▦</i>1,000+ line long-range plan</span><b>→</b>
        <span class="fl dark"><i>⚙</i>My tool: extract · match · reconcile</span><b>→</b>
        <span class="fl"><i>▤</i>Variance report + KPI insights</span>
      </div>

      <p class="try-label"><span>Try a synthetic version</span></p>
      <div class="demo" id="vdemo">
        <div class="demo-bar">
          <div class="title"><span class="lights"><i></i><i></i><i></i></span>lrp-variance · synthetic data</div>
          <button class="btn ghost" id="vreset">Reset</button>
        </div>
        <div class="vbody">
          <div class="vin">
            <p class="panel-h">Inputs · drag them into the workspace, or click</p>
            <div class="mail drag" draggable="true" data-k="email" id="din-email">
              <div class="mail-h"><b>Production schedule update · November</b><small class="mono">from: Production Planning</small></div>
              <p>Attached are the updated production schedules. A few titles have moved.</p>
              <div class="atts"><span class="att">PDF · Schedule_Series.pdf</span><span class="att">PDF · Schedule_Features.pdf</span></div>
            </div>
            <div class="lrpcard drag" draggable="true" data-k="lrp" id="din-lrp"><span class="ico xls">XLS</span><div><b>LRP_FY27–29.xlsx</b><small class="mono">1,000+ lines · 10 titles shown</small></div></div>
            <div class="extract" id="vextract">
              <p class="panel-h">Extracted from the PDFs · edit to try your own</p>
              <textarea id="vtext" spellcheck="false"></textarea>
            </div>
          </div>
          <div class="vout">
            <div class="vdrop" id="vdrop"><p class="empty">Drop the email and the LRP workbook here</p></div>
            <div class="vsteps" id="vsteps"><span>Extract PDFs</span><span>Read dates</span><span>Match titles</span><span>Reconcile</span><span>Insights</span></div>
            <div class="kpis" id="kpis"></div>
            <div class="out"><table class="t" id="vtable"><thead><tr><th>Title</th><th>LRP start</th><th>Revised</th><th>Shift</th><th>FY27 $M</th><th>FY28 $M</th><th>FY29 $M</th></tr></thead><tbody></tbody></table></div>
            <div class="status" id="vstatus"><span>Waiting for the email and the LRP.</span><span class="mono"></span></div>
          </div>
        </div>
        <div class="foot"><span>Synthetic titles and figures. Spend books 60% in the production-start year and 40% in the next.</span><span class="mono">runs in your browser</span></div>
      </div>
    </article>

    <div class="link"><span class="lk mono">01 → 02 · same instinct: make the numbers tie</span></div>

    <!-- ===== SHIP 02 ===== -->
    <article class="ship" id="s-alloc">
      <div class="ship-head">
        <div>
          <p class="kicker">02 · Paramount · CBS Studios · 2026</p>
          <h2 class="h-sec">A faster number is only useful if it’s right.</h2>
        </div>
        <dl class="ship-meta">
          <div><dt>What</dt><dd>Paramount+ revenue allocation: a ~$700M pool across 30+ titles</dd></div>
          <div><dt>Result</dt><dd>Weeks of back-and-forth → instant; caught a $6.4M forward-year over-allocation</dd></div>
          <div><dt>Status</dt><dd>Self-initiated; adopted for the 2027–28 planning cycle; answered a live what-if for the CFO</dd></div>
        </dl>
      </div>
      <div class="story">
        <p>I went looking for Paramount+ data because I wanted to get closer to streaming and churn metrics. A model that split a ~$700M pool across 30+ titles existed, but reconciling it took <b>weeks of back-and-forth between teams</b>. Even title names didn’t match between Paramount and CBS data.</p>
        <p>So I mapped every way it could fail: mismatched names, different data formats, pools that didn’t sum. Then I built a <b>new, consistent model</b> that switches between the cable and streaming models in one step.</p>
        <p>The VP expected a process that spans weeks; mine runs instantly. When the CBS Studios CFO wanted to test higher viewership for one show, the tool showed how the pool would shift on the spot. Checking that pool sums tied is how I found the <b>$6.4M error</b>.</p>
      </div>
      <div class="flowline">
        <span class="fl"><i>▦</i>Paramount+ viewing data</span><b>+</b>
        <span class="fl"><i>▦</i>CBS title data</span><b>→</b>
        <span class="fl dark"><i>⚙</i>Match titles · cable ⇄ streaming model</span><b>→</b>
        <span class="fl"><i>✓</i>Allocation that ties to the pool</span>
      </div>

      <p class="try-label"><span>Try a synthetic version</span></p>
      <div class="demo" id="adem">
        <div class="fg-layer" id="fgl"></div>
        <div class="demo-bar">
          <div class="title"><span class="lights"><i></i><i></i><i></i></span>revenue-allocation · synthetic data</div>
          <div style="display:flex;gap:8px"><button class="btn" id="astory">▶ Play the story</button><button class="btn ghost" id="areset">Reset</button></div>
        </div>
        <div class="abody one">
          <div class="acol">
            <div class="arow"><p class="panel-h">Paramount+ titles, allocated against CBS records</p><button class="btn ghost" id="amatch">Match titles</button></div>
            <div class="abars" id="abars"></div>
            <div class="arow ctl">
              <div class="seg" id="amodel"><button class="on" data-m="stream">Streaming model</button><button data-m="cable">Cable model</button></div>
              <div class="seg" id="asrc"><button class="on" data-s="mine">My model</button><button data-s="old">Old process</button></div>
            </div>
            <div class="whatif">
              <label for="wtitle">What if viewership for</label>
              <select id="wtitle"></select>
              <span>changes by</span>
              <input type="range" id="wpct" min="-50" max="50" step="5" value="0"/>
              <b class="mono" id="wpctv">+0%</b>
            </div>
            <div class="status" id="astatus"></div>
          </div>
        </div>
        <div class="foot"><span>Synthetic $120M pool and titles. The real pool was ~$700M across 30+ titles.</span><span class="mono">allocation = pool × share</span></div>
      </div>
    </article>

    <div class="link"><span class="lk mono">02 → 03 · from fixing a model to building one to learn</span></div>

    <!-- ===== SHIP 03 ===== -->
    <article class="ship" id="s-cm">
      <div class="ship-head">
        <div>
          <p class="kicker">03 · Independent · 2026</p>
          <h2 class="h-sec">Build to understand a business.</h2>
        </div>
        <dl class="ship-meta">
          <div><dt>What</dt><dd>CloudMargin: usage, cost, revenue and gross margin for an AI infrastructure business, with forecast scenarios</dd></div>
          <div><dt>Stack</dt><dd>v0 · Next.js · Python · GitHub · Vercel</dd></div>
          <div><dt>Status</dt><dd>Live, synthetic data, built before this application</dd></div>
        </dl>
      </div>
      <div class="story">
        <p>After the allocation work I wanted to understand a business where revenue moves with usage. Instead of only reading about AI infrastructure economics, I modelled one: how usage drives cost and revenue, where gross margin comes from, and how scenarios change the forecast.</p>
      </div>
      <div class="shots">
        <a class="shot img wide" href="cloudmargin/cm-1.jpg" target="_blank" rel="noopener"><img src="cloudmargin/cm-1.jpg" alt="CloudMargin overview: from agent demand to investment decisions" loading="lazy"/><span class="mono">01 · FP&amp;A · What if agents handle more of the workload?</span></a>
        <a class="shot img" href="cloudmargin/cm-2.jpg" target="_blank" rel="noopener"><img src="cloudmargin/cm-2.jpg" alt="CloudMargin product finance: which customers are expensive to serve" loading="lazy"/><span class="mono">02 · Product Finance · Which customers are expensive to serve?</span></a>
        <a class="shot img" href="cloudmargin/cm-3.jpg" target="_blank" rel="noopener"><img src="cloudmargin/cm-3.jpg" alt="CloudMargin investment decision: build, buy, or wait" loading="lazy"/><span class="mono">03 · Investment · Should we build, buy, or wait?</span></a>
      </div>
      <div style="margin-top:18px"><a class="btn" href="https://vercel-frpbuilt.vercel.app/" target="_blank" rel="noopener">Open CloudMargin ↗</a></div>
    </article>
  </div>

  <a class="next wrap" href="#why-vercel"><span class="kicker">Next</span><b>Why Vercel <span>→</span></b></a>
</section>

<!-- ============================ WHY VERCEL ============================ -->
<section class="route" data-route="/why-vercel">
  <div class="wrap page-head">
    <p class="kicker">03 · Why Vercel</p>
    <h1 class="h-page" style="margin-top:14px">Why Vercel</h1>
  </div>

  <div class="wrap vb-thru">
    <p class="kicker">The through-line</p>
    <h2 class="vb-h">Every team hired me for finance. Every time, I ended up building.</h2>
    <p class="vb-lead">Looking back, every internship I’ve had followed the same pattern. I was brought on to do finance work, and I kept gravitating toward the part of the job where technology could make that work better. It started as curiosity in healthcare, turned into actually building at Paramount, and it’s the reason I want to do finance at a company like Vercel.</p>
  </div>

  <div class="wrap">
    <section class="vb-row" id="v-health"><h2>Healthcare <em>taught me to</em> diagnose.</h2><div>
      <p>My interest in technology really started at Kaiser Permanente. Tools like Tableau and Power BI were becoming the norm in financial analysis, and I got to see firsthand how much faster a team could understand its performance once reporting moved out of static spreadsheets. I helped modernize some of that reporting into Tableau, and it stuck with me.</p>
      <p>Kaiser also taught me how to diagnose a problem. I ran budget-versus-actual variance analysis across a $600M operating budget and 27 locations, and the work was always about tracing a number back to what caused it before deciding what to do about it. At San Fernando Valley Mental Health Center, I saw the same need from a smaller organization’s side, processing about 75 vendor invoices a day while helping digitize their accounting processes.</p>
      <div class="vb-proof"><span>Kaiser Permanente</span><span>SFV Mental Health Center</span></div></div></section>

    <section class="vb-row" id="v-ent"><h2>Entertainment <em>taught me to</em> create.</h2><div>
      <p>At Paramount, that curiosity turned into building. I joined the Business Analytics, Planning &amp; Strategy team at CBS Studios, and none of my projects came with instructions. I spent my first weeks learning how each team worked and what they cared about, then looked for the manual processes that were slowing them down.</p>
      <p>I ended up conceptualizing and building two finance applications on my own: one that reconciled the long-range plan against production schedules, and one that allocated $700 million in Paramount+ revenue across 30+ titles. Both were adopted into the team’s workflow, and the allocation model surfaced a $6.4 million error that I presented to the CFO. That experience showed me I could start from a blank page and build something a team actually relies on.</p>
      <div class="vb-proof"><span>Paramount · CBS Studios</span><span>NBCUniversal</span></div></div></section>

    <section class="vb-row tech" id="v-tech"><h2>Technology <em>is where I want to keep</em> building.</h2><div>
      <p>By then I knew I wanted to be closer to where these tools are actually made, and I had already been moving in that direction. As Vice President of Girls Who Code, I was around people building software, and that’s where I first heard of Vercel. At HP Tech Ventures, I researched early-stage cloud and AI infrastructure companies to help build an investment thesis, which taught me how those businesses work and how they’re valued.</p>
      <p>What draws me to tech finance specifically is that so much of it is still being figured out. Usage-based pricing and AI infrastructure costs are new enough that finance gets to help shape the answers rather than inherit them. Before applying, I built <a href="#my-ships" data-jump="#s-cm">CloudMargin</a> in v0 to work through those questions myself and understand how an AI infrastructure business makes money.</p>
      <p>That’s also why the rotation appeals to me. I’ve already seen finance from several angles, and I’d like to keep doing that inside one company:</p>
      <div class="vb-rots">
        <div class="vb-rt"><b>Product Finance</b><p>I built CloudMargin to understand usage-based economics, and my <a href="#my-ships" data-jump="#s-alloc">allocation model</a> worked through $700M title by title. This is where those two interests meet.</p></div>
        <div class="vb-rt"><b>GTM &amp; Corp Fin</b><p>I’ve worked on the planning cycle at Paramount, Kaiser and NBCUniversal, and I’d bring that to how Vercel plans and forecasts its growth.</p></div>
        <div class="vb-rt"><b>Corp Dev &amp; IR</b><p>At the International Rescue Committee, I prepared outcome data for philanthropic partners like the Citi Foundation, which showed me how funders decide where their money goes. At HP Tech Ventures I helped build an investment thesis, and at Paramount I presented my findings to a CFO.</p></div>
      </div></div></section>
  </div>

  <div class="sec bridge-sec" id="v-contact">
    <svg class="bridge" id="bridge" viewBox="0 0 1200 420" preserveAspectRatio="xMidYMax meet" aria-hidden="true"></svg>
    <div class="wrap bridge-copy">
      <h2 class="h-sec">Thank you for reading.</h2>
      <p class="lead" style="margin:12px auto 0">I’d love to bring this to Vercel’s finance team in San Francisco.</p>
      <div style="display:flex;flex-direction:column;align-items:center;gap:12px;margin-top:22px"><span class="mono" style="font-size:14px;color:var(--fg2);user-select:all">bouchraalioua@g.ucla.edu</span><a class="btn ghost" href="${RESUME}" download="Bouchra_Alioua_Resume.pdf">Résumé ↓</a></div>
    
    </div>
  </div>
  <a class="next wrap" href="#home"><span class="kicker">Back to</span><b>Home <span>→</span></b></a>
</section>
</main>

<footer class="site"><div class="wrap"><span>Bouchra Alioua · bouchraalioua@g.ucla.edu</span><span class="mono">Built with v0 · Nov 2026</span></div></footer>

<div class="cmdk" id="cmdk" role="dialog" aria-label="Command menu">
  <div class="box"><input id="kq" placeholder="Jump to a page or demo…" autocomplete="off" /><ul id="kl"></ul></div>
</div>

<div class="island" id="island" role="button" aria-label="Back to Why me"><span class="mb"><i></i><i></i><i></i></span><span><b style="font-weight:500" id="ich">Why me</b> <span class="wtxt" id="itxt"></span></span><button id="ipause" aria-label="Pause">❚❚</button></div>
<div class="hcard" id="hcard"></div>
<div class="toast" id="toast" role="status"></div>
<div class="dd" id="dd"></div>


`;
