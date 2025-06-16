
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import LazyImage from './LazyImage';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!acceptedTerms) {
      setError('Você deve aceitar os termos de privacidade e termos de uso para continuar.');
      return;
    }

    // Normalizar o nome de usuário removendo espaços e acentos
    const normalizedUsername = username.toLowerCase().replace(/\s+/g, '').replace(/[àáâãäåāăąçéêëíîïóôõöúûüñ]/g, (match) => {
      const map: { [key: string]: string } = {
        'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a', 'ā': 'a', 'ă': 'a', 'ą': 'a',
        'ç': 'c',
        'é': 'e', 'ê': 'e', 'ë': 'e',
        'í': 'i', 'î': 'i', 'ï': 'i',
        'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o',
        'ú': 'u', 'û': 'u', 'ü': 'u',
        'ñ': 'n'
      };
      return map[match] || match;
    });
    
    const validUsernames = ['usuario158'];
    const validPasswords = ['portal123', 'Portal123'];

    if (validUsernames.includes(normalizedUsername) && validPasswords.includes(password)) {
      onLogin();
    } else {
      setError('Login ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-green-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-rose-100 shadow-lg">
        <CardHeader className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-rose-100">
            <LazyImage 
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
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={acceptedTerms}
                onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="terms" className="text-sm text-rose-700 leading-tight">
                Aceito os termos de privacidade e termos de uso da área de membros
              </Label>
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
