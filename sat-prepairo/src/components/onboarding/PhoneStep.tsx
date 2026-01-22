"use client";

import { useState } from "react";
import { Loader2, ArrowRight } from "lucide-react";
import type { OnboardingData } from "@/app/onboarding/page";

interface PhoneStepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  onNext: () => void;
  onAlreadyRegistered: (userData: Partial<OnboardingData>) => void;
  apiUrl: string;
}

export default function PhoneStep({ data, updateData, onNext, onAlreadyRegistered, apiUrl }: PhoneStepProps) {
  const [phone, setPhone] = useState(data.phone);
  const [countryCode, setCountryCode] = useState(data.countryCode);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) {
      setError("Please enter a valid phone number");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "User",
          email: "placeholder@temp.com",
          phone: `${countryCode}${phone}`,
          exam_type: "SAT",
        }),
      });

      const result = await response.json();

      if (result.success) {
        if (result.already_registered && result.lead) {
          // User already registered - skip to success page
          onAlreadyRegistered({
            phone,
            countryCode,
            leadId: result.lead.id,
            name: result.lead.name || "",
            email: result.lead.email || "",
            background: result.lead.background || "",
          });
        } else {
          // New user - continue with OTP flow
          updateData({ phone, countryCode, leadId: result.lead_id });
          onNext();
        }
      } else {
        setError(result.message || "Something went wrong");
      }
    } catch {
      setError("Failed to connect. Please try again.");
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
        What&apos;s your mobile number?
      </h2>
      <p
        style={{
          color: "#9CA3AF",
          fontSize: "14px",
          marginBottom: "24px",
          textAlign: "center",
        }}
      >
        We&apos;ll use this to send you important updates and reminders
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            style={{
              padding: "14px 12px",
              background: "#080808",
              border: "1px solid #1F2937",
              borderRadius: "8px",
              color: "#FAFAFA",
              fontSize: "14px",
              outline: "none",
            }}
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+61">+61</option>
            <option value="+65">+65</option>
          </select>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter mobile number"
            maxLength={10}
            autoFocus
            style={{
              flex: 1,
              padding: "14px 16px",
              background: "#080808",
              border: "1px solid #1F2937",
              borderRadius: "8px",
              color: "#FAFAFA",
              fontSize: "14px",
              outline: "none",
            }}
          />
        </div>

        {error && (
          <p style={{ color: "#EF4444", fontSize: "14px", textAlign: "center", marginBottom: "16px" }}>
            {error}
          </p>
        )}

        <div style={{ display: "flex", gap: "12px", paddingTop: "8px" }}>
          <a
            href="/"
            style={{
              flex: 1,
              padding: "14px",
              color: "#9CA3AF",
              fontWeight: 500,
              borderRadius: "8px",
              textAlign: "center",
              border: "1px solid #1F2937",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Back
          </a>
          <button
            type="submit"
            disabled={loading || phone.length < 10}
            style={{
              flex: 1,
              padding: "14px",
              background: loading || phone.length < 10 ? "rgba(206,255,101,0.5)" : "#CEFF65",
              color: "#080808",
              fontWeight: 600,
              borderRadius: "8px",
              border: "none",
              cursor: loading || phone.length < 10 ? "not-allowed" : "pointer",
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
              <>
                Continue
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
