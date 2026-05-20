"use client";

import { useEffect, useRef, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { MailIcon } from "@/components/ui/icons";
import { useTranslations } from "next-intl";
import guideAnimation from "@/assets/lottie/ufo.json";
import type {
  AnimatedGuideContent,
  AnimatedGuideInteractionState,
  GuideMessage,
  GuideMessageTrigger,
} from "@/types/portfolio";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const AUTO_HIDE_DELAY_MS = 1500;

function getMessageByTrigger(
  messages: GuideMessage[],
  trigger: GuideMessageTrigger,
): GuideMessage | null {
  return messages.find((message) => message.trigger === trigger) ?? messages[0] ?? null;
}

export function AnimatedCornerGuide() {
  const t = useTranslations("AnimatedGuide");
  const guide = {
    ariaLabel: t("ariaLabel"),
    assistantName: t("assistantName"),
    statusLabel: t("statusLabel"),
    hintLabel: t("hintLabel"),
    greetingLabel: t("greetingLabel"),
    ctaLabel: t("ctaLabel"),
    ctaHref: t("ctaHref"),
    variant: t("variant"),
    anchorCorner: t("anchorCorner"),
    sizeMode: t("sizeMode"),
    visualPriority: t("visualPriority"),
    motionProfile: t("motionProfile"),
    messages: t.raw("messages"),
  } as AnimatedGuideContent;
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const [activeTrigger, setActiveTrigger] = useState<GuideMessageTrigger>("idle");
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!lottieRef.current) {
      return;
    }

    if (prefersReducedMotion) {
      lottieRef.current.goToAndStop(0, true);
      return;
    }

    lottieRef.current.setSpeed(isMessageVisible ? 1.05 : 0.88);
    lottieRef.current.play();
  }, [isMessageVisible, prefersReducedMotion]);

  const clearHideTimeout = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const scheduleHide = () => {
    clearHideTimeout();

    hideTimeoutRef.current = setTimeout(() => {
      setIsMessageVisible(false);
      setActiveTrigger("idle");
    }, AUTO_HIDE_DELAY_MS);
  };

  const revealMessage = (trigger: GuideMessageTrigger) => {
    clearHideTimeout();
    setActiveTrigger(trigger);
    setIsMessageVisible(true);
  };

  const interactionState: AnimatedGuideInteractionState = {
    idle: !isMessageVisible,
    hovered: isHovered,
    focused: isFocused,
    pressed: isPressed,
    messageVisible: isMessageVisible,
    reducedMotion: prefersReducedMotion,
  };
  const activeMessage =
    isMessageVisible && activeTrigger !== "idle"
      ? getMessageByTrigger(guide.messages, activeTrigger)
      : null;

  return (
    <div
      className="animated-guide-shell"
      data-motion={interactionState.reducedMotion ? "reduced" : guide.motionProfile}
      data-open={interactionState.messageVisible}
      data-variant={guide.variant}
      data-priority={guide.visualPriority}
      data-size={guide.sizeMode}
    >
      {activeMessage ? (
        <div className="animated-guide-bubble" role="status" aria-live="polite">
          <p>{activeMessage.text}</p>
          <a className="animated-guide-cta" href={guide.ctaHref}>
            <MailIcon className="h-3.5 w-3.5" />
            <span>{guide.ctaLabel}</span>
          </a>
        </div>
      ) : null}

      <button
        type="button"
        aria-expanded={interactionState.messageVisible}
        aria-label={guide.ariaLabel}
        className="animated-guide-button"
        onBlur={() => {
          setIsFocused(false);
          if (!isHovered && !isPressed) {
            scheduleHide();
          }
        }}
        onClick={() => {
          if (isMessageVisible && activeTrigger === "tap") {
            clearHideTimeout();
            setIsMessageVisible(false);
            setActiveTrigger("idle");
            return;
          }

          revealMessage("tap");
        }}
        onFocus={() => {
          setIsFocused(true);
          revealMessage("focus");
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseEnter={() => {
          setIsHovered(true);
          revealMessage("hover");
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          if (!isFocused && !isPressed) {
            scheduleHide();
          }
        }}
        onMouseUp={() => setIsPressed(false)}
        onTouchEnd={() => setIsPressed(false)}
        onTouchStart={() => setIsPressed(true)}
      >
        <span className="animated-guide-character">
          <span className="animated-guide-lottie-shell" aria-label={guide.greetingLabel}>
            <Lottie
              lottieRef={lottieRef}
              animationData={guideAnimation}
              autoplay={!prefersReducedMotion}
              loop={!prefersReducedMotion}
              className="animated-guide-lottie"
              rendererSettings={{
                preserveAspectRatio: "xMaxYMax slice",
              }}
            />
          </span>
        </span>
      </button>
    </div>
  );
}
