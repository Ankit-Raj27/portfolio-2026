export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 9 5"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1 0h2v1h-2zM0 1h1v4h-1zM3 1h1v4h-1zM1 2h2v1h-2zM5 0h1v5h-1zM6 0h2v1h-2zM8 1h1v1h-1zM6 2h2v1h-2zM7 3h1v1h-1zM8 4h1v1h-1z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 9 5"><path fill="${color}" d="M1 0h2v1h-2zM0 1h1v4h-1zM3 1h1v4h-1zM1 2h2v1h-2zM5 0h1v5h-1zM6 0h2v1h-2zM8 1h1v1h-1zM6 2h2v1h-2zM7 3h1v1h-1zM8 4h1v1h-1z"/></svg>`;
}