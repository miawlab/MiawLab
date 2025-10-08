import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-gray-900 py-16">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          
          {/* Logo & Brand Statement */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-black text-white mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
                  MIAW
                </span>
                <span className="text-white"> LAB</span>
              </h3>
              <div className="w-16 h-px bg-gradient-to-r from-red-500 to-yellow-400"></div>
            </div>
            
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
              Estratégia, Design e Tráfego para quem quer 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 font-medium">
                {" "}mais que curtidas
              </span>.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <a 
                href="https://www.instagram.com/lab.miaw/" 
  target="_blank"
  rel="noopener noreferrer"
              className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center group-hover:from-pink-600 group-hover:to-pink-700 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="font-medium">Instagram</span>
            </a>
            
            <a 
          href="https://www.behance.net/labmiaw#" 
  target="_blank"
  rel="noopener noreferrer"
              className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                <ExternalLink className="w-5 h-5" />
              </div>
              <span className="font-medium">Behance</span>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 Miaw Lab. Transformando marcas em máquinas de receita.
            </p>
            
            <div className="flex items-center space-x-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Política de Privacidade</a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Termos de Serviço</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}