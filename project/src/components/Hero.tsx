import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black w-full">
      {/* Logo central fixa */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto max-w-full select-none pointer-events-none"
        />
      </div>

      {/* Fundo cinematográfico */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.05),transparent_60%)]" />

      {/* Grade animada */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      {/* Elementos flutuantes */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" />
      <div className="absolute top-1/3 left-1/3 w-3 h-3 border border-red-500/30 rotate-45 animate-spin [animation-duration:10s]" />

      {/* Conteúdo principal */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-snug tracking-tight">
          <span className="text-white block">Transformamos</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600">
            perfis comuns
          </span>
          <span className="block text-white mt-1 sm:mt-1.5">em</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 animate-pulse mt-0.5">
            máquinas de vendas
          </span>
          <span className="text-red-500">.</span>
        </h1>

        {/* Subheadline */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 text-gray-300 text-base sm:text-lg md:text-xl">
          {["Redes Sociais", "Tráfego Pago", "Inteligência Artificial"].map(
            (item, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center">
                  <span className="relative">
                    {item}
                    <div className="absolute -bottom-1 left-0 right-0 h-px bg-red-500/50" />
                  </span>

                  {/* 🔴 bolinha — abaixo do texto no mobile, entre textos no desktop */}
                  {i < 2 && (
                    <>
                      <div className="block sm:hidden mt-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <div className="hidden sm:block w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    </>
                  )}
                </div>
              </React.Fragment>
            )
          )}
        </div>

        {/* Botão CTA */}
        <button
          onClick={() => {
            const phone = "5511991854075";
            const msg = encodeURIComponent(
              "Olá! Tenho interesse no serviço, pode me explicar melhor?"
            );
            window.open(
              `https://wa.me/${phone}?text=${msg}`,
              "_blank",
              "noopener,noreferrer"
            );
          }}
          className="group relative inline-flex items-center px-10 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl font-bold text-black bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50"
        >
          <span className="relative z-10">Quero crescer agora</span>
          <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>

        {/* Indicador de rolagem */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-red-500/50 rounded-full relative">
            <div className="w-1 h-3 bg-red-500 rounded-full mx-auto mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
