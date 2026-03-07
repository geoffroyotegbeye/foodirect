# 🚀 Guide de Migration vers Next.js

Ce projet a été migré de **React + Vite** vers **Next.js 14** (App Router).

## 📋 Étapes à suivre pour terminer la migration

### 1️⃣ Déplacer les images

Vous devez déplacer toutes les images de `src/assets/` vers `public/assets/` :

```bash
# Créer le dossier public/assets
mkdir -p public/assets

# Déplacer les images
mv src/assets/*.png public/assets/
mv src/assets/profile.png public/assets/ 2>/dev/null || true
```

**Images à déplacer :**
- `1.png` → `public/assets/1.png`
- `2.png` → `public/assets/2.png`
- `3.png` → `public/assets/3.png`
- `4.png` → `public/assets/4.png`
- `5.png` → `public/assets/5.png`
- `profile.png` → `public/assets/profile.png`

### 2️⃣ Installer les dépendances Next.js

```bash
# Supprimer les anciens node_modules
rm -rf node_modules package-lock.json

# Installer Next.js et ses dépendances
npm install
```

### 3️⃣ Supprimer les anciens fichiers Vite

```bash
# Supprimer les fichiers Vite inutiles
rm -rf src/
rm index.html
rm vite.config.js
rm eslint.config.js
rm postcss.config.js 2>/dev/null || true
```

### 4️⃣ Lancer le projet Next.js

```bash
# Démarrer le serveur de développement
npm run dev
```

Votre application sera disponible sur **http://localhost:3000**

## 📁 Nouvelle structure du projet

```
foodeat-main/
├── app/                     # Next.js App Router
│   ├── layout.js           # Layout racine avec metadata
│   ├── page.js             # Page d'accueil
│   └── globals.css         # Styles globaux
├── components/             # Composants React
│   ├── Navbar/
│   ├── Hero/
│   ├── TopList/
│   ├── Banner/
│   ├── OurServices/
│   ├── Footer/
│   └── ScrollToTop/
├── public/                 # Assets statiques
│   └── assets/            # Images
│       ├── 1.png
│       ├── 2.png
│       ├── 3.png
│       ├── 4.png
│       └── 5.png
├── next.config.js         # Configuration Next.js
├── tailwind.config.js     # Configuration Tailwind
├── package.json           # Dépendances
└── .gitignore             # Fichiers ignorés

```

## ✨ Changements principaux

### 🔄 Composants adaptés pour Next.js

1. **Image Component** : Utilisation de `next/image` au lieu de `<img>`
   ```jsx
   import Image from "next/image";
   <Image src="/assets/1.png" width={400} height={400} alt="..." />
   ```

2. **'use client' Directive** : Composants avec hooks ou événements
   ```jsx
   'use client'
   import { useState } from 'react';
   ```

3. **Metadata SEO** : Dans `app/layout.js`
   ```js
   export const metadata = {
     title: 'FOODIRECT - Catering Cuisine Béninoise',
     description: '...'
   }
   ```

### 📦 Scripts npm

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarre le serveur de développement |
| `npm run build` | Crée un build de production |
| `npm start` | Lance le serveur de production |
| `npm run lint` | Vérifie le code avec ESLint |

## 🌐 Déploiement

Le projet est prêt pour être déployé sur **Vercel** (recommandé pour Next.js) :

1. Créez un compte sur [Vercel](https://vercel.com)
2. Connectez votre repository GitHub
3. Déployez en un clic !

Ou utilisez d'autres plateformes compatibles Next.js :
- **Netlify**
- **Railway**
- **AWS Amplify**
- **Azure Static Web Apps**

## 🔥 Avantages de Next.js

✅ **SEO optimisé** - Server-Side Rendering
✅ **Performance** - Optimisation automatique des images
✅ **Routing intégré** - Pas besoin de React Router
✅ **API Routes** - Backend intégré si nécessaire
✅ **Déploiement facile** - Vercel, Netlify, etc.
✅ **TypeScript ready** - Support natif de TypeScript

## 📞 Support

Si vous rencontrez des problèmes, vérifiez que :
- Node.js version ≥ 18.17
- Toutes les images sont dans `public/assets/`
- Les dépendances sont installées (`npm install`)

## 🎯 Prochaines étapes recommandées

1. ✅ Ajouter TypeScript pour plus de robustesse
2. ✅ Créer des API Routes pour le backend
3. ✅ Implémenter l'Internationalization (i18n)
4. ✅ Ajouter un CMS Headless (Sanity, Strapi)
5. ✅ Optimiser pour le SEO (sitemap, robots.txt)

---

**FOODIRECT** - Propulsé par Next.js 🚀
