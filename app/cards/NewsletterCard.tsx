"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

export function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const subscriberCount = 127; // You can make this dynamic

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 3000);
  };

  return (
    <div className="relative h-full w-full bg-linear-to-br from-pink-500/10 to-rose-500/10 rounded-xl p-6 overflow-hidden border border-border">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="relative h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
              <Mail className="w-6 h-6 text-pink-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Stay Updated</p>
              <p className="font-semibold text-foreground">Newsletter</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            Get the latest updates on projects, articles, and tech insights delivered to your inbox.
          </p>

          <p className="text-xs text-muted-foreground mb-4">
            You&apos;ll be subscriber <span className="font-semibold text-foreground">#{subscriberCount + 1}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              disabled={subscribed}
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors ${
                subscribed
                  ? "bg-green-500 text-white"
                  : "bg-pink-500 hover:bg-pink-600 text-white"
              }`}
              disabled={subscribed}
            >
              {subscribed ? "✓" : <Send className="w-4 h-4" />}
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
}
