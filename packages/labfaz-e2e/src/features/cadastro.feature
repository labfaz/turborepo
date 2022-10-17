Funcionalidade: Cadastro
  Como um usuário não autenticado,
  quero me cadastrar na plataforma

  Contexto: Acessar página de cadastro
    Dado estar na página "signup"

  Regra: Etapa 1
    Cenário: Tentativa de avanço de etapas
      Quando clico no botão "Avançar"
      Então devo ver o erro "Data de nascimento obrigatório"

    Cenário: Preenchimento automático de Endereço baseado no CEP
      Quando preencho o CEP "70732-070"
      Então espero ver o formulário da seguinte forma:
        | campo | conteúdo |
        | Endereco | SQN 103 Bloco G |
        | Bairro | Asa Norte |
        | Qual sua cidade do DF? | Brasília |