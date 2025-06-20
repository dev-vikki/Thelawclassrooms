
export default function RefundpolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-2xl mx-auto bg-[#1e1e1e] rounded-md p-6">
        <div className="max-w-40 mb-4">
          <img src="/legal/book.svg" alt="icons" />
        </div>

        <h1 className="text-4xl font-extrabold mb-6 border-b border-gray-600 pb-2">
          Refund Policy
        </h1>

        <p className="mb-4 text-gray-300 font-semibold">
          Returns and Refunds Policy
        </p>

        <p className="mb-4 text-gray-300">
          <strong>Non-tangible irrevocable goods</strong> (“Digital Products”
          and “Virtual Coins”)
        </p>

        <p className="mb-4 text-gray-300">
          We do not issue refunds for non-tangible irrevocable goods, including
          virtual coins and digital products, once a purchase is confirmed and
          the virtual coins are credited to your account.
        </p>

        <p className="mb-4 text-gray-300">
          However, if the user has not used any of the purchased coins, we offer
          a full refund within 24 hours of the coin purchase. The refund request
          must be made within this 24-hour window, and <strong>none</strong> of
          the coins should have been used.
        </p>

        <p className="mb-4 text-gray-300">
          Once any amount of coin is used, the transaction becomes
          non-refundable.
        </p>

        <p className="mb-4 text-gray-300">
          We recommend contacting us for assistance if you experience any issues
          receiving your coins or using them to access products.
        </p>

        <p className="mb-4 text-gray-300 font-semibold">
          Contact us for any issues:
        </p>

        <p className="mb-4 text-gray-300">
          If you have any questions about our Returns and Refunds Policy, please
          contact us:
        </p>

        <p className="text-gray-300">
          — By email:{" "}
          <a
            href="mailto:info.thelawclassroom@gmail.com"
            className="underline text-blue-400"
          >
            info.thelawclassroom@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
