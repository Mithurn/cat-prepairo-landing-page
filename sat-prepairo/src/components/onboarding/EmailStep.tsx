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
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "#FAFAFA",
          marginBottom: "8px",
          textAlign: "center",
        }}
      >
        Almost there, {data.name}!
      </h2>
      <p
        style={{
          color: "#9CA3AF",
          fontSize: "14px",
          marginBottom: "24px",
          textAlign: "center",
        }}
      >
        Where should we send your prep updates?
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
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
          disabled={loading || !isValidEmail(email)}
          style={{
            width: "100%",
            padding: "14px",
            background: loading || !isValidEmail(email) ? "rgba(206,255,101,0.5)" : "#CEFF65",
            color: "#080808",
            fontWeight: 600,
            borderRadius: "8px",
            border: "none",
            cursor: loading || !isValidEmail(email) ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            transition: "all 0.2s",
          }}
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
