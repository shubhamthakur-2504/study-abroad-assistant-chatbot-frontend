'use client';

import React, { useState, useEffect } from 'react';
import { FileText, Check } from 'lucide-react';
import { documentsApi } from '@/lib/api';

export const DocumentSelector = ({ onDocumentSelect, selectedDocument }) => {
  const [adminDocs, setAdminDocs] = useState([]);
  const [userDocs, setUserDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('admin');

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = async () => {
    try {
      const [adminResponse, userResponse] = await Promise.all([
        documentsApi.getAdminDocuments(),
        documentsApi.getUserDocuments(),
      ]);
      setAdminDocs(adminResponse.data);
      setUserDocs(userResponse.data);
    } catch (error) {
      console.error('Failed to load documents:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDocumentClick = (doc, type) => {
    onDocumentSelect({
      id: doc.id,
      name: doc.name,
      country: doc.country,
      type,
    });
  };

  const documents = activeTab === 'admin' ? adminDocs : userDocs;

  return (
    <div className="space-y-4">
      <div className="flex gap-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('admin')}
          className={`px-4 py-2 font-medium transition-all ${
            activeTab === 'admin'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Official Guides
        </button>
        <button
          onClick={() => setActiveTab('user')}
          className={`px-4 py-2 font-medium transition-all ${
            activeTab === 'user'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          My Documents
        </button>
      </div>

      {loading ? (
        <div className="text-center py-8 text-gray-500">Loading documents...</div>
      ) : documents.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          {activeTab === 'admin' ? 'No official guides available' : 'No documents uploaded yet'}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
          {documents.map((doc) => (
            <button
              key={doc.id}
              onClick={() => handleDocumentClick(doc, activeTab)}
              className={`text-left p-4 rounded-lg border-2 transition-all ${
                selectedDocument?.id === doc.id && selectedDocument?.type === activeTab
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${
                  selectedDocument?.id === doc.id && selectedDocument?.type === activeTab
                    ? 'bg-blue-600'
                    : 'bg-gray-100'
                }`}>
                  {selectedDocument?.id === doc.id && selectedDocument?.type === activeTab ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <FileText className="w-5 h-5 text-gray-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{doc.name}</p>
                  {doc.country && (
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="inline-block px-2 py-1 bg-gray-100 rounded text-xs">
                        {doc.country}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};