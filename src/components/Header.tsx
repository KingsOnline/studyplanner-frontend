import React from 'react';



type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div>
      <img src="kingslogo.png" alt="Logo" className="w-[100px]" />
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
          </>
        ) : (
          <>
          </>
        )}
      </div>
    </div>
  </header>
);
