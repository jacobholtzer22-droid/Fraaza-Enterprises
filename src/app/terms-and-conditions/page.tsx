import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions for Fraaza Enterprises hydroseeding, landscaping, and related services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | Fraaza Enterprises",
    description: "Terms and conditions for Fraaza Enterprises.",
    url: "/terms-and-conditions",
  },
};

const effectiveDate = "May 4, 2026";

const h1Class =
  "font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold tracking-tight text-[#2d5016]";
const h2Class =
  "mt-10 mb-4 text-lg sm:text-xl font-semibold text-[#2d5016]";
const bodyClass = "text-base sm:text-lg leading-relaxed text-gray-800";
const listClass = "list-disc space-y-2 pl-6 text-base sm:text-lg leading-relaxed text-gray-800";

export default function TermsAndConditionsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className={h1Class}>Terms and Conditions</h1>
        <p className="mt-3 text-base text-gray-500 sm:text-lg">
          <strong className="font-semibold text-gray-600">Fraaza Enterprises Effective Date:</strong>{" "}
          {effectiveDate}
        </p>

        <p className={`${bodyClass} mt-10`}>
          Welcome to Fraaza Enterprises! By engaging our services, you agree to the
          following Terms and Conditions. Please review them carefully before
          proceeding with our hydroseeding, landscaping, and related services. If you do
          not accept these terms, please refrain from using our services.
        </p>

        <h2 className={h2Class}>1. Services Offered</h2>
        <p className={bodyClass}>
          Fraaza Enterprises provides a range of professional services, including but
          not limited to:
        </p>
        <ul className={`${listClass} mt-4`}>
          <li>Hydroseeding and lawn establishment</li>
          <li>Landscape design and installation</li>
          <li>Lawn care and maintenance</li>
          <li>Garden bed and mulching services</li>
          <li>Seasonal yard cleanup</li>
          <li>Grading and soil preparation</li>
          <li>Other related landscaping services as agreed in writing.</li>
        </ul>

        <h2 className={h2Class}>2. Service Agreement</h2>
        <ul className={listClass}>
          <li>
            All services will be detailed in a written proposal or service agreement
            prior to commencement.
          </li>
          <li>
            Adjustments to the scope of work must be mutually agreed upon in writing.
          </li>
        </ul>

        <h2 className={h2Class}>3. Payment Terms</h2>
        <ul className={listClass}>
          <li>
            Payment is due as specified in the service agreement or upon receipt of
            the invoice.
          </li>
          <li>
            Accepted payment methods include credit card, debit card, check, cash, or
            electronic transfer.
          </li>
          <li>
            Late payments are subject to a 1.5% monthly interest charge after 30 days
            past the due date.
          </li>
          <li>
            Non-payment beyond 30 days may result in service suspension and legal
            action.
          </li>
        </ul>

        <h2 className={h2Class}>4. Cancellation and Rescheduling Policy</h2>
        <ul className={listClass}>
          <li>
            Fraaza Enterprises reserves the right to cancel or reschedule services due
            to inclement weather, safety concerns, or other unforeseen circumstances.
          </li>
        </ul>

        <h2 className={h2Class}>5. Access to Property</h2>
        <ul className={listClass}>
          <li>
            Clients must ensure Fraaza Enterprises has proper access to the property
            during the scheduled service time.
          </li>
          <li>
            Clients are responsible for removing obstacles or hazards, such as
            outdoor furniture, vehicles, or toys, that may impede our work.
          </li>
        </ul>

        <h2 className={h2Class}>6. Liability and Safety</h2>
        <ul className={listClass}>
          <li>
            Fraaza Enterprises exercises care and diligence while performing services
            but is not responsible for damage caused by pre-existing property
            conditions (e.g., hidden irrigation lines, underground cables, septic
            systems, or deteriorated structures).
          </li>
          <li>
            Clients must notify us of potential hazards or issues on their property
            before services are rendered.
          </li>
          <li>
            Fraaza Enterprises is not liable for injuries caused by equipment, tools,
            or property features left unattended by clients.
          </li>
        </ul>

        <h2 className={h2Class}>7. Warranties and Guarantees</h2>
        <ul className={listClass}>
          <li>
            We strive to deliver quality work. If you are unsatisfied, notify us
            within 3 days and we will make reasonable efforts to address your
            concerns.
          </li>
          <li>
            Hydroseed germination, plant installation, and landscaping warranties are
            subject to the specific terms outlined in your service agreement and may
            be voided due to neglect, improper watering, or improper maintenance.
          </li>
        </ul>

        <h2 className={h2Class}>8. Weather and Service Delays</h2>
        <ul className={listClass}>
          <li>
            Services may be delayed or rescheduled due to weather conditions, equipment
            malfunctions, or other factors outside our control.
          </li>
          <li>Fraaza Enterprises will communicate any schedule changes promptly.</li>
        </ul>

        <h2 className={h2Class}>9. Termination of Services</h2>
        <ul className={listClass}>
          <li>
            Either party may terminate the service agreement with notice as specified
            in the agreement.
          </li>
          <li>
            Fraaza Enterprises reserves the right to terminate services immediately in
            cases of non-payment, unsafe working conditions, or breach of contract.
          </li>
        </ul>

        <h2 className={h2Class}>10. Client Responsibilities</h2>
        <ul className={listClass}>
          <li>Ensure timely payment for services rendered.</li>
          <li>
            Provide accurate property information and disclose any relevant details
            affecting service delivery.
          </li>
          <li>
            Notify Fraaza Enterprises promptly of changes in service requirements or
            property conditions.
          </li>
        </ul>

        <h2 className={h2Class}>11. Privacy Policy</h2>
        <ul className={listClass}>
          <li>
            Fraaza Enterprises values client privacy. Information collected during
            service agreements will only be used for communication and service provision
            purposes.
          </li>
          <li>
            We will not share your information with third parties without your consent
            unless required by law.
          </li>
        </ul>

        <h2 className={h2Class}>12. Dispute Resolution</h2>
        <ul className={listClass}>
          <li>
            In the event of a dispute, both parties agree to first attempt resolution
            through informal negotiations.
          </li>
          <li>
            If the dispute cannot be resolved, it will be submitted to mediation or
            arbitration.
          </li>
        </ul>

        <h2 className={h2Class}>13. Governing Law</h2>
        <ul className={listClass}>
          <li>
            These Terms and Conditions are governed by the laws of the State of
            Michigan.
          </li>
          <li>
            Any disputes or legal actions shall be resolved in the courts of [COUNTY],
            Michigan.
          </li>
        </ul>

        <h2 className={h2Class}>14. Amendments to Terms</h2>
        <ul className={listClass}>
          <li>
            Fraaza Enterprises reserves the right to modify these Terms and Conditions
            at any time. Clients will be notified of significant changes in advance.
          </li>
        </ul>

        <h2 className={h2Class}>15. Contact Information</h2>
        <p className={bodyClass}>
          For questions, concerns, or feedback regarding these Terms and Conditions,
          please contact us:
        </p>
        <div className={`${bodyClass} mt-4 space-y-1`}>
          <p>
            <strong>Fraaza Enterprises</strong>
          </p>
          <p>[STREET ADDRESS]</p>
          <p>[CITY, MI ZIP]</p>
          <p>
            <Link className="font-semibold text-[#2d5016] underline underline-offset-2" href={SITE.phoneHref}>
              {SITE.phone}
            </Link>
          </p>
        </div>

        <p className={`${bodyClass} mt-10`}>
          By using the services of Fraaza Enterprises, you acknowledge that you have
          read, understood, and agree to these Terms and Conditions.
        </p>
        <p className={`${bodyClass} mt-4`}>
          Thank you for choosing Fraaza Enterprises!
        </p>
      </div>
    </section>
  );
}
