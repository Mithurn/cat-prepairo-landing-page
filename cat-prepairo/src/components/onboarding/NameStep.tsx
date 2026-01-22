"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import type { OnboardingData } from "@/app/onboarding/page";

interface NameStepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  onNext: () => void;
}

export default function NameStep({ data, updateData, onNext }: NameStepProps) {
  const [name, setName] = useState(data.name);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError("Please enter your name");
      return;
    }
    updateData({ name: name.trim() });
    onNext();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-2 text-center">
        What should we call you?
      </h2>
      <p className="text-foreground-muted text-sm mb-6 text-center">
        Let&apos;s personalize your prep experience
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-3.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder:text-foreground-muted/50"
          autoFocus
        />

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          disabled={name.trim().length < 2}
          className="w-full py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          Continue
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}
