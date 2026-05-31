import React, { useState, useMemo } from 'react';
import { Scale, Milestone, Percent, ShieldCheck, CheckCircle2 } from 'lucide-react';

const PURITY_RATES: Record<string, number> = {
  '24K': 7200, // INR per gram
  '22K': 6600,
  '20K': 6000,
  '18K': 5400
};

export default function LoanCalculator() {
  const [weight, setWeight] = useState<number>(50); // in grams
  const [purity, setPurity] = useState<string>('22K');
  const [tenure, setTenure] = useState<number>(12); // months
  const [repaymentType, setRepaymentType] = useState<string>('Interest-only');

  const calculations = useMemo(() => {
    const ratePerGram = PURITY_RATES[purity] || 6000;
    const goldValue = weight * ratePerGram;
    
    // Up to 90% LTV according to document
    const maxLoanAmount = Math.min(5000000, Math.max(5000, goldValue * 0.90));
    
    // Interest rate scales from 7% (short tenure, high purity) up to 15% based on parameters
    let interestRate = 7;
    if (tenure > 12) interestRate += 3;
    if (tenure > 6 && tenure <= 12) interestRate += 1.5;
    if (purity === '18K') interestRate += 2;
    if (purity === '20K') interestRate += 1;
    if (repaymentType === 'EMI') interestRate += 1; // Slightly higher administration for monthly principal splits

    interestRate = Math.min(15, Math.max(7, interestRate));

    const annualInterest = maxLoanAmount * (interestRate / 100);
    const monthlyInterest = annualInterest / 12;
    const totalInterestPayable = monthlyInterest * tenure;
    const totalRepayable = maxLoanAmount + totalInterestPayable;
    const monthlyEMI = repaymentType === 'EMI' ? (totalRepayable / tenure) : monthlyInterest;

    return {
      goldValue,
      maxLoanAmount,
      interestRate,
      monthlyInterest,
      totalInterestPayable,
      totalRepayable,
      monthlyEMI,
    };
  }, [weight, purity, tenure, repaymentType]);

  const formattedValue = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div id="loan-calculator-section" className="relative p-8 rounded-3xl bg-lux-bg-secondary border border-lux-border backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Visual background atmospheric glaze */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-lux-gold-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-lux-border/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Panel */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-lux-gold-primary font-mono block mb-1 font-bold">Interactive Tools</span>
            <h3 className="text-2xl font-serif font-semibold text-white">Gold Loan Evaluator</h3>
            <p className="text-sm text-[#DDDDDD] mt-1">Estimate your collateral value and customized interest terms instantly.</p>
          </div>

          {/* Slider for Gold Weight */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="gold-weight-slider" className="text-xs uppercase font-mono tracking-wider text-[#CCCCCC] flex items-center gap-2 font-bold">
                <Scale className="w-4 h-4 text-lux-gold-primary" /> Gold Ornaments Weight
              </label>
              <span className="text-lg font-mono font-medium text-lux-gold-primary">{weight} g</span>
            </div>
            <input
              id="gold-weight-slider"
              type="range"
              min="10"
              max="500"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-lux-gold-primary"
            />
            <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
              <span>10g</span>
              <span>100g</span>
              <span>250g</span>
              <span>500g</span>
            </div>
          </div>

          {/* Grid of purity & repayment options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Purity selector */}
            <div className="space-y-2">
              <label htmlFor="gold-purity-select" className="text-xs uppercase font-mono tracking-wider text-[#CCCCCC] flex items-center gap-2 font-bold">
                <Milestone className="w-4 h-4 text-lux-gold-primary" /> Gold Purity
              </label>
              <div id="gold-purity-select" className="grid grid-cols-4 gap-2">
                {['24K', '22K', '20K', '18K'].map((k) => (
                  <button
                    id={`purity-btn-${k}`}
                    key={k}
                    onClick={() => setPurity(k)}
                    className={`py-2 text-xs font-mono font-medium rounded-lg border transition-all cursor-pointer ${
                      purity === k
                        ? 'bg-lux-gold-primary/10 text-lux-gold-primary border-lux-gold-primary animate-none'
                        : 'bg-[#121418]/60 border-lux-border text-neutral-300 hover:text-white hover:border-lux-gold-primary/50'
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>

            {/* Repayment preference slider / radio */}
            <div className="space-y-2">
              <label htmlFor="repayment-type-select" className="text-xs uppercase font-mono tracking-wider text-[#CCCCCC] flex items-center gap-2 font-bold">
                <Percent className="w-4 h-4 text-lux-gold-primary" /> Repayment Mode
              </label>
              <div id="repayment-type-select" className="grid grid-cols-2 gap-2">
                {['Interest-only', 'EMI'].map((r) => (
                  <button
                    id={`repayment-btn-${r.replace(/\s+/g, '-').toLowerCase()}`}
                    key={r}
                    onClick={() => setRepaymentType(r)}
                    className={`py-2 text-xs font-mono font-medium rounded-lg border transition-all cursor-pointer ${
                      repaymentType === r
                        ? 'bg-lux-gold-primary/10 text-lux-gold-primary border-lux-gold-primary animate-none'
                        : 'bg-[#121418]/60 border-lux-border text-neutral-300 hover:text-white hover:border-lux-gold-primary/50'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Slider for Tenure */}
          <div className="space-y-2">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <label htmlFor="tenure-duration-slider" className="text-xs uppercase font-mono tracking-wider text-[#CCCCCC] font-bold">
                Loan Tenure Duration
              </label>
              <span className="text-sm font-semibold text-neutral-200">{tenure} Months <span className="text-xs text-neutral-500 font-mono">(Extendable)</span></span>
            </div>
            <input
              id="tenure-duration-slider"
              type="range"
              min="3"
              max="24"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-lux-gold-primary"
            />
            <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
              <span>3 Months</span>
              <span>6 Mo.</span>
              <span>12 Mo.</span>
              <span>18 Mo.</span>
              <span>24 Months</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-lux-gold-primary/5 border border-lux-border flex items-start gap-4 animate-none">
            <ShieldCheck className="w-5 h-5 text-lux-gold-primary shrink-0 mt-0.5 animate-none" />
            <p className="text-[11px] text-[#CCCCCC] leading-relaxed">
              <strong className="text-white block mb-0.5 font-bold">Note on Valuation Process</strong>
              Gold jewellery ranging from 18 to 24 karats is eligible. The final disbursal amount is evaluated by certified in-branch appraisers based on the exact weight, net purity, and average market price.
            </p>
          </div>
        </div>

        {/* Results Screen */}
        <div id="evaluator-results" className="lg:col-span-5 p-6 rounded-2xl bg-[#121418]/80 border border-lux-border flex flex-col justify-between h-full space-y-6">
          <div className="space-y-5">
            <div className="border-b border-lux-border/30 pb-4">
              <span className="text-[10px] font-mono tracking-widest text-lux-gold-primary uppercase font-bold">Maximum Loan Eligibility</span>
              <div className="text-3xl font-mono font-bold text-white tracking-tight mt-1">
                {formattedValue(calculations.maxLoanAmount)}
              </div>
              <div className="flex justify-between items-center mt-2 text-xs text-[#CCCCCC]">
                <span>Value of Gold Collateral</span>
                <span className="font-mono text-white">{formattedValue(calculations.goldValue)}</span>
              </div>
            </div>

            <div className="space-y-3.5">
              <div className="flex justify-between text-xs">
                <span className="text-[#DDDDDD] flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-lux-gold-primary" /> Interest Rate
                </span>
                <span className="font-semibold text-lux-gold-primary font-mono">{calculations.interestRate}% P.A.</span>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-[#DDDDDD] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" /> Tenure Duration
                </span>
                <span className="font-semibold text-neutral-100 font-mono">{tenure} Months</span>
              </div>

              <div className="flex justify-between text-xs border-t border-lux-border/30 pt-2">
                <span className="text-[#DDDDDD] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                  {repaymentType === 'Interest-only' ? 'Monthly Interest charge' : 'Estimated EMI (Principal+Int.)'}
                </span>
                <span className="font-bold text-neutral-100 font-mono">{formattedValue(calculations.monthlyEMI)}</span>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-[#DDDDDD] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" /> Cumulative Interest Payable
                </span>
                <span className="font-semibold text-lux-gold-primary font-mono">{formattedValue(calculations.totalInterestPayable)}</span>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-[#0f1115]/85 border border-lux-border space-y-1">
              <div className="flex justify-between text-[11px] text-neutral-400 uppercase font-mono tracking-wider">
                <span>Total Repayment due</span>
              </div>
              <div className="text-lg font-mono font-bold text-neutral-100">
                {formattedValue(calculations.totalRepayable)}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono bg-emerald-950/25 px-2 py-1 rounded w-fit border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" /> High Loan-To-Value (90% Cap)
            </div>
            <p className="text-[10px] text-neutral-400 leading-normal">
              Calculations are estimates. Real-time rates might vary based on daily bullion movements and regulatory parameters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
