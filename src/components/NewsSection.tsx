
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';
import LazyImage from './LazyImage';

const RecipeViewer = React.lazy(() => import('./RecipeViewer'));

const NewsSection = React.memo(() => {
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const convertGoogleDriveUrl = (url: string) => {
    // Converte URL do Google Drive preview para download direto
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (fileIdMatch) {
      const fileId = fileIdMatch[1];
      return `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
    return url;
  };

  const handleRecipeDownload = () => {
    const pdfUrl = 'https://drive.google.com/file/d/1hIKA7qs-gGrL1ZS5G6px5J8j6ni8hwF5/preview';
    const downloadUrl = convertGoogleDriveUrl(pdfUrl);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Receitas que não vão ao fogo.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
    setSelectedRecipe(null);
  };

  const handleMonetizeClick = () => {
    window.open('https://app.pushinpay.com.br/service/pay/9F2A755E-96D2-4209-A14A-5B67E0E43685', '_blank');
  };

  return (
    <>
      <div className="space-y-6">
        <Card className="overflow-hidden border-rose-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="relative h-48">
            <LazyImage 
              src="https://i.ibb.co/dw7zPHb/download-4.jpg" 
              alt="Receitas que não vão ao fogo" 
              className="w-full h-full border-4 border-white rounded-t-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-lg" />
          </div>
          
          <CardHeader className="bg-white">
            <CardTitle className="text-rose-800 text-lg md:text-xl font-medium">
              Receitas que não vão ao fogo
            </CardTitle>
          </CardHeader>
          
          <CardContent className="bg-white">
            <p className="text-sm text-rose-600 mb-4">
              Deliciosas receitas práticas e saudáveis que não precisam ir ao fogo. Perfeitas para o dia a dia corrido.
            </p>
            <Button 
              onClick={handleRecipeDownload}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full py-3 font-medium"
            >
              <Download size={16} className="mr-2" />
              Baixar Receitas
            </Button>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-green-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="relative h-48">
            <LazyImage 
              src="https://i.ibb.co/Y77hZC0/images.jpg" 
              alt="Monetizar com Doces" 
              className="w-full h-full border-4 border-white rounded-t-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-lg" />
          </div>
          
          <CardHeader className="bg-white">
            <CardTitle className="text-green-800 text-lg md:text-xl font-medium">
              Monetizar com Doces
            </CardTitle>
          </CardHeader>
          
          <CardContent className="bg-white">
            <p className="text-sm text-green-600 mb-4">
              Descubra como transformar suas receitas de doces saudáveis em um negócio lucrativo. Estratégias completas de vendas e marketing.
            </p>
            <Button 
              onClick={handleMonetizeClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full py-3 font-medium"
            >
              Começar Agora!
            </Button>
          </CardContent>
        </Card>
      </div>

      {isViewerOpen && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <RecipeViewer 
            recipe={selectedRecipe}
            isOpen={isViewerOpen}
            onClose={handleCloseViewer}
          />
        </React.Suspense>
      )}
    </>
  );
});

NewsSection.displayName = 'NewsSection';

export default NewsSection;
