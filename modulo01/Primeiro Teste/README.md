# Curso de Desenvolvimento Web em NodeJS e ReactJS

## Primeira Atividade

A primeira atividade consiste na criação de um CRUD, o qual o usuário deve poder criar, ler, alterar e deletar(CRUD) uma base de dados(vetor comum) na API que você construir, utilizando os métodos que aprendemos na aula passada e usando o Framework ExpressJS.

### Primeira parte

Deve ser possível a criação de projetos nesse CRUD, os projetos são objetos JavaScript que devem ter um "id", um "título" e um vetor de atividades dentro dele.

    - POST /projetos: { id: "1", titulo: "Novo projeto", atividades: [] }

### Segunda parte

Deve ser possível a listagem dos projetos recém adicionados ao banco.

    - GET /projetos

## Terceira Parte

O usuário também poderá alterar o título do projeto, baseado em seu "id

    - PUT /projetos/:id

## Quarta parte

Também será possível a deleção de determinado projeto baseado em seu identificador(Dica: use o método splice).

    - DELETE /projetos/:id

## Bônus

O usuário também pode adicionar tarefas aos projetos, um vetor de tarefas deve existir dentro do objeto projeto.

    - POST /projetos/:id/tasks
