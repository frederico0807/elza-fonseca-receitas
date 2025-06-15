
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Recipe {
  title: string;
  description: string;
  pdfUrl: string;
}

interface Module {
  id: string;
  title: string;
  description: string;
  image: string;
  recipes: Recipe[];
}

interface ClassModuleProps {
  module: Module;
}

const ClassModule = ({ module }: ClassModuleProps) => {
  const handleDownloadPDF = (pdfUrl: string, recipeName: string) => {
    // Aqui você implementaria o download real do PDF
    console.log(`Baixando PDF: ${recipeName}`);
    // window.open(pdfUrl, '_blank');
  };

  return (
    <Card className="overflow-hidden border-rose-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={module.image} 
          alt={module.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      <CardHeader className="bg-white">
        <CardTitle className="text-rose-800 text-lg md:text-xl font-medium">
          {module.title}
        </CardTitle>
        <CardDescription className="text-rose-600">
          {module.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="bg-white space-y-4">
        {module.recipes.map((recipe, index) => (
          <div key={index} className="p-4 bg-rose-50 rounded-lg border border-rose-100">
            <h4 className="font-medium text-rose-800 mb-2">{recipe.title}</h4>
            <p className="text-sm text-rose-600 mb-3">{recipe.description}</p>
            <Button 
              onClick={() => handleDownloadPDF(recipe.pdfUrl, recipe.title)}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full py-3 text-sm font-medium transition-colors"
            >
              <Download size={16} className="mr-2" />
              📄 Baixar Receita em PDF
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ClassModule;
