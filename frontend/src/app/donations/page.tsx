"use client";
import Navbar from "@/components/users/Navbar/Navbar";
import { useState } from "react";

import DonationsForm from "@/components/Donations/DonationsForm";
import WhatDonorsSay from "@/components/Donations/WhatDonorsSay";

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
      <DonationsForm
        handleDonate={handleDonate}
        amount={amount}
        setAmount={setAmount}
        message={message}
        setMessage={setMessage}
        loading={loading}
      />

      {/* Impact Section */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold">Your Impact</h2>
        <p className="mt-4">
          Every donation helps us provide education, food, and healthcare to
          those in need.
        </p>
      </div>

      {/* Testimonials */}
      <WhatDonorsSay />
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
