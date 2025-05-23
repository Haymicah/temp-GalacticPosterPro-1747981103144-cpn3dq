import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/dashboard/Sidebar';
import { Navbar } from '../components/dashboard/Navbar';

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-terminal-black">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}