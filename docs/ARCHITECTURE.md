# 🏗️ Architecture FOODIRECT

Vue d'ensemble de l'architecture du projet.

## 📊 Architecture Globale

```
┌─────────────────────────────────────────────────────────────┐
│                         FRONTEND                             │
│                      Next.js 14 + React                      │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │   Hero   │  │  Navbar  │  │  Menu    │  │  Order   │   │
│  │          │  │          │  │  DuJour  │  │  Form    │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ TopList  │  │Testimon. │  │  Banner  │  │  Footer  │   │
│  │          │  │          │  │          │  │          │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│                                                              │
│                    Port: 3000                                │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       │ HTTP/REST API
                       │ (axios)
                       │
┌──────────────────────▼───────────────────────────────────────┐
│                         BACKEND                              │
│                   Node.js + Express                          │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                    ROUTES                               │ │
│  │  /api/menu  │  /api/orders  │  /api/auth              │ │
│  └────────────────────┬───────────────────────────────────┘ │
│                       │                                      │
│  ┌────────────────────▼───────────────────────────────────┐ │
│  │                  MIDDLEWARE                             │ │
│  │  Authentication  │  Validation  │  CORS                │ │
│  └────────────────────┬───────────────────────────────────┘ │
│                       │                                      │
│  ┌────────────────────▼───────────────────────────────────┐ │
│  │                 CONTROLLERS                             │ │
│  │  menuController  │  orderController  │  authController │ │
│  └────────────────────┬───────────────────────────────────┘ │
│                       │                                      │
│                    Port: 5000                                │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       │ MySQL Connection Pool
                       │ (mysql2)
                       │
┌──────────────────────▼───────────────────────────────────────┐
│                       DATABASE                               │
│                         MySQL                                │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  users   │  │   menu   │  │  orders  │  │  order_  │   │
│  │          │  │          │  │          │  │  items   │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│                                                              │
│                    Port: 3306                                │
└──────────────────────────────────────────────────────────────┘
```

## 🔄 Flux de Données

### 1. Affichage du Menu

```
User → Frontend (page.js)
     → menuData.js (données statiques)
     → MenuDuJour / TopList (composants)
     → Affichage
```

### 2. Création de Commande (Futur avec API)

```
User → OrderForm (frontend)
     → orderService.createOrder()
     → POST /api/orders (backend)
     → validation.middleware
     → order.controller.createOrder()
     → MySQL INSERT (orders + order_items)
     → Response → Frontend
     → Confirmation
```

### 3. Authentification Admin

```
Admin → Login Form
      → POST /api/auth/login
      → auth.controller.login()
      → Vérification MySQL
      → bcrypt.compare()
      → JWT token généré
      → Token stocké (localStorage)
      → Accès routes protégées
```

## 📁 Structure des Fichiers

### Backend

```
backend/
├── config/
│   ├── database.js          # Pool MySQL
│   └── init-db.sql          # Schema + données
│
├── controllers/
│   ├── auth.controller.js   # Login, register, profile
│   ├── menu.controller.js   # CRUD menu
│   └── order.controller.js  # CRUD commandes
│
├── middleware/
│   ├── auth.middleware.js   # JWT verification
│   └── validation.middleware.js  # Input validation
│
├── routes/
│   ├── auth.routes.js       # Routes auth
│   ├── menu.routes.js       # Routes menu
│   └── order.routes.js      # Routes commandes
│
├── .env                     # Config
├── server.js                # Entry point
└── test-api.js              # Tests
```

### Frontend

```
frontend/
├── app/
│   ├── layout.js            # Layout global
│   ├── page.js              # Page d'accueil
│   ├── globals.css          # Styles globaux
│   └── sitemap.js           # SEO
│
├── components/
│   ├── Hero/
│   ├── MenuDuJour/
│   ├── TopList/
│   ├── OrderForm/
│   ├── Testimonials/
│   ├── Navbar/
│   ├── Banner/
│   └── Footer/
│
├── data/
│   └── menuData.js          # Données menu
│
├── public/
│   └── assets/              # Images
│
└── package.json
```

## 🔐 Sécurité

### Authentification JWT

```
1. Login → Credentials
2. Backend vérifie → bcrypt.compare()
3. Token généré → jwt.sign()
4. Token envoyé → Frontend
5. Stockage → localStorage
6. Requêtes suivantes → Header: Bearer <token>
7. Middleware vérifie → jwt.verify()
8. Accès autorisé
```

### Niveaux d'Autorisation

```
┌─────────────────────────────────────────┐
│              ADMIN                      │
│  - Toutes les permissions               │
│  - CRUD menu                            │
│  - Gestion commandes                    │
│  - Gestion utilisateurs                 │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│              STAFF                      │
│  - Voir commandes                       │
│  - Modifier statut commandes            │
│  - Voir menu                            │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│            CUSTOMER                     │
│  - Voir menu                            │
│  - Créer commandes                      │
│  - Voir ses commandes                   │
└─────────────────────────────────────────┘
```

## 🗄️ Modèle de Données

### Relations

```
users (1) ──────────── (*) orders
                           │
                           │ (1)
                           │
                           │ (*)
                      order_items
                           │
                           │ (*)
                           │
                           │ (1)
                         menu
```

### Tables

#### users
```sql
id (PK)
name
email (UNIQUE)
password (hashed)
phone
role (admin/staff/customer)
is_active
created_at
updated_at
```

#### menu
```sql
id (PK)
name
description
price
image
category (plat/boisson/dessert/extra)
available
rating
note
featured
created_at
updated_at
```

#### orders
```sql
id (PK)
customer_name
customer_phone
customer_address
total_amount
status (enum)
payment_method (enum)
payment_status (enum)
notes
created_at
updated_at
```

#### order_items
```sql
id (PK)
order_id (FK → orders)
menu_id (FK → menu)
name
quantity
price
```

## 🚀 Déploiement

### Frontend (Netlify)
```
GitHub → Netlify
       → Build: npm run build
       → Output: .next/
       → Deploy
```

### Backend (Options)

1. **Heroku**
   - Gratuit (avec limitations)
   - MySQL addon: ClearDB

2. **Railway**
   - Moderne
   - MySQL intégré

3. **DigitalOcean**
   - VPS
   - Plus de contrôle

4. **Vercel**
   - Serverless functions
   - Nécessite adaptation

## 📊 Performance

### Frontend
- Next.js SSR/SSG
- Images optimisées
- Code splitting automatique
- Lazy loading composants

### Backend
- Connection pooling MySQL
- Middleware de cache (à ajouter)
- Rate limiting (à ajouter)
- Compression (à ajouter)

### Base de Données
- Index sur colonnes fréquentes
- Transactions pour intégrité
- Cascade delete
- Optimisation requêtes

## 🔄 CI/CD (À implémenter)

```
Git Push → GitHub
         → GitHub Actions
         → Tests automatiques
         → Build
         → Deploy Frontend (Netlify)
         → Deploy Backend (Heroku/Railway)
         → Notification
```

---

**Architecture FOODIRECT v1.0** 🏗️
