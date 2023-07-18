import React, { useState } from 'react'
import "./style/style.css"

export default function PhotoUploader() {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string>('');
    const [fileType, setFileType] = useState<string>('');
    const [fileSize, setFileSize] = useState<number>(0);
  
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
  
      const file = e.dataTransfer.files[0];
      displayImage(file);
      displayFileInfo(file);
    };
  
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files && e.target.files[0];
      displayImage(file);
      displayFileInfo(file);
    };
  
    const displayImage = (file: File | null) => {
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (e) => {
          setUploadedImage(e.target?.result as string);
        };
  
        reader.readAsDataURL(file);
      } else {
        setUploadedImage(null);
      }
    };
  
    const displayFileInfo = (file: File | null) => {
      if (file) {
        setFileName(file.name);
        setFileType(file.type);
        setFileSize(file.size);
      } else {
        setFileName('');
        setFileType('');
        setFileSize(0);
      }
    };
  
    const formatFileSize = (size: number) => {
      if (size < 1024) {
        return size + ' байт';
      } else if (size >= 1024 && size < 1024 * 1024) {
        return (size / 1024).toFixed(2) + ' КБ';
      } else {
        return (size / (1024 * 1024)).toFixed(2) + ' МБ';
      }
    };
  
    return (
      <div id="upload-container">
        <div
          id="drop-area"
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => e.preventDefault()}
          onDragLeave={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <p>
            Перетащите файл сюда или{' '}
            <input type="file" id="file-input" onChange={handleFileSelect} />
            выберите файл
          </p>
        </div>
        {uploadedImage && (
          <div id="image-container">
            <img
              id="uploaded-image"
              src={uploadedImage}
              alt="Загруженное изображение"
            />
          </div>
        )}
        {fileName && (
          <div id="file-info">
            <p>Имя файла: <span id="file-name">{fileName}</span></p>
            <p>MIME тип: <span id="mime-type">{fileType}</span></p>
            <p>
              Размер файла: <span id="file-size">{formatFileSize(fileSize)}</span>
            </p>
          </div>
        )}
      </div>
    );
}
