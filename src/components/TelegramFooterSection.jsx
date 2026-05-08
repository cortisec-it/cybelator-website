import React from 'react';
import { Send, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

function TelegramFooterSection() {
  const telegramLink = "https://t.me/cybelatoralerts";

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 shadow-2xl transition-all hover:shadow-blue-900/20 mb-12 group">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/5 blur-3xl transition-transform group-hover:scale-110" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-48 w-48 rounded-full bg-[#06B6D4]/10 blur-2xl" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/30 px-3 py-1 text-xs font-semibold text-blue-100 backdrop-blur-sm mb-4 border border-blue-400/20">
            <Zap className="h-3 w-3 text-yellow-300" />
            <span>Real-time Protection</span>
          </div>
          
          <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl tracking-tight">
            Stay Alert in Real-Time
          </h3>
          <p className="text-blue-100/90 text-sm md:text-base max-w-xl leading-relaxed">
            Don't wait for the news. Get instant scam warnings and critical security alerts directly on your phone.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <Button 
            asChild
            className="h-12 bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 font-bold px-8 rounded-xl shadow-lg transition-all transform group-hover:translate-y-[-2px]"
          >
            <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Send className="h-5 w-5" />
              <span>Join Channel</span>
              <ArrowRight className="h-4 w-4 ml-1 opacity-60" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TelegramFooterSection;