# Guide de déploiement sur GitHub Pages

Ce guide vous explique comment déployer votre portfolio sur GitHub Pages.

## 🚀 Méthode 1 : Déploiement automatique avec GitHub Actions (Recommandé)

### Configuration préalable

Toutes les configurations nécessaires ont déjà été faites :
- ✅ `next.config.ts` configuré pour l'export statique
- ✅ Workflow GitHub Actions créé (`.github/workflows/deploy.yml`)
- ✅ Fichier `.nojekyll` ajouté

### Étapes de déploiement

#### 1. Configurer les permissions GitHub Actions

1. Allez sur votre dépôt GitHub : `https://github.com/Mike1908/portfolio`
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Actions** > **General**
4. Descendez jusqu'à **Workflow permissions**
5. Sélectionnez **Read and write permissions**
6. Cochez **Allow GitHub Actions to create and approve pull requests**
7. Cliquez sur **Save**

#### 2. Activer GitHub Pages

1. Dans **Settings**, cliquez sur **Pages**
2. Sous **Source**, sélectionnez **Deploy from a branch**
3. Choisissez la branche **gh-pages** et le dossier **/ (root)**
4. Cliquez sur **Save**

#### 3. Pousser vos modifications

```bash
# Ajouter tous les fichiers modifiés
git add .

# Créer un commit
git commit -m "Configure GitHub Pages deployment"

# Pousser vers GitHub
git push origin main
```

#### 4. Vérifier le déploiement

1. Allez dans l'onglet **Actions** de votre dépôt
2. Vous verrez le workflow "Deploy to GitHub Pages" en cours d'exécution
3. Attendez que le workflow se termine (environ 2-3 minutes)
4. Une fois terminé, votre site sera disponible à : `https://mike1908.github.io/portfolio/`

### Déploiements futurs

À chaque fois que vous pousserez du code sur la branche `main`, le site sera automatiquement redéployé !

---

## 🔧 Méthode 2 : Déploiement manuel avec gh-pages

Si vous préférez déployer manuellement :

### 1. Installer gh-pages

```bash
pnpm add -D gh-pages
# Ou avec npm
npm install --save-dev gh-pages
```

### 2. Déployer

```bash
pnpm deploy
# Ou avec npm
npm run deploy
```

Cette commande va :
- Construire votre site Next.js
- Créer un fichier `.nojekyll`
- Pousser le dossier `out` vers la branche `gh-pages`

### 3. Configurer GitHub Pages

1. Allez sur **Settings** > **Pages**
2. Sous **Source**, sélectionnez **Deploy from a branch**
3. Choisissez la branche **gh-pages** et le dossier **/ (root)**
4. Cliquez sur **Save**

Votre site sera disponible à : `https://mike1908.github.io/portfolio/`

---

## 🌐 URL du site

Une fois déployé, votre portfolio sera accessible à :
```
https://mike1908.github.io/portfolio/
```

## 🔄 Mise à jour du site

### Avec GitHub Actions (Automatique)
Poussez simplement vos modifications sur `main` :
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

### Avec gh-pages (Manuel)
```bash
npm run deploy
```

---

## 🐛 Dépannage

### Le site ne s'affiche pas correctement

1. Vérifiez que `basePath: '/portfolio'` est bien dans `next.config.ts`
2. Assurez-vous que tous les liens internes utilisent des chemins relatifs
3. Vérifiez que le fichier `.nojekyll` existe

### Les images ne s'affichent pas

Vérifiez que `images.unoptimized: true` est bien dans `next.config.ts` (déjà configuré)

### Erreur lors du déploiement

1. **Vérifiez les permissions** (cause #1 la plus fréquente) :
   - Allez dans **Settings** > **Actions** > **General**
   - Sous **Workflow permissions**, sélectionnez **Read and write permissions**
   - Cochez **Allow GitHub Actions to create and approve pull requests**
   - Cliquez sur **Save**

2. **Vérifiez la configuration GitHub Pages** :
   - Allez dans **Settings** > **Pages**
   - Source doit être **Deploy from a branch**
   - Branche doit être **gh-pages** avec dossier **/ (root)**

3. **Vérifiez les logs** dans l'onglet **Actions** pour plus de détails

4. **Relancez le workflow** :
   - Allez dans **Actions**
   - Cliquez sur le workflow échoué
   - Cliquez sur **Re-run all jobs**

---

## 📝 Notes importantes

- Le déploiement prend environ 2-3 minutes
- Utilisez `npm run dev` pour tester localement avant de déployer
- Le site est statique (export Next.js), donc pas de fonctionnalités serveur (API Routes, SSR)
- Les modifications sont automatiquement déployées à chaque push sur `main`

---

## 🎉 Félicitations !

Votre portfolio est maintenant en ligne et accessible au monde entier ! 🌍
