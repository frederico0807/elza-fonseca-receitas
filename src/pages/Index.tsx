import React, { useState, Suspense, useMemo } from 'react';
import { Book, Star, Settings } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WelcomeSection from '@/components/WelcomeSection';

// Lazy loading de componentes pesados
const ClassModule = React.lazy(() => import('@/components/ClassModule'));
const NewsSection = React.lazy(() => import('@/components/NewsSection'));
const SettingsSection = React.lazy(() => import('@/components/SettingsSection'));
const LoginPage = React.lazy(() => import('@/components/LoginPage'));

const LoadingSpinner = React.memo(() => (
  <div className="flex items-center justify-center py-8">
    <div className="w-6 h-6 border-2 border-rose-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

const Index = () => {
  const [activeTab, setActiveTab] = useState('aulas');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Memoização dos módulos para evitar re-renders desnecessários
  const modules = useMemo(() => [
    {
      id: 'paes',
      title: 'Receitas de Pães Sem Glúten e Sem Lactose',
      description: 'Aprenda a fazer pães deliciosos e saudáveis para toda a família',
      image: 'https://i.ibb.co/1f9rmtW/download.jpg',
      recipes: [
        { 
          title: 'Pães sem glúten e lactose', 
          description: 'Receita básica perfeita para o dia a dia',
          pdfUrl: 'https://drive.google.com/file/d/1VYfD4pbRBXkBoRoCuvew__MerwQu4I7F/preview'
        },
        { 
          title: 'Pães low carb', 
          description: 'Deliciosos pães com baixo teor de carboidratos',
          pdfUrl: 'https://drive.google.com/file/d/12UsNq9TT7nk7RmsSlLOl1RVt1NnnNUhA/preview'
        }
      ]
    },
    {
      id: 'bolos',
      title: 'Receitas de Bolos Sem Glúten e Sem Lactose',
      description: 'Bolos fofinhos e saborosos para todas as ocasiões',
      image: 'https://i.ibb.co/Cs3w2Lc/download-1.jpg',
      recipes: [
        { 
          title: 'Bolos sem glúten e lactose', 
          description: 'Bolo macio e saudável perfeito para qualquer hora',
          pdfUrl: 'https://drive.google.com/file/d/1n7AzPvxwj2VhSfq61ZAk6LWVeOcDE4rH/preview'
        },
        { 
          title: 'Bolos zero açúcar', 
          description: 'Deliciosos bolos doces sem açúcar refinado',
          pdfUrl: 'https://drive.google.com/file/d/1x6hPkrA7E0en9N0DCIvX3SKAkwDrY3hE/preview'
        }
      ]
    },
    {
      id: 'biscoitos',
      title: 'Receitas de Biscoitos Sem Glúten e Sem Lactose',
      description: 'Biscoitos crocantes e saborosos para acompanhar o café',
      image: 'https://i.ibb.co/BK74rbf/download-2.jpg',
      recipes: [
        { 
          title: 'Biscoitos sem glúten e lactose', 
          description: 'Crocante e aromático, perfeito com chá',
          pdfUrl: 'https://drive.google.com/file/d/1_-AFGAgZyhubqB8AmyYdLojQkczVn6-y/preview'
        },
        { 
          title: 'Biscoitos zero açúcar', 
          description: 'Indulgência saudável sem açúcar refinado',
          pdfUrl: 'https://drive.google.com/file/d/16Occ-ETRKBUWnOG_AZ_ld-E21cCYfHta/preview'
        }
      ]
    },
    {
      id: 'recheios',
      title: 'Receitas de Recheios e Coberturas Saudáveis',
      description: 'Complemente suas criações com sabores incríveis',
      image: 'https://i.ibb.co/jPLD1Kp/download-3.jpg',
      recipes: [
        { 
          title: 'Recheios sem glúten e lactose', 
          description: 'Cobertura rica e cremosa sem lactose',
          pdfUrl: 'https://drive.google.com/file/d/1aP2ObJauNKdU2vgXk7m8A4RFbQKCurpj/preview'
        },
        { 
          title: 'Recheios zero açúcar', 
          description: 'Doçura natural sem açúcar refinado',
          pdfUrl: 'https://drive.google.com/file/d/1CPNn8hmhW1MS0SjY692090uCcA2ACntq/preview'
        }
      ]
    }
  ], []);

  if (!isLoggedIn) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <LoginPage onLogin={handleLogin} />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-green-50 pb-20">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="container mx-auto px-3">
          <WelcomeSection activeTab={activeTab} />
          
          <TabsContent value="aulas" className="mt-6">
            <div className="space-y-4">
              <Suspense fallback={<LoadingSpinner />}>
                {modules.map((module) => (
                  <ClassModule key={module.id} module={module} />
                ))}
              </Suspense>
            </div>
          </TabsContent>

          <TabsContent value="bonus" className="mt-6">
            <Suspense fallback={<LoadingSpinner />}>
              <NewsSection />
            </Suspense>
          </TabsContent>

          <TabsContent value="configuracoes" className="mt-6">
            <Suspense fallback={<LoadingSpinner />}>
              <SettingsSection onLogout={handleLogout} />
            </Suspense>
          </TabsContent>
        </div>

        {/* Menu inferior fixo - agora com melhor fixação no mobile */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-rose-100 shadow-lg z-50 safe-area-inset-bottom">
          <TabsList className="grid w-full grid-cols-3 h-16 bg-transparent p-1 rounded-none">
            <TabsTrigger 
              value="aulas" 
              className="flex flex-col items-center justify-center gap-1 data-[state=active]:bg-rose-100 data-[state=active]:text-rose-600 text-xs h-full rounded-none"
            >
              <Book size={20} />
              <span className="text-xs font-medium">Aulas</span>
            </TabsTrigger>
            <TabsTrigger 
              value="bonus" 
              className="flex flex-col items-center justify-center gap-1 data-[state=active]:bg-rose-100 data-[state=active]:text-rose-600 text-xs h-full rounded-none"
            >
              <Star size={20} />
              <span className="text-xs font-medium">Bônus</span>
            </TabsTrigger>
            <TabsTrigger 
              value="configuracoes" 
              className="flex flex-col items-center justify-center gap-1 data-[state=active]:bg-rose-100 data-[state=active]:text-rose-600 text-xs h-full rounded-none"
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
