import React from "react";

export default function MusicLibraryIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M72 0H24C19.6 0 16 3.6 16 8V56C16 60.4 19.6 64 24 64H72C76.4 64 80 60.4 80 56V8C80 3.6 76.4 0 72 0ZM64 20H52V42C52 47.52 47.52 52 42 52C36.48 52 32 47.52 32 42C32 36.48 36.48 32 42 32C44.28 32 46.32 32.76 48 34.04V12H64V20ZM8 16H0V72C0 76.4 3.6 80 8 80H64V72H8V16Z"
        fill={getComputedStyle(document.documentElement).getPropertyValue(
          "--border-color"
        )}
      />
    </svg>
  );
}
