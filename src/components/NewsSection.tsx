
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const NewsSection = () => {
  const handleUpsellClick = (type: string) => {
    console.log(`Clique no upsell: ${type}`);
    // Aqui você redirecionaria para a página do curso/produto
  };

  return (
    <div className="space-y-6">
      <Card className="border-rose-100 shadow-sm">
        <CardHeader>
          <CardTitle className="text-rose-800 text-xl font-medium">
            Novidades da Chef Elza 🌟
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-rose-600 text-sm">
            Fique por dentro de todas as novidades atualizadas das minhas receitas
          </p>
        </CardContent>
      </Card>

      {/* Upsells */}
      <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-orange-100 shadow-sm">
        <CardContent className="p-6 text-center">
          <div className="mb-4">
            <span className="text-3xl">🚀</span>
          </div>
          <h3 className="text-lg font-medium text-orange-800 mb-2">
            Aprenda a Monetizar suas Receitas
          </h3>
          <p className="text-sm text-orange-700 mb-4">
            Transforme sua paixão pela culinária em uma fonte de renda. Curso completo de empreendedorismo culinário.
          </p>
          <Button onClick={() => handleUpsellClick('monetizar')} className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 font-medium">
            Quero Saber Mais
          </Button>
        </CardContent>
      </Card>

      <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-purple-100 shadow-sm">
        <CardContent className="p-6 text-center">
          <div className="mb-4">
            <span className="text-3xl">🍪</span>
          </div>
          <h3 className="text-lg font-medium text-purple-800 mb-2">
            Coleção Premium de Receitas Exclusivas
          </h3>
          <p className="text-sm text-purple-700 mb-4">
            Acesso às receitas mais especiais da Chef Elza, desenvolvidas exclusivamente para membros premium.
          </p>
          <Button onClick={() => handleUpsellClick('premium')} className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-full py-3 font-medium">
            Acessar Coleção Premium
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsSection;
