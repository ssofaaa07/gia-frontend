import React from 'react'
import axios from 'axios'

const DOWNLOAD_URL = 'https://generation-gia-doc.onrender.com/template';
const TEMPLATE_FILE_NAME = "Данные о ВКР студентов.xlsx";

const DownloadTemplateComponent = () => {
  const handleDownload = async () => {
    try {
      const response = await axios.get(DOWNLOAD_URL, {
        responseType: 'blob', // Важно указать responseType как 'blob'
      });
      const blob = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      // Создаем ссылку на файл
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', TEMPLATE_FILE_NAME); // Указываем имя файла
      document.body.appendChild(link);
      link.click();

      // Удаляем ссылку после скачивания
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Ошибка при скачивании шаблона:', error);
    }
  };

  return (
    <div className="form-input">
            {/* <div class="btn-group"> */}

      <label class="form-input-text-bold">1. Скачайте шаблон и заполните:</label>
        <a href="#" onClick={handleDownload}>
          Шаблон таблицы для заполнения
        </a>
      {/* </div> */}
    </div>
  );
}

export default DownloadTemplateComponent