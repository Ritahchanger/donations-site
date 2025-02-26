"use client"
import Navbar from "@/components/users/Navbar/Navbar";
import { useState } from "react";

const DonationPage: React.FC = () => {
  const [amount, setAmount] = useState<number>(50); // Default amount
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate payment processing (Replace with actual payment gateway logic)
    setTimeout(() => {
      alert(`Thank you for donating $${amount}! Your support matters.`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-green-600 min-h-screen text-white">
      <Navbar setContactComponent={false} />

      {/* Hero Section */}
      <div className="text-center py-[6rem]">
        <h1 className="text-4xl font-bold">
          Make a Difference with Your Donation
        </h1>
        <p className="mt-4 text-lg">
          Your contribution helps us empower lives and support communities.
        </p>
      </div>

      {/* Donation Form */}
      <div className="max-w-lg mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Give a Donation</h2>
        <form onSubmit={handleDonate}>
          <label className="block mb-2 font-medium">Select Amount ($)</label>
          <div className="flex gap-3 mb-4">
            {[10, 25, 50, 100].map((amt) => (
              <button
                key={amt}
                type="button"
                className={`px-4 py-2 border rounded ${
                  amount === amt ? "bg-green-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => setAmount(amt)}
              >
                ${amt}
              </button>
            ))}
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-20 p-2 border rounded"
            />
          </div>

          <label className="block mb-2 font-medium">Message (Optional)</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            placeholder="Leave a message..."
          ></textarea>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded w-full"
            disabled={loading}
          >
            {loading ? "Processing..." : "Donate Now"}
          </button>
        </form>
      </div>

      {/* Impact Section */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold">Your Impact</h2>
        <p className="mt-4">
          Every donation helps us provide education, food, and healthcare to
          those in need.
        </p>
      </div>

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">What Our Donors Say</h2>
        <p className="mt-4 italic">
          "Donating to this cause has been life-changing. I see the impact
          directly!" - Alex J.
        </p>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <p className="mt-4">
          <strong>How is my donation used?</strong> - Every dollar goes towards
          community projects and aid.
        </p>
        <p className="mt-2">
          <strong>Can I donate anonymously?</strong> - Yes, just leave the name
          field empty.
        </p>
      </div>
    </div>
  );
};

export default DonationPage;
