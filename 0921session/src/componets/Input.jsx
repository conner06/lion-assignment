import { useId, useState } from "react";

/**
 * 상태별 스타일
 * default  : 아무것도 입력하지 않은 기본 상태
 * focus    : 커서가 올라가 있는 상태
 * filled   : 값이 채워져 있고 포커스가 빠진 상태
 * disabled : 입력이 막힌 상태
 */
const STATE_STYLE = {
  default:
    "border-primary-100 bg-primary-100 text-primary-900 placeholder:text-primary-600",
  focus:
    "border-primary-500 bg-primary-300 text-primary-900 placeholder:text-primary-700 ring-4 ring-primary-200",
  filled:
    "border-primary-500 bg-primary-500 text-primary-900 placeholder:text-primary-800",
  disabled:
    "border-primary-700 bg-primary-700 text-primary-400 placeholder:text-primary-600 cursor-not-allowed",
};

const LABEL_STYLE = {
  default: "text-primary-700",
  focus: "text-primary-600",
  filled: "text-primary-700",
  disabled: "text-neutral-400",
};

export default function Input({
  label,
  type = "text",
  name,
  value = "",
  onChange,
  placeholder,
  helperText,
  disabled = false,
  /** 상태를 강제로 고정하고 싶을 때만 사용 (상태 미리보기용) */
  state,
}) {
  const id = useId();
  const [focused, setFocused] = useState(false);

  const currentState =
    state ??
    (disabled ? "disabled" : focused ? "focus" : value ? "filled" : "default");

  return (
    /* Auto Layout: 세로 방향 + gap */
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className={`body-sm font-medium ${LABEL_STYLE[currentState]}`}
        >
          {label}
        </label>
      )}

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`
          w-full rounded-xl border px-4 py-3
          body-md outline-none transition-colors
          ${STATE_STYLE[currentState]}
        `}
      />

      {helperText && (
        <p
          className={`caption ${
            currentState === "disabled" ? "text-neutral-400" : "text-primary-700"
          }`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}
