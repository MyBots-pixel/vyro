"use client";

import { useState } from "react";

const categories = [
  "All",
  "Gaming",
  "Music",
  "Sports",
  "Entertainment",
  "Roblox",
  "Technology",
  "Comedy",
  "Live",
];

const videos = [
  {
    title: "I Built the CRAZIEST Roblox Game!",
    creator: "Kryton",
    views: "1.2M views",
    time: "2 hours ago",
    duration: "12:48",
    color: "linear-gradient(135deg,#ff3b30,#ff9500)",
    avatar: "K",
    verified: true,
  },
  {
    title: "The Most INSANE Gaming Challenge",
    creator: "PixelPlay",
    views: "842K views",
    time: "5 hours ago",
    duration: "18:21",
    color: "linear-gradient(135deg,#5856d6,#007aff)",
    avatar: "P",
    verified: true,
  },
  {
    title: "I Tried This For 30 Days...",
    creator: "Jordan",
    views: "3.4M views",
    time: "1 day ago",
    duration: "14:05",
    color: "linear-gradient(135deg,#34c759,#00c7be)",
    avatar: "J",
    verified: false,
  },
  {
    title: "The New Update Is AMAZING",
    creator: "TechZone",
    views: "628K views",
    time: "1 day ago",
    duration: "9:42",
    color: "linear-gradient(135deg,#ff9500,#ff2d55)",
    avatar: "T",
    verified: true,
  },
  {
    title: "We Found Something Nobody Expected",
    creator: "The Crew",
    views: "2.1M views",
    time: "2 days ago",
    duration: "21:14",
    color: "linear-gradient(135deg,#af52de,#5856d6)",
    avatar: "C",
    verified: false,
  },
  {
    title: "Can I Beat The Hardest Level?",
    creator: "Nova",
    views: "451K views",
    time: "2 days ago",
    duration: "11:36",
    color: "linear-gradient(135deg,#ffcc00,#ff3b30)",
    avatar: "N",
    verified: false,
  },
  {
    title: "10 Things You Didn't Know",
    creator: "Discover",
    views: "7.8M views",
    time: "3 days ago",
    duration: "16:50",
    color: "linear-gradient(135deg,#00c7be,#007aff)",
    avatar: "D",
    verified: true,
  },
  {
    title: "This Changed Everything...",
    creator: "VYRO Creator",
    views: "954K views",
    time: "3 days ago",
    duration: "8:29",
    color: "linear-gradient(135deg,#ff2d55,#af52de)",
    avatar: "V",
    verified: false,
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredVideos = videos.filter((video) => {
    const searchMatch =
      video.title.toLowerCase().includes(search.toLowerCase()) ||
      video.creator.toLowerCase().includes(search.toLowerCase());

    return searchMatch;
  });

  return (
    <main className="app">
      {/* HEADER */}

      <header className="header">
        <div className="header-left">
          <button
            className="icon-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>

          <div className="logo">
            <div className="logo-icon">▶</div>
            <span>VYRO</span>
          </div>
        </div>

        <div className="search">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search VYRO"
          />

          <button>🔍</button>
        </div>

        <div className="header-actions">
          <button className="create-button">＋ Create</button>

          <button className="icon-button">🔔</button>

          <button className="profile-button">Y</button>
        </div>
      </header>

      {/* SIDEBAR */}

      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <NavItem icon="🏠" text="Home" active />
        <NavItem icon="🎬" text="Shorts" />
        <NavItem icon="📺" text="Subscriptions" />

        <div className="divider" />

        <NavItem icon="🔥" text="Trending" />
        <NavItem icon="🎮" text="Gaming" />
        <NavItem icon="🎵" text="Music" />
        <NavItem icon="🏆" text="Sports" />
        <NavItem icon="🔴" text="Live" />

        <div className="divider" />

        <NavItem icon="👤" text="Your channel" />
        <NavItem icon="🕘" text="History" />
        <NavItem icon="❤️" text="Liked videos" />

        <div className="divider" />

        <NavItem icon="⚙️" text="Settings" />
        <NavItem icon="❓" text="Help" />
      </aside>

      {/* CONTENT */}

      <section className="content">
        {/* CATEGORY BAR */}

        <div className="categories">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "selected" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* HERO */}

        <div className="hero">
          <div className="hero-content">
            <span className="welcome">✨ WELCOME TO VYRO</span>

            <h1>
              Watch.
              <br />
              Create.
              <br />
              Connect.
            </h1>

            <p>
              Discover amazing videos, follow creators and find
              something new.
            </p>

            <button className="hero-button">
              Explore VYRO →
            </button>
          </div>

          <div className="hero-play">
            <div>▶</div>
          </div>
        </div>

        {/* VIDEOS */}

        <div className="section-header">
          <div>
            <h2>
              {category === "All" ? "Recommended" : category}
            </h2>

            <p>Videos picked for you</p>
          </div>

          <button>See all →</button>
        </div>

        <div className="video-grid">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.title}
              video={video}
            />
          ))}
        </div>

        {/* SHORTS */}

        <div className="section-header shorts-heading">
          <div>
            <h2>🎬 Shorts</h2>
            <p>Quick videos from VYRO creators</p>
          </div>

          <button>See all →</button>
        </div>

        <div className="shorts-grid">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="short-card"
              style={{
                background:
                  [
                    "linear-gradient(160deg,#ff3b30,#ff9500)",
                    "linear-gradient(160deg,#5856d6,#af52de)",
                    "linear-gradient(160deg,#007aff,#00c7be)",
                    "linear-gradient(160deg,#34c759,#007aff)",
                    "linear-gradient(160deg,#ffcc00,#ff3b30)",
                    "linear-gradient(160deg,#ff2d55,#af52de)",
                  ][index],
              }}
            >
              <div className="short-play">▶</div>

              <div className="short-info">
                <strong>VYRO Short #{index + 1}</strong>
                <span>{(120 + index * 42)}K views</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MOBILE NAV */}

      <nav className="mobile-nav">
        <MobileItem icon="🏠" text="Home" active />
        <MobileItem icon="🎬" text="Shorts" />

        <button className="mobile-create">＋</button>

        <MobileItem icon="📺" text="Subs" />
        <MobileItem icon="👤" text="You" />
      </nav>
    </main>
  );
}

function NavItem({ icon, text, active }) {
  return (
    <button className={`nav-item ${active ? "active" : ""}`}>
      <span>{icon}</span>
      {text}
    </button>
  );
}

function MobileItem({ icon, text, active }) {
  return (
    <button className={`mobile-item ${active ? "active" : ""}`}>
      <span>{icon}</span>
      <small>{text}</small>
    </button>
  );
}

function VideoCard({ video }) {
  return (
    <article className="video-card">
      <div
        className="thumbnail"
        style={{ background: video.color }}
      >
        <div className="thumbnail-play">▶</div>

        <span className="duration">
          {video.duration}
        </span>

        <span className="vyro-label">
          VYRO
        </span>
      </div>

      <div className="video-info">
        <div
          className="avatar"
          style={{ background: video.color }}
        >
          {video.avatar}
        </div>

        <div className="video-text">
          <h3>{video.title}</h3>

          <p>
            {video.creator}

            {video.verified && (
              <span className="verified">
                ✓
              </span>
            )}
          </p>

          <p>
            {video.views} · {video.time}
          </p>
        </div>

        <button className="more">⋮</button>
      </div>
    </article>
  );
}
