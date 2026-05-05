import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Fraaza Enterprises — how we collect, use, and safeguard your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Fraaza Enterprises",
    description: "Privacy policy for Fraaza Enterprises.",
    url: "/privacy-policy",
  },
};

const effectiveDate = "2003";

const linkClass =
  "font-semibold text-[var(--accent-light)] underline underline-offset-2 transition-colors hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";
const h1Class =
  "font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]";
const h2Class =
  "mt-10 mb-4 text-lg sm:text-xl font-semibold text-[var(--accent-light)]";
const bodyClass =
  "text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] [&_strong]:font-semibold [&_strong]:text-[var(--text-primary)]";
const listClass =
  "list-disc space-y-2 pl-6 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] marker:text-[var(--accent)]/90";

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[var(--bg-cream)] bg-texture">
      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <h1 className={h1Class}>Privacy Policy</h1>
        <div className="mt-3 text-base text-[var(--text-muted)] sm:text-lg">
          <p>Fraaza Enterprises</p>
          <p className="mt-1">Effective Date: {effectiveDate}</p>
        </div>

        <div className="mt-10 space-y-6">
          <p className={bodyClass}>
            Fraaza Enterprises collects opt-in consent verbally from our customers.
            Customers can opt in to receive text messages either in person at our
            location or over the phone when they call our business. Our staff is
            trained to use the following script when collecting consent: By providing
            your phone number and agreeing to receive texts, you consent to receive
            text messages from Fraaza Enterprises regarding service updates,
            scheduling, and customer care. Consent is not a condition of purchase.
            Message frequency varies based on communication needs. Message and data
            rates may apply. You can reply STOP to unsubscribe at any time or HELP for
            assistance. No mobile opt-in information will be shared with third
            parties. The types of messages sent include service questions, scheduling
            confirmations, and conversational follow-ups. Message frequency varies.
            Message and data rates may apply. Customers can text HELP for assistance
            or STOP to unsubscribe at any time.
          </p>

          <p className={bodyClass}>
            Fraaza Enterprises (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
            is committed to protecting your privacy. This Privacy Policy describes
            how we collect, use, and safeguard your personal information when you
            interact with us through our website, mobile communications, or other
            channels, and when you engage our hydroseeding and landscaping services.
            By using our services, you agree to the terms of this Privacy
            Policy. If you do not agree, please refrain from using our services.
          </p>
        </div>

        <h2 className={h2Class}>1. Your Rights</h2>
        <p className={bodyClass}>
          Depending on your location, you may have the following rights regarding
          your personal information:
        </p>
        <ul className={`${listClass} mt-4`}>
          <li>
            Access and Correction: Request access to or correction of your personal
            information.
          </li>
          <li>Data Portability: Request a copy of your data in a portable format.</li>
          <li>
            Deletion: Request deletion of your personal information, subject to legal
            and operational retention requirements.
          </li>
          <li>
            Opt-Out: Withdraw consent for marketing communications at any time.
          </li>
        </ul>
        <p className={`${bodyClass} mt-4`}>
          To exercise any of these rights, please contact us at{" "}
          <Link className={linkClass} href={SITE.phoneHref}>
            {SITE.phone}
          </Link>
          .
        </p>

        <h2 className={h2Class}>2. Third-Party Links</h2>
        <p className={bodyClass}>
          Our website or communications may include links to third-party websites. We
          are not responsible for the privacy practices or content of those external
          sites. Please review their privacy policies before submitting any personal
          information.
        </p>

        <h2 className={h2Class}>3. Changes to this Privacy Policy</h2>
        <p className={bodyClass}>
          Fraaza Enterprises reserves the right to update this Privacy Policy at any
          time. Any changes will take effect upon posting the updated policy to our
          website. Significant changes will be communicated to you directly when
          applicable.
        </p>

        <h2 className={h2Class}>4. Contact Information</h2>
        <p className={bodyClass}>
          For questions, concerns, or requests related to this Privacy Policy, please
          contact us:
        </p>
        <div className={`${bodyClass} mt-4 space-y-1`}>
          <p>
            <strong>Fraaza Enterprises</strong>
          </p>
          <p>10060 Polk St</p>
          <p>Zeeland, MI 49464</p>
          <p>
            <Link className={linkClass} href={SITE.phoneHref}>
              {SITE.phone}
            </Link>
          </p>
        </div>

        <p className={`${bodyClass} mt-10`}>
          By using our services, you acknowledge that you have read, understood, and
          agreed to this Privacy Policy. Thank you for choosing Fraaza Enterprises!
        </p>
      </div>
    </section>
  );
}
