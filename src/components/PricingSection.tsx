export default function PricingSection() {
  const plans = [
    {
      name: 'Monthly Plan',
      price: '₹18,000',
      period: 'Billed Monthly',
      desc: 'Flexible start — pay as you grow.',
      features: ['All Core Apps (AI + CRM + Sites + Forms + Email)', 'Unlimited Projects (Funnels, Blogs & Landing Pages)', 'Email Support (Business hours response)'],
      popular: false
    },
    {
      name: 'Quarterly Plan',
      price: '₹40,000',
      period: 'Billed every 3 months',
      desc: 'Smoother cash-flow with 3-month billing cycles.',
      features: ['All Core Apps & Unlimited Projects', 'Quarterly Check-Ins (Roadmap Review + Growth Planning)', 'Priority Responses (Faster turnaround on support tickets)'],
      popular: true
    },
    {
      name: 'Yearly Plan',
      price: '₹95,000',
      period: 'Billed Yearly',
      desc: 'Simple, predictable, and designed for serious growth.',
      features: ['Premium Support (Priority queue + success sessions)', 'Early Features Access', '1-on-1 Niche Clarity Session', 'One Done-For-You High-Converting Landing Page', 'Your First Meta Ad Account Set Up + Launch Strategy', 'Business Launch Support'],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-[#0A0E27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
            Trivro AI Pricing
          </h2>
          <p className="text-xl text-white/70">Simple, Flexible, Built for Your Growth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border ${plan.popular ? 'border-[#00D4FF] shadow-2xl shadow-[#00D4FF]/30 scale-105' : 'border-white/10'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-bold rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-white/60 text-sm mb-4">{plan.desc}</p>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-white/60"> + 18% GST</span>
              </div>
              <p className="text-white/60 mb-6">{plan.period}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start text-white/80">
                    <span className="text-[#00FFA3] mr-2">✓</span>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="https://app.trivro.in" className="block w-full py-3 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-bold rounded-lg text-center hover:shadow-lg hover:shadow-[#00D4FF]/50 transition">
                Choose {plan.name.split(' ')[0]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
