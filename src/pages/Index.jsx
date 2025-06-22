
import React from 'react';
import { Search, Wrench, Star, TrendingUp, Phone, Mail, MapPin, Shield, Network, Monitor, Server, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5569993624434', '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    alert('Formulário enviado! Entraremos em contato em breve.');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-blue-900 py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold text-white">ATS Conect</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {['Início', 'Sobre', 'Serviços', 'Avaliações', 'Tecnologias', 'Blog', 'Contato'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-200 hover:text-blue-300 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="relative hidden lg:block">
            <Input 
              type="text" 
              placeholder="Buscar serviços de TI" 
              className="pl-10 pr-4 py-2 rounded-full bg-blue-800 text-white placeholder-gray-300 border-blue-700" 
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" size={18} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-gray-800">
        <div className="container mx-auto text-center px-4">
          <div className="bg-blue-600 text-white px-6 py-2 rounded-full inline-block mb-6 font-semibold">
            🏢 ATENDIMENTO EXCLUSIVO PARA EMPRESAS
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">
            Soluções Completas em TI e Segurança Eletrônica
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Suporte técnico especializado, desenvolvimento de sistemas e infraestrutura de TI para sua empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg"
            >
              💬 WhatsApp (69) 99362-4434
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg">
              📧 Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços em Destaque */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Nossos Serviços Especializados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Monitor className="text-blue-500 mb-6" size={56} />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Suporte Técnico em TI</h3>
              <p className="text-gray-600 mb-6">Manutenção preventiva e corretiva de computadores, redes e sistemas empresariais.</p>
              <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white w-full">
                Saiba Mais
              </Button>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="text-green-500 mb-6" size={56} />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Segurança Eletrônica</h3>
              <p className="text-gray-600 mb-6">Instalação e suporte para DVRs, câmeras IP e sistemas de monitoramento.</p>
              <Button variant="outline" className="text-green-500 border-green-500 hover:bg-green-500 hover:text-white w-full">
                Saiba Mais
              </Button>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Server className="text-purple-500 mb-6" size={56} />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Desenvolvimento de Sistemas</h3>
              <p className="text-gray-600 mb-6">Criação de sistemas personalizados e automações sob demanda para sua empresa.</p>
              <Button variant="outline" className="text-purple-500 border-purple-500 hover:bg-purple-500 hover:text-white w-full">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações de Clientes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">O Que Nossos Clientes Dizem</h2>
          <div className="flex space-x-8 overflow-x-auto pb-4">
            {[
              {
                nome: "João Silva - CEO TechCorp",
                avaliacao: "Excelente suporte técnico! A ATS Conect resolveu todos os problemas da nossa rede em tempo record.",
                estrelas: 5
              },
              {
                nome: "Maria Santos - Diretora Comercial",
                avaliacao: "Sistema de segurança instalado com perfeição. Equipe muito profissional e atendimento exemplar.",
                estrelas: 5
              },
              {
                nome: "Carlos Oliveira - Gerente de TI",
                avaliacao: "Desenvolvimento do nosso sistema ERP superou todas as expectativas. Recomendo fortemente!",
                estrelas: 5
              }
            ].map((cliente, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 min-w-[350px] shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(cliente.estrelas)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current mr-1" size={20} />
                  ))}
                  <span className="text-yellow-500 font-bold ml-2">{cliente.estrelas}.0/5</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"{cliente.avaliacao}"</p>
                <p className="font-semibold text-gray-800">- {cliente.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologias e Tendências */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Tecnologias que Utilizamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                titulo: "Redes TCP/IP",
                descricao: "Configuração e manutenção de redes corporativas, roteadores e switches.",
                icone: Network
              },
              {
                titulo: "Hospedagem de Sites",
                descricao: "Suporte completo para hospedagem e manutenção de sites e sistemas web.",
                icone: Server
              },
              {
                titulo: "Sistemas Mobile",
                descricao: "Desenvolvimento de aplicações móveis e integração com sistemas existentes.",
                icone: Smartphone
              }
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <tech.icone className="text-blue-500 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3 text-gray-800">{tech.titulo}</h3>
                <p className="text-gray-600 mb-4">{tech.descricao}</p>
                <Button variant="link" className="text-blue-500 hover:text-blue-700 p-0">
                  Saiba Mais →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">Entre em Contato</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Informações de Contato */}
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-6">ATS Conect</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="mr-4" size={24} />
                    <span className="text-lg">(69) 99362-4434</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-4" size={24} />
                    <span className="text-lg">atendimento@atsconect.com.br</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-4" size={24} />
                    <span className="text-lg">Porto Velho - Rondônia</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4">Horário de Atendimento</h4>
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                  <p className="text-blue-300 mt-2">Atendimento de emergência 24h</p>
                </div>
              </div>

              {/* Formulário */}
              <div className="bg-white rounded-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Nome Completo *</label>
                    <Input type="text" required className="w-full" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">E-mail *</label>
                    <Input type="email" required className="w-full" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Telefone *</label>
                    <Input type="tel" required className="w-full" placeholder="(69) 99999-9999" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Mensagem *</label>
                    <Textarea 
                      required 
                      className="w-full h-32" 
                      placeholder="Descreva sua necessidade ou problema técnico..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ATS Conect</h3>
              <p className="text-gray-400 mb-4">
                Sua empresa de confiança para soluções completas em TI e segurança eletrônica.
              </p>
              <p className="text-sm text-gray-500">
                Atendimento exclusivo para empresas
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Suporte Técnico</a></li>
                <li><a href="#" className="hover:text-blue-400">Segurança Eletrônica</a></li>
                <li><a href="#" className="hover:text-blue-400">Desenvolvimento</a></li>
                <li><a href="#" className="hover:text-blue-400">Redes e Infraestrutura</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-blue-400">Termos de Serviço</a></li>
                <li><a href="#" className="hover:text-blue-400">Suporte Técnico</a></li>
                <li><a href="#" className="hover:text-blue-400">Emergência 24h</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Receba dicas de TI e novidades</p>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="rounded-l-lg border-gray-600 bg-gray-800 text-white" 
                />
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-r-lg">
                  Inscrever
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ATS Conect. Todos os direitos reservados. | Porto Velho - RO</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button Fixo */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg animate-pulse"
          size="lg"
        >
          <Phone size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Index;
