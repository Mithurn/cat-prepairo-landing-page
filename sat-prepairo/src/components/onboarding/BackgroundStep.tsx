"use client";

import { useState } from "react";
import { ArrowRight, School, GraduationCap, BookOpen, User } from "lucide-react";
import type { OnboardingData } from "@/app/onboarding/page";

interface BackgroundStepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  onNext: () => void;
}

const backgroundOptions = [
  { id: "high_school", label: "High School Student", icon: School },
  { id: "gap_year", label: "Gap Year", icon: BookOpen },
  { id: "college", label: "College Student", icon: GraduationCap },
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
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "#FAFAFA",
          marginBottom: "8px",
          textAlign: "center",
        }}
      >
        What&apos;s your current status?
      </h2>
      <p
        style={{
          color: "#9CA3AF",
          fontSize: "14px",
          marginBottom: "24px",
          textAlign: "center",
        }}
      >
        This helps us tailor your prep plan
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
          {backgroundOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selected === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelected(option.id)}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: isSelected ? "2px solid #CEFF65" : "2px solid #1F2937",
                  background: isSelected ? "rgba(206,255,101,0.05)" : "#080808",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <Icon
                  size={18}
                  style={{ color: isSelected ? "#CEFF65" : "#9CA3AF" }}
                />
                <span
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: isSelected ? "#FAFAFA" : "#9CA3AF",
                  }}
                >
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="submit"
          disabled={!selected}
          style={{
            width: "100%",
            padding: "12px",
            background: !selected ? "rgba(206,255,101,0.5)" : "#CEFF65",
            color: "#080808",
            fontWeight: 600,
            borderRadius: "8px",
            border: "none",
            cursor: !selected ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginTop: "12px",
            transition: "all 0.2s",
          }}
        >
          Continue
          <ArrowRight size={16} />
        </button>
      </form>
    </div>
  );
}
