"use client";

import { useState } from "react";

export default function ServerMessage() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadMessage() {
    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/message");
      if (!response.ok) {
        throw new Error(`The server returned ${response.status}.`);
      }

      const data = await response.json();
      if (typeof data.message !== "string") {
        throw new Error("The server response did not contain a message.");
      }
      setMessage(data.message);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Could not load the server message.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="interactive-control">
      <button
        className="button"
        onClick={loadMessage}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Load server message"}
      </button>
      {message && <p className="message" role="status">{message}</p>}
      {error && <p className="error" role="alert">{error}</p>}
    </div>
  );
}
