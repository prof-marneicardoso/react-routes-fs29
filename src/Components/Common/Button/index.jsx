import "./button.css";

export default function Button({ children, onClick, bgColor, color, disabled }) {
  return (
    <button
      className="btn"
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
    >
      {children}
    </button>
  );
}
