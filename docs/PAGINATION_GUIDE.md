# Guide de la Pagination

## Vue d'ensemble

La pagination a été implémentée sur les pages suivantes:
- **Gestion du Menu** (`/admin/menu`)
- **Gestion des Utilisateurs** (`/admin/users`)

## Fonctionnalités

### Backend
- Paramètres de requête: `?page=1&limit=10`
- Métadonnées retournées:
  ```json
  {
    "success": true,
    "data": [...],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 18,
      "totalPages": 2,
      "hasNext": true,
      "hasPrev": false
    }
  }
  ```

### Frontend
- **10 items par page** par défaut
- **Persistance de la page** dans localStorage
  - Menu: clé `menuPage`
  - Utilisateurs: clé `usersPage`
- **Navigation**:
  - Boutons: `««` (première page), `« Précédent`, numéros de pages, `Suivant »`, `»»` (dernière page)
  - Ellipsis (`...`) pour les pages non affichées
  - Page actuelle en surbrillance (fond orange)
- **Responsive**: Boutons adaptés mobile/desktop

## Test de la Pagination

### 1. Vérifier les données
```bash
cd backend
npm run seed
```
Cela créera 18 plats (2 pages avec 10 items/page).

### 2. Démarrer le backend
```bash
cd backend
npm run dev
```

### 3. Démarrer le frontend
```bash
cd frontend
npm run dev
```

### 4. Tester la pagination Menu
1. Aller sur `http://localhost:3000/admin/login`
2. Se connecter avec:
   - Email: `admin@foodirect.com`
   - Mot de passe: `admin123`
3. Aller sur **Gestion du Menu**
4. Vérifier que la pagination apparaît en bas
5. Cliquer sur "Suivant" ou "2" pour aller à la page 2
6. Actualiser la page → doit rester sur la page 2 (persistance)

### 5. Tester la pagination Utilisateurs
1. Aller sur **Gestion des Utilisateurs**
2. Si moins de 10 utilisateurs, créer des utilisateurs de test
3. Vérifier la pagination

## Logs Backend

Chaque requête affiche:
```
📋 [GET] Récupération des plats - Page 1, Limite 10
✓ 10 plat(s) récupéré(s) sur 18 total (Page 1/2)
```

## Comportement

- **Sélection multiple**: Réinitialisée lors du changement de page
- **Scroll**: Retour en haut de page automatique
- **Affichage**: Pagination visible uniquement si `totalPages > 1`
- **Désactivation**: Boutons désactivés si pas de page suivante/précédente

## Personnalisation

Pour changer le nombre d'items par page, modifier:
```javascript
const [pagination, setPagination] = useState({
  page: 1,
  limit: 10, // ← Changer ici
  // ...
});
```
