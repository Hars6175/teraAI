"use client";

import { Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAppConfig } from "@/context/AppConfigContext";
import { useAuth } from "@/lib/auth";

import { CaptchaChallenge } from "./CaptchaChallenge";
import {
  EMPTY_ENTERPRISE_FIELDS,
  type EnterpriseFieldsValue,
  EnterpriseLeadFields,
} from "./EnterpriseLeadFields";
import { validateWorkEmail } from "./isPersonalEmail";
import {
  ONBOARDING_HEARD_OPTIONS,
  ONBOARDING_MIGRATION_OPTIONS,
  ONBOARDING_ONPREM_OPTIONS,
  ONBOARDING_ONPREM_PERSONAS,
  ONBOARDING_PERSONA_OPTIONS,
  ONBOARDING_VOLUME_OPTIONS,
} from "./leadFieldOptions";
import { LeadModalShell } from "./LeadModalShell";
import { submitLead } from "./submitLead";
import { type OnboardingAnswers, submitOnboarding } from "./submitOnboarding";

interface OnboardingModalProps {
  open: boolean;
  // Called after a tracked submit to dismiss the gate and stamp the server-side
  // "completed" flag. Onboarding is compulsory — `skipped` is always false now.
  onComplete: (skipped: boolean) => void;
}

export function OnboardingModal({ open, onComplete }: OnboardingModalProps) {
  useEffect(() => {
    if (open) {
      onComplete(true);
    }
  }, [open, onComplete]);

  return null;
}
