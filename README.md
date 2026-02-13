# FOODIRECT - Restaurant Béninois 🍽️

Site web de **FOODIRECT Catering**, restaurant de cuisine béninoise authentique situé à Ganhi, Cotonou.

## 🚀 Technologies

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **React Icons**

## 📦 Installation

### Migration automatique (Recommandé)

**Sur Windows (PowerShell) :**
```powershell
.\migrate.ps1
```

**Sur Mac/Linux (Bash) :**
```bash
chmod +x migrate.sh
./migrate.sh
```

### Installation manuelle

1. **Déplacer les images** vers `public/assets/`
   ```bash
   mkdir -p public/assets
   cp src/assets/*.png public/assets/
   ```

2. **Installer les dépendances**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Supprimer les anciens fichiers Vite**
   ```bash
   rm -rf src/
   rm index.html vite.config.js eslint.config.js
   ```

4. **Lancer le projet**
   ```bash
   npm run dev
   ```

Ouvrez [http://localhost:3000](http://localhost:3000)

## 📋 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarre le serveur de développement |
| `npm run build` | Crée un build de production |
| `npm start` | Lance le serveur de production |
| `npm run lint` | Vérifie le code avec ESLint |

## 📁 Structure du projet

```
foodeat-main/
├── app/                    # Next.js App Router
│   ├── layout.js          # Layout principal
│   ├── page.js            # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/            # Composants React
│   ├── Navbar/
│   ├── Hero/
│   ├── TopList/
│   ├── Banner/
│   ├── OurServices/
│   ├── Footer/
│   └── ScrollToTop/
├── public/
│   └── assets/            # Images
└── tailwind.config.js     # Configuration Tailwind
```

## 🌟 Fonctionnalités

✅ Design responsive (Mobile-first)  
✅ Navigation avec ancres  
✅ Bouton WhatsApp pour commandes  
✅ Scroll to top  
✅ Optimisation SEO  
✅ Footer complet avec coordonnées  
✅ Images optimisées avec Next.js Image  

## 📞 Contact FOODIRECT

- **Adresse** : Ganhi, en face du Marché, près de LG, Cotonou
- **Téléphone** : +229 01 91 26 04 34
- **WhatsApp** : [Commander](https://wa.me/2290191260434)
- **Prix** : À partir de 500 FCFA

## 🍽️ Nos Spécialités

- Riz au Gras Créole - 800 FCFA
- Igname et Jus d'Œuf - 500 FCFA
- Couscous Garni - 700 FCFA

## 🚀 Déploiement

Déployez facilement sur **Vercel** :

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📖 Documentation

Consultez le [Guide de Migration](./MIGRATION_GUIDE.md) pour plus de détails.

## 📄 Licence

Tous droits réservés © 2024 FOODIRECT Catering
