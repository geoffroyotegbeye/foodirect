# 🍽️ FOODIRECT - Restaurant & Catering

Application web complète pour le restaurant FOODIRECT avec système de commande en ligne.

## 🚀 Technologies

### Frontend
- **Next.js 14** - Framework React avec App Router
- **React 18** - Bibliothèque UI
- **Tailwind CSS** - Framework CSS utility-first
- **GSAP** - Animations fluides
- **Fonts**: Nunito (body) + Dancing Script (titres)

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MySQL** - Base de données relationnelle
- **JWT** - Authentification
- **bcryptjs** - Hashing des mots de passe
- **express-validator** - Validation des données

## 📦 Installation

### Prérequis
- Node.js v18+
- MySQL (via XAMPP, MAMP, ou installation directe)
- phpMyAdmin

### 1. Cloner le projet
```bash
git clone <repository-url>
cd foodirect
```

### 2. Installer les dépendances

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 3. Configurer la base de données

1. Démarre MySQL
2. Ouvre phpMyAdmin: `http://localhost/phpmyadmin`
3. Importe le fichier: `backend/config/init-db.sql`

### 4. Configuration

Vérifie `backend/.env`:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=foodirect
JWT_SECRET=your_secret_key
FRONTEND_URL=http://localhost:3000
```

## 🎯 Démarrage

### Backend (Terminal 1)
```bash
cd backend
npm run dev
```
Serveur sur: `http://localhost:5000`

### Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```
Application sur: `http://localhost:3000`

## 🧪 Tests

Tester l'API backend:
```bash
cd backend
npm test
```

## 📚 Documentation

Documentation complète dans le dossier `docs/`:

- [🚀 Setup Complet](./docs/SETUP_COMPLET.md) - Guide pas à pas
- [⚡ Quick Reference](./docs/QUICK_REFERENCE.md) - Commandes essentielles
- [🏗️ Architecture](./docs/ARCHITECTURE.md) - Vue d'ensemble
- [📡 Backend API](./docs/BACKEND_API.md) - Documentation API
- [🔗 Frontend Integration](./docs/FRONTEND_BACKEND_INTEGRATION.md) - Guide d'intégration
- [📝 Changelog](./docs/CHANGELOG.md) - Historique des modifications

## 🎨 Fonctionnalités

### Frontend
- ✅ Page d'accueil responsive
- ✅ Menu du jour (3 plats en vedette)
- ✅ Liste complète des plats
- ✅ Formulaire de commande
- ✅ Témoignages clients
- ✅ Navigation fluide avec ancres
- ✅ Menu hamburger mobile
- ✅ Animations GSAP douces

### Backend
- ✅ API REST complète
- ✅ Authentification JWT
- ✅ Gestion du menu (CRUD)
- ✅ Gestion des commandes
- ✅ Système de rôles (admin/staff/customer)
- ✅ Validation des données
- ✅ Transactions MySQL
- ✅ CORS configuré

## 🗄️ Base de Données

### Tables
- **users** - Utilisateurs et authentification
- **menu** - Plats du restaurant (15 pré-remplis)
- **orders** - Commandes clients
- **order_items** - Détails des commandes

### Identifiants Admin
- Email: `admin@foodirect.com`
- Mot de passe: (défini dans init-db.sql)

## 📡 API Endpoints

### Menu
```
GET    /api/menu              # Tous les plats
GET    /api/menu/featured     # Plats en vedette
GET    /api/menu/:id          # Un plat
POST   /api/menu              # Créer (admin)
PUT    /api/menu/:id          # Modifier (admin)
DELETE /api/menu/:id          # Supprimer (admin)
```

### Commandes
```
POST   /api/orders            # Créer une commande
GET    /api/orders            # Toutes (admin)
GET    /api/orders/:id        # Une commande
PATCH  /api/orders/:id/status # Modifier statut (admin)
```

### Authentification
```
POST   /api/auth/register     # Inscription
POST   /api/auth/login        # Connexion
GET    /api/auth/profile      # Profil (authentifié)
```

## 📁 Structure du Projet

```
foodirect/
├── backend/                 # API Node.js + Express + MySQL
│   ├── config/             # Configuration DB
│   ├── controllers/        # Logique métier
│   ├── middleware/         # Auth & validation
│   ├── routes/             # Routes API
│   ├── .env                # Variables d'environnement
│   ├── server.js           # Point d'entrée
│   └── test-api.js         # Tests
│
├── frontend/               # Application Next.js
│   ├── app/               # Pages (App Router)
│   ├── components/        # Composants React
│   ├── data/              # Données statiques
│   ├── public/            # Assets (images)
│   └── package.json
│
├── docs/                  # Documentation
│   ├── README.md
│   ├── SETUP_COMPLET.md
│   ├── QUICK_REFERENCE.md
│   ├── ARCHITECTURE.md
│   └── ...
│
└── README.md              # Ce fichier
```

## 🔐 Sécurité

- Mots de passe hashés avec bcrypt (10 rounds)
- Authentification JWT avec expiration
- Validation des entrées côté serveur
- Protection CORS
- Middleware d'autorisation par rôle
- Transactions MySQL pour l'intégrité des données

## 🚀 Déploiement

### Frontend (Netlify)
```bash
cd frontend
npm run build
# Deploy le dossier .next/
```

### Backend (Heroku/Railway/DigitalOcean)
Voir [Guide de Déploiement](./docs/DEPLOIEMENT_NETLIFY.md)

## 🐛 Dépannage

### Backend ne démarre pas
- Vérifie que MySQL est démarré
- Vérifie les identifiants dans `.env`
- Vérifie que la base `foodirect` existe

### Frontend ne se connecte pas
- Vérifie que le backend tourne sur le port 5000
- Vérifie les erreurs CORS dans la console
- Vérifie `FRONTEND_URL` dans `backend/.env`

### Erreur de base de données
- Importe `backend/config/init-db.sql` dans phpMyAdmin
- Vérifie les identifiants MySQL
- Teste avec: `cd backend && npm test`

## 📞 Contact

**FOODIRECT**
- Téléphone: +229 60408324 / 56499982
- Email: info@chezchiro.com
- Adresse: Abomey-Calavi, Godomey

## 📝 Licence

Propriétaire - FOODIRECT © 2024

## 🙏 Crédits

Développé par OWO EMPIRE

---

**Version 1.0.0** - Mars 2024
