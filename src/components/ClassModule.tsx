
import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import LazyImage from './LazyImage';

const RecipeViewer = React.lazy(() => import('./RecipeViewer'));

interface Recipe {
  title: string;
  description: string;
  ingredients?: string[];
  instructions?: string[];
  prepTime?: string;
  servings?: string;
  pdfUrl?: string;
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

const ClassModule = React.memo(({ module }: ClassModuleProps) => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleViewRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
    setSelectedRecipe(null);
  };

  return (
    <>
      <Card className="overflow-hidden border-rose-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="relative h-48">
          <LazyImage 
            src={module.image} 
            alt={module.title}
            className="w-full h-full border-4 border-white rounded-t-lg shadow-md"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-lg" />
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
                onClick={() => handleViewRecipe(recipe)}
                className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full py-3 text-sm font-medium transition-colors"
              >
                <Eye size={16} className="mr-2 text-rose-100" />
                Ver Receita
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

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

ClassModule.displayName = 'ClassModule';

export default ClassModule;
