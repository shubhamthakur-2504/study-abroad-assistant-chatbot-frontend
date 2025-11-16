import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Header = ({ sidebarOpen, onMenuClick, selectedDoc }) => {
  return (
    <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
      {!sidebarOpen && (
        <Button variant="ghost" onClick={onMenuClick} className="p-2">
          <Menu className="w-5 h-5" />
        </Button>
      )}
      <div className="flex-1 text-center">
        {selectedDoc ? (
          <div>
            <h2 className="font-semibold text-gray-900">{selectedDoc.name}</h2>
            {selectedDoc.country && <p className="text-sm text-gray-500">{selectedDoc.country}</p>}
          </div>
        ) : (
          <h2 className="font-semibold text-gray-900">Study Abroad Assistant</h2>
        )}
      </div>
    </div>
  );
};