import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="page-shell">
      <nav className="navigation" aria-label="Main navigation">
        <Link className="brand" href="/">Next.js Warm-up</Link>
        <Link className="navigation-link" href="/">Home</Link>
      </nav>

      <section className="hero about">
        <p className="eyebrow">About</p>
        <h1>Hello, I’m learning Next.js.</h1>
        <p className="intro">
          This warm-up project is where I’m practicing the App Router,
          Server and Client Components, and a simple API endpoint.
        </p>
      </section>
    </main>
  );
}
