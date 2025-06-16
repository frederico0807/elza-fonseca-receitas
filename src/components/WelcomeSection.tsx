
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface WelcomeSectionProps {
  activeTab: string;
}

const WelcomeSection = ({ activeTab }: WelcomeSectionProps) => {
  const getContent = () => {
    switch (activeTab) {
      case 'aulas':
        return {
          title: 'Seja Bem-Vinda',
          description: 'Seja muito bem-vinda à sua área exclusiva de receitas! Aqui você terá acesso a todas as receitas exclusivas e atualizadas da Chef Elza. Explore, aprenda e transforme sua cozinha em um laboratório de sabores saudáveis.'
        };
      case 'novidades':
        return {
          title: 'Fique por dentro de todos os Bônus',
          description: 'Nesta seção você encontrará produtos adicionais e extras. Confira abaixo todas as receitas extras e feitas com muito amor!'
        };
      case 'configuracoes':
        return {
          title: 'Configurações Gerais',
          description: ''
        };
      default:
        return {
          title: '',
          description: ''
        };
    }
  };

  const content = getContent();

  return (
    <Card className="mb-6 border-none bg-gradient-to-r from-rose-100 to-green-100 shadow-sm">
      <CardContent className="p-6">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-light text-rose-800 mb-4">
            {content.title}
          </h1>
          <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
            <img 
              src="/lovable-uploads/2d8219a9-334d-42b6-836c-4769bab61030.png" 
              alt="Chef Elza Fonseca" 
              className="w-full h-full object-cover" 
            />
          </div>
          {content.description && (
            <p className="text-rose-700 leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
              {content.description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeSection;
