# 📚 Documentation FOODIRECT

Documentation complète du projet FOODIRECT - Restaurant & Catering.

## 📖 Table des matières

1. [✅ Completion Summary](./COMPLETION_SUMMARY.md) - Résumé de ce qui a été fait
2. [🚀 Setup Complet](./SETUP_COMPLET.md) - Guide de configuration pas à pas
3. [⚡ Quick Reference](./QUICK_REFERENCE.md) - Commandes essentielles
4. [🏗️ Architecture](./ARCHITECTURE.md) - Vue d'ensemble de l'architecture
5. [📡 Backend API](./BACKEND_API.md) - Documentation complète de l'API
6. [🔗 Frontend Integration](./FRONTEND_BACKEND_INTEGRATION.md) - Guide d'intégration
7. [📝 Changelog](./CHANGELOG.md) - Historique des modifications
8. [Migration Guide](./MIGRATION_GUIDE.md) - Guide de migration
9. [Déploiement Netlify](./DEPLOIEMENT_NETLIFY.md) - Guide de déploiement
10. [Fix Images Netlify](./FIX_IMAGES_NETLIFY.md) - Correction des images
11. [Updates](./UPDATES.md) - Historique des mises à jour
12. [TODO](./TODO.md) - Liste des tâches

---

# 🚀 Quick Start - Backend API (MySQL)

Backend Node.js + Express + MySQL pour le restaurant FOODIRECT.

## 📦 Installation

### 1. Installer les dépendances

```bash
cd backend
npm install
```

### 2. Configurer MySQL avec phpMyAdmin

1. Ouvre **phpMyAdmin** dans ton navigateur (généralement http://localhost/phpmyadmin)
2. Clique sur **"Importer"** dans le menu du haut
3. Sélectionne le fichier `backend/config/init-db.sql`
4. Clique sur **"Exécuter"**

Cela va créer :
- ✅ La base de données `foodirect`
- ✅ Les tables (users, menu, orders, order_items)
- ✅ Un utilisateur admin
- ✅ Les 15 plats du menu

### 3. Vérifier la configuration

Ouvre `backend/.env` et vérifie les identifiants MySQL :

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=foodirect
```

Si ton mot de passe MySQL est différent, modifie `DB_PASSWORD`.

### 4. Démarrer le serveur

```bash
npm run dev
```

Le serveur démarre sur `http://localhost:5000`

## 🔌 Tester l'API

### Test 1 : API de base
```bash
curl http://localhost:5000
```

### Test 2 : Récupérer le menu
```bash
curl http://localhost:5000/api/menu
```

### Test 3 : Connexion admin
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@foodirect.com","password":"admin123"}'
```

## 📊 Structure de la Base de Données

### Table `users`
- id, name, email, password, phone, role, is_active, created_at, updated_at

### Table `menu`
- id, name, description, price, image, category, available, rating, note, featured, created_at, updated_at

### Table `orders`
- id, customer_name, customer_phone, customer_address, total_amount, status, payment_method, payment_status, notes, created_at, updated_at

### Table `order_items`
- id, order_id, menu_id, name, quantity, price

## 🔐 Identifiants Admin

- **Email** : admin@foodirect.com
- **Mot de passe** : admin123

## 📝 API Endpoints

### Menu
- `GET /api/menu` - Liste des plats
- `GET /api/menu/:id` - Détails d'un plat
- `POST /api/menu` - Créer un plat (Admin)
- `PUT /api/menu/:id` - Modifier un plat (Admin)
- `DELETE /api/menu/:id` - Supprimer un plat (Admin)

### Commandes
- `POST /api/orders` - Créer une commande
- `GET /api/orders` - Liste des commandes (Admin)
- `GET /api/orders/:id` - Détails d'une commande
- `PUT /api/orders/:id/status` - Changer le statut (Admin)

### Authentification
- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion
- `GET /api/auth/me` - Profil utilisateur (Privé)

## 🚀 Prochaines Étapes

1. ✅ Backend MySQL configuré
2. ⏳ Connecter le frontend au backend
3. ⏳ Tester les commandes
4. ⏳ Déployer en production

---

**FOODIRECT Backend** - Propulsé par Node.js + MySQL 🚀
