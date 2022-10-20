import React from "react";

export default function HomeIcon() {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.11458 7.11457L23.8854 23.8854M23.8854 7.11457L7.11458 23.8854M28.5521 19.2187L19.2333 28.5375C17.1917 30.5792 13.8375 30.5792 11.7812 28.5375L2.46249 19.2187C0.420827 17.1771 0.420827 13.8229 2.46249 11.7667L11.7812 2.44791C13.8229 0.40624 17.1771 0.40624 19.2333 2.44791L28.5521 11.7667C30.5937 13.8229 30.5937 17.1771 28.5521 19.2187Z"
        stroke={getComputedStyle(document.documentElement).getPropertyValue(
          "--border-color"
        )}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
