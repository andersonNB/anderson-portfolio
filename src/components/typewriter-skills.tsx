"use client";

import { useEffect, useState } from "react";

const skills = ["React", "Next.js", "Redux", "TypeScript"];

const TYPING_SPEED = 85;
const DELETING_SPEED = 45;
const PAUSE_MS = 1200;

export function TypewriterSkills() {
  const [skillIndex, setSkillIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = skills[skillIndex];

    if (!isDeleting && displayed === currentSkill) {
      const timeout = window.setTimeout(() => setIsDeleting(true), PAUSE_MS);
      return () => window.clearTimeout(timeout);
    }

    if (isDeleting && displayed === "") {
      const timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setSkillIndex((current) => (current + 1) % skills.length);
      }, DELETING_SPEED);

      return () => window.clearTimeout(timeout);
    }

    const nextText = isDeleting
      ? currentSkill.slice(0, displayed.length - 1)
      : currentSkill.slice(0, displayed.length + 1);

    const timeout = window.setTimeout(
      () => setDisplayed(nextText),
      isDeleting ? DELETING_SPEED : TYPING_SPEED,
    );

    return () => window.clearTimeout(timeout);
  }, [displayed, isDeleting, skillIndex]);

  return (
    <span className="typewriter-word">
      {displayed}
      <span className="typewriter-caret" aria-hidden="true" />
    </span>
  );
}
