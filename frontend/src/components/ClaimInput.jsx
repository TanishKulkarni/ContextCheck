export default function ClaimInput({ value, onChange }) {
  return (
    <textarea
      placeholder="Paste a headline, tweet, or news claim here..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={5}
      style={{
        width: "100%",
        padding: "1rem",
        borderRadius: "14px",
        border: "1px solid #2b2f55",
        background: "#10132a",
        color: "white",
        fontSize: "1rem",
        resize: "none",
        outline: "none",
        transition: "border 0.3s ease",
      }}
    />
  );
}
