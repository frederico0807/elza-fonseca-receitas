
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
          title: 'Bem-Vinda ao Seu Universo Gastronômico',
          description: 'Seja muito bem-vinda ao seu espaço exclusivo de gastronomia saudável! Aqui você descobrirá receitas cuidadosamente desenvolvidas pela Chef Elza, onde cada ingrediente conta uma história de sabor e bem-estar. Transforme sua cozinha em um verdadeiro ateliê culinário.'
        };
      case 'novidades':
        return {
          title: 'Descubra Suas Próximas Experiências Culinárias',
          description: 'Explore nosso catálogo premium de experiências gastronômicas exclusivas. Aqui você encontrará produtos especialmente selecionados para elevar sua jornada culinária a um novo patamar de excelência e sofisticação.'
        };
      case 'configuracoes':
        return {
          title: 'Centro de Personalização',
          description: 'Personalize sua experiência e ajuste suas preferências para uma jornada ainda mais conectada com seus objetivos culinários.'
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
