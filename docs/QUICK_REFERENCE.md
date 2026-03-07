# ⚡ Quick Reference - FOODIRECT

Commandes et informations essentielles pour le développement.

## 🚀 Démarrage Rapide

### Backend
```bash
cd backend
npm install          # Première fois seulement
npm run dev         # Démarrer le serveur
```
URL: `http://localhost:5000`

### Frontend
```bash
cd frontend
npm install          # Première fois seulement
npm run dev         # Démarrer Next.js
```
URL: `http://localhost:3000`

## 📦 Commandes NPM

### Backend
```bash
npm start           # Production
npm run dev         # Développement (nodemon)
npm test            # Tester l'API
```

### Frontend
```bash
npm run dev         # Développement
npm run build       # Build production
npm start           # Serveur production
npm run lint        # Vérifier le code
```

## 🗄️ Base de Données

### Importer la DB
1. Ouvre phpMyAdmin: `http://localhost/phpmyadmin`
2. Importer → `backend/config/init-db.sql`
3. Exécuter

### Vérifier la connexion
```bash
cd backend
npm test
```

### Identifiants MySQL (par défaut)
```
Host: localhost
User: root
Password: (vide)
Database: foodirect
```

## 🔌 Endpoints API

### Menu
```bash
GET    /api/menu              # Tous les plats
GET    /api/menu/featured     # Plats en vedette
GET    /api/menu/:id          # Un plat
POST   /api/menu              # Créer (admin)
PUT    /api/menu/:id          # Modifier (admin)
DELETE /api/menu/:id          # Supprimer (admin)
```

### Commandes
```bash
POST   /api/orders            # Créer une commande
GET    /api/orders            # Toutes (admin)
GET    /api/orders/:id        # Une commande
PATCH  /api/orders/:id/status # Modifier statut (admin)
DELETE /api/orders/:id        # Supprimer (admin)
```

### Authentification
```bash
POST   /api/auth/register     # Inscription
POST   /api/auth/login        # Connexion
GET    /api/auth/profile      # Profil (auth)
PUT    /api/auth/profile      # Modifier profil (auth)
POST   /api/auth/change-password  # Changer mot de passe (auth)
```

## 🧪 Tests cURL

### Récupérer le menu
```bash
curl http://localhost:5000/api/menu
```

### Créer une commande
```bash
curl -X POST http://localhost:5000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customer_name": "Test",
    "customer_phone": "+229123456789",
    "customer_address": "Godomey",
    "items": [{"menu_id": 1, "quantity": 2}]
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@foodirect.com","password":"admin123"}'
```

## 🔐 Authentification

### Utiliser un token JWT
```bash
curl http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Identifiants Admin
```
Email: admin@foodirect.com
Password: (défini dans init-db.sql)
```

## 📁 Structure Rapide

```
foodirect/
├── backend/          # API Node.js
│   ├── config/      # DB config
│   ├── controllers/ # Logique
│   ├── routes/      # Routes
│   └── middleware/  # Auth & validation
│
├── frontend/        # Next.js
│   ├── app/        # Pages
│   ├── components/ # Composants React
│   └── data/       # Données statiques
│
└── docs/           # Documentation
```

## 🐛 Dépannage Rapide

### Backend ne démarre pas
```bash
# Vérifier MySQL
mysql -u root -p

# Vérifier le port
lsof -i :5000

# Voir les logs
cd backend && npm run dev
```

### Frontend ne démarre pas
```bash
# Nettoyer et réinstaller
rm -rf node_modules .next
npm install
npm run dev
```

### Erreur de connexion DB
```bash
# Vérifier .env
cat backend/.env

# Tester la connexion
cd backend && npm test
```

## 📊 Ports Utilisés

```
Frontend:  3000
Backend:   5000
MySQL:     3306
phpMyAdmin: 80 (ou 8080)
```

## 🔄 Workflow de Développement

1. Démarrer MySQL (XAMPP/MAMP)
2. Démarrer le backend: `cd backend && npm run dev`
3. Démarrer le frontend: `cd frontend && npm run dev`
4. Ouvrir: `http://localhost:3000`

## 📝 Variables d'Environnement

### Backend (.env)
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=foodirect
JWT_SECRET=your_secret_key
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 🎨 Composants Frontend

```
Hero          - Section d'accueil
MenuDuJour    - 3 plats en vedette
TopList       - Liste complète des plats
OrderForm     - Formulaire de commande
Testimonials  - Témoignages clients
Navbar        - Navigation + menu mobile
Banner        - Bannière promotionnelle
Footer        - Pied de page
```

## 🗃️ Tables MySQL

```
users        - Utilisateurs (admin/staff/customer)
menu         - Plats du restaurant
orders       - Commandes clients
order_items  - Détails des commandes
```

## 📚 Documentation Complète

- [Setup Complet](./SETUP_COMPLET.md)
- [Architecture](./ARCHITECTURE.md)
- [Backend API](./BACKEND_API.md)
- [Frontend Integration](./FRONTEND_BACKEND_INTEGRATION.md)

## 🆘 Aide

En cas de problème:
1. Vérifie les logs dans le terminal
2. Ouvre la console du navigateur (F12)
3. Consulte la documentation dans `docs/`
4. Vérifie que MySQL tourne

---

**FOODIRECT Quick Reference** ⚡
