# Setup básico

Criar o banco de dados mango

``` bash
dockercompose up --build
```

``` bash
docker run -d mongo
```


Gerar sua hash:

``` bash
./generateHash.bash
``` 

# JWT Auth API

Uma API simples para autenticação e gerenciamento de usuários usando JSON Web Tokens (JWT) e SQLite.

## Índice

- [Visão Geral](#visão-geral)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Tecnologias](#tecnologias)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

Esta API permite a autenticação de usuários com JWT e fornece endpoints para gerenciar usuários. É uma API básica que utiliza SQLite como banco de dados.

