import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QrReader } from 'react-qr-reader';

export const QRScanner: React.FC = () => {
  const navigate = useNavigate();
  return (
    <QrReader
      onResult={(result, error) => {
        if (result) {
          navigate(`/menu?tableId=${result.getText()}`);
        }
      }}
      constraints={{ facingMode: 'environment' }}
    />
  );
};