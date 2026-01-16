import { useState } from "react";
import ClaimInput from "./components/ClaimInput";
import AnalyzeButton from "./components/AnalyzeButton";
import ResultCard from "./components/ResultCard";

import "./styles/global.css";
import "./styles/animations.css";
import "./styles/results.css";

export default function App() {
  const [claim, setClaim] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const analyzeClaim = async () => {
    if (!claim.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("http://localhost:5000/api/analyze-claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ claim }),
      });

      const data = await res.json();
      setResult(data);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>ContextCheck</h1>
        <p className="subtitle">
          Understand how news can mislead through missing context.
        </p>

        <ClaimInput value={claim} onChange={setClaim} />
        <AnalyzeButton loading={loading} onClick={analyzeClaim} />

        {error && <p style={{ color: "tomato" }}>{error}</p>}
      </div>

      <ResultCard result={result} />
    </div>
  );
}
