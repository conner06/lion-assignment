import { useState } from "react";
import Button from "../componets/Button";
import Input from "../componets/Input";

const INITIAL_FORM = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

export default function SignUp() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const passwordMismatch =
    form.passwordConfirm !== "" && form.password !== form.passwordConfirm;

  const canSubmit =
    Object.values(form).every((value) => value.trim() !== "") &&
    !passwordMismatch;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
  };

  return (
    /* Auto Layout: 세로 방향 + 가운데 정렬 */
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-8 rounded-2xl bg-white p-8"
    >
      <header className="flex flex-col gap-2">
        <h1 className="title-sm text-neutral-900">회원가입</h1>
        <p className="body-sm text-neutral-500">
          서비스를 이용하려면 계정을 만들어 주세요.
        </p>
      </header>

      <div className="flex flex-col gap-5">
        <Input
          label="이름"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="이름을 입력해 주세요"
        />
        <Input
          label="이메일"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          label="비밀번호"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="비밀번호를 입력해 주세요"
        />
        <Input
          label="비밀번호 확인"
          name="passwordConfirm"
          type="password"
          value={form.passwordConfirm}
          onChange={handleChange}
          placeholder="비밀번호를 한 번 더 입력해 주세요"
          helperText={
            passwordMismatch ? "비밀번호가 일치하지 않습니다." : undefined
          }
        />
      </div>

      <div className="flex flex-col gap-3">
        <Button type="submit" text="회원가입" disabled={!canSubmit} />
        {submitted && (
          <p className="caption text-neutral-600">
            {form.name}님, 회원가입이 완료되었습니다.
          </p>
        )}
      </div>
    </form>
  );
}
