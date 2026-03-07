# 🚀 Guide de Déploiement sur Netlify

## 📋 Prérequis

- Compte GitHub (gratuit)
- Compte Netlify (gratuit)
- Votre projet FOODIRECT prêt

---

## 🔧 Étape 1 : Créer un repository GitHub

### Option A : Via GitHub Desktop (Plus facile)
1. Télécharger [GitHub Desktop](https://desktop.github.com/)
2. Se connecter avec votre compte GitHub
3. Cliquer sur **"Add"** → **"Add Existing Repository"**
4. Sélectionner le dossier `foodeat-main`
5. Faire un **Commit** avec message : "Initial commit"
6. Cliquer sur **"Publish repository"**
7. Nommer le repo : `foodirect-website`

### Option B : Via ligne de commande
```bash
cd c:/Users/akanni.otegbeye/Downloads/foodeat-main

git init
git add .
git commit -m "Initial commit - FOODIRECT Next.js"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/foodirect-website.git
git push -u origin main
```

---

## 🌐 Étape 2 : Déployer sur Netlify

### 1. Se connecter à Netlify
- Aller sur [netlify.com](https://www.netlify.com)
- Cliquer sur **"Sign up"** ou **"Log in"**
- Connectez-vous avec votre compte GitHub

### 2. Importer le projet
1. Cliquer sur **"Add new site"** → **"Import an existing project"**
2. Choisir **"Deploy with GitHub"**
3. Autoriser Netlify à accéder à vos repos GitHub
4. Sélectionner le repo **"foodirect-website"**

### 3. Configuration du build
Netlify devrait auto-détecter Next.js, mais vérifiez :

```
Build command: npm run build
Publish directory: .next
```

### 4. Variables d'environnement (optionnel)
Si vous avez des clés API plus tard :
- Aller dans **Site settings** → **Environment variables**
- Ajouter vos variables

### 5. Déployer
- Cliquer sur **"Deploy site"**
- Attendre 2-3 minutes
- Votre site sera sur : `https://random-name-123.netlify.app`

---

## ⚙️ Étape 3 : Configuration post-déploiement

### 1. Changer le nom du site
1. Aller dans **Site settings** → **Site details**
2. Cliquer sur **"Change site name"**
3. Choisir : `foodirect` ou `foodirect-cotonou`
4. Votre URL devient : `https://foodirect.netlify.app`

### 2. Mettre à jour l'URL dans le code
Modifier ces fichiers avec votre vraie URL Netlify :

**`app/layout.js`** - Ligne 22 :
```js
metadataBase: new URL('https://foodirect.netlify.app'),
```

**`app/page.js`** - Lignes 25, 26, 64 :
```js
"url": "https://foodirect.netlify.app",
```

**`app/sitemap.js`** - Ligne 2 :
```js
const baseUrl = 'https://foodirect.netlify.app'
```

**`public/robots.txt`** - Ligne 5 :
```
Sitemap: https://foodirect.netlify.app/sitemap.xml
```

### 3. Pousser les changements
```bash
git add .
git commit -m "Update URLs with Netlify domain"
git push
```

Netlify redéploiera automatiquement ! ✨

---

## 🎯 Étape 4 : Optimisations SEO

### 1. Ajouter un domaine personnalisé (optionnel)
1. Acheter un domaine : `foodirect.bj` ou `foodirect-cotonou.com`
2. Dans Netlify : **Domain settings** → **Add custom domain**
3. Suivre les instructions DNS

### 2. Activer HTTPS
- Automatique avec Netlify
- Certificat SSL gratuit via Let's Encrypt

### 3. Google Search Console
1. Aller sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajouter votre propriété : `https://foodirect.netlify.app`
3. Vérifier avec balise HTML ou Google Analytics
4. Soumettre le sitemap : `https://foodirect.netlify.app/sitemap.xml`

### 4. Vérification du code dans layout.js
Décommenter et ajouter votre code de vérification :
```js
verification: {
  google: 'votre-code-verification-google',
  bing: 'votre-code-verification-bing',
},
```

---

## 📊 Étape 5 : Analytics (Recommandé)

### Option 1 : Netlify Analytics (payant 9$/mois)
- Aller dans **Analytics** dans Netlify
- Activer

### Option 2 : Google Analytics (gratuit)
1. Créer un compte [Google Analytics](https://analytics.google.com)
2. Créer une propriété pour votre site
3. Copier le **Measurement ID** (G-XXXXXXXXXX)
4. Ajouter dans `app/layout.js` :

```js
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
```

---

## ✅ Checklist finale

Avant de partager votre site, vérifiez :

- [ ] Site accessible sur https://votre-site.netlify.app
- [ ] Toutes les images s'affichent
- [ ] Navigation fonctionne (Accueil, Menu, Services, À Propos)
- [ ] Bouton WhatsApp fonctionne
- [ ] Scroll to top apparaît
- [ ] Site responsive (tester sur mobile)
- [ ] Footer affiche les bonnes informations
- [ ] Numéro de téléphone correct : +229 01 91 26 04 34
- [ ] URLs mises à jour dans le code
- [ ] Sitemap accessible : /sitemap.xml
- [ ] Robots.txt accessible : /robots.txt
- [ ] Site soumis à Google Search Console

---

## 🔄 Workflow de mise à jour

Pour mettre à jour votre site après déploiement :

```bash
# 1. Faire vos modifications dans le code
# 2. Commiter les changements
git add .
git commit -m "Description des changements"

# 3. Pousser vers GitHub
git push

# 4. Netlify redéploie automatiquement en 2-3 minutes !
```

---

## 📱 Partager votre site

Une fois déployé, partagez :
- 🌐 Lien direct : `https://foodirect.netlify.app`
- 📱 WhatsApp : Envoyer le lien aux clients
- 📘 Facebook : Créer une page et partager
- 📸 Instagram : Mettre dans la bio

---

## 🆘 Problèmes courants

### Site ne se déploie pas
- Vérifier les logs de build dans Netlify
- S'assurer que `npm run build` fonctionne localement

### Images ne s'affichent pas
- Vérifier que les images sont dans `public/assets/`
- Chemins doivent commencer par `/assets/` (pas `./assets/`)

### Erreur 404
- Vérifier le `netlify.toml`
- Publish directory doit être `.next`

---

## 💰 Coûts

- **Netlify Starter** : GRATUIT
  - 100 GB bande passante/mois
  - 300 minutes build/mois
  - HTTPS automatique
  - Domaine Netlify gratuit

- **Domaine personnalisé** : ~10-15 $/an (optionnel)
- **Netlify Pro** : 19 $/mois (optionnel, pour plus de ressources)

---

## 🎉 Félicitations !

Votre site FOODIRECT est maintenant en ligne et optimisé pour le SEO ! 🚀

**URL de test du SEO :**
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

---

**Support Netlify :** [docs.netlify.com](https://docs.netlify.com)  
**Support Next.js :** [nextjs.org/docs](https://nextjs.org/docs)
