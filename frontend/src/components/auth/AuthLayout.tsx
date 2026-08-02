import { ReactNode } from "react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">

        <h1 className="text-3xl font-bold text-center text-gray-800">
          {title}
        </h1>

        <p className="text-center text-gray-500 mt-2">
          {subtitle}
        </p>

        <div className="mt-8">
          {children}
        </div>

      </div>

    </div>
  );
}

export default AuthLayout;