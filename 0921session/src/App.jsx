import Input from "./componets/Input";
import SignUp from "./pages/SignUp";

const INPUT_STATES = ["default", "focus", "filled", "disabled"];

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 bg-neutral-100 p-8">
      <SignUp />

      {/* Input 컴포넌트 상태 미리보기 */}
      <section className="flex w-full max-w-md flex-col gap-6 rounded-2xl bg-white p-8">
        
      </section>
    </main>
  );
}
