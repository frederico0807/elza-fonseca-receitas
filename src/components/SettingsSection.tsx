
import React from 'react';
import { User, Lock, HelpCircle, FileText, Shield, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SettingsSection = () => {
  const handleSettingClick = (action: string) => {
    console.log(`Ação: ${action}`);
    // Aqui você implementaria as ações reais
  };

  const settingsOptions = [
    { icon: User, label: 'Informações da Conta', action: 'account' },
    { icon: Lock, label: 'Alterar Senha', action: 'password' },
    { icon: HelpCircle, label: 'Suporte', action: 'support' },
    { icon: FileText, label: 'Termos de Uso', action: 'terms' },
    { icon: Shield, label: 'Política de Privacidade', action: 'privacy' },
  ];

  return (
    <div className="space-y-4">
      <Card className="border-rose-100 shadow-sm">
        <CardHeader>
          <CardTitle className="text-rose-800 text-xl font-medium">
            Configurações da Conta
          </CardTitle>
        </CardHeader>
        <CardContent>
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
          <div className="bg-rose-50 p-4 rounded-lg mb-4">
            <h4 className="font-medium text-rose-800 mb-2">Informações da Conta</h4>
            <p className="text-sm text-rose-600 mb-1">
              <strong>Email:</strong> exemplo@email.com
            </p>
            <p className="text-sm text-rose-600">
              <strong>Membro desde:</strong> Janeiro 2024
            </p>
          </div>
          
          <Button 
            onClick={() => handleSettingClick('logout')}
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
