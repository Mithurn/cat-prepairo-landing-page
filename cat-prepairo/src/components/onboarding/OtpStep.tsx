"use client";

import { useState, useRef, useEffect } from "react";
import { Loader2 } from "lucide-react";
import type { OnboardingData } from "@/app/onboarding/page";

interface OtpStepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
  apiUrl: string;
}

export default function OtpStep({ data, onNext, onBack, apiUrl }: OtpStepProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendCooldown, setResendCooldown] = useState(30);

  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    otpRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
    // Removed auto-submit - user must click Verify button
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async (otpCode?: string) => {
    const code = otpCode || otp.join("");
    if (code.length !== 6) {
      setError("Please enter the complete OTP");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead_id: data.leadId,
          otp: code,
        }),
      });

      const result = await response.json();

      if (result.success) {
        onNext();
      } else {
        setError(result.message || "Invalid OTP");
        setOtp(["", "", "", "", "", ""]);
        otpRefs.current[0]?.focus();
      }
    } catch {
      setError("Failed to verify. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (resendCooldown > 0) return;

    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/resend-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lead_id: data.leadId }),
      });

      const result = await response.json();

      if (result.success) {
        setResendCooldown(30);
        setOtp(["", "", "", "", "", ""]);
        otpRefs.current[0]?.focus();
      } else {
        setError(result.message || "Failed to resend OTP");
      }
    } catch {
      setError("Failed to resend. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-2 text-center">
        Verify your number
      </h2>
      <p className="text-foreground-muted text-sm mb-6 text-center">
        Enter the 6-digit code sent to {data.countryCode}{data.phone}
      </p>

      <div className="flex gap-2 justify-center mb-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => { otpRefs.current[index] = el; }}
            type="text"
            inputMode="numeric"
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            onKeyDown={(e) => handleOtpKeyDown(index, e)}
            maxLength={1}
            className="w-11 h-12 text-center text-lg font-semibold bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground"
          />
        ))}
      </div>

      {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

      <p className="text-sm text-foreground-muted text-center mb-4">
        Didn&apos;t receive the code?{" "}
        {resendCooldown > 0 ? (
          <span>Resend in {resendCooldown}s</span>
        ) : (
          <button
            onClick={handleResend}
            disabled={loading}
            className="text-accent hover:underline font-medium"
          >
            Resend OTP
          </button>
        )}
      </p>

      <div className="flex gap-3 pt-2">
        <button
          onClick={onBack}
          className="flex-1 py-3.5 text-foreground-muted hover:text-foreground font-medium rounded-lg transition-colors text-center border border-border"
        >
          Back
        </button>
        <button
          onClick={() => handleVerify()}
          disabled={loading || otp.join("").length !== 6}
          className="flex-1 py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            "Verify"
          )}
        </button>
      </div>
    </div>
  );
}
