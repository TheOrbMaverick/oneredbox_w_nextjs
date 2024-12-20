// src/components/BottomSection.tsx
import React from "react";

export const BottomSection: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <button style={styles.button}>Decision</button>
      <button style={styles.button}>Information</button>
      <button style={styles.button}>Download</button>
    </footer>
  );
};

const styles = {
  footer: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    padding: "1rem",
    backgroundColor: "#f9f9f9",
  },
  button: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#ff4d4d",
    color: "#fff",
  },
};
