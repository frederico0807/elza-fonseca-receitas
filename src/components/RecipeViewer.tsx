
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Recipe {
  title: string;
  description: string;
  ingredients?: string[];
  instructions?: string[];
  prepTime?: string;
  servings?: string;
  pdfUrl?: string;
}

interface RecipeViewerProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

const RecipeViewer = React.memo(({ recipe, isOpen, onClose }: RecipeViewerProps) => {
  if (!recipe) return null;

  // Se tem PDF, mostra o PDF otimizado
  if (recipe.pdfUrl) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] w-[95vw] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-rose-800 text-xl font-medium">
              {recipe.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="h-[75vh] w-full relative p-6 pt-2">
            <iframe
              src={`${recipe.pdfUrl}#view=FitH&toolbar=0&navpanes=0&scrollbar=0&zoom=90&embedded=true&rm=minimal`}
              className="w-full h-full border-0 rounded-lg bg-white shadow-inner"
              title={recipe.title}
              loading="lazy"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              style={{ 
                colorScheme: 'light',
                backgroundColor: 'white'
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // Caso contrário, mostra o conteúdo tradicional
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-rose-800 text-xl font-medium">
            {recipe.title}
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-full">
          <div className="space-y-6 p-1">
            <p className="text-rose-600">{recipe.description}</p>
            
            {(recipe.prepTime || recipe.servings) && (
              <div className="flex gap-4 p-4 bg-rose-50 rounded-lg border border-rose-100">
                {recipe.prepTime && (
                  <div>
                    <span className="font-medium text-rose-800">Tempo: </span>
                    <span className="text-rose-600">{recipe.prepTime}</span>
                  </div>
                )}
                {recipe.servings && (
                  <div>
                    <span className="font-medium text-rose-800">Porções: </span>
                    <span className="text-rose-600">{recipe.servings}</span>
                  </div>
                )}
              </div>
            )}

            {recipe.ingredients && (
              <div>
                <h3 className="text-lg font-medium text-rose-800 mb-3">Ingredientes</h3>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">•</span>
                      <span className="text-rose-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {recipe.instructions && (
              <div>
                <h3 className="text-lg font-medium text-rose-800 mb-3">Modo de Preparo</h3>
                <ol className="space-y-3">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-rose-500 text-white rounded-full text-sm flex items-center justify-center font-medium">
                        {index + 1}
                      </span>
                      <span className="text-rose-700">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
});

RecipeViewer.displayName = 'RecipeViewer';

export default RecipeViewer;
