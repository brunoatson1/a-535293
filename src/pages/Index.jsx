
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Shield, Monitor, Server, Network, Code, Cloud, Phone, Mail, MapPin, Star, CheckCircle, ArrowRight } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
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

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  useEffect(() => {
    const savedData = localStorage.getItem('ats-site-data');
    if (savedData) {
      setSiteData(JSON.parse(savedData));
    }

    const handleSiteDataUpdate = (event) => {
      setSiteData(event.detail);
    };

    window.addEventListener('siteDataUpdate', handleSiteDataUpdate);
    return () => window.removeEventListener('siteDataUpdate', handleSiteDataUpdate);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simular envio do formulário
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });
    
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const serviceIcons = [
    <Monitor className="h-8 w-8" />,
    <Code className="h-8 w-8" />,
    <Shield className="h-8 w-8" />,
    <Network className="h-8 w-8" />,
    <Server className="h-8 w-8" />,
    <Cloud className="h-8 w-8" />
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      <style>
        {`
          :root {
            --primary-color: ${siteData.theme.primaryColor};
            --secondary-color: ${siteData.theme.secondaryColor};
            --background-color: ${siteData.theme.backgroundColor};
            --text-color: ${siteData.theme.textColor};
          }
        `}
      </style>

      {/* Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-400">
              {siteData.company.name}
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-blue-400 transition-colors">Início</a>
              <a href="#servicos" className="text-gray-300 hover:text-blue-400 transition-colors">Serviços</a>
              <a href="#sobre" className="text-gray-300 hover:text-blue-400 transition-colors">Sobre</a>
              <a href="#contato" className="text-gray-300 hover:text-blue-400 transition-colors">Contato</a>
            </div>
            <Button 
              onClick={() => window.open(siteData.company.whatsappLink, '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Phone className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-block bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full mb-6 border border-blue-600/30">
              <Star className="h-4 w-4 inline mr-2" />
              Atendimento Exclusivo para Empresas
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              {siteData.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {siteData.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all hover:scale-105"
              >
                {siteData.hero.buttonText}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                onClick={() => window.open(siteData.company.whatsappLink, '_blank')}
                variant="outline" 
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 text-lg font-semibold transition-all hover:scale-105"
              >
                <Phone className="h-5 w-5 mr-2" />
                {siteData.company.whatsapp}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">Nossos Serviços</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluções completas em tecnologia para impulsionar o crescimento da sua empresa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.services.map((service, index) => (
              <Card key={index} className="bg-slate-800/80 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <CardHeader>
                  <div className="text-blue-400 mb-2">
                    {serviceIcons[index] || <Monitor className="h-8 w-8" />}
                  </div>
                  <CardTitle className="text-white text-lg">{service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    Soluções profissionais e personalizadas para sua empresa.
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">Sobre a ATS Conect</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {siteData.about}
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Equipe técnica qualificada</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Atendimento 24/7</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Soluções personalizadas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Suporte técnico especializado</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-slate-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                  <div className="text-gray-300">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                  <div className="text-gray-300">Clientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-gray-300">Suporte Técnico</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                  <div className="text-gray-300">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">Entre em Contato</h2>
            <p className="text-xl text-gray-300">
              Solicite um orçamento personalizado para sua empresa
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <div className="font-semibold text-white">Telefone</div>
                    <div className="text-gray-300">{siteData.company.whatsapp}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <div className="font-semibold text-white">E-mail</div>
                    <div className="text-gray-300">{siteData.company.email}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <div className="font-semibold text-white">Localização</div>
                    <div className="text-gray-300">{siteData.company.address}</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-slate-800/80 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-400">Solicite um Orçamento</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label className="text-gray-300">Nome</Label>
                    <Input
                      value={formData.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">E-mail</Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Telefone</Label>
                    <Input
                      value={formData.telefone}
                      onChange={(e) => handleInputChange('telefone', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Mensagem</Label>
                    <Textarea
                      value={formData.mensagem}
                      onChange={(e) => handleInputChange('mensagem', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white min-h-24"
                      placeholder="Descreva suas necessidades..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">{siteData.company.name}</h3>
              <p className="text-gray-300 mb-4">
                {siteData.footer}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Serviços</h4>
              <ul className="space-y-2">
                {siteData.services.slice(0, 4).map((service, index) => (
                  <li key={index} className="text-gray-300">{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-4 w-4 mr-2" />
                  {siteData.company.whatsapp}
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-4 w-4 mr-2" />
                  {siteData.company.email}
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-4 w-4 mr-2" />
                  {siteData.company.address}
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 {siteData.company.name}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="5569993624434" />
    </div>
  );
};

export default Index;
