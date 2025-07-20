import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";

export default function LoginPage({ onLogin }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#eef5fc] to-[#f5f6f8]">
      <div className="w-full max-w-sm p-10 bg-white rounded-md shadow-md">
        <Logo />
        <LoginForm onLogin={onLogin} />
        <p className="mt-6 text-xs font-medium text-center text-gray-500">
          Demo credentials:
          <br />
          admin@tollsystem.com / admin123
        </p>
      </div>
    </div>
  );
}
