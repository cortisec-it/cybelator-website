import React from 'react';
import { Send, CheckCircle2, Zap, ExternalLink, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

function TelegramSubscriptionCTA({ variant = 'default' }) {
  const telegramLink = "https://t.me/cybelatoralerts";

  const qrCodeUrl = "https://horizons-cdn.hostinger.com/35f8825e-08b9-4488-b079-035d37952903/bc991c16fdd0ae7930e5831aa7b1482f.png";

  if (variant === 'compact') {
    return (
      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-white shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-white/20 p-2 rounded-lg shrink-0">
                <Send className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">Get Instant Scam Warnings</h3>
            </div>
            <p className="text-sm text-blue-50 mb-4 leading-relaxed">
              Join our official Telegram channel for real-time alerts. 1–2 important updates per day. No spam.
            </p>
            
            <div className="space-y-3">
              <Button 
                asChild
                className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold"
              >
                <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                   <Send className="w-4 h-4" /> Join Channel
                </a>
              </Button>
              <div className="flex items-center justify-center gap-2 text-xs text-blue-100/80">
                 <CheckCircle2 className="w-3 h-3" /> No signup required
              </div>
            </div>
          </div>
          
          <div className="hidden md:block shrink-0 bg-white p-2 rounded-xl shadow-md">
             <img src={qrCodeUrl} alt="Telegram QR Code" className="w-24 h-24 object-contain" />
          </div>
        </div>
      </div>
    );
  }

  // Default / Large Variant
  return (
    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-400/30">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 text-blue-100">
            <Zap className="w-3 h-3 text-yellow-300" /> Real-time Protection
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
            Get Instant Scam Warnings on Telegram
          </h3>
          
          <p className="text-blue-50 text-base md:text-lg mb-6 max-w-xl mx-auto lg:mx-0">
            1–2 important alerts per day • No spam • Easy unsubscribe
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
             <Button 
                asChild
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold h-12 px-8 rounded-xl text-lg shadow-lg hover:shadow-white/20 transition-all w-full sm:w-auto group"
              >
                <a href={telegramLink} target="_blank" rel="noopener noreferrer">
                  <Send className="w-5 h-5 mr-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> 
                  Join Telegram Channel
                </a>
              </Button>
          </div>
          
          <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-blue-100/90 font-medium">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-300" /> No signup required</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-300" /> No phone/email collection</span>
          </div>
        </div>
        
        {/* Right Content - QR Code Area */}
        <div className="shrink-0 flex flex-col items-center">
          <div className="bg-white p-3 rounded-2xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-300 w-full max-w-[200px]">
            <img 
              src={qrCodeUrl} 
              alt="Scan to join Telegram Channel" 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <p className="mt-3 text-sm font-medium text-blue-100 flex items-center gap-2">
            <Smartphone className="w-4 h-4" /> Scan to join
          </p>
        </div>

      </div>
    </div>
  );
}

export default TelegramSubscriptionCTA;