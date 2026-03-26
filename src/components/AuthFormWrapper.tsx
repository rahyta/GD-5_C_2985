import React, { ReactNode } from 'react';

interface AuthFormWrapperProps {
  title: string;
  children: ReactNode;
}

const AuthFormWrapper = ({ title, children }: AuthFormWrapperProps) => {
  return (
    <div className="w-full max-w-lg min-h-[720px] bg-white rounded-2xl shadow-lg p-9">
      <h2 className="text-4xl font-bold text-center mb-8 textprimary">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default AuthFormWrapper;