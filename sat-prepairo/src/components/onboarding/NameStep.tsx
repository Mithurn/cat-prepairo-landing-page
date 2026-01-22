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
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "#FAFAFA",
          marginBottom: "8px",
          textAlign: "center",
        }}
      >
        What should we call you?
      </h2>
      <p
        style={{
          color: "#9CA3AF",
          fontSize: "14px",
          marginBottom: "24px",
          textAlign: "center",
        }}
      >
        Let&apos;s personalize your prep experience
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          autoFocus
          style={{
            width: "100%",
            padding: "14px 16px",
            background: "#080808",
            border: "1px solid #1F2937",
            borderRadius: "8px",
            color: "#FAFAFA",
            fontSize: "14px",
            outline: "none",
            marginBottom: "16px",
            boxSizing: "border-box",
          }}
        />

        {error && (
          <p style={{ color: "#EF4444", fontSize: "14px", textAlign: "center", marginBottom: "16px" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={name.trim().length < 2}
          style={{
            width: "100%",
            padding: "14px",
            background: name.trim().length < 2 ? "rgba(206,255,101,0.5)" : "#CEFF65",
            color: "#080808",
            fontWeight: 600,
            borderRadius: "8px",
            border: "none",
            cursor: name.trim().length < 2 ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            transition: "all 0.2s",
          }}
        >
          Continue
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}
