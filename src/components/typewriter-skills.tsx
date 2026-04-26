"use client";

import { useEffect, useMemo, useState } from "react";

const TYPING_SPEED = 85;
const DELETING_SPEED = 45;
const PAUSE_MS = 1200;

type TypewriterSkillsProps = {
  words: string[];
};

export function TypewriterSkills({ words }: TypewriterSkillsProps) {
  const [skillIndex, setSkillIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const widestWord = useMemo(
    () => words.reduce((widest, current) => (current.length > widest.length ? current : widest), ""),
    [words],
  );

  useEffect(() => {
    const currentSkill = words[skillIndex];

    if (!isDeleting && displayed === currentSkill) {
      const timeout = window.setTimeout(() => setIsDeleting(true), PAUSE_MS);
      return () => window.clearTimeout(timeout);
    }

    if (isDeleting && displayed === "") {
      const timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setSkillIndex((current) => (current + 1) % words.length);
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
  }, [displayed, isDeleting, skillIndex, words]);

  return (
    <span className="typewriter-word">
      <span className="typewriter-sizer" aria-hidden="true">
        {widestWord}
      </span>
      <span className="typewriter-active">
        {displayed}
        <span className="typewriter-caret" aria-hidden="true" />
      </span>
    </span>
  );
}
