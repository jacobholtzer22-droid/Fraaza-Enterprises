import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { posts, getPostBySlug } from "@/lib/blog-posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.metaTitle} | ${SITE.name}`,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE.url}${post.image}`,
    url: `${SITE.url}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: { "@id": `${SITE.url}/#business` },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  return (
    <div>
      <JsonLd data={blogPostingSchema} />
      {/* Hero */}
      <section className="relative -mt-[var(--header-height)] pt-[var(--header-height)] flex min-h-[17rem] items-center overflow-x-hidden sm:min-h-80">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover object-[center_30%] sm:object-center"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg-green)]/75 via-[var(--bg-green)]/35 to-transparent" />
        <Container className="relative z-10 py-10 sm:py-12 lg:py-14">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
              {post.category}
            </span>
            <span className="text-xs text-white/70">{post.date}</span>
            <span className="text-xs text-white/70">{post.readTime}</span>
          </div>
          <h1 className="mt-4 max-w-2xl hyphens-auto break-words font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-white sm:text-4xl sm:leading-snug">
            {post.title}
          </h1>
        </Container>
      </section>

      {/* Article body */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="aspect-[2/1] w-full object-cover"
                />
              </div>
              <div className="mt-8 space-y-5">
                {post.content.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-base leading-7 text-[var(--text-secondary)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Button href="/quote" className="w-full sm:w-auto">
                  Get a Free Quote
                </Button>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M13 8H3M7 4l-4 4 4 4" />
                  </svg>
                  Back to blog
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
