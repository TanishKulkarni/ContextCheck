export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="card" style={{ marginTop: "2rem" }}>
      <h2>Analysis Result</h2>

      <p><strong>Claim Type:</strong> {result.claim_type}</p>
      <p><strong>Risk Level:</strong> {result.misinformation_risk}</p>

      <h4>Why it misleads</h4>
      <ul>
        {result.why_it_misleads.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h4>Missing Context</h4>
      <ul>
        {result.missing_context.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h4>Neutral Rewrite</h4>
      <p>{result.neutral_rewrite}</p>
    </div>
  );
}
