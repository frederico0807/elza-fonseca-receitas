
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
          prepTime: '2 horas',
          servings: '1 pão',
          ingredients: [
            '500g de farinha de arroz integral',
            '100g de fécula de batata',
            '50g de polvilho doce',
            '10g de fermento biológico seco',
            '2 colheres de chá de sal',
            '1 colher de sopa de açúcar demerara',
            '300ml de água morna',
            '3 colheres de sopa de azeite'
          ],
          instructions: [
            'Misture os ingredientes secos em uma tigela grande',
            'Em outra tigela, dissolva o fermento na água morna com açúcar',
            'Adicione o azeite à mistura do fermento',
            'Una os ingredientes úmidos aos secos e misture bem',
            'Sove a massa por 10 minutos até ficar lisa',
            'Deixe crescer por 1 hora em local morno',
            'Modele o pão e coloque na forma untada',
            'Deixe crescer por mais 30 minutos',
            'Asse em forno pré-aquecido a 180°C por 40 minutos'
          ]
        },
        { 
          title: 'Pão Doce de Coco', 
          description: 'Delicioso pão doce para o café da manhã',
          prepTime: '2h30min',
          servings: '8 porções',
          ingredients: [
            '400g de farinha de arroz',
            '100g de farinha de coco',
            '100ml de leite de coco',
            '80g de açúcar de coco',
            '10g de fermento biológico',
            '2 ovos',
            '80ml de óleo de coco derretido',
            '1 colher de chá de sal'
          ],
          instructions: [
            'Misture as farinhas e o sal',
            'Dissolva o fermento no leite de coco morno',
            'Bata os ovos com açúcar até clarear',
            'Adicione o óleo de coco e a mistura do fermento',
            'Una aos ingredientes secos e sove bem',
            'Deixe crescer por 1h30min',
            'Modele em formato desejado',
            'Deixe crescer mais 45 minutos',
            'Asse a 170°C por 35 minutos'
          ]
        },
        { 
          title: 'Pão de Batata Doce', 
          description: 'Nutritivo e saboroso, ideal para lanches',
          prepTime: '2 horas',
          servings: '1 pão',
          ingredients: [
            '300g de batata doce cozida e amassada',
            '400g de farinha de arroz',
            '100g de polvilho azedo',
            '10g de fermento seco',
            '2 colheres de chá de sal',
            '2 colheres de sopa de mel',
            '200ml de água morna',
            '3 colheres de sopa de azeite'
          ],
          instructions: [
            'Cozinhe e amasse a batata doce',
            'Misture as farinhas com sal',
            'Dissolva fermento na água com mel',
            'Combine batata doce, azeite e mistura do fermento',
            'Adicione aos ingredientes secos gradualmente',
            'Sove até massa homogênea',
            'Primeira fermentação: 1 hora',
            'Modele e coloque na forma',
            'Segunda fermentação: 40 minutos',
            'Asse a 180°C por 45 minutos'
          ]
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
          prepTime: '30 minutos',
          servings: '24 biscoitos',
          ingredients: [
            '200g de aveia em flocos',
            '150g de farinha de arroz',
            '100g de açúcar demerara',
            '100ml de óleo de coco',
            '1 ovo',
            '2 colheres de chá de canela',
            '1 colher de chá de essência de baunilha',
            '1/2 colher de chá de sal'
          ],
          instructions: [
            'Pré-aqueça o forno a 180°C',
            'Misture aveia, farinha, açúcar, canela e sal',
            'Em outra tigela, bata ovo, óleo e baunilha',
            'Combine os ingredientes úmidos aos secos',
            'Forme bolinhas e achate na assadeira',
            'Asse por 15-18 minutos até dourar',
            'Deixe esfriar antes de desenformar'
          ]
        },
        { 
          title: 'Cookies de Chocolate', 
          description: 'Indulgência saudável sem culpa',
          prepTime: '25 minutos',
          servings: '20 cookies',
          ingredients: [
            '200g de farinha de amêndoas',
            '100g de farinha de arroz',
            '150g de açúcar de coco',
            '100g de chocolate 70% picado',
            '100ml de óleo de coco',
            '2 ovos',
            '1 colher de chá de bicarbonato',
            '1/2 colher de chá de sal'
          ],
          instructions: [
            'Derreta o chocolate com óleo de coco',
            'Bata ovos com açúcar até cremoso',
            'Adicione chocolate derretido',
            'Misture farinhas, bicarbonato e sal',
            'Combine todos os ingredientes',
            'Forme cookies na assadeira',
            'Asse a 170°C por 12-15 minutos'
          ]
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
          prepTime: '15 minutos',
          servings: '400ml',
          ingredients: [
            '200g de chocolate 70% cacau',
            '200ml de leite de coco',
            '2 colheres de sopa de açúcar de coco',
            '1 colher de chá de essência de baunilha'
          ],
          instructions: [
            'Pique o chocolate finamente',
            'Aqueça o leite de coco até quase ferver',
            'Despeje sobre o chocolate e aguarde 2 minutos',
            'Misture do centro para fora até ficar liso',
            'Adicione açúcar e baunilha',
            'Use quando estiver na temperatura ambiente'
          ]
        },
        { 
          title: 'Recheio de Frutas Vermelhas', 
          description: 'Doçura natural e vitaminas',
          prepTime: '20 minutos',
          servings: '300ml',
          ingredients: [
            '300g de frutas vermelhas mistas',
            '3 colheres de sopa de açúcar demerara',
            '2 colheres de sopa de água',
            '1 colher de sopa de amido de milho',
            'Suco de 1/2 limão'
          ],
          instructions: [
            'Cozinhe as frutas com açúcar em fogo baixo',
            'Dissolva o amido na água fria',
            'Adicione à panela mexendo sempre',
            'Cozinhe até engrossar',
            'Finalize com suco de limão',
            'Deixe esfriar antes de usar'
          ]
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
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-green-50">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="container mx-auto px-4 pb-20">
          <WelcomeSection activeTab={activeTab} />
          
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
