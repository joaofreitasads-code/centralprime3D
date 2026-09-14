import React, { useState, Suspense } from 'react';
import {
  SELECTED_MODELS,
  SELECTED_MODELS_ROW2,
  NICHES,
  PROOF_IMAGES,
  BONUSES,
  TESTIMONIALS,
  CHECKOUT_URLS,
} from './data/pageData';
import { Carousel } from './components/Carousel';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { FaqSection } from './components/FaqSection';
import { YouTubeFacade } from './components/YouTubeFacade';

// Lazy-load modal to avoid loading motion library on initial page render
const SpecialOfferModal = React.lazy(() =>
  import('./components/SpecialOfferModal').then((m) => ({ default: m.SpecialOfferModal }))
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToPremiumOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('oferta-3990');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
      <div className="relative z-10">
        {/* HERO SECTION */}
        <section id="hero" className="px-4 pt-16 pb-16 text-center scroll-mt-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wider"
            style={{
              backgroundColor: 'rgba(0, 102, 255, 0.12)',
              color: '#0066ff',
              border: '1.5px solid #0066ff',
              boxShadow: '0 0 15px rgba(0, 102, 255, 0.35)',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                style={{ backgroundColor: '#0066ff' }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: '#0066ff' }}
              />
            </span>
            PARA QUEM TEM IMPRESSORA 3D E QUER TRANSFORMAR ARQUIVOS EM PRODUTOS
          </div>

          <h1 className="mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight max-w-3xl mx-auto uppercase tracking-tight">
            VOCÊ NÃO COMPROU UMA IMPRESSORA 3D PARA DEIXÁ-LA PARADA.{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              DESCUBRA NOVAS IDEIAS DE PRODUTOS PARA IMPRIMIR E VENDER.
            </span>
          </h1>

          {/* Hero Video */}
          <div className="mt-10 mx-auto w-full max-w-[360px] relative">
            <div
              className="absolute -inset-10 blur-3xl opacity-50"
              style={{ background: 'radial-gradient(circle at 50% 50%, #0066ff, transparent 70%)' }}
            />
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                aspectRatio: '9 / 16',
                border: '2px solid #0066ff',
                boxShadow: '0 0 45px rgba(0, 102, 255, 0.5), 0 0 15px rgba(0, 102, 255, 0.3)',
              }}
            >
              <video
                src="https://www.centralprime3d.com.br/assets/0fa52fd653.mp4"
                poster="/assets/hero_poster.webp"
                title="Vídeo de apresentação da Central Prime 3D"
                controls
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              >
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>
          </div>

          <p className="mt-10 text-base md:text-lg max-w-2xl mx-auto text-white/75">
            Acesse uma biblioteca organizada com modelos selecionados e diferentes categorias para descobrir novas ideias, testar produtos e ampliar as possibilidades da sua impressão 3D.
          </p>

          <p
            className="mt-5 text-sm md:text-base font-black uppercase tracking-wide max-w-xl mx-auto"
            style={{ color: '#0066ff', textShadow: '0 0 10px rgba(0, 102, 255, 0.4)' }}
          >
            Menos tempo procurando STL. Mais tempo testando produtos.
          </p>

          <ul className="mt-10 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto text-sm">
            <li
              className="px-4 py-2 rounded-full"
              style={{
                border: '1.5px solid #0066ff',
                backgroundColor: 'rgba(0, 102, 255, 0.1)',
                boxShadow: '0 0 12px rgba(0, 102, 255, 0.25)',
              }}
            >
              ✓ Modelos selecionados
            </li>
            <li
              className="px-4 py-2 rounded-full"
              style={{
                border: '1.5px solid #0066ff',
                backgroundColor: 'rgba(0, 102, 255, 0.1)',
                boxShadow: '0 0 12px rgba(0, 102, 255, 0.25)',
              }}
            >
              ✓ Diversas categorias para explorar
            </li>
            <li
              className="px-4 py-2 rounded-full"
              style={{
                border: '1.5px solid #0066ff',
                backgroundColor: 'rgba(0, 102, 255, 0.1)',
                boxShadow: '0 0 12px rgba(0, 102, 255, 0.25)',
              }}
            >
              ✓ Biblioteca organizada
            </li>
            <li
              className="px-4 py-2 rounded-full"
              style={{
                border: '1.5px solid #0066ff',
                backgroundColor: 'rgba(0, 102, 255, 0.1)',
                boxShadow: '0 0 12px rgba(0, 102, 255, 0.25)',
              }}
            >
              ✓ Novas ideias de produtos
            </li>
            <li
              className="px-4 py-2 rounded-full"
              style={{
                border: '1.5px solid #0066ff',
                backgroundColor: 'rgba(0, 102, 255, 0.1)',
                boxShadow: '0 0 12px rgba(0, 102, 255, 0.25)',
              }}
            >
              ✓ Acesso rápido aos arquivos
            </li>
          </ul>

          <a
            href="#oferta-3990"
            onClick={scrollToPremiumOffer}
            className="inline-block mt-8 px-8 py-4 rounded-full font-black text-lg uppercase tracking-wider text-black shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            style={{
              backgroundImage: 'linear-gradient(135deg, #00ff66, #00e64d)',
              boxShadow: '0 0 35px rgba(0, 255, 102, 0.7), 0 10px 40px rgba(0, 255, 102, 0.4)',
              color: '#000000',
            }}
          >
            QUERO DESCOBRIR O QUE IMPRIMIR ↓
          </a>

          <p className="mt-4 text-xs tracking-widest text-white/50 font-bold">
            ACESSO DIGITAL • LIBERAÇÃO RÁPIDA • BIBLIOTECA ORGANIZADA
          </p>
        </section>

        {/* SECTION: PRODUTOS / MODELOS SELECIONADOS */}
        <section id="produtos" className="px-4 py-20 max-w-7xl mx-auto scroll-mt-16 perf-section">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center uppercase">
            COMECE COM{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              MODELOS SELECIONADOS
            </span>{' '}
            PARA QUEM QUER TESTAR NOVOS PRODUTOS
          </h2>

          <p className="mt-4 text-center text-white/70 max-w-2xl mx-auto">
            Em vez de baixar arquivos aleatórios, explore uma seleção de modelos para criar, testar e ampliar seu catálogo de impressão 3D.
          </p>

          <div className="mt-10 space-y-4">
            {/* Linha 1: Modelos Originais (sentido normal para a esquerda) */}
            <InfiniteMarquee items={SELECTED_MODELS} direction="left" speedSeconds={34} />
            {/* Linha 2: Novos Modelos Solicitados (sentido para a direita para dinamismo visual) */}
            <InfiniteMarquee items={SELECTED_MODELS_ROW2} direction="right" speedSeconds={34} />
          </div>

          <p className="mt-6 text-center text-white/70 max-w-2xl mx-auto text-sm md:text-base">
            Uma boa impressão começa antes do fatiador: começa escolhendo o produto certo para testar.
          </p>

          <div className="text-center">
            <a
              href="#oferta-3990"
              onClick={scrollToPremiumOffer}
              className="inline-block mt-10 px-7 py-3 rounded-full font-black text-sm uppercase tracking-wider text-black hover:scale-105 active:scale-95 transition-all duration-300"
              style={{
                backgroundImage: 'linear-gradient(135deg, #00ff66, #00e64d)',
                boxShadow: '0 0 25px rgba(0, 255, 102, 0.7), 0 8px 30px rgba(0, 255, 102, 0.4)',
                color: '#000000',
              }}
            >
              Ver modelos selecionados ↓
            </a>
          </div>
        </section>

        {/* SECTION: O PROBLEMA */}
        <section id="problema" className="px-4 py-20 max-w-4xl mx-auto text-center scroll-mt-16 perf-section">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase max-w-3xl mx-auto">
            O PROBLEMA NÃO É TER POUCOS ARQUIVOS. É{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              NÃO SABER QUAIS VALEM A PENA TESTAR.
            </span>
          </h2>

          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Quem trabalha com impressão 3D conhece esse cenário:
          </p>

          <ul className="mt-8 space-y-3 text-left max-w-xl mx-auto">
            <li className="flex items-center gap-3 text-white/80">
              <span style={{ color: '#0066ff', textShadow: '0 0 8px #0066ff' }} className="text-xl font-bold">✕</span>
              <span className="font-bold text-sm">CENTENAS DE STL SALVOS NO COMPUTADOR</span>
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <span style={{ color: '#0066ff', textShadow: '0 0 8px #0066ff' }} className="text-xl font-bold">✕</span>
              <span className="font-bold text-sm">HORAS PROCURANDO ARQUIVOS</span>
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <span style={{ color: '#0066ff', textShadow: '0 0 8px #0066ff' }} className="text-xl font-bold">✕</span>
              <span className="font-bold text-sm">MODELOS QUE NUNCA SAEM DA PASTA</span>
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <span style={{ color: '#0066ff', textShadow: '0 0 8px #0066ff' }} className="text-xl font-bold">✕</span>
              <span className="font-bold text-sm">FILAMENTO GASTO EM PRODUTOS ESCOLHIDOS SEM DIREÇÃO</span>
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <span style={{ color: '#0066ff', textShadow: '0 0 8px #0066ff' }} className="text-xl font-bold">✕</span>
              <span className="font-bold text-sm">DIFICULDADE PARA DECIDIR O PRÓXIMO ITEM DO CATÁLOGO</span>
            </li>
          </ul>

          <p className="mt-10 text-white/70 max-w-2xl mx-auto">
            Ter milhares de arquivos não significa ter milhares de produtos.
          </p>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            O que realmente importa é encontrar boas ideias, escolher uma categoria e colocar o produto no mercado para testar.
          </p>

          <p
            className="mt-10 mx-auto max-w-2xl p-6 rounded-2xl text-lg md:text-xl font-black uppercase"
            style={{
              border: '1.5px solid #0066ff',
              backgroundColor: 'rgba(0, 102, 255, 0.1)',
              boxShadow: '0 0 25px rgba(0, 102, 255, 0.3)',
            }}
          >
            Mais arquivos não resolvem o problema.{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Melhores ideias de produto, sim.
            </span>
          </p>

          <a
            href="#oferta-3990"
            onClick={scrollToPremiumOffer}
            className="inline-block mt-10 px-7 py-3 rounded-full font-black text-sm uppercase tracking-wider text-black hover:scale-105 active:scale-95 transition-all duration-300"
            style={{
              backgroundImage: 'linear-gradient(135deg, #00ff66, #00e64d)',
              boxShadow: '0 0 25px rgba(0, 255, 102, 0.7), 0 8px 30px rgba(0, 255, 102, 0.4)',
              color: '#000000',
            }}
          >
            Quero encontrar novas ideias ↓
          </a>
        </section>

        {/* SECTION: CATEGORIAS / NICHOS */}
        <section id="categorias" className="px-4 py-20 max-w-7xl mx-auto scroll-mt-16 perf-section">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center uppercase">
            EXPLORE DIFERENTES NICHOS{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              SEM COMEÇAR SUA PESQUISA DO ZERO
            </span>
          </h2>

          <p className="mt-4 text-center text-white/70 max-w-2xl mx-auto">
            Navegue por categorias variadas e descubra rapidamente novos tipos de produtos para colocar na sua fila de testes.
          </p>

          <div className="mt-10">
            <Carousel items={NICHES} />
          </div>

          <div className="text-center">
            <a
              href="#oferta-3990"
              onClick={scrollToPremiumOffer}
              className="inline-block mt-10 px-7 py-3 rounded-full font-black text-sm uppercase tracking-wider text-black hover:scale-105 active:scale-95 transition-all duration-300"
              style={{
                backgroundImage: 'linear-gradient(135deg, #00ff66, #00e64d)',
                boxShadow: '0 0 25px rgba(0, 255, 102, 0.7), 0 8px 30px rgba(0, 255, 102, 0.4)',
                color: '#000000',
              }}
            >
              Quero explorar as categorias ↓
            </a>
          </div>
        </section>

        {/* SECTION: PROVAS / MARKET REFERENCIA */}
        <section id="provas" className="px-4 py-20 max-w-6xl mx-auto text-center scroll-mt-16 perf-section">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase max-w-3xl mx-auto">
            ANTES DE IMPRIMIR, VEJA O QUE{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              JÁ ESTÁ SENDO OFERTADO NO MERCADO
            </span>
          </h2>

          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Use referências de marketplaces para observar categorias, produtos e apresentações que já existem no mercado e encontrar novas ideias para seus próprios testes.
          </p>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto text-sm">
            Você não precisa começar toda pesquisa com uma tela em branco.
          </p>

          <div className="mt-10 flex flex-col gap-4 max-w-2xl mx-auto">
            {PROOF_IMAGES.map((imgSrc, idx) => (
              <img
                key={idx}
                src={imgSrc}
                alt={`Prova de venda ${idx + 1}`}
                loading="lazy"
                decoding="async"
                width="1163"
                height="667"
                referrerPolicy="no-referrer"
                className="w-full rounded-xl shadow-xl transition-transform hover:scale-[1.01]"
                style={{
                  border: '1.5px solid #0066ff',
                  boxShadow: '0 0 20px rgba(0, 102, 255, 0.25)',
                }}
              />
            ))}
          </div>

          <p
            className="mt-8 text-lg font-black uppercase tracking-wide"
            style={{ color: '#0066ff', textShadow: '0 0 10px rgba(0, 102, 255, 0.4)' }}
          >
            Observe. Escolha. Produza. Teste.
          </p>
          <p className="mt-6 text-xs text-white/50">
            * OS RESULTADOS DEPENDEM DA EXECUÇÃO, DIVULGAÇÃO, PREÇO E DEMANDA DO MERCADO.
          </p>

          <a
            href="#oferta-3990"
            onClick={scrollToPremiumOffer}
            className="inline-block mt-10 px-7 py-3 rounded-full font-black text-sm uppercase tracking-wider text-black hover:scale-105 active:scale-95 transition-all duration-300"
            style={{
              backgroundImage: 'linear-gradient(135deg, #00ff66, #00e64d)',
              boxShadow: '0 0 25px rgba(0, 255, 102, 0.7), 0 8px 30px rgba(0, 255, 102, 0.4)',
              color: '#000000',
            }}
          >
            Quero acessar as referências ↓
          </a>
        </section>

        {/* SECTION: BONUS */}
        <section id="bonus" className="px-4 py-20 max-w-6xl mx-auto scroll-mt-16 perf-section">
          {/* Badge highlighting inclusion in Premium */}
          <div className="flex justify-center mb-4">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase"
              style={{
                backgroundColor: 'rgba(0, 102, 255, 0.15)',
                color: '#00d4ff',
                border: '1.5px solid #0066ff',
                boxShadow: '0 0 15px rgba(0, 102, 255, 0.35)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
              BÔNUS INCLUSOS NO ACESSO PREMIUM
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center uppercase max-w-4xl mx-auto">
            UMA ÚNICA IDEIA PODE VIRAR SEU PRÓXIMO PRODUTO.{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              TODOS ESTES BÔNUS ESTÃO LIBERADOS NO ACESSO PREMIUM.
            </span>
          </h2>

          <p className="mt-4 text-center text-white/80 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Ao garantir o seu <strong className="text-white font-bold underline decoration-[#0066ff]">Acesso Premium</strong>, você não leva apenas os modelos minerados — você recebe de presente <strong className="text-[#00d4ff] font-bold">todos os 14 bônus exclusivos abaixo</strong>, 100% liberados imediatamente na sua área de membros para começar a lucrar com diferentes nichos.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {BONUSES.map((bonus) => (
              <div
                key={bonus.id}
                className="rounded-2xl overflow-hidden p-4 flex gap-4 items-center transition-all duration-300 hover:scale-[1.02]"
                style={{
                  border: '1.5px solid #0066ff',
                  boxShadow: '0 0 15px rgba(0, 102, 255, 0.2)',
                  backgroundColor: '#1a1c1f',
                }}
              >
                <img
                  src={bonus.img}
                  alt={bonus.title}
                  loading="lazy"
                  decoding="async"
                  width="112"
                  height="112"
                  referrerPolicy="no-referrer"
                  className={`w-28 h-28 ${bonus.imgClass || 'object-cover object-center'} rounded-xl flex-shrink-0 bg-neutral-900 border border-[#0066ff55]`}
                />
                <div>
                  <div className="text-xs font-bold" style={{ color: '#0066ff', textShadow: '0 0 6px rgba(0, 102, 255, 0.5)' }}>
                    BÔNUS {bonus.id}
                  </div>
                  <h3 className="mt-1 font-black uppercase text-sm">{bonus.title}</h3>
                  <p className="mt-2 text-xs text-white/70">{bonus.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#oferta-3990"
              onClick={scrollToPremiumOffer}
              className="inline-block mt-10 px-7 py-3 rounded-full font-black text-sm uppercase tracking-wider text-black hover:scale-105 active:scale-95 transition-all duration-300"
              style={{
                backgroundImage: 'linear-gradient(135deg, #00ff66, #00e64d)',
                boxShadow: '0 0 25px rgba(0, 255, 102, 0.7), 0 8px 30px rgba(0, 255, 102, 0.4)',
                color: '#000000',
              }}
            >
              Quero o Acesso Premium com Todos os Bônus ↓
            </a>
          </div>
        </section>

        {/* SECTION: AREA DE MEMBROS VIP */}
        <section id="area" className="px-4 py-20 max-w-5xl mx-auto text-center scroll-mt-16 perf-section">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wider"
            style={{
              backgroundColor: 'rgba(0, 102, 255, 0.12)',
              color: '#0066ff',
              border: '1.5px solid #0066ff',
              boxShadow: '0 0 15px rgba(0, 102, 255, 0.35)',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                style={{ backgroundColor: '#0066ff' }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: '#0066ff' }}
              />
            </span>
            💻 ÁREA DE MEMBROS VIP POR DENTRO
          </div>

          <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-black uppercase max-w-3xl mx-auto">
            ENTRE, ESCOLHA UMA CATEGORIA E{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              ENCONTRE SUA PRÓXIMA IDEIA EM POUCOS MINUTOS
            </span>
          </h2>

          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Nada de arquivos espalhados e pastas confusas. A Central Prime foi organizada para facilitar sua busca e acelerar seus testes.
          </p>

          {/* YouTube Video Tour via Ultra-Fast Facade */}
          <YouTubeFacade
            videoId="yteFUptSQF0"
            title="Área de Membros VIP — Central Prime 3D"
          />

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            <div
              className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                border: '1.5px solid #0066ff',
                boxShadow: '0 0 15px rgba(0, 102, 255, 0.2)',
                backgroundColor: '#1a1c1f',
              }}
            >
              <h4 className="font-black text-sm text-white">📁 ORGANIZAÇÃO POR CATEGORIA</h4>
              <p className="mt-2 text-sm text-white/70">
                Encontre rapidamente o tipo de produto que deseja explorar.
              </p>
            </div>
            <div
              className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                border: '1.5px solid #0066ff',
                boxShadow: '0 0 15px rgba(0, 102, 255, 0.2)',
                backgroundColor: '#1a1c1f',
              }}
            >
              <h4 className="font-black text-sm text-white">⚡ ACESSO AOS ARQUIVOS</h4>
              <p className="mt-2 text-sm text-white/70">
                Localize os modelos sem depender de pesquisas intermináveis em diferentes sites.
              </p>
            </div>
            <div
              className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                border: '1.5px solid #0066ff',
                boxShadow: '0 0 15px rgba(0, 102, 255, 0.2)',
                backgroundColor: '#1a1c1f',
              }}
            >
              <h4 className="font-black text-sm text-white">🛡 MODELOS SELECIONADOS</h4>
              <p className="mt-2 text-sm text-white/70">
                Tenha novas opções para explorar sem começar cada pesquisa do zero.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#oferta-3990"
              onClick={scrollToPremiumOffer}
              className="inline-block mt-10 px-7 py-3 rounded-full font-black text-sm uppercase tracking-wider text-black hover:scale-105 active:scale-95 transition-all duration-300"
              style={{
                backgroundImage: 'linear-gradient(135deg, #00ff66, #00e64d)',
                boxShadow: '0 0 25px rgba(0, 255, 102, 0.7), 0 8px 30px rgba(0, 255, 102, 0.4)',
                color: '#000000',
              }}
            >
              Quero conhecer a Central Prime ↓
            </a>
          </div>
        </section>

        {/* SECTION: DEPOIMENTOS */}
        <section id="depoimentos" className="px-4 py-20 max-w-6xl mx-auto text-center scroll-mt-16 perf-section">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase max-w-3xl mx-auto">
            VEJA O QUE ACONTECE QUANDO VOCÊ{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              PARA DE PROCURAR E COMEÇA A TESTAR
            </span>
          </h2>

          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Confira algumas mensagens de pessoas que entraram na Central Prime e começaram a explorar novos modelos e possibilidades de produto.
          </p>

          <div className="mt-10">
            <TestimonialsCarousel images={TESTIMONIALS} />
          </div>

          <a
            href="#oferta-3990"
            onClick={scrollToPremiumOffer}
            className="inline-block mt-10 px-7 py-3 rounded-full font-black text-sm uppercase tracking-wider text-black hover:scale-105 active:scale-95 transition-all duration-300"
            style={{
              backgroundImage: 'linear-gradient(135deg, #00ff66, #00e64d)',
              boxShadow: '0 0 25px rgba(0, 255, 102, 0.7), 0 8px 30px rgba(0, 255, 102, 0.4)',
              color: '#000000',
            }}
          >
            Continuar ↓
          </a>
        </section>

        {/* SECTION: OBJECÃO */}
        <section id="objecao" className="px-4 py-20 max-w-3xl mx-auto text-center scroll-mt-16 perf-section">
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            “MAS EU NÃO SEI{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              QUAL PRODUTO ESCOLHER…
            </span>”
          </h2>

          <p className="mt-6 text-white/70">
            E esse é justamente um dos motivos para ter uma biblioteca organizada.
          </p>
          <p className="mt-4 text-white/70">
            Você não precisa acertar “o produto perfeito” de primeira. Você pode:
          </p>

          <ul className="mt-8 space-y-3 text-left max-w-xl mx-auto">
            <li className="flex items-start gap-3 text-white/80">
              <span style={{ color: '#0066ff', textShadow: '0 0 8px #0066ff' }} className="font-black">✓</span>
              <span className="text-sm font-bold">explorar diferentes categorias</span>
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <span style={{ color: '#0066ff', textShadow: '0 0 8px #0066ff' }} className="font-black">✓</span>
              <span className="text-sm font-bold">escolher modelos que façam sentido para sua estrutura</span>
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <span style={{ color: '#0066ff', textShadow: '0 0 8px #0066ff' }} className="font-black">✓</span>
              <span className="text-sm font-bold">produzir pequenas quantidades</span>
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <span style={{ color: '#0066ff', textShadow: '0 0 8px #0066ff' }} className="font-black">✓</span>
              <span className="text-sm font-bold">testar novas ideias</span>
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <span style={{ color: '#0066ff', textShadow: '0 0 8px #0066ff' }} className="font-black">✓</span>
              <span className="text-sm font-bold">observar a resposta do mercado</span>
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <span style={{ color: '#0066ff', textShadow: '0 0 8px #0066ff' }} className="font-black">✓</span>
              <span className="text-sm font-bold">repetir o que fizer sentido para sua operação</span>
            </li>
          </ul>

          <p
            className="mt-10 mx-auto max-w-2xl p-6 rounded-2xl text-lg md:text-xl font-black uppercase"
            style={{
              border: '1.5px solid #0066ff',
              backgroundColor: 'rgba(0, 102, 255, 0.1)',
              boxShadow: '0 0 25px rgba(0, 102, 255, 0.3)',
            }}
          >
            O objetivo não é adivinhar.{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              É ter opções para testar.
            </span>
          </p>

          <a
            href="#oferta-3990"
            onClick={scrollToPremiumOffer}
            className="inline-block mt-10 px-7 py-3 rounded-full font-black text-sm uppercase tracking-wider text-black hover:scale-105 active:scale-95 transition-all duration-300"
            style={{
              backgroundImage: 'linear-gradient(135deg, #00ff66, #00e64d)',
              boxShadow: '0 0 25px rgba(0, 255, 102, 0.7), 0 8px 30px rgba(0, 255, 102, 0.4)',
              color: '#000000',
            }}
          >
            Continuar ↓
          </a>
        </section>

        {/* SECTION: OFERTA */}
        <section id="oferta" className="px-4 py-20 max-w-5xl mx-auto scroll-mt-16 perf-section">
          <h2 className="text-3xl md:text-5xl font-black text-center uppercase">
            ESCOLHA SEU{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              ACESSO
            </span>
          </h2>

          <p className="mt-4 text-center text-white/70">
            Inicie sua operação de produtos 3D agora mesmo.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6 items-start">
            {/* PLANO BASICO */}
            <div
              id="plano-basico"
              className="p-8 rounded-2xl relative scroll-mt-20 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]"
              style={{
                border: '1.5px solid #0066ff',
                boxShadow: '0 0 20px rgba(0, 102, 255, 0.25)',
                backgroundColor: '#1a1c1f',
              }}
            >
              <div>
                <h3 className="font-black text-xl uppercase">CENTRAL 3D BÁSICO</h3>
                <div className="mt-4 text-3xl font-black">R$ 10,90</div>
                <ul className="mt-6 space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Pack com +150.000 arquivos STL
                  </li>
                  <li className="flex items-center gap-2 text-white/60">
                    <span style={{ color: '#0066ff' }} className="font-bold">✕</span> Sem os demais Bônus
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Acesso vitalício
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="mt-8 w-full py-3 rounded-full font-bold border border-white/20 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/40 active:scale-95 transition cursor-pointer"
              >
                Começar pelo básico
              </button>
            </div>

            {/* PLANO COMPLETO PREMIUM */}
            <div
              id="oferta-3990"
              className="p-8 rounded-2xl relative scroll-mt-24 transition-all duration-300 hover:scale-[1.01]"
              style={{
                border: '2.5px solid #0066ff',
                backgroundColor: '#1a1c1f',
                boxShadow: '0 0 45px rgba(0, 102, 255, 0.55), 0 0 15px rgba(0, 102, 255, 0.3)',
              }}
            >
              <div
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-black text-white"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                  boxShadow: '0 0 15px rgba(0, 102, 255, 0.6)',
                }}
              >
                🏆 PLANO COMPLETO • MAIS ESCOLHIDO
              </div>

              <h3 className="text-center font-black text-xl uppercase mt-2">
                <span
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  CENTRAL PRIME 3D™ PREMIUM
                </span>
              </h3>

              <p className="mt-2 text-center text-xs font-black uppercase tracking-wider text-white/80">
                Todos os modelos + todos os bônus
              </p>

              <img
                src="/assets/premium_plan.webp"
                alt="Central Prime 3D™ Premium"
                loading="lazy"
                decoding="async"
                width="208"
                height="208"
                referrerPolicy="no-referrer"
                className="mt-4 w-52 max-w-full mx-auto drop-shadow-2xl object-contain"
              />

              <div className="mt-4 text-center">
                <div className="text-sm line-through text-white/50">DE R$ 197,00</div>
                <div className="text-xs text-white/50 uppercase">EM ATÉ 4X NO CARTÃO</div>
                <div className="mt-2 text-4xl font-black">
                  <span
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    R$ 39,90
                  </span>
                </div>
                <div className="text-xs text-white/70">OU 4X DE R$ 9,97 SEM JUROS</div>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> +150.000 models 3D organizados
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> Categorias para Shopee e Mercado Livre
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> Bônus 1: Pack de Veículos 3D Profissionais
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> Bônus 2: Coleção Heróis da Marvel
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> Bônus 3: Pack de Chaveiros Personalizados
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> Bônus 4: Modelos Flexíveis e Articulados
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> Bônus 5: Coleção Clássicos dos Desenhos
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> Bônus 6: Coleção Máscaras 3D
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> Bônus 7: Coleção Pokémon 3D
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> Bônus 8: Coleção 3D de Natal
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> Bônus 9: Coleção Copa do Mundo
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> Bônus 10: Mascote Esportivo Exclusivos
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> Bônus 11: +250 Luminárias STL
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> Bônus 12: Bichinhos Amigurumi 3D
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> Bônus 13: Coleção Lego 3D
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> Bônus 14: Universo Minecraft 3D
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> Download imediato
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> Garantia de 14 dias
                </li>
              </ul>

              <a
                href={CHECKOUT_URLS.premium}
                target="_blank"
                rel="noreferrer"
                className="mt-8 block text-center w-full py-4 rounded-full font-black uppercase text-black hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #00ff66, #00e64d)',
                  boxShadow: '0 0 35px rgba(0, 255, 102, 0.7), 0 10px 30px rgba(0, 255, 102, 0.4)',
                  color: '#000000',
                }}
              >
                Quero o plano completo
              </a>
            </div>
          </div>
        </section>

        {/* SECTION: GARANTIA DE 14 DIAS */}
        <section id="garantia" className="px-4 py-16 sm:py-20 max-w-4xl mx-auto scroll-mt-16 perf-section">
          <div
            className="p-6 sm:p-10 md:p-12 rounded-3xl relative overflow-hidden"
            style={{
              border: '1.5px solid #0066ff',
              boxShadow: '0 0 35px rgba(0, 102, 255, 0.25)',
              backgroundColor: '#1a1c1f',
            }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10">
              {/* Imagem do Selo de 14 Dias */}
              <div className="flex-shrink-0 relative flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-40"
                  style={{ backgroundColor: '#0066ff' }}
                />
                <img
                  src="/assets/garantia-14-dias.webp"
                  alt="Garantia Incondicional de 14 Dias"
                  loading="lazy"
                  decoding="async"
                  width="280"
                  height="280"
                  referrerPolicy="no-referrer"
                  className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain drop-shadow-[0_0_25px_rgba(0,102,255,0.4)]"
                />
              </div>

              {/* Textos da Garantia */}
              <div className="text-center md:text-left flex-1">
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase mb-4"
                  style={{
                    backgroundColor: 'rgba(0, 102, 255, 0.15)',
                    color: '#00d4ff',
                    border: '1px solid #0066ff80',
                  }}
                >
                  🛡️ RISCO ZERO PARA VOCÊ
                </div>

                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
                  GARANTIA INCONDICIONAL DE{' '}
                  <span
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    14 DIAS
                  </span>
                </h2>

                <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
                  Você tem <strong>14 dias completos</strong> para acessar a Central Prime 3D™, explorar todas as categorias, baixar os arquivos STL e testar os modelos na sua impressora.
                </p>

                <p className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed">
                  Se por qualquer motivo você achar que o conteúdo não é para você, basta solicitar o reembolso na plataforma que devolvemos <strong>100% do seu investimento</strong>, sem complicações e sem burocracia.
                </p>

                <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-xs text-white/70 font-bold uppercase tracking-wide">
                  <span className="flex items-center gap-1.5 text-[#00ff66]">
                    ✓ Teste sem riscos
                  </span>
                  <span className="flex items-center gap-1.5 text-[#00ff66]">
                    ✓ Reembolso simplificado
                  </span>
                  <span className="flex items-center gap-1.5 text-[#00ff66]">
                    ✓ Suporte dedicado
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: DUVIDAS FREQUENTES */}
        <FaqSection />

        {/* SECTION: FINAL CALL TO ACTION */}
        <section className="px-4 py-20 text-center max-w-3xl mx-auto perf-section">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase">
            PARE DE DEIXAR SUA{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              IMPRESSORA PARADA
            </span>
          </h2>

          <p className="mt-6 text-white/70">
            Acesse a biblioteca minerada da Central Prime 3D™, organize seus produtos e comece a testar vendas na Shopee, Mercado Livre e outros marketplaces.
          </p>

          <a
            href={CHECKOUT_URLS.premium}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 px-8 py-4 rounded-full font-black text-lg uppercase tracking-wider text-black shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            style={{
              backgroundImage: 'linear-gradient(135deg, #00ff66, #00e64d)',
              boxShadow: '0 0 45px rgba(0, 255, 102, 0.75), 0 15px 40px rgba(0, 255, 102, 0.4)',
              color: '#000000',
            }}
          >
            QUERO ACESSAR A CENTRAL AGORA
          </a>

          <p
            className="mt-6 text-xs tracking-widest font-bold"
            style={{ color: '#0066ff', textShadow: '0 0 10px rgba(0, 102, 255, 0.4)' }}
          >
            GARANTIA INCONDICIONAL DE 14 DIAS
          </p>
        </section>

        {/* FOOTER */}
        <footer
          className="px-4 py-10 text-center text-xs text-white/40 border-t"
          style={{ borderColor: '#ffffff10' }}
        >
          © Central Prime 3D™ — Todos os direitos reservados.
        </footer>
      </div>

      {/* SPECIAL OFFER MODAL (LOADED ONLY WHEN REQUESTED) */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <SpecialOfferModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}
