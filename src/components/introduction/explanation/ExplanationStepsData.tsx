
import { Bitcoin, ArrowRight, Wallet, TrendingUp, Coins, ChartBar, Lightbulb } from "lucide-react";
import React from "react";

export interface ExplanationStepType {
  title: string;
  icon: typeof Bitcoin;
  content: string;
  animation: React.ReactNode;
}

export const explanationSteps: ExplanationStepType[] = [
  {
    title: "What is Cryptocurrency?",
    icon: Bitcoin,
    content: "Cryptocurrency is digital money that uses cryptography for security. Unlike traditional currency, it's decentralized and operates on technology called blockchain - a distributed ledger enforced by a network of computers.",
    animation: (
      <div className="relative h-32 w-full overflow-hidden rounded-lg bg-crypto-dark/50 p-4">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Bitcoin className="h-8 w-8 text-crypto-blue animate-pulse" />
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <Wallet className="h-8 w-8 text-crypto-green animate-pulse" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-16 h-0.5 bg-crypto-blue animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
          <ArrowRight className="h-5 w-5 text-crypto-blue animate-[bounce_1s_infinite]" />
        </div>
      </div>
    )
  },
  {
    title: "How Cryptocurrency Works",
    icon: Coins,
    content: "Cryptocurrencies operate on blockchain networks where transactions are verified by miners or validators. Once verified, transactions are grouped into 'blocks' and added to a public ledger that anyone can view.",
    animation: (
      <div className="relative h-32 w-full overflow-hidden rounded-lg bg-crypto-dark/50 p-4">
        <div className="flex justify-between">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="relative w-10 h-14 bg-crypto-blue/20 rounded border border-crypto-blue/30 flex items-center justify-center"
              style={{ 
                animation: `fade-in 0.5s ease-out ${i * 0.2}s both`,
                transform: `translateY(${i % 2 === 0 ? '5px' : '-5px'})` 
              }}
            >
              <span className="text-xs text-crypto-blue">{i+1}</span>
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                {i < 4 && <ArrowRight className="h-3 w-3 text-crypto-blue" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Investment Basics",
    icon: TrendingUp,
    content: "Investing in crypto starts with research. Understand the project, team, and technology before investing. Consider starting with established cryptocurrencies like Bitcoin or Ethereum before exploring smaller projects.",
    animation: (
      <div className="relative h-32 w-full overflow-hidden rounded-lg bg-crypto-dark/50 p-4">
        <div className="absolute bottom-4 left-4 right-4">
          <div className="relative h-16">
            {[...Array(10)].map((_, i) => {
              const height = Math.sin(i * 0.8) * 30 + 35;
              return (
                <div 
                  key={i}
                  className="absolute bottom-0 bg-crypto-blue/80 w-2 rounded-t"
                  style={{ 
                    height: `${height}%`,
                    left: `${i * 10}%`,
                    animation: `scale-in 0.5s ease-out ${i * 0.1}s both` 
                  }}
                ></div>
              );
            })}
          </div>
          <div className="mt-2 w-full h-0.5 bg-crypto-blue/40"></div>
        </div>
      </div>
    )
  },
  {
    title: "Risk Management",
    icon: ChartBar,
    content: "Never invest more than you can afford to lose. Diversify your portfolio across different cryptocurrencies and asset classes. Stay updated with market trends and be prepared for price volatility.",
    animation: (
      <div className="relative h-32 w-full overflow-hidden rounded-lg bg-crypto-dark/50 p-4">
        <div className="flex items-end h-full justify-around pb-6">
          <div className="flex items-end space-x-2">
            {[...Array(3)].map((_, i) => {
              const heights = [60, 40, 20];
              return (
                <div 
                  key={i}
                  className="w-8 bg-crypto-blue rounded-t"
                  style={{ 
                    height: `${heights[i]}%`,
                    animation: `height-change 3s ease-in-out infinite alternate ${i * 0.5}s` 
                  }}
                ></div>
              );
            })}
            <div className="text-xs text-crypto-blue mt-2">Crypto</div>
          </div>
          <div className="flex items-end space-x-2">
            {[...Array(3)].map((_, i) => {
              const heights = [30, 50, 40];
              return (
                <div 
                  key={i}
                  className="w-8 bg-crypto-green rounded-t"
                  style={{ 
                    height: `${heights[i]}%`,
                    animation: `height-change 3s ease-in-out infinite alternate-reverse ${i * 0.5}s` 
                  }}
                ></div>
              );
            })}
            <div className="text-xs text-crypto-green mt-2">Others</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Getting Started",
    icon: Lightbulb,
    content: "Begin with a reputable exchange, secure your assets with a wallet, and start with small investments while you learn. Focus on education before diving deeply into trading or complex investments.",
    animation: (
      <div className="relative h-32 w-full overflow-hidden rounded-lg bg-crypto-dark/50 p-4">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="relative">
            <Lightbulb className="h-12 w-12 text-crypto-blue" />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-crypto-green rounded-full animate-ping"></div>
          </div>
          <div className="mt-4 flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 rounded-full bg-crypto-blue"
                style={{
                  animation: `pulse 1s cubic-bezier(0.4,0,0.6,1) infinite ${i * 0.3}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    )
  }
];
