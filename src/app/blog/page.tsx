import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { posts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Hydroseeding & Landscaping Blog | Holland, MI | West Michigan Landscaping",
  description:
    "Tips, guides, and insights on hydroseeding, lawn care, and landscaping in Holland, MI and West Michigan. Expert advice from Fraaza Enterprises — owner-operated since 2004.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Hydroseeding & Landscaping Blog | Fraaza Enterprises",
    description:
      "Expert hydroseeding and lawn care tips for West Michigan homeowners and businesses.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative -mt-[var(--header-height)] pt-[var(--header-height)] flex min-h-[17rem] items-center overflow-x-hidden sm:min-h-80">
        <Image
          src="/images/heroes/new-build-landscaping.webp"
          alt="West Michigan landscaping and hydroseeding"
          fill
          priority
          className="object-cover object-[center_30%] sm:object-center"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg-green)]/75 via-[var(--bg-green)]/35 to-transparent" />
        <Container className="relative z-10 py-10 sm:py-12 lg:py-14">
          <SectionHeading
            as="h1"
            light
            eyebrow="Blog"
            title="Hydroseeding & landscaping insights"
            description="Tips, guides, and expert advice for homeowners and property managers across Holland, MI and West Michigan."
          />
        </Container>
      </section>

      {/* Featured post */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-12 sm:py-20 lg:py-24">
          <FadeIn>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={posts[0].image}
                  alt={posts[0].title}
                  width={700}
                  height={450}
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
              <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="inline-block rounded-full bg-[var(--accent)]/15 px-3 py-1 text-xs font-semibold text-[var(--accent-light)]">
                    {posts[0].category}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    {posts[0].date}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    {posts[0].readTime}
                  </span>
                </div>
                <h2 className="mt-4 hyphens-auto break-words font-[family-name:var(--font-playfair)] text-xl font-semibold leading-tight text-[var(--text-primary)] sm:text-3xl sm:leading-snug">
                  {posts[0].title}
                </h2>
                <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
                  {posts[0].excerpt}
                </p>
                <div className="mt-6">
                  <Link
                    href={`/blog/${posts[0].slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                  >
                    Read article
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* All posts grid */}
      <section className="bg-[var(--bg-white)]">
        <Container className="py-12 sm:py-20 lg:py-24">
          <FadeIn>
            <SectionHeading
              eyebrow="Recent Posts"
              title="More from the blog"
              centered
            />
          </FadeIn>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <FadeIn key={post.slug} delay={((idx % 3) + 1) as 1 | 2 | 3}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="rounded-2xl bg-[var(--bg-elevated)] shadow-[var(--shadow-sm)] overflow-hidden transition-shadow duration-300 hover:shadow-[var(--shadow-md)] h-full flex flex-col">
                    <div className="overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={500}
                        height={300}
                        className="aspect-[5/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4 sm:p-6">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="inline-block rounded-full bg-[var(--accent)]/15 px-3 py-1 text-xs font-semibold text-[var(--accent-light)]">
                          {post.category}
                        </span>
                        <span className="text-xs text-[var(--text-muted)]">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="mt-3 hyphens-auto break-words font-[family-name:var(--font-playfair)] text-lg font-semibold leading-snug text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
                        {post.title}
                      </h3>
                      <p className="mt-2 flex-1 text-base leading-7 text-[var(--text-secondary)] sm:text-sm sm:leading-6">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 text-xs text-[var(--text-muted)]">
                        {post.date}
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[var(--bg-white)]">
        <Container className="py-12 sm:py-20 lg:py-28">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <SectionHeading
                eyebrow="Get Started"
                title="Ready to transform your property?"
                description="Whether you need hydroseeding, erosion control, or landscaping services — Fraaza Enterprises is here to help across Holland, MI and West Michigan."
                centered
              />
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button href="/quote" className="w-full sm:w-auto">Get a Free Quote</Button>
                <Button href="/services" variant="outline" className="w-full sm:w-auto">
                  View All Services
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
