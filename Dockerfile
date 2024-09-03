# Use a imagem oficial do Node.js
FROM node:22

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos do projeto
COPY . .

# Exponha a porta em que a aplicação vai rodar
EXPOSE 5000

# Comando para iniciar a aplicação
CMD ["node", "index.js"]
