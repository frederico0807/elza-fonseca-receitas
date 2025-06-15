import React, { useState } from 'react';
import { Book, Star, Settings } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WelcomeSection from '@/components/WelcomeSection';
import ClassModule from '@/components/ClassModule';
import NewsSection from '@/components/NewsSection';
import SettingsSection from '@/components/SettingsSection';
import LoginPage from '@/components/LoginPage';

const Index = () => {
  const [activeTab, setActiveTab] = useState('aulas');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const modules = [
    {
      id: 'paes',
      title: 'Receitas de Pães Sem Glúten e Sem Lactose',
      description: 'Aprenda a fazer pães deliciosos e saudáveis para toda a família',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
      recipes: [
        { 
          title: 'Pão de Forma Integral', 
          description: 'Receita básica perfeita para o dia a dia',
          pdfUrl: '#'
        },
        { 
          title: 'Pão Doce de Coco', 
          description: 'Delicioso pão doce para o café da manhã',
          pdfUrl: '#'
        },
        { 
          title: 'Pão de Batata Doce', 
          description: 'Nutritivo e saboroso, ideal para lanches',
          pdfUrl: '#'
        }
      ]
    },
    {
      id: 'biscoitos',
      title: 'Receitas de Biscoitos Sem Glúten e Sem Lactose',
      description: 'Biscoitos crocantes e saborosos para acompanhar o café',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      recipes: [
        { 
          title: 'Biscoito de Aveia e Canela', 
          description: 'Crocante e aromático, perfeito com chá',
          pdfUrl: '#'
        },
        { 
          title: 'Cookies de Chocolate', 
          description: 'Indulgência saudável sem culpa',
          pdfUrl: '#'
        }
      ]
    },
    {
      id: 'recheios',
      title: 'Receitas de Recheios e Coberturas Saudáveis',
      description: 'Complemente suas criações com sabores incríveis',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
      recipes: [
        { 
          title: 'Ganache de Chocolate 70%', 
          description: 'Cobertura rica e cremosa sem lactose',
          pdfUrl: '#'
        },
        { 
          title: 'Recheio de Frutas Vermelhas', 
          description: 'Doçura natural e vitaminas',
          pdfUrl: '#'
        }
      ]
    },
    {
      id: 'sobremesas',
      title: 'Sobremesas Saudáveis Sem Glúten e Sem Lactose',
      description: 'Finalize suas refeições com doçura e saúde',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      recipes: [
        { 
          title: 'Mousse de Maracujá', 
          description: 'Sobremesa refrescante e cremosa',
          pdfUrl: '#'
        },
        { 
          title: 'Pudim de Chia', 
          description: 'Rico em fibras e ômega 3',
          pdfUrl: '#'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-green-50">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="container mx-auto px-4 pb-20">
          <WelcomeSection />
          
          <TabsContent value="aulas" className="mt-6">
            <div className="space-y-6">
              {modules.map((module) => (
                <ClassModule key={module.id} module={module} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="novidades" className="mt-6">
            <NewsSection />
          </TabsContent>

          <TabsContent value="configuracoes" className="mt-6">
            <SettingsSection onLogout={handleLogout} />
          </TabsContent>
        </div>

        {/* Menu inferior fixo */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-rose-100 shadow-lg">
          <TabsList className="grid w-full grid-cols-3 h-16 bg-transparent p-2">
            <TabsTrigger 
              value="aulas" 
              className="flex flex-col items-center gap-1 data-[state=active]:bg-rose-100 data-[state=active]:text-rose-600"
            >
              <Book size={20} />
              <span className="text-xs font-medium">Aulas</span>
            </TabsTrigger>
            <TabsTrigger 
              value="novidades" 
              className="flex flex-col items-center gap-1 data-[state=active]:bg-rose-100 data-[state=active]:text-rose-600"
            >
              <Star size={20} />
              <span className="text-xs font-medium">Novidades</span>
            </TabsTrigger>
            <TabsTrigger 
              value="configuracoes" 
              className="flex flex-col items-center gap-1 data-[state=active]:bg-rose-100 data-[state=active]:text-rose-600"
            >
              <Settings size={20} />
              <span className="text-xs font-medium">Config</span>
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
    </div>
  );
};

export default Index;
