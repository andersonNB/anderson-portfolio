type IconProps = {
  className?: string;
};

type StackIconProps = IconProps & {
  title?: string;
};

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 7.5 10.94 12c.66.43 1.46.43 2.12 0L20 7.5M5.2 18h13.6c.66 0 1.2-.54 1.2-1.2V7.2c0-.66-.54-1.2-1.2-1.2H5.2C4.54 6 4 6.54 4 7.2v9.6c0 .66.54 1.2 1.2 1.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3.75a8.25 8.25 0 0 0-2.61 16.08c.41.08.56-.18.56-.4v-1.57c-2.28.5-2.76-.97-2.76-.97-.38-.96-.92-1.21-.92-1.21-.75-.51.06-.5.06-.5.83.06 1.27.85 1.27.85.74 1.26 1.95.9 2.43.68.07-.54.29-.9.52-1.1-1.82-.2-3.73-.91-3.73-4.06 0-.9.32-1.63.84-2.2-.08-.2-.36-1.02.08-2.12 0 0 .69-.22 2.26.84a7.7 7.7 0 0 1 4.12 0c1.57-1.06 2.26-.84 2.26-.84.44 1.1.16 1.92.08 2.12.52.57.84 1.3.84 2.2 0 3.16-1.92 3.86-3.75 4.05.3.26.56.77.56 1.56v2.31c0 .22.15.48.57.4A8.25 8.25 0 0 0 12 3.75Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3.75"
        y="3.75"
        width="16.5"
        height="16.5"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7.25 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM6.25 10.5h2v7.25h-2V10.5ZM11.25 10.5h1.92v1.04h.03c.38-.72 1.27-1.29 2.61-1.29 2.1 0 3.19 1.22 3.19 3.75v3.75h-2v-3.37c0-1.14-.22-2.13-1.57-2.13-1.27 0-1.93.86-1.93 2.13v3.37h-2V10.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function FileIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 3.75h5.88c.33 0 .65.13.88.37l3.12 3.13c.23.23.37.55.37.88v9.62A2.25 2.25 0 0 1 16 20H8A2.25 2.25 0 0 1 5.75 17.75v-11.75A2.25 2.25 0 0 1 8 3.75Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M13.75 3.75V7.5h3.75M8.75 11.25h6.5M8.75 14.25h6.5M8.75 17.25h4.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 7.5h15M4.5 12h15M4.5 16.5h15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 2.75v2.1M12 19.15v2.1M5.46 5.46l1.49 1.49M17.05 17.05l1.49 1.49M2.75 12h2.1M19.15 12h2.1M5.46 18.54l1.49-1.49M17.05 6.95l1.49-1.49"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.25 14.79A7.75 7.75 0 0 1 9.21 4.75a8.25 8.25 0 1 0 10.04 10.04Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function ReactStackIcon({ className, title }: StackIconProps) {
  return (
    <svg
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="8.2" ry="3.3" stroke="currentColor" strokeWidth="1.4" />
      <ellipse
        cx="12"
        cy="12"
        rx="8.2"
        ry="3.3"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="8.2"
        ry="3.3"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

export function NextStackIcon({ className, title }: StackIconProps) {
  return (
    <svg
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8.25 15.9V8.1l7.5 7.8V8.1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function TypeScriptStackIcon({ className, title }: StackIconProps) {
  return (
    <svg
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8 9.25h8M12 9.25v7M13.9 16.25c.5.5 1.2.75 2.05.75 1.15 0 1.95-.63 1.95-1.58 0-2.14-3.45-1.13-3.45-2.8 0-.6.48-1.05 1.28-1.05.62 0 1.14.2 1.6.63"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function JavaScriptStackIcon({ className, title }: StackIconProps) {
  return (
    <svg
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M10.1 9.5v5.1c0 1.15-.58 1.9-1.72 1.9-.78 0-1.3-.28-1.88-.85M13.75 15.9c.45.52 1.08.8 1.9.8 1.18 0 2.03-.64 2.03-1.62 0-2.2-3.65-1.16-3.65-2.92 0-.64.52-1.12 1.37-1.12.68 0 1.25.23 1.73.72"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function QueryStackIcon({ className, title }: StackIconProps) {
  return (
    <svg
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m15.5 15.5 3.5 3.5M8.75 11h4.5M11 8.75v4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function FormStackIcon({ className, title }: StackIconProps) {
  return (
    <svg
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4.5" y="5" width="15" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8 9h8M8 12h5M8 15h3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="m15.25 14.85 1.3 1.3 2.45-2.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ReduxStackIcon({ className, title }: StackIconProps) {
  return (
    <svg
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.8 7.05c1.82-.96 3.55-.78 4.46.3 1 1.2.67 3.2-.86 5.02M10.3 15.7c-1.78 1.04-3.56.94-4.5-.12-1.03-1.15-.8-3.15.62-5.04M9.9 8.2c.98-1.74 2.42-2.7 3.8-2.43 1.55.3 2.63 2.08 2.8 4.56.13 1.95-.34 3.78-1.18 5.1-.9 1.4-2.08 2.13-3.28 1.9-1.44-.28-2.5-1.93-2.75-4.2-.2-1.88.2-3.7 1.08-4.93Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.35"
      />
      <circle cx="14.1" cy="6.9" r="1.1" fill="currentColor" />
      <circle cx="9.8" cy="16.15" r="1.1" fill="currentColor" />
      <circle cx="18.1" cy="12.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function AngularStackIcon({ className, title }: StackIconProps) {
  return (
    <svg
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m12 3.7 7 2.5-1.07 9.17L12 20.3l-5.93-4.93L5 6.2l7-2.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <path
        d="M12 7.8 8.75 15h1.78l.67-1.72h2.53L14.4 15h1.85L13 7.8h-1Zm.47 4.15h-1.04L12 10.58l.47 1.37Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PaletteStackIcon({ className, title }: StackIconProps) {
  return (
    <svg
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4.25c-4.56 0-8.25 3.36-8.25 7.5 0 4.01 3.46 7 7.43 7h1.31c1 0 1.76-.77 1.76-1.73 0-.5-.2-.95-.56-1.28-.41-.37-.63-.85-.63-1.38 0-1.04.82-1.86 1.91-1.86h1.56c2.03 0 3.72-1.57 3.72-3.61 0-2.58-3.58-4.64-8.25-4.64Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <circle cx="8.15" cy="10.1" r="1.1" fill="currentColor" />
      <circle cx="11.15" cy="8.3" r="1.1" fill="currentColor" />
      <circle cx="14.45" cy="8.55" r="1.1" fill="currentColor" />
      <circle cx="16.1" cy="11.55" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function SassStackIcon({ className, title }: StackIconProps) {
  return (
    <svg
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9 8.1c0-1.7-1.7-2.7-4.2-2.7-3.5 0-6.67 1.8-6.67 4.38 0 1.57.95 2.46 2.3 3.05-.52 1.7-.32 3.34.7 4.3.44.41 1 .62 1.62.62 1.28 0 2.12-.94 2.12-2.06 0-1.1-.8-1.84-2.3-1.84-.32 0-.63.02-.92.08.16-.56.41-1.11.73-1.62 1.34.4 2.92.63 4.36.63 3.24 0 5.28-1.71 5.28-3.84Zm-6.1 8.24c0 .42-.28.76-.8.76-.26 0-.48-.1-.67-.28-.48-.46-.6-1.35-.35-2.38.25-.07.56-.1.89-.1.65 0 .93.27.93.72Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.35"
      />
    </svg>
  );
}

export function CodeStackIcon({ className, title }: StackIconProps) {
  return (
    <svg
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m9 8-4 4 4 4M15 8l4 4-4 4M13.25 6.5 10.75 17.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}
