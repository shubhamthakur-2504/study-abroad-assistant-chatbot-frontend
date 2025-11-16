'use client';

import React, { useState } from 'react';
import { Upload, Loader2 } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { COUNTRIES } from '@/constants';
import { documentsApi } from '@/lib/api';

export const UploadModal = ({ isOpen, onClose }) => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file || !name) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('document', JSON.stringify({ name, country }));

    try {
      await documentsApi.upload(formData);
      onClose();
      setFile(null);
      setName('');
      setCountry('');
    } catch (err) {
      alert('Failed to upload document');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Upload Document">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Document Name</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., USA Study Guide" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            <option value="">Select a country</option>
            {COUNTRIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">PDF File</label>
          <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} className="w-full" />
        </div>
      </div>

      <div className="flex gap-2 mt-6">
        <Button onClick={onClose} variant="secondary" className="flex-1">
          Cancel
        </Button>
        <Button onClick={handleUpload} disabled={!file || !name || uploading} className="flex-1">
          {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
          Upload
        </Button>
      </div>
    </Modal>
  );
};