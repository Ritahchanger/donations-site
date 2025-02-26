const DonationsForm = ({
  handleDonate,
  amount,
  setAmount,
  message,
  setMessage,
  loading,
}: {
  handleDonate: any;
  amount: any;
  setAmount: any;
  message: string;
  setMessage: any;
  loading: boolean;
}) => {
  return (
    <div>
      <div className="container">
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
      </div>
    </div>
  );
};

export default DonationsForm;
