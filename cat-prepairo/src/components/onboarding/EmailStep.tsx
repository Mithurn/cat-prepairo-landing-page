"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import type { OnboardingData } from "@/app/onboarding/page";

interface EmailStepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  onNext: () => void;
  apiUrl: string;
}

export default function EmailStep({ data, updateData, onNext, apiUrl }: EmailStepProps) {
  const [email, setEmail] = useState(data.email);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/update-lead`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead_id: data.leadId,
          name: data.name,
          email: email,
          background: data.background,
        }),
      });

      const result = await response.json();

      if (result.success) {
        updateData({ email });
        onNext();
      } else {
        updateData({ email });
        onNext();
      }
    } catch {
      updateData({ email });
      onNext();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-2 text-center">
        Almost there, {data.name}!
      </h2>
      <p className="text-foreground-muted text-sm mb-6 text-center">
        Where should we send your prep updates?
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-3.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder:text-foreground-muted/50"
          autoFocus
        />

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          disabled={loading || !isValidEmail(email)}
          className="w-full py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            "Complete Setup"
          )}
        </button>
      </form>
    </div>
  );
}
