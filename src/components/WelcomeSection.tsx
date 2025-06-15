import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
const WelcomeSection = () => {
  return <Card className="mb-6 border-none bg-gradient-to-r from-rose-100 to-green-100 shadow-sm">
      <CardContent className="p-6">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-light text-rose-800 mb-4">
            Seja muito bem-vinda! 👋
          </h1>
          <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
            <img src="/lovable-uploads/2d8219a9-334d-42b6-836c-4769bab61030.png" alt="Chef Elza Fonseca" className="w-full h-full object-cover" />
          </div>
          <p className="text-rose-700 leading-relaxed text-base md:text-lg max-w-2xl mx-auto"></p>
          <p className="text-rose-600 mt-3 text-sm md:text-base"></p>
        </div>
      </CardContent>
    </Card>;
};
export default WelcomeSection;