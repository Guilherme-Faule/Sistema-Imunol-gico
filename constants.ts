import { ImmunePhase } from './types';

export const IMMUNE_PHASES: ImmunePhase[] = [
  {
    title: "Fase 1: Invasão",
    description: "Um corpo estranho, como um vírus ou bactéria, rompe as defesas externas do corpo (como a pele) e entra no sistema. Isso dispara o alarme inicial.",
    prompt: `
      Você é um designer criativo para o jogo Magic: The Gathering.
      Baseado no processo biológico de uma 'Invasão Patogênica', crie um novo card.
      A criatura deve ser ameaçadora, mas não excessivamente poderosa.
      Retorne um objeto JSON com as chaves: name, manaCost, cardType, abilities, flavorText, power e toughness.
      O nome, tipo, habilidades e texto de ambientação devem estar em português do Brasil.
      Exemplo de manaCost: '{1}{B}'. O tipo do card deve ser algo como 'Criatura - Germe'.
      As habilidades devem refletir sua natureza invasiva, talvez criando cópias de si mesma ou enfraquecendo outras criaturas.
    `,
    imagePrompt: "Epic fantasy art of a swarm of microscopic, menacing bacteria with glowing red eyes, invading a cellular landscape. Digital painting, dramatic lighting, in the style of Magic the Gathering."
  },
  {
    title: "Fase 2: Resposta Inata",
    description: "Os defensores não específicos da primeira linha do corpo são ativados. Células como Macrófagos e Neutrófilos correm para o local para engolir e destruir os invasores em um processo chamado fagocitose.",
    prompt: `
      Você é um designer criativo para o jogo Magic: The Gathering.
      Crie um card para uma 'Sentinela Macrófaga', representando a resposta imune inata.
      Deve ser uma criatura defensiva. Use mana branco em seu custo para representar ordem e proteção.
      Retorne um objeto JSON com as chaves: name, manaCost, cardType, abilities, flavorText, power e toughness.
      O nome, tipo, habilidades e texto de ambientação devem estar em português do Brasil.
      Exemplo de manaCost: '{2}{W}'. Tipo do card: 'Criatura - Célula Guardiã'.
      Suas habilidades devem envolver destruir ou exilar criaturas invasoras menores.
    `,
    imagePrompt: "A colossal, amoeba-like cellular creature in gleaming white and gold armor, engulfing a dark, shadowy pathogen. It has a vigilant, protective stance. Fantasy art, microscopic world, in the style of Magic the Gathering."
  },
  {
    title: "Fase 3: Ativação Adaptativa",
    description: "Se a resposta inata não for suficiente, o sistema imunológico adaptativo é acionado. As células dendríticas capturam partes do invasor (antígenos) e viajam para os gânglios linfáticos para apresentá-los às células T.",
    prompt: `
      Você é um designer criativo para o jogo Magic: The Gathering.
      Crie um card para um 'Mensageiro Dendrítico', que ativa o sistema imunológico adaptativo.
      Esta criatura deve focar em utilidade, não em combate.
      Retorne um objeto JSON com as chaves: name, manaCost, cardType, abilities, flavorText, power e toughness.
      O nome, tipo, habilidades e texto de ambientação devem estar em português do Brasil.
      Exemplo de manaCost: '{1}{W}{U}'. Tipo do card: 'Criatura - Célula Batedora'.
      Sua habilidade deve ser sobre procurar em seu grimório por um card de Guerreiro ou Soldado (representando uma Célula T ou Célula B) e colocá-lo em sua mão. Deve ter poder baixo.
    `,
    imagePrompt: "A wise, ancient cellular being covered in glowing, branching dendrites, holding an orb of light containing the silhouette of an invader. It travels through a vein-like tunnel. High fantasy, detailed, in the style of Magic the Gathering."
  },
  {
    title: "Fase 4: Ataque Especializado",
    description: "O sistema adaptativo lança um ataque direcionado. As células T auxiliares coordenam a resposta, as células T citotóxicas (assassinas) destroem as células hospedeiras infectadas e as células B produzem anticorpos para neutralizar os invasores.",
    prompt: `
      Você é um designer criativo para o jogo Magic: The Gathering.
      Crie um card para um 'Assassino de Célula T Citotóxica', uma célula assassina direcionada.
      Esta criatura deve ser mortal e precisa. Use mana preto ou branco para representar remoção direcionada.
      Retorne um objeto JSON com as chaves: name, manaCost, cardType, abilities, flavorText, power e toughness.
      O nome, tipo, habilidades e texto de ambientação devem estar em português do Brasil.
      Exemplo de manaCost: '{2}{W}{B}'. Tipo do card: 'Criatura - Célula Assassina'.
      Dê a ela uma habilidade como 'Toque Mortífero' ou 'Quando esta criatura entrar no campo de batalha, destrua a criatura alvo que sofreu dano neste turno'.
    `,
    imagePrompt: "A sleek, cloaked cellular assassin wielding sharp, crystalline daggers, moving swiftly to strike a corrupted, darkened host cell. The assassin has glowing blue energy trails. Dark fantasy, dynamic pose, in the style of Magic the Gathering."
  },
  {
    title: "Fase 5: Memória",
    description: "Após a eliminação da ameaça, algumas células T e B tornam-se Células de Memória. Elas permanecem no corpo por anos, proporcionando uma resposta rápida e poderosa se o mesmo invasor retornar.",
    prompt: `
      Você é um designer criativo para o jogo Magic: The Gathering.
      Crie um card para um 'Guardião da Célula de Memória', representando a imunidade a longo prazo.
      Este card deve fornecer uma vantagem duradoura.
      Retorne um objeto JSON com as chaves: name, manaCost, cardType, abilities, flavorText, power e toughness.
      O nome, tipo, habilidades e texto de ambientação devem estar em português do Brasil.
      Exemplo de manaCost: '{4}{W}'. Tipo do card: 'Criatura - Célula Clériga'.
      Sua habilidade poderia ser um efeito de hino ('Outras criaturas do tipo Célula que você controla recebem +1/+1') ou tornar outras mágicas de Célula mais baratas de conjurar. O texto de ambientação deve ser sobre lembrar e se preparar.
    `,
    imagePrompt: "A serene, monk-like cellular being meditating inside a vast library of light made of glowing synapses. Around it, ghostly images of past invaders and victorious immune cells swirl. Mystical and ethereal, in the style of Magic the Gathering."
  }
];