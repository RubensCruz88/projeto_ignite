# projeto_ignite
Projeto para acompanhar o curso de Node da RocketSeat

# Cadastro de Carro

**Requisito Funcional**
 - [ ] Deve ser possível cadastrar um novo carro
 - [ ] Deve ser possível listar todas as categorias

**Regras de Negócio**
 - [ ] Não deve ser possível cadastrar um carro com placa já existente
 - [ ] Não deve ser possível alterar a placa de um carro ja cadastrado
 - [ ] O carro deve ser cadastrado, por padrão, com disponibilidade
 - [ ] O usuario responsável pelo cadastro deve ser um usuário administrador

 # Listagem de carro

**Requisito Funcional**
 - [ ] Deve ser possível listar todos os carros disponíveis
 - [ ] Deve ser possível listar todos os carros disponíveis pelo nome da categoria
 - [ ] Deve ser possível listar todos os carros disponíveis pelo nome da marca
 - [ ] Deve ser possível listar todos os carros disponíveis pelo nome do carro

**Regras de Negócio**
 - [ ] O usuário não precisa estar logado no sistema

 # Cadastro de Especificação no Carro

 **Requisito Funcional**
 - [ ] Deve ser possível cadastrar uma especificação para um carro
 - [ ] Deve ser possível listar todas as especificações
 - [ ] Deve ser possível listar todas os carros

 **Regras de Negócio**
 - [ ] Não deve ser possível cadastrar uma especificação para um carro não cadastrado
 - [ ] Não deve ser possível cadastrar uma especificaçãp ja existente para o mesmo carro
 - [ ] O usuario responsável pelo cadastro deve ser um usuário administrador

# Cadastro de Imagem do Carro

 **Requisito Funcional**
 - [ ] Deve ser possível cadastrar a imagem para um carro

**Requisito Não Funcional**
 - [ ] Utilizar o multer para upload do arquivo

**Regras de Negócio**
 - [ ] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
 - [ ] O usuário responsável pelo cadastro deve ser um usuario administrador

 # Aluguel de Carro

**Requisito Funcional**
 - [ ] Deve ser possível cadastrar um aluguel

**Regras de Negócio**
 - [ ] O aluguel deve ter duração mínima de 24 horas
 - [ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
 - [ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
