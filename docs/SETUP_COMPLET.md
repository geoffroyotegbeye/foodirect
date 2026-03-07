# 🚀 Guide de Configuration Complète - FOODIRECT

Guide pas à pas pour configurer et lancer le projet FOODIRECT.

## 📋 Prérequis

- Node.js (v18 ou supérieur)
- MySQL (via XAMPP, MAMP, ou installation directe)
- phpMyAdmin
- Un éditeur de code (VS Code recommandé)

## 🎯 Étape 1: Configuration de la Base de Données

### 1.1 Démarrer MySQL
- Si tu utilises XAMPP/MAMP, démarre Apache et MySQL
- Ouvre phpMyAdmin: `http://localhost/phpmyadmin`

### 1.2 Importer la base de données
1. Dans phpMyAdmin, clique sur **"Importer"**
2. Sélectionne le fichier: `backend/config/init-db.sql`
3. Clique sur **"Exécuter"**

✅ Cela crée:
- La base de données `foodirect`
- Les tables (users, menu, orders, order_items)
- Un utilisateur admin
- 15 plats du menu

### 1.3 Vérifier la configuration
Ouvre `backend/.env` et vérifie:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=foodirect
```

Si ton mot de passe MySQL est différent, modifie `DB_PASSWORD`.

## 🎯 Étape 2: Installation du Backend

```bash
cd backend
npm install
```

## 🎯 Étape 3: Installation du Frontend

```bash
cd frontend
npm install
```

## 🎯 Étape 4: Démarrage du Projet

### Option A: Deux terminaux séparés (Recommandé)

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Le backend démarre sur `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Le frontend démarre sur `http://localhost:3000`

### Option B: Script de démarrage (À créer)

Tu peux créer un script pour démarrer les deux en même temps.

## 🧪 Étape 5: Tester le Backend

### Test 1: API de base
Ouvre ton navigateur: `http://localhost:5000`

Tu devrais voir:
```json
{
  "message": "Bienvenue sur l'API FOODIRECT",
  "version": "1.0.0",
  "status": "running",
  "database": "MySQL"
}
```

### Test 2: Menu
Ouvre: `http://localhost:5000/api/menu`

Tu devrais voir la liste des 15 plats.

### Test 3: Script de test automatique
```bash
cd backend
npm test
```

## 🌐 Étape 6: Tester le Frontend

Ouvre ton navigateur: `http://localhost:3000`

Tu devrais voir:
- ✅ La page d'accueil
- ✅ Le menu du jour (3 plats en vedette)
- ✅ La liste complète des plats
- ✅ Le formulaire de commande
- ✅ Les témoignages

## 🔗 Étape 7: Connecter Frontend et Backend

Pour l'instant, le frontend utilise des données statiques. Pour le connecter au backend:

1. Suis le guide: [Frontend-Backend Integration](./FRONTEND_BACKEND_INTEGRATION.md)
2. Installe axios dans le frontend
3. Crée les services API
4. Modifie les composants pour utiliser l'API

## 📊 Structure du Projet

```
foodirect/
├── backend/                 # API Node.js + Express + MySQL
│   ├── config/             # Configuration DB
│   ├── controllers/        # Logique métier
│   ├── middleware/         # Auth & validation
│   ├── routes/             # Routes API
│   ├── .env                # Variables d'environnement
│   ├── package.json
│   └── server.js           # Point d'entrée
│
├── frontend/               # Application Next.js
│   ├── app/               # Pages Next.js 14
│   ├── components/        # Composants React
│   ├── data/              # Données statiques
│   ├── public/            # Assets (images)
│   ├── package.json
│   └── next.config.js
│
└── docs/                  # Documentation
    ├── README.md
    ├── BACKEND_API.md
    ├── FRONTEND_BACKEND_INTEGRATION.md
    └── SETUP_COMPLET.md (ce fichier)
```

## 🔐 Identifiants par Défaut

### Admin
- Email: `admin@foodirect.com`
- Mot de passe: (défini dans init-db.sql, hash bcrypt)

Pour créer un nouveau mot de passe admin:
```javascript
const bcrypt = require('bcryptjs');
const password = 'ton_mot_de_passe';
const hash = bcrypt.hashSync(password, 10);
console.log(hash);
```

## 🐛 Dépannage

### Problème: Le backend ne démarre pas
- ✅ Vérifie que MySQL est démarré
- ✅ Vérifie les identifiants dans `.env`
- ✅ Vérifie que la base de données `foodirect` existe
- ✅ Regarde les logs dans le terminal

### Problème: Erreur de connexion MySQL
```
❌ Erreur de connexion MySQL: Access denied
```
Solution: Vérifie `DB_USER` et `DB_PASSWORD` dans `.env`

### Problème: Base de données non trouvée
```
❌ Unknown database 'foodirect'
```
Solution: Importe `backend/config/init-db.sql` dans phpMyAdmin

### Problème: Port déjà utilisé
```
Error: listen EADDRINUSE: address already in use :::5000
```
Solution: Change le port dans `backend/.env`:
```env
PORT=5001
```

### Problème: Le frontend ne se connecte pas au backend
- ✅ Vérifie que le backend tourne sur le port 5000
- ✅ Vérifie les erreurs CORS dans la console du navigateur
- ✅ Vérifie `FRONTEND_URL` dans `backend/.env`

## 📝 Prochaines Étapes

1. ✅ Backend MySQL configuré
2. ✅ Frontend Next.js fonctionnel
3. ⏳ Connecter le frontend au backend
4. ⏳ Tester les commandes end-to-end
5. ⏳ Ajouter l'authentification admin
6. ⏳ Créer un dashboard admin
7. ⏳ Déployer en production

## 📚 Documentation Complète

- [Backend API](./BACKEND_API.md) - Toutes les routes API
- [Frontend-Backend Integration](./FRONTEND_BACKEND_INTEGRATION.md) - Guide d'intégration
- [Déploiement](./DEPLOIEMENT_NETLIFY.md) - Déployer sur Netlify

## 🆘 Besoin d'Aide?

Si tu rencontres des problèmes:
1. Vérifie les logs dans les terminaux
2. Ouvre la console du navigateur (F12)
3. Consulte la documentation dans `docs/`
4. Vérifie que toutes les dépendances sont installées

---

**FOODIRECT** - Restaurant & Catering 🍽️
