
import { Home, Info, Wrench, Star, TrendingUp, BookOpen, Mail, Settings } from "lucide-react";
import Index from "./pages/Index.jsx";
import Admin from "./pages/Admin.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Início",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Sobre",
    to: "/sobre",
    icon: <Info className="h-4 w-4" />,
    page: <div>Página Sobre a ATS Conect</div>,
  },
  {
    title: "Serviços",
    to: "/servicos",
    icon: <Wrench className="h-4 w-4" />,
    page: <div>Nossos Serviços de TI</div>,
  },
  {
    title: "Avaliações",
    to: "/avaliacoes",
    icon: <Star className="h-4 w-4" />,
    page: <div>Avaliações dos Clientes</div>,
  },
  {
    title: "Tecnologias",
    to: "/tecnologias",
    icon: <TrendingUp className="h-4 w-4" />,
    page: <div>Tecnologias e Tendências</div>,
  },
  {
    title: "Blog",
    to: "/blog",
    icon: <BookOpen className="h-4 w-4" />,
    page: <div>Blog ATS Conect</div>,
  },
  {
    title: "Contato",
    to: "/contato",
    icon: <Mail className="h-4 w-4" />,
    page: <div>Entre em Contato</div>,
  },
  {
    title: "Admin",
    to: "/admin",
    icon: <Settings className="h-4 w-4" />,
    page: <Admin />,
  },
];
