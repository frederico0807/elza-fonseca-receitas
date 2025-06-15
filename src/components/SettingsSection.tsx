
import React, { useState } from 'react';
import { User, HelpCircle, FileText, Shield, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SettingsSectionProps {
  onLogout: () => void;
}

const SettingsSection = ({ onLogout }: SettingsSectionProps) => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleSettingClick = (action: string) => {
    setSelectedSection(action);
  };

  const handleBackToSettings = () => {
    setSelectedSection(null);
  };

  const settingsOptions = [
    { icon: User, label: 'Informações da Conta', action: 'account' },
    { icon: HelpCircle, label: 'Suporte', action: 'support' },
    { icon: FileText, label: 'Termos de Uso', action: 'terms' },
    { icon: Shield, label: 'Política de Privacidade', action: 'privacy' },
  ];

  if (selectedSection === 'support') {
    return (
      <div className="space-y-4">
        <Button 
          onClick={handleBackToSettings}
          variant="outline"
          className="mb-4 border-rose-300 text-rose-600 hover:bg-rose-50"
        >
          ← Voltar
        </Button>
        <Card className="border-rose-100 shadow-sm">
          <CardHeader>
            <CardTitle className="text-rose-800 text-xl font-medium">
              Suporte
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-6">
              <div className="mb-4">
                <span className="text-4xl">📞</span>
              </div>
              <h3 className="text-lg font-medium text-rose-800 mb-2">
                Precisa de ajuda?
              </h3>
              <p className="text-rose-600 mb-4">
                Entre em contato conosco pelo WhatsApp para receber suporte personalizado.
              </p>
              <div className="bg-rose-50 p-4 rounded-lg border border-rose-200">
                <p className="text-rose-800 font-medium text-lg">
                  +55 (11) 9999-9999
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (selectedSection === 'terms') {
    return (
      <div className="space-y-4">
        <Button 
          onClick={handleBackToSettings}
          variant="outline"
          className="mb-4 border-rose-300 text-rose-600 hover:bg-rose-50"
        >
          ← Voltar
        </Button>
        <Card className="border-rose-100 shadow-sm">
          <CardHeader>
            <CardTitle className="text-rose-800 text-xl font-medium">
              Termos de Uso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-rose-700">
              <p className="text-sm leading-relaxed">
                <strong>1. Aceitação dos Termos:</strong> Ao acessar e utilizar esta área de membros, você concorda em cumprir e ficar vinculado a estes termos de uso.
              </p>
              <p className="text-sm leading-relaxed">
                <strong>2. Uso Pessoal:</strong> O conteúdo disponibilizado é para uso pessoal e não comercial. É proibida a revenda ou distribuição das receitas.
              </p>
              <p className="text-sm leading-relaxed">
                <strong>3. Propriedade Intelectual:</strong> Todas as receitas, textos e materiais são de propriedade exclusiva da Chef Elza Fonseca.
              </p>
              <p className="text-sm leading-relaxed">
                <strong>4. Responsabilidade:</strong> O uso das receitas é de sua inteira responsabilidade. Consulte sempre um profissional em caso de alergias alimentares.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (selectedSection === 'privacy') {
    return (
      <div className="space-y-4">
        <Button 
          onClick={handleBackToSettings}
          variant="outline"
          className="mb-4 border-rose-300 text-rose-600 hover:bg-rose-50"
        >
          ← Voltar
        </Button>
        <Card className="border-rose-100 shadow-sm">
          <CardHeader>
            <CardTitle className="text-rose-800 text-xl font-medium">
              Política de Privacidade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-rose-700">
              <p className="text-sm leading-relaxed">
                <strong>Confidencialidade do Conteúdo:</strong> Todo o conteúdo presente nesta área de membros é confidencial e exclusivo.
              </p>
              <p className="text-sm leading-relaxed">
                <strong>Proibição de Compartilhamento:</strong> É expressamente proibido compartilhar, copiar, distribuir ou divulgar qualquer material desta área com terceiros.
              </p>
              <p className="text-sm leading-relaxed">
                <strong>Uso Responsável:</strong> O acesso é pessoal e intransferível. Não compartilhe seus dados de login.
              </p>
              <p className="text-sm leading-relaxed">
                <strong>Proteção de Dados:</strong> Seus dados pessoais são protegidos e utilizados apenas para melhorar sua experiência na plataforma.
              </p>
              <div className="bg-rose-50 p-4 rounded-lg border border-rose-200 mt-4">
                <p className="text-rose-800 font-medium text-sm">
                  ⚠️ Lembre-se: O compartilhamento não autorizado do conteúdo pode resultar no cancelamento imediato do seu acesso.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (selectedSection === 'account') {
    return (
      <div className="space-y-4">
        <Button 
          onClick={handleBackToSettings}
          variant="outline"
          className="mb-4 border-rose-300 text-rose-600 hover:bg-rose-50"
        >
          ← Voltar
        </Button>
        <Card className="border-rose-100 shadow-sm">
          <CardHeader>
            <CardTitle className="text-rose-800 text-xl font-medium">
              Informações da Conta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="/lovable-uploads/2d8219a9-334d-42b6-836c-4769bab61030.png" 
                  alt="Chef Elza Fonseca"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-rose-50 p-4 rounded-lg">
              <h4 className="font-medium text-rose-800 mb-2">Dados da Conta</h4>
              <p className="text-sm text-rose-600 mb-1">
                <strong>Usuário:</strong> cliente158
              </p>
              <p className="text-sm text-rose-600">
                <strong>Membro desde:</strong> Janeiro 2024
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Card className="border-rose-100 shadow-sm">
        <CardHeader>
          <CardTitle className="text-rose-800 text-xl font-medium">
            Configurações da Conta
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-4">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
              <img 
                src="/lovable-uploads/2d8219a9-334d-42b6-836c-4769bab61030.png" 
                alt="Chef Elza Fonseca"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-3">
            {settingsOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSettingClick(option.action)}
                className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-rose-50 transition-colors border border-rose-100"
              >
                <option.icon size={20} className="text-rose-500" />
                <span className="text-rose-700 font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-rose-100 shadow-sm">
        <CardContent className="p-4">
          <Button 
            onClick={onLogout}
            variant="outline"
            className="w-full border-rose-300 text-rose-600 hover:bg-rose-50 rounded-full py-3"
          >
            <LogOut size={16} className="mr-2" />
            Sair da Conta
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsSection;
