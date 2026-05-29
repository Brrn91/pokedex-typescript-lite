# Pokédex TypeScript Lite

## Sobre o projeto

Aplicação back-end em Node.js com TypeScript que consulta dados de Pokémon na PokeAPI e organiza os resultados em um catálogo local durante a execução.

## Objetivo

Praticar os conceitos do Módulo 01:

- Node.js e JavaScript no back-end
- TypeScript com tipagem forte
- Interfaces e Classes
- async/await e fetch
- Tratamento de erros
- Métodos de array
- GitHub e GitFlow

## Tecnologias utilizadas

- Node.js v24
- TypeScript v6
- TSX
- PokeAPI (https://pokeapi.co)
- Git e GitHub

## Pré-requisitos

- Node.js instalado
- npm instalado
- Git instalado

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/Brrn91/pokedex-typescript-lite
```

Acesse a pasta:

```bash
cd pokedex-typescript-lite
```

Instale as dependências:

```bash
npm install
```

## Como executar

```bash
npm run dev
```

## Arquitetura do projeto

```
src/
├── controllers/
│   └── TerminalController.ts  # Orquestra exibição e entrada
├── services/
│   ├── PokeApiService.ts      # Busca dados na PokeAPI
│   └── BoxService.ts          # Gerencia o catálogo local
├── models/
│   ├── Pokemon.ts             # Interfaces de dados
│   └── CustomErrors.ts        # Classes de erro customizadas
├── utils/
│   └── textFormatters.ts      # Funções utilitárias de formatação
└── main.ts                    # Ponto de entrada
```

## Funcionalidades

- Buscar Pokémon por nome ou ID
- Tratar erro de Pokémon inexistente
- Transformar resposta da API em objeto simplificado
- Adicionar Pokémon ao catálogo local
- Impedir Pokémon duplicado pelo ID
- Listar catálogo formatado
- Remover Pokémon por ID

## Exemplos de execução

### Busca válida

Entrada testada:

```
pikachu
```

Saída obtida:

```
[OK] pikachu adicionado ao catálogo.
```

### Busca inválida

Entrada testada:

```
pokemon-inexistente
```

Saída obtida:

```
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

### Duplicidade

Entrada testada:

```
adicionar pikachu duas vezes
```

Saída obtida:

```
[AVISO] pikachu já está no catálogo.
```

### Remoção

Entrada testada:

```
remover ID 25
```

Saída obtida:

```
[OK] Pokémon removido do catálogo.
```

### Listagem completa

Saída obtida:

```
=== Catálogo de Pokémon ===
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
```

## Conceitos aplicados

### Interfaces

`PokemonResumo` define o formato interno do Pokémon no catálogo.
`PokemonApiResponse` mapeia apenas os campos necessários da PokeAPI.

### Fetch e async/await

A função `buscarPokemon` usa `fetch` nativo do Node.js com `async/await` para buscar dados da PokeAPI de forma assíncrona.

### Tratamento de erros

O bloco `try/catch` captura erros de rede e respostas 404, retornando `null` sem quebrar o programa.

### Métodos de array utilizados

- `.map()` — transforma tipos da API em lista de strings
- `.some()` — verifica duplicidade pelo ID
- `.filter()` — remove Pokémon pelo ID
- `.forEach()` — percorre catálogo para listagem
- `.join()` — formata lista de tipos em texto

### Classe CatalogoPokemon

Atributo `private pokemons` encapsula a lista interna.
Métodos: `adicionar`, `listar`, `remover`.

## Branches utilizadas

- `main` — código estável
- `develop` — integração
- `feat/pokedex` — desenvolvimento das funcionalidades
- `docs/readme` — documentação

## Kanban

Link do Kanban: COLE_O_LINK_AQUI

## Melhorias futuras

- Menu interativo no terminal
- Persistência em arquivo JSON
- Filtros por tipo de Pokémon
- Testes unitários com Jest
- API REST com Expresslista de tipos em texto

### Classe CatalogoPokemon

Atributo `private pokemons` encapsula a lista interna.
Métodos: `adicionar`, `listar`, `remover`.

## Branches utilizadas

- `main` — código estável
- `develop` — integração
- `feat/pokedex` — desenvolvimento das funcionalidades
- `docs/readme` — documentação

## Kanban

Link do Kanban: COLE_O_LINK_AQUI

## Melhorias futuras

- Menu interativo no terminal
- Persistência em arquivo JSON
- Filtros por tipo de Pokémon
- Testes unitários com Jest
- API REST com Express
