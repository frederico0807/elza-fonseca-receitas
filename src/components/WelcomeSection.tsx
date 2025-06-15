
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WelcomeSection = () => {
  return (
    <Card className="mb-6 border-none bg-gradient-to-r from-rose-100 to-green-100 shadow-sm">
      <CardContent className="p-6">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-light text-rose-800 mb-4">
            Seja muito bem-vinda! 👋
          </h1>
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-rose-200 flex items-center justify-center">
            <span className="text-3xl">👩‍🍳</span>
          </div>
          <p className="text-rose-700 leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
            Aqui é a sua nova cozinha digital. Eu sou a Chef Elza Fonseca e preparei este espaço com muito carinho para te ensinar receitas deliciosas, sem glúten, sem lactose, práticas e saudáveis. 
          </p>
          <p className="text-rose-600 mt-3 text-sm md:text-base">
            Aproveite cada receita, baixe os PDFs para te acompanhar na cozinha e fique de olho nas novidades que eu sempre trago para você!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeSection;
