import NavBar from '@/components/NavBar';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-1 flex flex-col gap-2.5">
      <NavBar />
      <div className="overflow-y-auto p-5 flex-1 bg-white rounded-[20px]">
        {children}
      </div>
    </main>
  );
};

export default Layout;
