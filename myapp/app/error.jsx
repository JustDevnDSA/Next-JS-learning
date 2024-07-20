"use client"; // Error components must be Client Components

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <span>Error: </span>{typeof error}
    </div>
  );
}
