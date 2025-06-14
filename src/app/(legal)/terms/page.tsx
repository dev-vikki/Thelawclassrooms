export default function TermsandconditionsPage() {
  return (
    <div className="px-6 py-10 leading-relaxed font-sans text-gray-200 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        Terms of Use for The Law classrooms
      </h1>
      <p className="mb-6 text-sm text-gray-400">
        <strong>Last Updated:</strong> May 2, 2025
      </p>

      {/* Section 1 */}
      <section className="mb-8">
        <p className="mb-4">
          The present Terms of Use document is published in accordance with the
          provisions of the Information Technology Act, 2000 and other
          applicable rules, including but not limited to the Information
          Technology (Intermediary Guidelines and Digital Media Ethics Code)
          Rules, 2021.
        </p>
        <p>
          Welcome to The Law classrooms website (
          <a
            href="https://www.thelawclassrooms.com"
            className="text-blue-600 hover:underline"
          >
            www.thelawclassrooms.com
          </a>
          ), including all subdomains, hereinafter the "Website". The Website is
          owned and operated by The Law classrooms, a legal education and
          mentorship platform registered under the UP Shops and Establishment
          Act, 1962, with its registered office at [Insert Registered Office
          Address in Uttar Pradesh, India].
        </p>
      </section>

      {/* Sections */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p className="mb-2">
          By accessing or using the Website in any way, including browsing,
          registering, enrolling in courses, participating in workshops,
          applying for internships, or downloading content, you agree to be
          bound by these Terms of Use.
        </p>
        <p>
          If you do not understand or agree with any part of these Terms of Use,
          you should immediately discontinue using or accessing the Website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
        <p className="mb-2">
          By agreeing to these Terms of Use, you represent that you:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>Are of sound mind.</li>
          <li>
            Have attained the legal age necessary under applicable Indian laws.
          </li>
          <li>
            Are not prohibited from entering into a legally binding contract
            under applicable laws.
          </li>
        </ul>
        <p>
          If the Services are being availed for a minor, you confirm that you
          are legally authorized to provide consent on their behalf.
        </p>
      </section>

      {/* Repeat for all remaining sections */}
      {/* Just follow the same structure: section with margin bottom, h2 title, paragraphs, lists with Tailwind classes */}

      {/* Example reuse pattern */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Your Account</h2>
        <p className="mb-2">
          You may become a registered user by creating a password-protected
          account on the Website.
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>
            Accept full responsibility for all activities that occur under your
            account.
          </li>
          <li>
            Agree to the terms of the Privacy Policy regarding the use of your
            data.
          </li>
        </ul>
        <p className="mb-2">
          The Law classrooms reserves the right to refuse access, terminate
          accounts, or suspend services at its discretion.
        </p>
      </section>

      {/* Repeat above format till section 14 */}

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          14. Applicable Law and Jurisdiction
        </h2>
        <p>
          These Terms of Use shall be governed by and construed in accordance
          with the laws of India. Disputes shall fall under the exclusive
          jurisdiction of the courts in Lucknow, Uttar Pradesh.
        </p>
      </section>
    </div>
  );
}
