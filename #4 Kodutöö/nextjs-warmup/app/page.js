import Link from "next/link";
import Counter from "./components/Counter";
import ServerMessage from "./components/ServerMessage";

export default function HomePage() {
  return (
    <main className="page-shell">
      <nav className="navigation" aria-label="Main navigation">
        <Link className="brand" href="/">Next.js Warm-up</Link>
        <Link className="navigation-link" href="/about">About</Link>
      </nav>

      <section className="hero">
        <p className="eyebrow">A first step with the App Router</p>
        <h1>Welcome to Next.js Warm-up</h1>
        <p className="intro">
          A tiny app to explore pages, interactive components, and a server API
          route.
        </p>
      </section>

      <section className="content-grid" aria-label="Interactive examples">
        <article className="card">
          <p className="card-label">Client component</p>
          <h2>A little counter</h2>
          <p>Click to increase the count.</p>
          <Counter />
        </article>

        <article className="card">
          <p className="card-label">Server route</p>
          <h2>Get a message</h2>
          <p>Ask the Next.js backend for a greeting.</p>
          <ServerMessage />
        </article>
      </section>
    </main>
  );
}
