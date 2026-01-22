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
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "#FAFAFA",
          marginBottom: "8px",
          textAlign: "center",
        }}
      >
        Verify your number
      </h2>
      <p
        style={{
          color: "#9CA3AF",
          fontSize: "14px",
          marginBottom: "24px",
          textAlign: "center",
        }}
      >
        Enter the 6-digit code sent to {data.countryCode}{data.phone}
      </p>

      <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "16px" }}>
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
            style={{
              width: "44px",
              height: "48px",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: 600,
              background: "#080808",
              border: "1px solid #1F2937",
              borderRadius: "8px",
              color: "#FAFAFA",
              outline: "none",
            }}
          />
        ))}
      </div>

      {error && (
        <p style={{ color: "#EF4444", fontSize: "14px", textAlign: "center", marginBottom: "16px" }}>
          {error}
        </p>
      )}

      <p style={{ fontSize: "14px", color: "#9CA3AF", textAlign: "center", marginBottom: "16px" }}>
        Didn&apos;t receive the code?{" "}
        {resendCooldown > 0 ? (
          <span>Resend in {resendCooldown}s</span>
        ) : (
          <button
            onClick={handleResend}
            disabled={loading}
            style={{
              color: "#CEFF65",
              fontWeight: 500,
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Resend OTP
          </button>
        )}
      </p>

      <div style={{ display: "flex", gap: "12px", paddingTop: "8px" }}>
        <button
          onClick={onBack}
          style={{
            flex: 1,
            padding: "14px",
            color: "#9CA3AF",
            fontWeight: 500,
            borderRadius: "8px",
            textAlign: "center",
            border: "1px solid #1F2937",
            background: "transparent",
            cursor: "pointer",
            transition: "color 0.2s",
          }}
        >
          Back
        </button>
        <button
          onClick={() => handleVerify()}
          disabled={loading || otp.join("").length !== 6}
          style={{
            flex: 1,
            padding: "14px",
            background: loading || otp.join("").length !== 6 ? "rgba(206,255,101,0.5)" : "#CEFF65",
            color: "#080808",
            fontWeight: 600,
            borderRadius: "8px",
            border: "none",
            cursor: loading || otp.join("").length !== 6 ? "not-allowed" : "pointer",
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
            "Verify"
          )}
        </button>
      </div>
    </div>
  );
}
