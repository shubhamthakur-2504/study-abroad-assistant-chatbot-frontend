import React from 'react';
import { Send } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const ChatInput = ({ value, onChange, onSend, disabled, selectedDocument }) => {
  return (
    <div className="bg-white border-t border-gray-200 p-4">
      <div className="max-w-4xl mx-auto">
        {selectedDocument && (
          <div className="mb-2 text-sm text-gray-600 flex items-center gap-2">
            <span className="font-medium">Using:</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
              {selectedDocument.name}
            </span>
            {selectedDocument.country && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded">
                {selectedDocument.country}
              </span>
            )}
          </div>
        )}
        
        <div className="flex gap-2">
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !disabled && onSend()}
            placeholder={selectedDocument ? "Ask about studying abroad..." : "Select a document first..."}
            disabled={disabled || !selectedDocument}
          />
          <Button onClick={onSend} disabled={disabled || !value.trim() || !selectedDocument}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};