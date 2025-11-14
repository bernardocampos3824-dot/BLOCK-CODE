
export interface Lesson {
  title: string;
  content: string;
}

export interface Course {
  title: string;
  description: string;
  lessons: Lesson[];
}

export const courses: Record<string, Course> = {
  python: {
    title: 'Python',
    description: 'Comece com uma das linguagens mais populares e versáteis do mundo.',
    lessons: [
      {
        title: 'Introdução ao Python',
        content: `Bem-vindo ao Python! Python é uma linguagem de programação conhecida por sua sintaxe simples e legível. É ótima para iniciantes.\n\nVamos começar com o programa clássico "Olá, Mundo!". Em Python, você usa a função \`print()\` para exibir texto na tela.`,
      },
      {
        title: 'Olá, Mundo!',
        content: `Para imprimir "Olá, Mundo!" em Python, você simplesmente escreve:\n\n\`\`\`python\nprint("Olá, Mundo!")\n\`\`\`\n\nQuando você executa este código, a saída será "Olá, Mundo!". A função \`print()\` pega o que está dentro dos parênteses e o exibe. As aspas indicam que "Olá, Mundo!" é um texto, também conhecido como string.`,
      },
    ],
  },
  javascript: {
    title: 'JavaScript',
    description: 'A linguagem da web. Torne seus sites interativos e dinâmicos.',
    lessons: [
      {
        title: 'Introdução ao JavaScript',
        content: `Bem-vindo ao JavaScript! É a linguagem que dá vida à web. Com o JavaScript, você pode criar conteúdo dinâmico, controlar multimídia, animar imagens e muito mais.\n\nPara nosso primeiro exemplo, usaremos a função \`console.log()\` para imprimir "Olá, Mundo!" no console do navegador.`,
      },
      {
        title: 'Olá, Mundo!',
        content: `Para imprimir "Olá, Mundo!" em JavaScript, você escreve:\n\n\`\`\`javascript\nconsole.log("Olá, Mundo!");\n\`\`\`\n\nVocê pode abrir as ferramentas de desenvolvedor do seu navegador (geralmente com F12), ir para a aba Console e verá a mensagem. O ponto e vírgula no final é uma boa prática, mas muitas vezes opcional.`,
      },
    ],
  },
  html: {
    title: 'HTML',
    description: 'A espinha dorsal de todas as páginas da web. Aprenda a estruturar o conteúdo.',
    lessons: [
      {
        title: 'Introdução ao HTML',
        content: `Bem-vindo ao HTML (HyperText Markup Language). Não é uma linguagem de programação, mas uma linguagem de marcação usada para estruturar o conteúdo de uma página da web.\n\nO HTML usa "tags" para definir elementos como títulos, parágrafos e links.`,
      },
      {
        title: 'Olá, Mundo!',
        content: `Uma página HTML básica "Olá, Mundo!" se parece com isto:\n\n\`\`\`html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Minha Primeira Página</title>\n</head>\n<body>\n\n  <h1>Olá, Mundo!</h1>\n\n</body>\n</html>\n\`\`\`\n\nA tag \`<h1>\` define um título de primeiro nível. Quando você abre este arquivo em um navegador, ele exibirá "Olá, Mundo!" em letras grandes e em negrito.`,
      },
    ],
  },
  css: {
    title: 'CSS',
    description: 'Estilize suas páginas da web. Aprenda a controlar cores, fontes e layouts.',
    lessons: [
      {
        title: 'Introdução ao CSS',
        content: `Bem-vindo ao CSS (Cascading Style Sheets)! O CSS é usado para descrever a apresentação de um documento escrito em HTML. Com o CSS, você pode controlar a cor, a fonte, o tamanho do texto, o espaçamento, e muito mais.`,
      },
      {
        title: 'Olá, Mundo!',
        content: `Vamos dar um estilo ao nosso "Olá, Mundo!" do HTML. Podemos adicionar um estilo para tornar o texto azul.\n\n\`\`\`css\nh1 {\n  color: blue;\n}\n\`\`\`\n\nVocê pode vincular este código CSS ao seu arquivo HTML. Agora, qualquer tag \`<h1>\` em sua página terá texto azul. Isso separa a estrutura (HTML) da apresentação (CSS).`,
      },
    ],
  },
  java: {
    title: 'Java',
    description: 'Uma linguagem poderosa e de nível empresarial usada em tudo, desde aplicativos Android até sistemas de back-end.',
    lessons: [
      {
        title: 'Introdução ao Java',
        content: `Bem-vindo ao Java! É uma linguagem de programação robusta, orientada a objetos, conhecida por sua portabilidade ("escreva uma vez, execute em qualquer lugar").\n\nO código Java precisa ser compilado antes de ser executado.`,
      },
      {
        title: 'Olá, Mundo!',
        content: `Em Java, um programa "Olá, Mundo!" é um pouco mais detalhado:\n\n\`\`\`java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println("Olá, Mundo!");\n  }\n}\n\`\`\`\n\nCada aplicativo Java tem um método \`main\`. A linha \`System.out.println()\` é o que realmente imprime o texto no console.`,
      },
    ],
  },
  csharp: {
    title: 'C#',
    description: 'Desenvolvida pela Microsoft, C# (C Sharp) é uma linguagem moderna para construir aplicativos para Windows e web.',
    lessons: [
      {
        title: 'Introdução ao C#',
        content: `Bem-vindo ao C#! É uma linguagem de programação versátil desenvolvida pela Microsoft, usada para desenvolver aplicativos web, aplicativos de desktop, jogos (com Unity) e muito mais.`,
      },
      {
        title: 'Olá, Mundo!',
        content: `Em C#, "Olá, Mundo!" se parece muito com Java:\n\n\`\`\`csharp\nusing System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("Olá, Mundo!");\n  }\n}\n\`\`\`\n\n\`Console.WriteLine()\` é o método usado para exibir texto no console.`,
      },
    ],
  },
  cpp: {
    title: 'C++',
    description: 'Uma linguagem de alto desempenho usada em desenvolvimento de jogos, sistemas operacionais e software de alto desempenho.',
    lessons: [
      {
        title: 'Introdução ao C++',
        content: `Bem-vindo ao C++! É uma extensão da linguagem C e é conhecida por seu desempenho e controle sobre os recursos do sistema. É amplamente utilizada em desenvolvimento de jogos, sistemas embarcados e aplicativos de alto desempenho.`,
      },
      {
        title: 'Olá, Mundo!',
        content: `Em C++, o programa "Olá, Mundo!" usa a biblioteca iostream:\n\n\`\`\`cpp\n#include <iostream>\n\nint main() {\n  std::cout << "Olá, Mundo!" << std::endl;\n  return 0;\n}\n\`\`\`\n\n\`std::cout\` é usado para enviar a saída para o console. \`<<\` é o operador de inserção de fluxo.`,
      },
    ],
  },
  php: {
    title: 'PHP',
    description: 'Uma linguagem de script do lado do servidor popular para desenvolvimento web, alimentando sites como WordPress e Facebook.',
    lessons: [
      {
        title: 'Introdução ao PHP',
        content: `Bem-vindo ao PHP! É uma linguagem de script do lado do servidor projetada para desenvolvimento web. O código PHP é executado no servidor e o resultado HTML é enviado ao navegador.\n\nO código PHP é colocado dentro das tags \`<?php ... ?>\`.`,
      },
      {
        title: 'Olá, Mundo!',
        content: `Em um arquivo PHP, você pode misturar HTML e PHP. Para imprimir "Olá, Mundo!", você usa o comando \`echo\`:\n\n\`\`\`php\n<!DOCTYPE html>\n<html>\n<body>\n\n  <h1><?php echo "Olá, Mundo!"; ?></h1>\n\n</body>\n</html>\n\`\`\`\n\nO servidor processará o código PHP e o substituirá por "Olá, Mundo!" antes de enviar a página para o usuário.`,
      },
    ],
  },
  lua: {
    title: 'Lua',
    description: 'Uma linguagem de script leve e rápida, frequentemente usada em desenvolvimento de jogos (Roblox, World of Warcraft).',
    lessons: [
        {
            title: 'Introdução ao Lua',
            content: `Bem-vindo ao Lua! Lua é uma linguagem de script leve e poderosa, projetada para ser facilmente incorporada em outras aplicações. É muito popular em desenvolvimento de jogos, como em plataformas como Roblox e mods para World of Warcraft.`
        },
        {
            title: 'Olá, Mundo!',
            content: `A sintaxe de Lua é muito simples. Assim como em Python, você usa a função \`print()\` para exibir texto.\n\n\`\`\`lua\nprint("Olá, Mundo!")\n\`\`\`\n\nEste código, quando executado, exibirá "Olá, Mundo!" no console.`
        }
    ]
  }
};
