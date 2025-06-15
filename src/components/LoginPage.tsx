
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (username === 'cliente158' && password === 'portal123') {
      onLogin();
    } else {
      setError('Login ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-green-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-rose-100 shadow-lg">
        <CardHeader className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
            <img 
              src="/lovable-uploads/2d8219a9-334d-42b6-836c-4769bab61030.png" 
              alt="Chef Elza Fonseca"
              className="w-full h-full object-cover"
            />
          </div>
          <CardTitle className="text-2xl text-rose-800 font-medium">
            Área de Membros
          </CardTitle>
          <p className="text-rose-600 text-sm">
            Chef Elza Fonseca - Receitas Saudáveis
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-rose-700">Usuário</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-rose-200 focus:border-rose-400"
                placeholder="Digite seu usuário"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-rose-700">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-rose-200 focus:border-rose-400"
                placeholder="Digite sua senha"
                required
              />
            </div>
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
            <Button 
              type="submit"
              className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full py-3"
            >
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
