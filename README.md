# 🎬 API RESTful Movies — Node.js + TypeScript

API RESTful desenvolvida com **Node.js**, **TypeScript** e **MongoDB**, seguindo arquitetura **MVC (Model–View–Controller)**, com foco em organização, validação, logs estruturados e boas práticas para aplicações backend modernas.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- MongoDB + Mongoose
- Morgan (logs HTTP)
- Winston (logger customizado)
- express-validator (validação de requisições)
- dotenv / config (variáveis de ambiente)
- ts-node-dev (hot reload em desenvolvimento)

---

## 🏗️ Arquitetura

O projeto segue o padrão **MVC**:

```
src/
├── controllers/
│   └── movieController.ts
├── models/
│   └── Movie.ts
├── middleware/
│   ├── morganMiddleware.ts
│   └── handleValidation.ts
├── config/
│   ├── ConnectDB.ts
│   ├── logger.ts
│   └── default.ts
├── routes.ts
└── app.ts
```

### 📌 Responsabilidades

- Models → definição dos schemas Mongoose
- Controllers → regras de negócio
- Routes → rotas da API
- Middlewares → validações, logs e tratamento
- Config → banco, logger e variáveis

---

## ⚙️ Funcionalidades

- CRUD completo de filmes
- Validação de payload
- Logs HTTP com cores por status
- Logger estruturado
- Conexão com MongoDB Atlas
- Organização modular
- Padrão MVC

---

## 🧪 Scripts Disponíveis

Rodar em desenvolvimento:

```
npm run dev
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz:

```
PORT=3000
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/movies
NODE_ENV=development
```

---

## 📡 Endpoints

### ➕ Criar filme

POST `/createMovie`

Payload:

```
{
  "title": "Blade Runner 2049",
  "description": "Um caçador de androides descobre um segredo que pode mudar o destino da humanidade.",
  "director": "Denis Villeneuve",
  "stars": [
    "Ryan Gosling",
    "Harrison Ford",
    "Ana de Armas"
  ],
  "poster": "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
  "rating": 8.5
}
```

---

### 📄 Listar filmes

GET `/movies`

---

### 🔍 Buscar por ID

GET `/movies/:id`

---

### ❌ Remover filme

DELETE `/movies/:id`

---

## 📝 Logs

O projeto utiliza:

- Morgan para logs HTTP
- Winston para logs internos

Status HTTP são coloridos:

- 2xx → sucesso
- 3xx → redirecionamento
- 4xx / 5xx → erro

---

## 📦 Padrão de Commits

O projeto segue convenção:

```
feat: nova funcionalidade
fix: correção
chore: setup/config
docs: documentação
```

---

## 📍 Roadmap

- Testes automatizados (Jest / Supertest)
- Autenticação JWT
- Swagger / OpenAPI
- Docker
- Paginação e filtros
- Cache com Redis

---

## 👨‍💻 Autor

Paulo Roberto  
Backend Developer • Node.js • TypeScript
