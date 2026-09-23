import { useState } from 'react';

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
    <div className="w-full bg-[#eae9e9] dark:bg-[#2d2b2b] rounded-sm p-6">
      <h2
        className="font-serif font-bold text-dark dark:text-light tracking-[-0.015em] mb-2"
        style={{ fontSize: 'clamp(20px, 2.4vw, 24px)', lineHeight: 1.2 }}
      >
        Tip Jar
      </h2>
      <p className="font-serif text-[15px] leading-[24px] mb-5 text-dark/80 dark:text-light/80">
        Want to just say thanks or show support? Drop a tip in the jar.
      </p>
      <form onSubmit={handleRedirect} className="flex flex-col gap-4" style={{ maxWidth: '360px' }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount (USD)"
          className="w-full font-serif text-[15px] px-3 py-2 border border-dark dark:border-light rounded-sm text-dark dark:text-light bg-[#f3f2f2] dark:bg-[#201e1d]"
          min="1"
          required
        />
        <button
          type="submit"
          disabled={isProcessing}
          className="inline-flex items-center justify-center self-start font-serif font-semibold text-[14px] leading-[1.2] bg-[#006786] dark:bg-[#62c5ee] text-[#f3f2f2] dark:text-[#201e1d] px-[18px] py-2.5 rounded-sm hover:bg-[#1186ac] dark:hover:bg-[#38a6cf] transition-colors disabled:opacity-60"
        >
          {isProcessing ? 'Redirecting…' : 'Send Tip'}
        </button>
      </form>
      {message && (
        <p className="font-serif text-[14px] mt-4 text-[#006786] dark:text-[#62c5ee] font-semibold">
          {message}
        </p>
      )}
    </div>
  );
}
