export interface CarouselItem {
  name: string;
  img: string;
  tag: string;
}

export interface BonusItem {
  id: number;
  title: string;
  desc: string;
  img: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const CHECKOUT_URLS = {
  premium: 'https://ggcheckout.app/checkout/v5/Q4PuXagc2Sa6mcW0oU6s',
  specialOfferDiscount: 'https://ggcheckout.app/checkout/v5/NHwwRpc2xAVgvxbTHHx0',
  basicCheckout: 'https://ggcheckout.app/checkout/v5/ba7GVVFQIeNjbupd7nGg',
};

export const SELECTED_MODELS: CarouselItem[] = [
  { name: 'GOTENKS KID', img: 'https://www.centralprime3d.com.br/assets/1170a3d564.jpg', tag: '📈 MARKETPLACE' },
  { name: 'MOON KNIGHT', img: 'https://www.centralprime3d.com.br/assets/59dec85084.jpg', tag: '📈 MARKETPLACE' },
  { name: 'FLASH KNUCKLES', img: 'https://www.centralprime3d.com.br/assets/643d21b179.jpg', tag: '📈 MARKETPLACE' },
  { name: 'SPAWN', img: 'https://www.centralprime3d.com.br/assets/0055acc2cb.jpeg', tag: '📈 MARKETPLACE' },
  { name: 'SHADOW', img: 'https://www.centralprime3d.com.br/assets/f9d14c4b88.jpeg', tag: '📈 MARKETPLACE' },
  { name: 'VEGETA KID', img: 'https://www.centralprime3d.com.br/assets/ccbf223935.jpg', tag: '📈 MARKETPLACE' },
  { name: 'MARIO CAPTAIN AMERICA', img: 'https://www.centralprime3d.com.br/assets/58b98be941.jpg', tag: '📈 MARKETPLACE' },
  { name: 'SUPER SONIC GOKU', img: 'https://www.centralprime3d.com.br/assets/3fdb0103f9.jpeg', tag: '📈 MARKETPLACE' },
  { name: 'SUB-ZERO', img: 'https://www.centralprime3d.com.br/assets/c019863304.jpeg', tag: '📈 MARKETPLACE' },
];

export const SELECTED_MODELS_ROW2: CarouselItem[] = [
  { name: 'LEGO BATMAN (DARK KNIGHT)', img: '/assets/lego/model_1.png', tag: '📈 MAIS VENDIDO' },
  { name: 'LEGO SUPERMAN', img: '/assets/lego/model_2.png', tag: '🔥 POPULAR' },
  { name: 'LEGO HOMEM-ARANHA', img: '/assets/lego/model_3.png', tag: '📈 TREND GEEK' },
  { name: 'LEGO HOMEM DE FERRO', img: '/assets/lego/model_4.png', tag: '⭐ COLEÇÃO' },
  { name: 'LEGO DARTH VADER', img: '/assets/lego/model_5.png', tag: '⚔️ STAR WARS' },
  { name: 'LEGO VENOM', img: '/assets/lego/model_6.png', tag: '🔥 VILÃO' },
  { name: 'LEGO O MÁSCARA', img: '/assets/lego/model_7.png', tag: '🎭 CLÁSSICO' },
  { name: 'LEGO ROBIN', img: '/assets/lego/model_8.png', tag: '🎮 GEEK' },
  { name: 'LEGO BATMAN CLÁSSICO', img: '/assets/lego/model_9.png', tag: '🦇 DC COMICS' },
];

export const NICHES: CarouselItem[] = [
  { name: 'LUMINÁRIAS DECORATIVAS', img: 'https://i.imgur.com/vhsRFIE.png', tag: '📈 MARKETPLACE' },
  { name: 'VEÍCULOS 3D', img: 'https://www.centralprime3d.com.br/assets/3300c277a4.webp', tag: '📈 MARKETPLACE' },
  { name: 'HERÓIS MARVEL', img: 'https://www.centralprime3d.com.br/assets/e554539b11.webp', tag: '📈 MARKETPLACE' },
  { name: 'CHAVEIROS', img: 'https://www.centralprime3d.com.br/assets/7c0783be64.webp', tag: '📈 MARKETPLACE' },
  { name: 'ARTICULADOS', img: 'https://www.centralprime3d.com.br/assets/b56b911c23.webp', tag: '📈 MARKETPLACE' },
  { name: 'POKÉMON 3D', img: 'https://www.centralprime3d.com.br/assets/1570cf0819.webp', tag: '📈 MARKETPLACE' },
  { name: 'COSPLAY / MÁSCARAS', img: 'https://www.centralprime3d.com.br/assets/f633f9062a.webp', tag: '📈 MARKETPLACE' },
  { name: 'COPA DO MUNDO', img: 'https://www.centralprime3d.com.br/assets/61a1005ddf.webp', tag: '📈 MARKETPLACE' },
  { name: 'MASCOTES ESPORTIVOS', img: 'https://www.centralprime3d.com.br/assets/2a233e178c.webp', tag: '📈 MARKETPLACE' },
  { name: 'CLÁSSICOS DOS DESENHOS', img: 'https://www.centralprime3d.com.br/assets/52c6746499.webp', tag: '📈 MARKETPLACE' },
  { name: 'AMIGURUMI 3D', img: 'https://www.centralprime3d.com.br/assets/52e08d9409.png', tag: '📈 MARKETPLACE' },
];

export const PROOF_IMAGES = [
  'https://www.centralprime3d.com.br/assets/711eb8abb8.png',
  'https://www.centralprime3d.com.br/assets/622a2c354f.png',
  'https://www.centralprime3d.com.br/assets/61fefee870.png',
  'https://www.centralprime3d.com.br/assets/fb071853b5.png',
];

export const BONUSES: BonusItem[] = [
  {
    id: 1,
    title: 'PACK DE VEÍCULOS 3D PROFISSIONAIS',
    desc: 'Miniaturas de carros (do Fusca ao Mustang, +172 veículos). Interessante para quem quer testar colecionáveis com público adulto e fãs de automobilismo.',
    img: 'https://www.centralprime3d.com.br/assets/3300c277a4.webp',
  },
  {
    id: 2,
    title: 'COLEÇÃO HERÓIS DA MARVEL',
    desc: 'Action figures de heróis, filmes e desenhos (+150 itens). Categoria com forte apelo visual para o público geek e diferentes possibilidades de produto.',
    img: 'https://www.centralprime3d.com.br/assets/e554539b11.webp',
  },
  {
    id: 3,
    title: 'PACK DE CHAVEIROS RÁPIDOS',
    desc: '+500 chaveiros de times, geek, animais e heróis. Peças pequenas e rápidas de imprimir — uma opção para testar itens de baixo custo por unidade.',
    img: 'https://www.centralprime3d.com.br/assets/7c0783be64.webp',
  },
  {
    id: 4,
    title: 'MODELOS FLEXÍVEIS E ARTICULADOS',
    desc: '+1.300 modelos articulados de heróis, personagens e animais. Categoria com efeito visual imediato, útil para testes presenciais e online.',
    img: 'https://www.centralprime3d.com.br/assets/b56b911c23.webp',
  },
  {
    id: 5,
    title: 'COLEÇÃO CLÁSSICOS DOS DESENHOS',
    desc: 'Seleção nostálgica de personagens clássicos. Uma opção para ampliar seu catálogo e testar o público infantil e colecionador.',
    img: 'https://www.centralprime3d.com.br/assets/52c6746499.webp',
  },
  {
    id: 6,
    title: 'COSPLAY 3D',
    desc: '+200 peças e máscaras detalhadas para cosplay ou decoração. Permite testar produtos de maior tamanho e ticket mais alto.',
    img: 'https://www.centralprime3d.com.br/assets/f633f9062a.webp',
  },
  {
    id: 7,
    title: 'COLEÇÃO POKÉMON 3D',
    desc: '+450 modelos clássicos da franquia. Categoria conhecida, interessante para explorar o público colecionador e fãs.',
    img: 'https://www.centralprime3d.com.br/assets/1570cf0819.webp',
  },
  {
    id: 8,
    title: 'COLEÇÃO 3D DE NATAL',
    desc: 'Decorações temáticas de fim de ano. Uma forma de testar produtos sazonais sem depender de uma única linha durante o ano.',
    img: 'https://www.centralprime3d.com.br/assets/c4b37f8061.jpg',
  },
  {
    id: 9,
    title: 'COLEÇÃO COPA DO MUNDO',
    desc: 'Modelos ligados a eventos esportivos. Categoria para explorar datas e temas com maior atenção do público.',
    img: 'https://www.centralprime3d.com.br/assets/61a1005ddf.webp',
  },
  {
    id: 10,
    title: 'MASCOTE ESPORTIVO EXCLUSIVOS',
    desc: 'Mascotes de times como Cruzeiro, Palmeiras, Santos e São Paulo. Uma opção para testar um público local e regional bem definido.',
    img: 'https://www.centralprime3d.com.br/assets/2a233e178c.webp',
  },
  {
    id: 11,
    title: '+250 LUMINÁRIAS STL',
    desc: 'Peças decorativas com luz. Categoria de decoração para quem quer testar produtos de apresentação mais elaborada.',
    img: 'https://i.imgur.com/vhsRFIE.png',
  },
  {
    id: 12,
    title: 'BICHINHOS AMIGURUMI IMPRESSÃO 3D',
    desc: '+200 itens em estilo crochê 3D: chaveiros, decoração, heróis e Pokémon. Categoria com apelo visual fofo e várias possibilidades de produto.',
    img: 'https://www.centralprime3d.com.br/assets/52e08d9409.png',
  },
  {
    id: 13,
    title: 'COLEÇÃO LEGO 3D',
    desc: 'Minifiguras articuladas, blocos gigantes, porta-trecos, organizadores de mesa e peças customizadas estilo Lego. Nicho com alta procura entre crianças e colecionadores.',
    img: 'https://i.imgur.com/Q9RWDte.png',
  },
  {
    id: 14,
    title: 'UNIVERSO MINECRAFT 3D',
    desc: 'Personagens pixelados, espadas, ferramentas, blocos colecionáveis e luminárias temáticas de Minecraft. Um dos universos mais lucrativos para vendas rápidas em marketplaces.',
    img: 'https://i.imgur.com/ptC3bsv.png',
  },
];

export const TESTIMONIALS = [
  'https://www.centralprime3d.com.br/assets/567cfe8b91.png',
  'https://www.centralprime3d.com.br/assets/d4e45cea66.png',
  'https://www.centralprime3d.com.br/assets/e76e5ee6f3.png',
  'https://www.centralprime3d.com.br/assets/4068024ceb.png',
  'https://www.centralprime3d.com.br/assets/0e85ee5de1.png',
  'https://www.centralprime3d.com.br/assets/a2068cc838.png',
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: 'Q1. Posso vender as peças impressas?',
    answer: 'Sim! Todos os modelos podem ser impressos e vendidos livremente em marketplaces como Shopee, Mercado Livre, Instagram, feiras presenciais e sua própria loja.',
  },
  {
    id: 2,
    question: 'Q2. Funciona para Shopee e Mercado Livre?',
    answer: 'Sim, os modelos foram minerados a partir de produtos que já têm demanda nestas plataformas.',
  },
  {
    id: 3,
    question: 'Q3. Preciso saber modelar?',
    answer: 'Não. Todos os arquivos STL já vêm prontos para impressão, sem necessidade de modelagem.',
  },
  {
    id: 4,
    question: 'Q4. Como funciona a Central Prime 3D™?',
    answer: 'Você recebe acesso a uma biblioteca online organizada por categorias, com download direto e vitalício.',
  },
  {
    id: 5,
    question: 'Q5. Recebo acesso imediato à Central?',
    answer: 'Sim, o acesso é liberado imediatamente após a confirmação do pagamento.',
  },
];
