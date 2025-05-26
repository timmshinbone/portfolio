import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TipJarForm() {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRedirect = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setMessage(null);

    try {
      const res = await fetch('/api/create-tip-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: parseFloat(amount) * 100 }), // Stripe uses cents
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        setMessage('Something went wrong. Please try again.');
        setIsProcessing(false);
      }
    } catch (err) {
      setMessage('An error occurred.');
      setIsProcessing(false);
    }
  };

  return (
    <motion.div className="relative w-full p-6 bg-light dark:bg-dark border border-dark dark:border-light rounded-2xl shadow-md mt-16">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
      <h2 className="text-2xl font-bold mb-2 text-dark dark:text-light">Tip Jar</h2>
      <p className="text-base mb-4 dark:text-light/90">
        Want to just say thanks or show support? Drop a tip in the jar
      </p>
      <form onSubmit={handleRedirect} className="space-y-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount (USD)"
          className="w-full p-2 border rounded-md text-dark dark:text-dark"
          min="1"
          required
        />
        <button
          type="submit"
          disabled={isProcessing}
          className="bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-primary dark:hover:bg-primaryDark border-2 border-transparent hover:border-dark dark:hover:border-light transition"
        >
          {isProcessing ? 'Redirecting...' : 'Send Tip'}
        </button>
      </form>
      {message && <p className="mt-4 text-primary dark:text-primaryDark font-semibold">{message}</p>}
    </motion.div>
  );
}
