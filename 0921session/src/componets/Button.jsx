export default function Button({
  text,
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        w-full
        px-4 py-3 rounded-xl
        body-lg text-primary-900
        bg-primary-500 transition-colors
        hover:bg-primary-400
        active:bg-primary-300
        disabled:cursor-not-allowed
        disabled:bg-primary-700
        disabled:text-primary-500
      "
    >
      {text}
    </button>
  );
}
