import { useEffect, useState } from 'react';
import './index.css';

function FirSprig({ className = '' }) {
  return (
    <svg className={`evergreen-branch ${className}`} viewBox="0 0 420 310" fill="none" aria-hidden="true">
      <path d="M15 28C105 73 188 136 410 290" stroke="#a8b99a" strokeWidth="7" strokeLinecap="round" />
      <g stroke="#91a78c" strokeWidth="5" strokeLinecap="round">
        <path d="M66 58 28 28m45 34 3-47M109 88 62 74m54 22 21-43M155 117l-54-1m63 10 33-39M203 151l-59-14m69 23 41-38M252 186l-63-23m72 31 46-35M300 219l-61-30m71 38 49-28M347 253l-58-34m67 42 49-22" />
        <path d="m78 68 20-31m37 65-2-42m43 72 12-45m44 75 19-43m46 76 24-39m44 71 28-35" />
      </g>
      <g fill="#c3a36b">
        <circle cx="116" cy="87" r="6" /><circle cx="225" cy="163" r="7" /><circle cx="321" cy="227" r="6" />
      </g>
      <g fill="#e4d8ba">
        <circle cx="50" cy="47" r="3" /><circle cx="172" cy="124" r="3" /><circle cx="277" cy="199" r="3" />
      </g>
    </svg>
  );
}

function WinterTree() {
  return (
    <svg className="tree-scene" viewBox="0 0 220 190" fill="none" aria-hidden="true">
      <path d="M108 17 63 74h25L52 113h34l-48 45h143l-48-45h34l-36-39h25L108 17Z" fill="#17372f" stroke="#d9c38d" strokeWidth="1.2" />
      <path d="m108 21-30 47h16L63 105h29l-37 41h107l-37-41h28L127 68h18l-37-47Z" fill="#31594a" />
      <path d="m108 22-31 47 16-2m42 0 12 1m-84 37 29-1m46 1 27 1m-101 41 42-2m32 0 38 2" stroke="#ece0c3" strokeWidth="3" strokeLinecap="round" />
      <path d="M104 156h9v20h-9z" fill="#a17a4f" />
      <path d="M109 49v6m-3-3h6" stroke="#e8d394" strokeWidth="1.5" strokeLinecap="round" />
      <g fill="#c64e50">
        <circle cx="82" cy="91" r="3.3" /><circle cx="131" cy="83" r="3.3" /><circle cx="100" cy="120" r="3.3" /><circle cx="145" cy="128" r="3.3" />
      </g>
      <g fill="#efd99d">
        <circle cx="115" cy="69" r="2" /><circle cx="77" cy="125" r="2" /><circle cx="126" cy="105" r="2" /><circle cx="96" cy="145" r="2" />
      </g>
      <path d="M45 178c34-6 91-6 127 0" stroke="#d8c391" strokeWidth="1" opacity=".7" />
      <circle cx="39" cy="56" r="1.6" fill="#efe4ca" /><circle cx="171" cy="53" r="1.6" fill="#efe4ca" />
      <circle cx="56" cy="31" r="1" fill="#efe4ca" /><circle cx="156" cy="25" r="1.4" fill="#efe4ca" />
    </svg>
  );
}

function LollipopButton({ onClick }) {
  return (
    <button className="lollipop-button" type="button" onClick={onClick} aria-label="Open me">
      <svg className="lollipop-icon" viewBox="0 0 180 240" aria-hidden="true">
        <defs>
          <pattern id="lollipop-stripes" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(38)">
            <rect width="18" height="18" fill="#f8ead0" />
            <rect width="9" height="18" fill="var(--candy-red)" />
          </pattern>
        </defs>
        <path d="M83 133h14l8 85c1 10-5 16-15 16s-16-6-15-16l8-85Z" fill="#e4ce9d" stroke="#fff0cc" strokeWidth="2" />
        <circle cx="90" cy="80" r="66" fill="url(#lollipop-stripes)" stroke="#f9e9c8" strokeWidth="5" />
        <circle cx="90" cy="80" r="51" fill="#f2e5ca" stroke="#fff0cc" strokeWidth="2" strokeDasharray="2 4" />
        <text className="candy-label" x="90" y="73" textAnchor="middle">
          <tspan x="90" dy="0">Open</tspan>
          <tspan x="90" dy="26">me</tspan>
        </text>
      </svg>
    </button>
  );
}

function Opening({ onOpen }) {
  return (
    <main className="opening-scene" aria-label="Christmas card opening">
      <LollipopButton onClick={onOpen} />
    </main>
  );
}

function ArrowIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {direction === 'left'
        ? <path d="M19 12H5m0 0 6-6m-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        : <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  );
}

function Cover({ onOpen }) {
  return (
    <main className="cover-scene" aria-label="Christmas greeting card cover">
      <section className="cover-copy">
        <p className="eyebrow">A winter keepsake</p>
        <h1>A little <em>Christmas</em> story</h1>
        <p>For a quiet moment, a warm cup, and someone dear.</p>
        <span className="cover-note">Made with love, just for you</span>
      </section>
      <button className="cover-book" type="button" onClick={onOpen} aria-label="Open the Christmas book">
        <div className="cover-art">
          <span className="cover-small">A keepsake for you</span>
          <h2>Christmas<br />in the<br />pines</h2>
          <WinterTree />
          <span className="cover-year">Tap to open</span>
        </div>
      </button>
    </main>
  );
}

function Reader({ page, maxPage, onPrevious, onNext }) {
  return (
    <main className="reader" aria-label="Christmas card book">
      <div className="reader-topline" aria-live="polite">
        <span>A letter for a winter day</span>
        <span>Page {String(page).padStart(2, '0')} <span aria-hidden="true">/</span> {String(maxPage).padStart(2, '0')}</span>
      </div>
      <button className="turn-control turn-control--prev" type="button" onClick={onPrevious} aria-label={page === 1 ? 'Return to the cover' : 'Turn to the previous page'}>
        <ArrowIcon direction="left" />
      </button>
      <div className="book-frame">
        <div className="book-spread">
          <section className="book-page book-page--left" aria-label="Left page" />
          <section className="book-page book-page--right" aria-label={page === 1 ? 'Greeting page' : 'Blank page'}>
            {page === 1 && (
              <article className="greeting">
                <h2 className="greeting-message">Merry Christmas, my love, I hope this little book brings you joy.</h2>
              </article>
            )}
          </section>
        </div>
      </div>
      <button className="turn-control turn-control--next" type="button" onClick={onNext} disabled={page >= maxPage} aria-label="Turn to the next page">
        <ArrowIcon direction="right" />
      </button>
      <div className="reader-footer" aria-hidden="true">Keep turning, if you like</div>
      <span className="sr-only" aria-live="polite">Page {page} of {maxPage}{page > 1 ? ', blank page' : ', Christmas greeting'}</span>
    </main>
  );
}

function App() {
  const [view, setView] = useState('opening');
  const [page, setPage] = useState(1);
  const maxPage = 6;

  useEffect(() => {
    if (view !== 'reader') return undefined;

    const handleKeyDown = (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setPage((current) => Math.min(maxPage, current + 1));
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        if (page === 1) {
          setView('cover');
        } else {
          setPage((current) => Math.max(1, current - 1));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [page, view]);

  return (
    <div className={`app-shell${view === 'opening' ? ' app-shell--opening' : ''}`}>
      {view !== 'opening' && (
        <>
          <span className="winter-moon" aria-hidden="true" />
          <FirSprig className="evergreen-branch--left" />
          <FirSprig className="evergreen-branch--right" />
          <div className="scene-caption" aria-hidden="true">December, by candlelight</div>
        </>
      )}
      {view === 'opening' && <Opening onOpen={() => setView('cover')} />}
      {view === 'cover' && <Cover onOpen={() => setView('reader')} />}
      {view === 'reader' && (
        <Reader
          page={page}
          maxPage={maxPage}
          onPrevious={() => {
            if (page === 1) setView('cover');
            else setPage((current) => Math.max(1, current - 1));
          }}
          onNext={() => setPage((current) => Math.min(maxPage, current + 1))}
        />
      )}
    </div>
  );
}

export default App;
