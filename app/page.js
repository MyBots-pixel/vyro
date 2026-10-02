"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  { name: "All", href: "/" },
  { name: "Gaming", href: "/gaming" },
  { name: "Music", href: "/music" },
  { name: "Sports", href: "/sports" },
  { name: "Entertainment", href: "/trending" },
  { name: "Roblox", href: "/gaming" },
  { name: "Technology", href: "/trending" },
  { name: "Comedy", href: "/trending" },
  { name: "Live", href: "/live" },
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
  const [search, setSearch] = useState("");

  function searchVideos(event) {
    event.preventDefault();

    if (!search.trim()) return;

    window.location.href =
      `/search?q=${encodeURIComponent(search.trim())}`;
  }

  return (
    <main className="app">

      {/* HEADER */}

      <header className="header">

        <div className="header-left">

          <button
            className="icon-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            ☰
          </button>

          <Link href="/" className="logo">
            <div className="logo-icon">▶</div>
            <span>VYRO</span>
          </Link>

        </div>

        <form
          className="search"
          onSubmit={searchVideos}
        >
          <input
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search VYRO"
          />

          <button type="submit">
            🔍
          </button>
        </form>

        <div className="header-actions">

          <Link
            href="/create"
            className="create-button"
          >
            ＋ Create
          </Link>

          <Link
            href="/notifications"
            className="icon-button"
            aria-label="Notifications"
          >
            🔔
          </Link>

          <Link
            href="/profile"
            className="profile-button"
          >
            Y
          </Link>

        </div>

      </header>

      {/* SIDEBAR */}

      <aside
        className={`sidebar ${
          menuOpen ? "open" : ""
        }`}
      >

        <NavItem
          href="/"
          icon="🏠"
          text="Home"
          active
        />

        <NavItem
          href="/shorts"
          icon="🎬"
          text="Shorts"
        />

        <NavItem
          href="/subscriptions"
          icon="📺"
          text="Subscriptions"
        />

        <div className="divider" />

        <NavItem
          href="/trending"
          icon="🔥"
          text="Trending"
        />

        <NavItem
          href="/gaming"
          icon="🎮"
          text="Gaming"
        />

        <NavItem
          href="/music"
          icon="🎵"
          text="Music"
        />

        <NavItem
          href="/sports"
          icon="🏆"
          text="Sports"
        />

        <NavItem
          href="/live"
          icon="🔴"
          text="Live"
        />

        <div className="divider" />

        <NavItem
          href="/profile"
          icon="👤"
          text="Your channel"
        />

        <NavItem
          href="/history"
          icon="🕘"
          text="History"
        />

        <NavItem
          href="/liked"
          icon="❤️"
          text="Liked videos"
        />

        <div className="divider" />

        <NavItem
          href="/settings"
          icon="⚙️"
          text="Settings"
        />

        <NavItem
          href="/help"
          icon="❓"
          text="Help"
        />

      </aside>

      {/* CONTENT */}

      <section className="content">

        {/* CATEGORIES */}

        <div className="categories">

          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className={
                category.name === "All"
                  ? "selected"
                  : ""
              }
            >
              {category.name}
            </Link>
          ))}

        </div>

        {/* HERO */}

        <div className="hero">

          <div className="hero-content">

            <span className="welcome">
              ✨ WELCOME TO VYRO
            </span>

            <h1>
              Watch.
              <br />
              Create.
              <br />
              Connect.
            </h1>

            <p>
              Discover amazing videos, follow
              creators and find something new.
            </p>

            <Link
              href="/trending"
              className="hero-button"
            >
              Explore VYRO →
            </Link>

          </div>

          <div className="hero-play">
            <div>▶</div>
          </div>

        </div>

        {/* VIDEOS */}

        <div className="section-header">

          <div>
            <h2>Recommended</h2>
            <p>Videos picked for you</p>
          </div>

          <Link href="/trending">
            See all →
          </Link>

        </div>

        <div className="video-grid">

          {videos.map((video) => (
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
            <p>
              Quick videos from VYRO creators
            </p>
          </div>

          <Link href="/shorts">
            See all →
          </Link>

        </div>

        <div className="shorts-grid">

          {Array.from({ length: 6 }).map(
            (_, index) => (

              <Link
                href={`/shorts/${index + 1}`}
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

                <div className="short-play">
                  ▶
                </div>

                <div className="short-info">

                  <strong>
                    VYRO Short #{index + 1}
                  </strong>

                  <span>
                    {120 + index * 42}K views
                  </span>

                </div>

              </Link>

            )
          )}

        </div>

      </section>

      {/* MOBILE NAV */}

      <nav className="mobile-nav">

        <MobileItem
          href="/"
          icon="🏠"
          text="Home"
          active
        />

        <MobileItem
          href="/shorts"
          icon="🎬"
          text="Shorts"
        />

        <Link
          href="/create"
          className="mobile-create"
        >
          ＋
        </Link>

        <MobileItem
          href="/subscriptions"
          icon="📺"
          text="Subs"
        />

        <MobileItem
          href="/profile"
          icon="👤"
          text="You"
        />

      </nav>

    </main>
  );
}

function NavItem({
  href,
  icon,
  text,
  active,
}) {
  return (
    <Link
      href={href}
      className={`nav-item ${
        active ? "active" : ""
      }`}
    >
      <span>{icon}</span>
      {text}
    </Link>
  );
}

function MobileItem({
  href,
  icon,
  text,
  active,
}) {
  return (
    <Link
      href={href}
      className={`mobile-item ${
        active ? "active" : ""
      }`}
    >
      <span>{icon}</span>
      <small>{text}</small>
    </Link>
  );
}

function VideoCard({ video }) {
  return (
    <Link
      href={`/watch/${encodeURIComponent(
        video.title
      )}`}
      className="video-card"
    >

      <div
        className="thumbnail"
        style={{
          background: video.color,
        }}
      >

        <div className="thumbnail-play">
          ▶
        </div>

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
          style={{
            background: video.color,
          }}
        >
          {video.avatar}
        </div>

        <div className="video-text">

          <h3>
            {video.title}
          </h3>

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

        <span className="more">
          ⋮
        </span>

      </div>

    </Link>
  );
}
