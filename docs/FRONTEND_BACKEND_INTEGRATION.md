# 🔗 Intégration Frontend-Backend

Guide pour connecter le frontend Next.js au backend Node.js + MySQL.

## 📦 Installation des dépendances frontend

```bash
cd frontend
npm install axios
```

## 🔧 Configuration

### 1. Créer un fichier de configuration API

Crée `frontend/lib/api.js`:

```javascript
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter le token JWT
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

### 2. Créer les services API

Crée `frontend/services/menuService.js`:

```javascript
import api from '../lib/api';

export const menuService = {
  // Récupérer tous les plats
  getAllMenu: async () => {
    const response = await api.get('/menu');
    return response.data;
  },

  // Récupérer les plats en vedette
  getFeaturedMenu: async () => {
    const response = await api.get('/menu/featured');
    return response.data;
  },

  // Récupérer un plat par ID
  getMenuById: async (id) => {
    const response = await api.get(`/menu/${id}`);
    return response.data;
  },

  // Récupérer par catégorie
  getMenuByCategory: async (category) => {
    const response = await api.get(`/menu/category/${category}`);
    return response.data;
  },
};
```

Crée `frontend/services/orderService.js`:

```javascript
import api from '../lib/api';

export const orderService = {
  // Créer une commande
  createOrder: async (orderData) => {
    const response = await api.post('/orders', orderData);
    return response.data;
  },

  // Récupérer une commande par ID
  getOrderById: async (id) => {
    const response = await api.get(`/orders/${id}`);
    return response.data;
  },
};
```

Crée `frontend/services/authService.js`:

```javascript
import api from '../lib/api';

export const authService = {
  // Inscription
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  // Connexion
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  // Déconnexion
  logout: () => {
    localStorage.removeItem('token');
  },

  // Récupérer le profil
  getProfile: async () => {
    const response = await api.get('/auth/profile');
    return response.data;
  },
};
```

### 3. Variables d'environnement

Crée `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 🎯 Utilisation dans les composants

### Exemple 1: Récupérer le menu

```javascript
'use client'

import { useState, useEffect } from 'react';
import { menuService } from '../services/menuService';

export default function MenuList() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await menuService.getAllMenu();
        setMenu(data.data);
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) return <div>Chargement...</div>;

  return (
    <div>
      {menu.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.price} FCFA</p>
        </div>
      ))}
    </div>
  );
}
```

### Exemple 2: Créer une commande

```javascript
'use client'

import { useState } from 'react';
import { orderService } from '../services/orderService';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_phone: '',
    customer_address: '',
    items: [],
    notes: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const result = await orderService.createOrder(formData);
      alert('Commande créée avec succès!');
      console.log(result);
    } catch (error) {
      alert('Erreur lors de la création de la commande');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom"
        value={formData.customer_name}
        onChange={(e) => setFormData({...formData, customer_name: e.target.value})}
      />
      {/* Autres champs... */}
      <button type="submit">Commander</button>
    </form>
  );
}
```

## 🔄 Modifier le composant OrderForm existant

Modifie `frontend/components/OrderForm/OrderForm.jsx` pour utiliser l'API:

```javascript
'use client'

import { useState } from 'react';
import { orderService } from '../../services/orderService';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_phone: '',
    customer_address: '',
    delivery_type: 'standard',
    order_details: '',
    notes: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Parser les items depuis order_details
      const items = parseOrderDetails(formData.order_details);
      
      const orderData = {
        customer_name: formData.customer_name,
        customer_phone: formData.customer_phone,
        customer_address: formData.customer_address,
        items: items,
        notes: `${formData.notes} - Livraison: ${formData.delivery_type}`,
        payment_method: 'especes',
      };

      const result = await orderService.createOrder(orderData);
      
      alert('Commande créée avec succès! Nous vous contacterons bientôt.');
      
      // Réinitialiser le formulaire
      setFormData({
        customer_name: '',
        customer_phone: '',
        customer_address: '',
        delivery_type: 'standard',
        order_details: '',
        notes: '',
      });
    } catch (error) {
      alert('Erreur lors de la création de la commande. Veuillez réessayer.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour parser les détails de commande
  const parseOrderDetails = (details) => {
    // À implémenter selon le format des détails
    // Exemple simple: retourner un tableau vide pour l'instant
    return [];
  };

  // ... reste du composant
};
```

## 🚀 Démarrage

### Terminal 1 - Backend
```bash
cd backend
npm run dev
```

### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```

Le frontend sera sur `http://localhost:3000`
Le backend sera sur `http://localhost:5000`

## 🔒 Gestion de l'authentification

Pour les routes protégées, crée un contexte d'authentification:

`frontend/context/AuthContext.js`:

```javascript
'use client'

import { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const data = await authService.getProfile();
          setUser(data.data);
        } catch (error) {
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  const login = async (credentials) => {
    const data = await authService.login(credentials);
    setUser(data.user);
    return data;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
```

## 📝 Notes importantes

1. Installe CORS sur le backend (déjà fait)
2. Configure les variables d'environnement
3. Gère les erreurs avec try/catch
4. Utilise des états de chargement
5. Valide les données côté frontend ET backend
6. Sécurise les tokens JWT

## 🐛 Débogage

Si tu as des erreurs CORS:
- Vérifie que le backend tourne sur le port 5000
- Vérifie `FRONTEND_URL` dans `backend/.env`
- Vérifie que CORS est activé dans `backend/server.js`

Si les requêtes échouent:
- Ouvre la console du navigateur (F12)
- Vérifie l'onglet Network
- Regarde les logs du backend dans le terminal
