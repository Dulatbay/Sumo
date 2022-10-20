import React from "react";

export default function MoreButtonIcon() {
  return (
    <svg
      width="19"
      height="5"
      viewBox="0 0 19 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.75 4.75C1.5125 4.75 0.5 3.7375 0.5 2.5C0.5 1.2625 1.5125 0.25 2.75 0.25C3.9875 0.25 5 1.2625 5 2.5C5 3.7375 3.9875 4.75 2.75 4.75ZM16.25 4.75C15.0125 4.75 14 3.7375 14 2.5C14 1.2625 15.0125 0.25 16.25 0.25C17.4875 0.25 18.5 1.2625 18.5 2.5C18.5 3.7375 17.4875 4.75 16.25 4.75ZM9.5 4.75C8.2625 4.75 7.25 3.7375 7.25 2.5C7.25 1.2625 8.2625 0.25 9.5 0.25C10.7375 0.25 11.75 1.2625 11.75 2.5C11.75 3.7375 10.7375 4.75 9.5 4.75Z"
        fill={getComputedStyle(document.documentElement).getPropertyValue(
          "--border-color"
        )}
      />
    </svg>
  );
}
