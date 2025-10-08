import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Logo no canto superior esquerdo */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 animate-pulse">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-32 w-auto"
        />
      </div>

      {/* Cinematic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-transparent to-transparent"></div>
      
      {/* Animated Neon Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 left-1/3 w-3 h-3 border border-red-500/30 rotate-45 animate-spin [animation-duration:10s]"></div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
          <span className="text-white">Transformamos </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600">
            perfis comuns
          </span>
          <br />
          <span className="text-white">em </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 animate-pulse">
            máquinas de vendas
          </span>
          <span className="text-red-500">.</span>
        </h1>

        {/* Subheadline */}
        <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-12 text-gray-300 text-lg md:text-xl">
          <span className="relative">
            Redes Sociais
            <div className="absolute -bottom-1 left-0 right-0 h-px bg-red-500/50"></div>
          </span>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="relative">
            Tráfego Pago
            <div className="absolute -bottom-1 left-0 right-0 h-px bg-red-500/50"></div>
          </span>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="relative">
            Inteligência Artificial
            <div className="absolute -bottom-1 left-0 right-0 h-px bg-red-500/50"></div>
          </span>
        </div>

        {/* CTA Button */}
        <button onClick={() => {
    const phone = "5511991854075"; // ex.: 5511999999999 (DDI + DDD + número, só dígitos)
    const msg = encodeURIComponent("Olá! Tenho interesse no serviço, pode me explicar melhor?"); // personalize sua mensagem
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank", "noopener,noreferrer");
  }}
        className="group relative inline-flex items-center px-12 py-6 text-xl font-bold text-black bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
          <span className="relative z-10">Quero crescer agora</span>
          <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-red-500/50 rounded-full relative">
            <div className="w-1 h-3 bg-red-500 rounded-full mx-auto mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}