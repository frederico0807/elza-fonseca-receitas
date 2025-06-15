
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
        </CardHeader>
        
        <CardContent className="bg-white">
          <p className="text-sm text-rose-600 mb-4">
            Deliciosas sobremesas que cuidam da sua saúde sem abrir mão do sabor. Receitas especiais para quem tem restrições alimentares.
          </p>
          <Button onClick={() => handleUpsellClick('sobremesas-saudaveis')} className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full py-3 font-medium">
            Começar Agora
          </Button>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-green-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="relative">
          <img 
            src="https://i.imgur.com/5fgkVxb.jpeg" 
            alt="Monetizar com Doces"
            className="w-full h-48 object-cover border-4 border-white rounded-t-lg shadow-md"
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
          <Button onClick={() => handleUpsellClick('monetizar-doces')} className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full py-3 font-medium">
            Começar Agora
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsSection;
