# 🖼️ Fix Images sur Netlify

## ✅ Changements effectués

J'ai corrigé la configuration pour que les images s'affichent sur Netlify :

### 1. `next.config.js` - Images non optimisées
```js
images: {
  unoptimized: true,  // ✅ Nécessaire pour Netlify
}
```

### 2. `netlify.toml` - Simplifié
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"  # ✅ Plugin essentiel
```

---

## 🔧 Étapes pour déployer

### 1. Commit et push les changements
```bash
git add .
git commit -m "Fix images sur Netlify"
git push origin main
```

### 2. Vérifier dans Netlify
Aller sur votre dashboard Netlify et :
- Attendre que le redéploiement se termine (2-3 min)
- Vérifier les logs de build
- Tester le site

---

## 🐛 Si les images ne s'affichent toujours pas

### Vérification 1 : Plugin Netlify installé ?
Dans Netlify Dashboard :
1. Aller dans **Site settings** → **Build & deploy** → **Build plugins**
2. Vérifier que `@netlify/plugin-nextjs` est installé
3. Sinon, l'activer manuellement

### Vérification 2 : Les images sont bien dans public/assets/ ?
```
public/
└── assets/
    ├── 1.png  ✅
    ├── 2.png  ✅
    ├── 3.png  ✅
    ├── 4.png  ✅
    ├── 5.png  ✅
    └── profile.png  ✅
```

### Vérification 3 : Chemins corrects dans le code ?
Les chemins doivent commencer par `/assets/` (pas `./assets/`) :
```jsx
<Image src="/assets/1.png" ... />  ✅ Correct
<Image src="./assets/1.png" ... /> ❌ Incorrect
```

### Vérification 4 : Console du navigateur
Ouvrir le site Netlify et faire F12 → Console :
- Si erreur 404 sur images → Problème de chemin
- Si erreur CORS → Problème de headers
- Si pas d'erreur → Problème d'affichage CSS

---

## 🔍 Debug en direct

### Tester les URLs des images directement
Ouvrir dans votre navigateur :
- `https://votre-site.netlify.app/assets/1.png`
- `https://votre-site.netlify.app/assets/2.png`

Si ça affiche les images → Le problème vient du composant Image de Next.js
Si ça n'affiche rien → Les images ne sont pas déployées

---

## ⚡ Solution alternative (si rien ne marche)

### Remplacer `<Image>` par `<img>` temporairement

**Dans `components/Hero/Hero.jsx` :**
```jsx
// Au lieu de :
<Image src="/assets/1.png" width={400} height={400} alt="..." />

// Utiliser :
<img src="/assets/1.png" alt="..." className="..." />
```

⚠️ **Inconvénient :** Perd l'optimisation automatique de Next.js

---

## 📋 Checklist de vérification

- [ ] `next.config.js` contient `images: { unoptimized: true }`
- [ ] `netlify.toml` contient le plugin `@netlify/plugin-nextjs`
- [ ] Les images sont dans `public/assets/`
- [ ] Les chemins commencent par `/assets/` (pas `./`)
- [ ] Le build local fonctionne : `npm run build`
- [ ] Changements committés et pushés sur GitHub
- [ ] Netlify a redéployé le site
- [ ] Tester les URLs des images directement dans le navigateur

---

## 🎯 Si tout échoue

Envoyez-moi les logs de build Netlify :
1. Aller dans **Deploys** dans Netlify
2. Cliquer sur le dernier deploy
3. Copier les logs complets
4. Je pourrai diagnostiquer le problème exact

---

**💡 Astuce :** Vider le cache du navigateur (Ctrl+F5) après chaque déploiement !
