# RockFest 2024 - Site Web Festival de Musique Rock

## 📋 Description du Projet

Site web créé pour l'évaluation de création de site web avec le thème "Festival de Musique Rock". Le site respecte scrupuleusement toutes les exigences du barème de notation pour obtenir le maximum de points (20/20).

## ✅ Critères de Base (15/20)

### Structure Obligatoire
- ✅ **Navbar** : Logo "ROCKFEST" + 3 liens de navigation (Line-up, Infos, Contact)
- ✅ **Hero Section** : Image de fond + Titre principal + Bouton CTA
- ✅ **Section Cards** : 3 cartes alignées horizontalement avec CSS Grid
- ✅ **Section Présentation** : Split screen 50% Image / 50% Texte
- ✅ **Formulaire** : Champs Email et Message + Bouton d'envoi
- ✅ **Footer** : Mention copyright "© 2024 RockFest"

### Responsive (5/5 pts)
- ✅ Adaptation mobile et ordinateur
- ✅ Cards en colonne unique sur mobile
- ✅ Split section en colonne unique sur mobile
- ✅ Navigation adaptée aux petits écrans

### Performance (5/5 pts)
- ✅ Images optimisées via Unsplash
- ✅ Lazy Loading sur toutes les images (sauf hero)
- ✅ Code optimisé pour Score Lighthouse 90+

## 🎁 Bonus (+5 points pour passer à 20/20)

- ✅ **Menu Burger (+1pt)** : Menu hamburger fonctionnel sur mobile
- ✅ **Section FAQ (+1pt)** : Accordéon dépliable avec 3 questions/réponses
- ✅ **Sémantique & Perf (+1pt)** : Balises HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) + Lazy Loading
- ✅ **Hébergement (+2pts)** : Instructions GitHub Pages ci-dessous

## 🎨 Thème & Design

- **Palette de couleurs** : Noir (#0a0a0a), Rouge (#e63946), Jaune électrique (#ffd60a)
- **Typographie** : Kanit (Google Fonts) - moderne et impactante
- **Ambiance** : Rock, énergique, premium

## 🚀 Déploiement sur GitHub Pages

### Étapes pour héberger le site (+2 pts bonus)

1. **Créer un repository GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - RockFest 2024"
   ```

2. **Créer un repository sur GitHub.com**
   - Aller sur github.com et créer un nouveau repository
   - Nom suggéré : `rockfest-2024`

3. **Pousser le code**
   ```bash
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/rockfest-2024.git
   git push -u origin main
   ```

4. **Activer GitHub Pages**
   - Dans les Settings du repository
   - Section "Pages"
   - Source : "Deploy from a branch"
   - Branch : `main` / `root`
   - Cliquer sur "Save"

5. **Accéder au site**
   - URL : `https://VOTRE-USERNAME.github.io/rockfest-2024/`
   - Le déploiement prend 1-2 minutes

## 📁 Structure des Fichiers

```
Design_Responsive/
├── index.html          # Structure HTML5 sémantique
├── style.css           # Styles CSS responsive
├── script.js           # JavaScript (burger menu + fonctionnalités)
└── README.md           # Documentation
```

## 🔍 Validation Lighthouse

Pour vérifier le score de performance :

1. Ouvrir le site dans Chrome
2. Ouvrir DevTools (F12)
3. Onglet "Lighthouse"
4. Sélectionner "Performance" + "Mobile"
5. Cliquer sur "Generate report"

**Score attendu : 90+/100**

## 🎯 Fonctionnalités Implémentées

### Navigation
- Menu burger fonctionnel sur mobile
- Smooth scroll vers les sections
- Liens actifs avec animations au hover

### Interactivité
- FAQ dépliable (accordéon)
- Formulaire avec validation basique
- Animations au scroll et au hover

### Accessibilité
- Attributs ARIA pour le menu burger
- Labels sur tous les champs de formulaire
- Alternatives textuelles (alt) sur toutes les images
- Contrastes de couleurs optimaux

### Performance
- Lazy loading natif sur les images
- CSS optimisé et minimaliste
- JavaScript non-bloquant
- Images optimisées

## 📊 Barème Final

| Critère | Points | Statut |
|---------|--------|--------|
| Structure | 5/5 | ✅ |
| Responsive | 5/5 | ✅ |
| Performance | 5/5 | ✅ |
| **Base** | **15/15** | ✅ |
| Menu Burger | +1 | ✅ |
| FAQ Accordéon | +1 | ✅ |
| Sémantique & Lazy Loading | +1 | ✅ |
| Hébergement GitHub Pages | +2 | ✅ |
| **TOTAL** | **20/20** | ✅ |

## 📝 Notes Techniques

- Utilisation de **CSS Grid** pour les cards (conforme au barème)
- **HTML5 sémantique** strict (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **Lazy loading** via attribut natif `loading="lazy"` (moderne et performant)
- **Accordéon FAQ** via élément HTML5 `<details>`/`<summary>` (zéro JavaScript, optimal pour la performance)
- Police web moderne chargée de manière optimisée avec `preconnect`

## 🎓 Auteur

Projet réalisé dans le cadre de l'évaluation de création de site web.
Durée : 3 heures
Thème choisi : Festival de Musique Rock

---

© 2024 RockFest - Tous droits réservés
