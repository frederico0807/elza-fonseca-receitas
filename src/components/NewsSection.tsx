
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

      {/* Sobremesas Saudáveis */}
      <Card className="overflow-hidden border-rose-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="relative">
          <img 
            src="https://i.imgur.com/GN6vuxB.jpeg" 
            alt="Sobremesas Saudáveis"
            className="w-full h-48 object-cover border-4 border-white rounded-t-lg shadow-md"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-lg" />
        </div>
        
        <CardHeader className="bg-white">
          <CardTitle className="text-rose-800 text-lg md:text-xl font-medium">
            Sobremesas Saudáveis Sem Glúten e Sem Lactose
          </CardTitle>
          <p className="text-rose-600 text-sm">
            Finalize suas refeições com doçura e saúde
          </p>
        </CardHeader>
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

      <Card className="overflow-hidden border-green-200 bg-gradient-to-r from-green-50 to-green-100 shadow-sm">
        <div className="relative mb-4">
          <img 
            src="https://i.imgur.com/5fgkVxb.jpeg" 
            alt="Monetizar com Doces"
            className="w-full h-32 object-cover border-4 border-white rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
        </div>
        <CardContent className="text-center">
          <div className="mb-4">
            <span className="text-3xl">💰</span>
          </div>
          <h3 className="text-lg font-medium text-green-800 mb-2">
            Monetizar com Esses Doces 💰
          </h3>
          <p className="text-sm text-green-700 mb-4">
            Descubra como transformar suas receitas de doces saudáveis em um negócio lucrativo. Estratégias completas de vendas e marketing.
          </p>
          <Button onClick={() => handleUpsellClick('monetizar-doces')} className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full py-3 font-medium">
            Começar Agora
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsSection;
