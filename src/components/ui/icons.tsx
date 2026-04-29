type IconProps = {
  className?: string;
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
