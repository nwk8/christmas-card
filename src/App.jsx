
import { useState } from "react";
import "./index.css";

/* =========================================
   ASSET PATHS - GITHUB PAGES
========================================= */

const BASE = import.meta.env.BASE_URL;

const asset = (path) => `${BASE}${path}`;

/* =========================================
   EVERGREEN DECORATIONS
========================================= */

function FirSprig({ className = "" }) {
  return (
    <svg
      className={`evergreen-branch ${className}`}
      viewBox="0 0 420 310"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15 28C105 73 188 136 410 290"
        stroke="#8b9b70"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {Array.from({ length: 13 }, (_, i) => {
        const x = 28 + i * 29;
        const y = 36 + i * 19;

        return (
          <g key={i} strokeLinecap="round">
            <path
              d={`M${x} ${y} l-${20 + i} -28`}
              stroke="#496c4e"
              strokeWidth="5"
            />
            <path
              d={`M${x + 7} ${y + 5} l${24 + i} -23`}
              stroke="#31583f"
              strokeWidth="5"
            />
            <path
              d={`M${x + 11} ${y + 9} l-${13 + i} 27`}
              stroke="#71865b"
              strokeWidth="4"
            />
            <path
              d={`M${x + 16} ${y + 13} l${25 + i} 13`}
              stroke="#496c4e"
              strokeWidth="4"
            />
          </g>
        );
      })}

      <circle cx="106" cy="89" r="6" fill="#a84347" />
      <circle cx="248" cy="193" r="6" fill="#b94d4d" />
      <circle cx="327" cy="244" r="5" fill="#d9b875" />
    </svg>
  );
}

/* =========================================
   CHRISTMAS TREE ILLUSTRATION
========================================= */

function WinterTree() {
  return (
    <svg
      className="tree-scene"
      viewBox="0 0 260 300"
      fill="none"
      role="img"
      aria-label="Illustration of a snow-covered Christmas tree"
    >
      <defs>
        <linearGradient id="treeGreen" x1="50" y1="20" x2="210" y2="270">
          <stop stopColor="#66866a" />
          <stop offset="1" stopColor="#183b32" />
        </linearGradient>
        <linearGradient id="snowWhite" x1="80" y1="20" x2="190" y2="230">
          <stop stopColor="#fffdf3" />
          <stop offset="1" stopColor="#d8e1d5" />
        </linearGradient>
      </defs>

      <path
        d="M130 31L139 48L157 43L151 61L171 68L153 81L176 91L151 105L183 119L151 134L195 153L150 170L210 195L151 214L222 235H38L109 214L50 195L110 170L66 153L109 134L77 119L108 105L84 91L108 81L89 68L111 61L105 43L124 48Z"
        fill="url(#treeGreen)"
        stroke="#c7d2bc"
        strokeWidth="1.5"
      />

      <path
        d="M130 31L139 48L157 43L151 61L171 68L153 81L176 91L151 105L183 119L151 134L195 153L150 170L210 195L151 214L222 235H38L109 214L50 195L110 170L66 153L109 134L77 119L108 105L84 91L108 81L89 68L111 61L105 43L124 48Z"
        stroke="url(#snowWhite)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2 9"
      />

      <path d="M119 234H141V264H119Z" fill="#8a5b3e" />

      <path
        d="M129 8L134 19L146 20L137 28L140 40L129 33L118 40L121 28L112 20L124 19Z"
        fill="#e6c987"
        stroke="#f5e8c9"
        strokeWidth="1.5"
      />

      <g fill="#d8b875">
        <circle cx="129" cy="78" r="4" />
        <circle cx="104" cy="119" r="4" />
        <circle cx="155" cy="145" r="4" />
        <circle cx="112" cy="179" r="4" />
        <circle cx="174" cy="200" r="4" />
      </g>

      <g fill="#a84347">
        <circle cx="145" cy="100" r="5" />
        <circle cx="128" cy="158" r="5" />
        <circle cx="92" cy="195" r="5" />
      </g>

      <g fill="#fffaf0">
        <circle cx="75" cy="87" r="2" />
        <circle cx="188" cy="128" r="2" />
        <circle cx="75" cy="177" r="2" />
        <circle cx="190" cy="214" r="2" />
      </g>

      <path
        d="M27 266C78 253 181 253 233 266"
        stroke="#e7e0cb"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M48 276C102 267 166 267 213 276"
        stroke="#b8c8b8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================
   OPENING SUGAR CUBE
========================================= */

function SugarCube({ onClick }) {
  return (
    <button
      className="sugar-cube-button"
      onClick={onClick}
      aria-label="Open me"
      type="button"
    >
      <span className="sugar-cube">
        <span className="sugar-cube-top" />
        <span className="sugar-cube-front">
          <span>OPEN ME</span>
        </span>
        <span className="sugar-cube-side" />
      </span>
    </button>
  );
}

/* =========================================
   PAGE 1 - CHRISTMAS LETTER
========================================= */

function ChristmasLetter() {
  return (
    <section className="greeting">
      <div className="greeting-content">
        <div className="greeting-text">
          <h2 className="letter-heading">Merry Christmas, my love.</h2>

          <p className="greeting-message">
            I hope this Christmas brings you as much warmth and happiness as you
            bring into my life. I'm so grateful for all the little moments we've
            shared, and for the memories still waiting for us.
          </p>

          <p className="story-text">
            Meeting you changed my life, I really didn't think I would find my
            match. I wasn't even looking for it. Out of all the people in that
            godforsaken city, I met you. I got to know you, care about you, and
            experience what it's like to have someone who means everything to
            me. I'm so grateful I met you, and I wouldn't want it any other way.
          </p>
        </div>

        <figure className="greeting-image">
          <img src={asset("images/front.heic")} alt="My baby ❤️" />
          <figcaption>My baby ❤️</figcaption>
        </figure>
      </div>
    </section>
  );
}

/* =========================================
   PAGE 2 - OUR RELATIONSHIP TIMELINE
========================================= */

function TimelinePage() {
  const milestones = [
    {
      date: "The beginning",
      title: "June 26th / September 29th at 10:20pm",
      description:
        "when we first met / when you asked me to be my girlfriend, i was shocked and i remember thinking: holy shit i cant believe this is happening right now.",
      image: asset("images/aMelMelMel.jpg"),
    },
    {
      date: "October 9,10,11th",
      title: "Our first date",
      description:
        "I wasn't sure whether I 'loved' you at first, but this date proved otherwise, I loved you so so much.",
      image: asset("images/timeline-1.HEIC"),
    },
    {
      date: "Our daily facetime calls",
      title: "A special memory",
      description:
        "The best part of my day, it makes long distance seem like nothing. You make my life better everyday",
      image: asset("images/timeline-4.heic"),
    },
  ];

  return (
    <section className="timeline-page">
      <div className="timeline-heading">
        <h2>Our story so far!</h2>
      </div>

      <div className="timeline">
        {milestones.map((milestone, index) => (
          <article className="timeline-item" key={index}>
            <span className="timeline-marker" />

            <div className="timeline-entry">
              <span className="timeline-date">{milestone.date}</span>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>

              {milestone.image && (
                <figure className="timeline-photo">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                  />
                  {milestone.caption && (
                    <figcaption>{milestone.caption}</figcaption>
                  )}
                </figure>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================
   PAGE 3 - LOVE REMINDERS
========================================= */

function ReminderPage() {
  return (
    <section className="placeholder-page love-page reminder-page">
      <span className="letter-eyebrow">
        For the days you need some affirmations
      </span>

      <div className="love-reminders">
        <p>You are so, so loved.</p>
        <p>You never have to earn my affection.</p>
        <p>I'm happy with you, even in the quiet moments.</p>
        <p>You don't have to have everything figured out.</p>
        <p>I'm grateful that I get to know you.</p>
        <p>You never EVER have to face everything alone.</p>
      </div>
    </section>
  );
}

/* =========================================
   PAGE 4 - VOICE RECORDING
========================================= */

function VoiceMessagePage() {
  return (
    <section className="placeholder-page voice-page">
      <h2>One Last Thing...</h2>

      <p>
        I wanted to leave you something special to me. It took me weeks to get
        it right, maybe you just want to hear my voice, but regardless i hope
        this brings you some solace.
      </p>

      <div className="voice-player">
        <div className="voice-player-icon">
          <span>♫</span>
        </div>

        <p className="voice-player-title">A message from me to you</p>

        <audio controls preload="metadata">
          <source src={asset("voice-message.mp3")} type="audio/mpeg" />
          Your browser does not support audio playback.
        </audio>
      </div>

      <span className="page-closing">All my love, always.</span>
    </section>
  );
}

/* =========================================
   CHRISTMAS BOOK COVER
========================================= */

function Cover({ onClick }) {
  return (
    <main className="cover-scene">
      <section className="cover-copy">
        <p className="eyebrow">A little something for you</p>

        <h1>
          Merry<em>Christmas</em>
        </h1>

        <p>
          For a quiet moment, a warm candle, and someone dear (preferably me).
        </p>

        <span className="cover-note">Made by yours truly, with love</span>
      </section>

      <button
        className="cover-book"
        onClick={onClick}
        aria-label="Open the Christmas book"
        type="button"
      >
        <div className="cover-art">
          <span className="cover-small">A little book of memories</span>

          <h2 className="cover-title">
            Merry
            <br />
            Christmas
          </h2>

          <WinterTree />

          <span className="cover-year">Christmas 2026</span>
        </div>
      </button>
    </main>
  );
}

/* =========================================
   BOOK READER - FOUR PAGES / TWO SPREADS
========================================= */

function Reader({ spread, setSpread, onBack }) {
  const pageCount = 2;
  const totalPages = 4;

  const leftPageNumber = spread * 2 + 1;
  const rightPageNumber = leftPageNumber + 1;

  const renderPage = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return <ChristmasLetter />;
      case 2:
        return <TimelinePage />;
      case 3:
        return <ReminderPage />;
      case 4:
        return <VoiceMessagePage />;
      default:
        return null;
    }
  };

  return (
    <main className="reader">
      <div className="reader-topline">
        <span>A little book of memories</span>
        <span>
          Pages {leftPageNumber}–{rightPageNumber} of {totalPages}
        </span>
      </div>

      <div className="book-frame">
        <button
          className="turn-control turn-control--prev"
          onClick={() => setSpread((current) => Math.max(0, current - 1))}
          disabled={spread === 0}
          aria-label="Previous pages"
          type="button"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="book-spread">
          <div className="book-page book-page--left">
            {renderPage(leftPageNumber)}
            <span className="page-number">{leftPageNumber}</span>
          </div>

          <div className="book-page book-page--right">
            {renderPage(rightPageNumber)}
            <span className="page-number">{rightPageNumber}</span>
          </div>
        </div>

        <button
          className="turn-control turn-control--next"
          onClick={() =>
            setSpread((current) => Math.min(pageCount - 1, current + 1))
          }
          disabled={spread === pageCount - 1}
          aria-label="Next pages"
          type="button"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="reader-footer">
        <span>Made with love, just for you</span>
      </div>

      <button className="back-to-cover" onClick={onBack} type="button">
        Back to cover
      </button>
    </main>
  );
}

/* =========================================
   MAIN APP
========================================= */

function App() {
  console.log("CHRISTMAS APP IS RUNNING");
  const [view, setView] = useState("opening");
  const [spread, setSpread] = useState(0);

  const openReader = () => {
    setSpread(0);
    setView("reader");
  };

  const backToCover = () => {
    setSpread(0);
    setView("cover");
  };

  return (
    <div
      className={`app-shell ${view === "opening" ? "app-shell--opening" : ""}`}
    >
      <div className="winter-moon" aria-hidden="true" />

      <FirSprig className="evergreen-branch--left" />
      <FirSprig className="evergreen-branch--right" />

      <span className="scene-caption">December 15, 2026</span>

      {view === "opening" && (
        <main className="opening-scene">
          <div className="opening-copy">
            <span className="opening-eyebrow">A little something awaits</span>
            <h1>A Christmas surprise</h1>
          </div>

          <SugarCube onClick={() => setView("cover")} />
        </main>
      )}

      {view === "cover" && <Cover onClick={openReader} />}

      {view === "reader" && (
        <Reader
          spread={spread}
          setSpread={setSpread}
          onBack={backToCover}
        />
      )}
    </div>
  );
}

export default App;
