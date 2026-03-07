# 👨‍💼 Guide Admin - FOODIRECT

Guide pour accéder et utiliser le dashboard administrateur.

## 🔐 Accès Admin

### URL
```
http://localhost:3000/admin
```

### Identifiants par défaut
```
Email: admin@foodirect.com
Mot de passe: admin123
```

⚠️ **Important:** Change ce mot de passe en production!

## 🚀 Première Connexion

### 1. Importer la base de données
Si ce n'est pas déjà fait:
1. Ouvre phpMyAdmin: `http://localhost/phpmyadmin`
2. Importe: `backend/config/init-db.sql`
3. Vérifie que l'utilisateur admin existe dans la table `users`

### 2. Démarrer le backend
```bash
cd backend
npm run dev
```
Le backend doit tourner sur `http://localhost:5001`

### 3. Démarrer le frontend
```bash
cd frontend
npm run dev
```
Le frontend doit tourner sur `http://localhost:3000`

### 4. Se connecter
1. Va sur: `http://localhost:3000/admin`
2. Tu seras redirigé vers `/admin/login`
3. Entre les identifiants:
   - Email: `admin@foodirect.com`
   - Mot de passe: `admin123`
4. Clique sur "Se connecter"

## 🎯 Fonctionnalités du Dashboard

### Page d'accueil Admin
- **Statistiques** - Vue d'ensemble des commandes et revenus
- **Actions rapides** - Accès rapide aux fonctions principales
- **Commandes récentes** - Liste des dernières commandes

### Sections disponibles (à venir)
- 📋 Gestion des commandes
- 🍽️ Gestion du menu (CRUD)
- 👥 Gestion des clients
- 📊 Statistiques détaillées

## 🔒 Sécurité

### Protection des routes
- La page `/admin` vérifie automatiquement:
  1. Si un token JWT existe
  2. Si l'utilisateur est un admin
  3. Redirige vers `/admin/login` si non authentifié

### Déconnexion
- Clique sur "Déconnexion" dans le header
- Le token est supprimé
- Redirection automatique vers la page de login

### Session
- Le token JWT expire après 7 jours
- Les infos sont stockées dans `localStorage`

## 🛠️ Changer le Mot de Passe Admin

### Méthode 1: Via script
```bash
cd backend
node generate-password.js
```
Copie le hash généré et mets-le à jour dans la base de données.

### Méthode 2: Via SQL
```sql
UPDATE users 
SET password = '$2a$10$NOUVEAU_HASH_ICI' 
WHERE email = 'admin@foodirect.com';
```

### Méthode 3: Via l'API (à implémenter)
Utilise l'endpoint `/api/auth/change-password`

## 🐛 Dépannage

### Erreur: "Accès refusé"
- Vérifie que l'utilisateur a le rôle `admin` dans la DB
- Vérifie que le backend tourne sur le port 5001

### Erreur: "Email ou mot de passe incorrect"
- Vérifie les identifiants
- Vérifie que l'utilisateur existe dans la table `users`
- Vérifie que le hash du mot de passe est correct

### Redirection infinie
- Vide le localStorage du navigateur:
  ```javascript
  localStorage.clear()
  ```
- Recharge la page

### Backend non accessible
- Vérifie que le backend tourne: `http://localhost:5001`
- Vérifie le fichier `.env.local` dans le frontend:
  ```
  NEXT_PUBLIC_API_URL=http://localhost:5001/api
  ```

## 📝 Structure des Fichiers

```
frontend/
├── app/
│   └── admin/
│       ├── page.js          # Dashboard admin (protégé)
│       └── login/
│           └── page.js      # Page de connexion
└── .env.local               # Config API URL
```

## 🔄 Flux d'Authentification

```
1. User visite /admin
   ↓
2. Vérification du token dans localStorage
   ↓
3a. Token valide + role admin → Dashboard
3b. Pas de token → Redirect /admin/login
   ↓
4. Login avec email/password
   ↓
5. Backend vérifie credentials
   ↓
6. Token JWT généré et retourné
   ↓
7. Token stocké dans localStorage
   ↓
8. Redirect vers /admin (dashboard)
```

## 🎨 Personnalisation

### Changer le logo
Remplace `/assets/profile.png` par ton logo

### Changer les couleurs
Modifie les classes Tailwind dans:
- `frontend/app/admin/page.js`
- `frontend/app/admin/login/page.js`

### Ajouter des sections
Crée de nouvelles pages dans `frontend/app/admin/`

## 📊 Prochaines Fonctionnalités

- [ ] Gestion complète du menu (CRUD)
- [ ] Liste et détails des commandes
- [ ] Statistiques avec graphiques
- [ ] Gestion des utilisateurs
- [ ] Notifications en temps réel
- [ ] Export des données (CSV, PDF)
- [ ] Paramètres du restaurant

## 🆘 Support

En cas de problème:
1. Vérifie les logs du backend dans le terminal
2. Ouvre la console du navigateur (F12)
3. Vérifie que MySQL tourne
4. Vérifie que la base de données est importée

---

**FOODIRECT Admin** - Version 1.0 👨‍💼
