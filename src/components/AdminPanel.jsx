
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Image, Palette, Phone, Mail, MapPin, Save, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminPanel = ({ onLogout }) => {
  const { toast } = useToast();
  const [siteData, setSiteData] = useState({
    hero: {
      title: 'ATS Conect - Soluções em TI e Segurança Eletrônica',
      subtitle: 'Suporte técnico especializado, desenvolvimento de sistemas e segurança eletrônica para empresas em Porto Velho - RO',
      buttonText: 'Solicitar Orçamento'
    },
    company: {
      name: 'ATS Conect',
      whatsapp: '(69) 99362-4434',
      email: 'atendimento@atsconect.com.br',
      address: 'Porto Velho - Rondônia',
      whatsappLink: 'https://wa.me/5569993624434'
    },
    theme: {
      primaryColor: '#3b82f6',
      secondaryColor: '#1e40af',
      backgroundColor: '#0f172a',
      textColor: '#f8fafc'
    },
    services: [
      'Suporte e soluções em TI',
      'Desenvolvimento de sistemas personalizados',
      'Suporte a sistemas de segurança eletrônica (DVRs, câmeras IP)',
      'Redes TCP/IP e configuração de roteadores',
      'Desenvolvimento de programas e automações',
      'Suporte a hospedagem de sites e sistemas em nuvem'
    ],
    about: 'A ATS Conect é uma empresa especializada em soluções de TI e segurança eletrônica, oferecendo atendimento exclusivo para empresas em Porto Velho e região. Nossa equipe técnica qualificada está pronta para atender suas necessidades tecnológicas.',
    footer: 'ATS Conect - Soluções em TI e Segurança Eletrônica. Atendimento exclusivo para empresas.'
  });

  useEffect(() => {
    const savedData = localStorage.getItem('ats-site-data');
    if (savedData) {
      setSiteData(JSON.parse(savedData));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('ats-site-data', JSON.stringify(siteData));
    // Also trigger a custom event to update the main site
    window.dispatchEvent(new CustomEvent('siteDataUpdate', { detail: siteData }));
    toast({
      title: "Sucesso!",
      description: "Dados salvos com sucesso!",
    });
  };

  const updateField = (section, field, value) => {
    setSiteData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const updateService = (index, value) => {
    setSiteData(prev => ({
      ...prev,
      services: prev.services.map((service, i) => i === index ? value : service)
    }));
  };

  const addService = () => {
    setSiteData(prev => ({
      ...prev,
      services: [...prev.services, 'Novo serviço']
    }));
  };

  const removeService = (index) => {
    setSiteData(prev => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-400">Painel Administrativo - ATS Conect</h1>
          <div className="flex gap-4">
            <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
              <Save className="h-4 w-4 mr-2" />
              Salvar Alterações
            </Button>
            <Button onClick={onLogout} variant="outline" className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white">
              Sair
            </Button>
          </div>
        </div>

        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid grid-cols-5 w-full bg-slate-800">
            <TabsTrigger value="hero" className="data-[state=active]:bg-blue-600">Página Inicial</TabsTrigger>
            <TabsTrigger value="company" className="data-[state=active]:bg-blue-600">Empresa</TabsTrigger>
            <TabsTrigger value="services" className="data-[state=active]:bg-blue-600">Serviços</TabsTrigger>
            <TabsTrigger value="theme" className="data-[state=active]:bg-blue-600">Visual</TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-blue-600">Conteúdo</TabsTrigger>
          </TabsList>

          <TabsContent value="hero">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Configurações da Página Inicial
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-gray-300">Título Principal</Label>
                  <Input 
                    value={siteData.hero.title}
                    onChange={(e) => updateField('hero', 'title', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Subtítulo</Label>
                  <Textarea 
                    value={siteData.hero.subtitle}
                    onChange={(e) => updateField('hero', 'subtitle', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white min-h-20"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Texto do Botão Principal</Label>
                  <Input 
                    value={siteData.hero.buttonText}
                    onChange={(e) => updateField('hero', 'buttonText', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="company">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Dados da Empresa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-gray-300">Nome da Empresa</Label>
                  <Input 
                    value={siteData.company.name}
                    onChange={(e) => updateField('company', 'name', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">WhatsApp</Label>
                  <Input 
                    value={siteData.company.whatsapp}
                    onChange={(e) => updateField('company', 'whatsapp', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Link do WhatsApp</Label>
                  <Input 
                    value={siteData.company.whatsappLink}
                    onChange={(e) => updateField('company', 'whatsappLink', e.target.value)}
                    placeholder="https://wa.me/5569993624434"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">E-mail</Label>
                  <Input 
                    value={siteData.company.email}
                    onChange={(e) => updateField('company', 'email', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Endereço</Label>
                  <Input 
                    value={siteData.company.address}
                    onChange={(e) => updateField('company', 'address', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Gerenciar Serviços
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {siteData.services.map((service, index) => (
                  <div key={index} className="flex gap-2">
                    <Input 
                      value={service}
                      onChange={(e) => updateService(index, e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                    <Button 
                      onClick={() => removeService(index)}
                      variant="destructive"
                      size="sm"
                    >
                      Remover
                    </Button>
                  </div>
                ))}
                <Button onClick={addService} className="bg-blue-600 hover:bg-blue-700">
                  Adicionar Serviço
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="theme">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center">
                  <Palette className="h-5 w-5 mr-2" />
                  Configurações Visuais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-gray-300">Cor Primária</Label>
                  <Input 
                    type="color"
                    value={siteData.theme.primaryColor}
                    onChange={(e) => updateField('theme', 'primaryColor', e.target.value)}
                    className="bg-slate-700 border-slate-600 h-12"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Cor Secundária</Label>
                  <Input 
                    type="color"
                    value={siteData.theme.secondaryColor}
                    onChange={(e) => updateField('theme', 'secondaryColor', e.target.value)}
                    className="bg-slate-700 border-slate-600 h-12"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Cor de Fundo</Label>
                  <Input 
                    type="color"
                    value={siteData.theme.backgroundColor}
                    onChange={(e) => updateField('theme', 'backgroundColor', e.target.value)}
                    className="bg-slate-700 border-slate-600 h-12"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Cor do Texto</Label>
                  <Input 
                    type="color"
                    value={siteData.theme.textColor}
                    onChange={(e) => updateField('theme', 'textColor', e.target.value)}
                    className="bg-slate-700 border-slate-600 h-12"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Conteúdo do Site
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-gray-300">Sobre a Empresa</Label>
                  <Textarea 
                    value={siteData.about}
                    onChange={(e) => setSiteData(prev => ({ ...prev, about: e.target.value }))}
                    className="bg-slate-700 border-slate-600 text-white min-h-32"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Texto do Rodapé</Label>
                  <Textarea 
                    value={siteData.footer}
                    onChange={(e) => setSiteData(prev => ({ ...prev, footer: e.target.value }))}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
