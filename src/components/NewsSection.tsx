
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const NewsSection = () => {
  const handleUpsellClick = (type: string) => {
    console.log(`Clique no upsell: ${type}`);
    // Aqui você redirecionaria para a página do curso/produto
  };

  const dessertRecipes = [
    { 
      title: 'Mousse de Maracujá', 
      description: 'Sobremesa refrescante e cremosa',
      prepTime: '20 minutos + 4h geladeira',
      servings: '6 porções',
      ingredients: [
        '400ml de leite de coco gelado',
        '1/2 xícara de polpa de maracujá',
        '6 colheres de sopa de açúcar de coco',
        '2 colheres de sopa de ágar-ágar',
        '1/4 xícara de água',
        'Sementes de 1 maracujá'
      ],
      instructions: [
        'Dissolva o ágar-ágar na água',
        'Aqueça até dissolver completamente',
        'Bata o leite de coco até formar picos',
        'Adicione açúcar e polpa de maracujá',
        'Incorpore o ágar dissolvido morno',
        'Distribua em taças',
        'Leve à geladeira por 4 horas',
        'Decore com sementes antes de servir'
      ]
    },
    { 
      title: 'Pudim de Chia', 
      description: 'Rico em fibras e ômega 3',
      prepTime: '10 minutos + overnight',
      servings: '4 porções',
      ingredients: [
        '4 colheres de sopa de chia',
        '400ml de leite de coco',
        '3 colheres de sopa de maple syrup',
        '1 colher de chá de essência de baunilha',
        'Frutas para decorar',
        '1 pitada de sal'
      ],
      instructions: [
        'Misture todos os ingredientes líquidos',
        'Adicione a chia e misture bem',
        'Aguarde 5 minutos e misture novamente',
        'Cubra e refrigere overnight',
        'Misture antes de servir',
        'Decore com frutas frescas',
        'Sirva gelado'
      ]
    }
  ];

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

        <CardContent className="bg-white space-y-4">
          {dessertRecipes.map((recipe, index) => (
            <div key={index} className="p-4 bg-rose-50 rounded-lg border border-rose-100">
              <h4 className="font-medium text-rose-800 mb-2">{recipe.title}</h4>
              <p className="text-sm text-rose-600 mb-3">{recipe.description}</p>
              <div className="flex gap-4 text-xs text-rose-500 mb-3">
                <span>⏱️ {recipe.prepTime}</span>
                <span>🍽️ {recipe.servings}</span>
              </div>
            </div>
          ))}
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

      <Card className="overflow-hidden border-green-200 bg-gradient-to-r from-green-50 to-green-100 shadow-sm">
        <div className="relative mb-4">
          <img 
            src="https://i.imgur.com/5fgkVxb.jpeg" 
            alt="Monetizar com Doces"
            className="w-full h-32 object-cover border-4 border-white rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
        </div>
        <CardContent className="p-6 text-center">
          <div className="mb-4">
            <span className="text-3xl">💰</span>
          </div>
          <h3 className="text-lg font-medium text-green-800 mb-2">
            Monetizar com Esses Doces
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
