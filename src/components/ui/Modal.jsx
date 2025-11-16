import React from 'react';
import { X } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';

export const Modal = ({ isOpen, onClose, title, children, size = 'md' }) => {
  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className={`w-full ${sizes[size]} p-6`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <Button variant="ghost" onClick={onClose} className="p-2">
            <X className="w-5 h-5" />
          </Button>
        </div>
        {children}
      </Card>
    </div>
  );
};