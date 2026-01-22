"use client";

import { useState, useRef, useEffect } from "react";
import { X, Loader2, CheckCircle, ArrowLeft } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  examType?: string;
}

type Step = "form" | "otp" | "success";

export default function SignupModal({
  isOpen,
  onClose,
  examType = "CAT",
}: SignupModalProps) {
  const [step, setStep] = useState<Step>("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  // OTP fields
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [leadId, setLeadId] = useState<number | null>(null);
  const [resendCooldown, setResendCooldown] = useState(0);

  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep("form");
        setError("");
        setName("");
        setEmail("");
        setPhone("");
        setOtp(["", "", "", "", "", ""]);
        setLeadId(null);
        setResendCooldown(0);
      }, 300);
    }
  }, [isOpen]);

  // Resend cooldown timer
  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: `${countryCode}${phone}`,
          exam_type: examType,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setLeadId(data.lead_id);
        setStep("otp");
        setResendCooldown(30);
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch {
      setError("Failed to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = async () => {
    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      setError("Please enter the complete OTP");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead_id: leadId,
          otp: otpCode,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStep("success");
      } else {
        setError(data.message || "Invalid OTP");
        setOtp(["", "", "", "", "", ""]);
        otpRefs.current[0]?.focus();
      }
    } catch {
      setError("Failed to verify. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;

    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/resend-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lead_id: leadId }),
      });

      const data = await response.json();

      if (data.success) {
        setResendCooldown(30);
        setOtp(["", "", "", "", "", ""]);
        otpRefs.current[0]?.focus();
      } else {
        setError(data.message || "Failed to resend OTP");
      }
    } catch {
      setError("Failed to resend. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-surface rounded-2xl shadow-2xl border border-border overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-foreground-muted hover:text-foreground transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {step === "form" && (
            <>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Join the Waitlist
              </h2>
              <p className="text-foreground-muted mb-6">
                Get early access to PrepAiro {examType} preparation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder:text-foreground-muted/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder:text-foreground-muted/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="px-3 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground"
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
                      placeholder="9876543210"
                      required
                      maxLength={10}
                      className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder:text-foreground-muted/50"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending OTP...
                    </>
                  ) : (
                    "Continue"
                  )}
                </button>
              </form>
            </>
          )}

          {step === "otp" && (
            <>
              <button
                onClick={() => setStep("form")}
                className="flex items-center gap-1 text-foreground-muted hover:text-foreground text-sm mb-4 transition-colors"
              >
                <ArrowLeft size={16} />
                Back
              </button>

              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Verify Your Phone
              </h2>
              <p className="text-foreground-muted mb-6">
                Enter the 6-digit code sent to {countryCode}{phone}
              </p>

              <div className="flex gap-2 justify-center mb-6">
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
                    className="w-12 h-14 text-center text-xl font-semibold bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground"
                  />
                ))}
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center mb-4">{error}</p>
              )}

              <button
                onClick={handleVerifyOtp}
                disabled={loading || otp.join("").length !== 6}
                className="w-full py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-4"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify OTP"
                )}
              </button>

              <p className="text-center text-sm text-foreground-muted">
                Didn&apos;t receive the code?{" "}
                {resendCooldown > 0 ? (
                  <span>Resend in {resendCooldown}s</span>
                ) : (
                  <button
                    onClick={handleResendOtp}
                    disabled={loading}
                    className="text-accent hover:underline font-medium"
                  >
                    Resend OTP
                  </button>
                )}
              </p>
            </>
          )}

          {step === "success" && (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                You&apos;re on the list!
              </h2>
              <p className="text-foreground-muted mb-6">
                We&apos;ll notify you when PrepAiro {examType} launches. Get ready to ace your exam!
              </p>
              <button
                onClick={onClose}
                className="px-8 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
