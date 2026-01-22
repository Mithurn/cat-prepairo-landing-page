"use client";

import { useState } from "react";
import { ArrowRight, Briefcase, GraduationCap, BookOpen, User } from "lucide-react";
import type { OnboardingData } from "@/app/onboarding/page";

interface BackgroundStepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  onNext: () => void;
}

const backgroundOptions = [
  { id: "working", label: "Working Professional", icon: Briefcase },
  { id: "student", label: "College Student", icon: GraduationCap },
  { id: "fresher", label: "Fresh Graduate", icon: BookOpen },
  { id: "other", label: "Other", icon: User },
];

export default function BackgroundStep({ data, updateData, onNext }: BackgroundStepProps) {
  const [selected, setSelected] = useState(data.background);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;
    updateData({ background: selected });
    onNext();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-2 text-center">
        What&apos;s your current status?
      </h2>
      <p className="text-foreground-muted text-sm mb-6 text-center">
        This helps us tailor your prep plan
      </p>

      <form onSubmit={handleSubmit} className="space-y-2">
        {backgroundOptions.map((option) => {
          const Icon = option.icon;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setSelected(option.id)}
              className={`w-full p-3 rounded-lg border-2 transition-all duration-200 flex items-center gap-3 text-left ${
                selected === option.id
                  ? "border-accent bg-accent/5"
                  : "border-border bg-background hover:border-border-strong"
              }`}
            >
              <Icon
                size={18}
                className={selected === option.id ? "text-accent" : "text-foreground-muted"}
              />
              <span className={`font-medium text-sm ${selected === option.id ? "text-foreground" : "text-foreground-muted"}`}>
                {option.label}
              </span>
            </button>
          );
        })}

        <button
          type="submit"
          disabled={!selected}
          className="w-full py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-3"
        >
          Continue
          <ArrowRight size={16} />
        </button>
      </form>
    </div>
  );
}
