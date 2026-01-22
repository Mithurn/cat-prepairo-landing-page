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
          exam_type: "CAT",
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
      <h2 className="text-xl font-semibold text-foreground mb-2 text-center">
        What&apos;s your mobile number?
      </h2>
      <p className="text-foreground-muted text-sm mb-6 text-center">
        We&apos;ll use this to send you important updates and reminders
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="px-3 py-3.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground text-sm"
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
            className="flex-1 px-4 py-3.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder:text-foreground-muted/50"
            autoFocus
          />
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div className="flex gap-3 pt-2">
          <a
            href="/"
            className="flex-1 py-3.5 text-foreground-muted hover:text-foreground font-medium rounded-lg transition-colors text-center border border-border"
          >
            Back
          </a>
          <button
            type="submit"
            disabled={loading || phone.length < 10}
            className="flex-1 py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
