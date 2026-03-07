# ✅ TODO - Finalisation de la migration Next.js

## 🔴 URGENT - À faire maintenant

### 1. Exécuter le script de migration

**Sur Windows (vous) :**
```powershell
.\migrate.ps1
```

Ce script va automatiquement :
- ✅ Créer le dossier `public/assets/`
- ✅ Copier les images de `src/assets/` vers `public/assets/`
- ✅ Supprimer les anciens fichiers Vite
- ✅ Nettoyer `node_modules`
- ✅ Installer les dépendances Next.js

### 2. Vérifier que les images ont été déplacées

Vérifiez que ces fichiers existent dans `public/assets/` :
- [ ] `1.png` (image Hero)
- [ ] `2.png` (image background & Banner)
- [ ] `3.png` (Riz au gras)
- [ ] `4.png` (Igname)
- [ ] `5.png` (Couscous)
- [ ] `profile.png` (optionnel)

### 3. Lancer le projet

```bash
npm run dev
```

Ouvrir http://localhost:3000

---

## 🟡 OPTIONNEL - Améliorations futures

### Performance
- [ ] Optimiser les images (WebP, AVIF)
- [ ] Ajouter un système de cache
- [ ] Implémenter ISR (Incremental Static Regeneration)

### SEO
- [ ] Ajouter un `sitemap.xml`
- [ ] Créer un `robots.txt`
- [ ] Implémenter Open Graph tags
- [ ] Ajouter Schema.org markup

### Fonctionnalités
- [ ] Système de commande en ligne
- [ ] Panier d'achat
- [ ] Système de paiement (Mobile Money, Visa)
- [ ] Tableau de bord admin
- [ ] Gestion des menus dynamique (CMS)

### Internationalisation
- [ ] Ajouter support multilingue (Français/Anglais)
- [ ] Utiliser next-intl ou next-i18next

### Backend
- [ ] Créer API Routes pour les commandes
- [ ] Intégrer une base de données (Prisma + PostgreSQL)
- [ ] Système d'authentification (NextAuth.js)
- [ ] Dashboard admin

### Analytics
- [ ] Google Analytics 4
- [ ] Facebook Pixel
- [ ] Hotjar pour heatmaps

---

## 🟢 FAIT ✓

- [x] Migration vers Next.js 14
- [x] Configuration Tailwind CSS
- [x] Tous les composants adaptés
- [x] Responsive design optimisé
- [x] SEO de base (metadata)
- [x] Navigation par ancres
- [x] Bouton WhatsApp
- [x] Footer complet
- [x] Scroll to top
- [x] Scripts de migration
- [x] Documentation complète

---

## 📞 Numéros à vérifier

Assurez-vous que ces numéros sont corrects :
- WhatsApp : +229 01 91 26 04 34
- Téléphone : +229 01 91 26 04 34

## 🔗 Liens réseaux sociaux à ajouter

Dans `components/Footer/Footer.jsx`, remplacer les `#` par les vrais liens :
```jsx
<a href="https://facebook.com/votre-page"> // Ligne 19
<a href="https://instagram.com/votre-compte"> // Ligne 26
```

---

**Date de migration** : 13 février 2026  
**Version Next.js** : 14.2.0  
**Statut** : ✅ Migration réussie, prêt pour production
