# 🚀 Guide de déploiement rapide - VERSION FINALE

## ✅ Ce que j'ai corrigé

1. ✅ Mis à jour vers **Node.js 22** (au lieu de 20 qui est obsolète)
2. ✅ Utilisé **pnpm v9** avec configuration correcte
3. ✅ Simplifié le workflow (un seul job au lieu de deux)
4. ✅ Ajouté un cache pnpm pour accélérer les builds
5. ✅ Build fonctionne localement ✅

## 📋 Étapes à suivre MAINTENANT

### Étape 1 : Configurer les permissions (CRITIQUE !)

Allez ici : `https://github.com/Mike1908/portfolio/settings/actions`

1. Descendez à **Workflow permissions**
2. Sélectionnez **"Read and write permissions"** ✅
3. Cochez **"Allow GitHub Actions to create and approve pull requests"** ✅
4. Cliquez sur **Save**

**⚠️ SANS CETTE ÉTAPE, ÇA NE FONCTIONNERA PAS !**

### Étape 2 : Pousser les changements

```bash
git add .
git commit -m "Final fix: Use Node 22 and simplified workflow"
git push origin main
```

### Étape 3 : Configurer GitHub Pages

**Attendez 2-3 minutes que le workflow se termine, PUIS :**

1. Allez ici : `https://github.com/Mike1908/portfolio/settings/pages`
2. Sous **Source**, sélectionnez **"Deploy from a branch"**
3. Sous **Branch**, sélectionnez :
   - Branche : **gh-pages** ← (cette branche sera créée par le workflow)
   - Dossier : **/ (root)**
4. Cliquez sur **Save**

**Note** : Si `gh-pages` n'apparaît pas encore, attendez que le workflow se termine avec succès, puis rafraîchissez la page.

### Étape 4 : Vérifier

1. Allez dans **Actions** : `https://github.com/Mike1908/portfolio/actions`
2. Attendez que le workflow soit ✅ VERT
3. Votre site sera disponible à : **`https://mike1908.github.io/portfolio/`**

---

## 🔍 Dépannage

### Le workflow échoue toujours ?

**Vérifiez les permissions (Étape 1) !** C'est la cause #1 des échecs.

### "gh-pages branch not found" ?

C'est normal ! La branche sera créée automatiquement lors du premier déploiement réussi.

### Le site ne s'affiche pas ?

1. Vérifiez que le workflow est ✅ vert dans Actions
2. Attendez 5-10 minutes (propagation DNS)
3. Effacez le cache de votre navigateur (Cmd+Shift+R sur Mac)

---

## ✨ Une fois que ça marche

Votre portfolio sera automatiquement redéployé à chaque fois que vous pousserez sur `main` !

```bash
# Faites vos modifications
git add .
git commit -m "Update portfolio"
git push origin main

# Attendez 2-3 minutes
# ✅ Site mis à jour automatiquement !
```

---

## 🎯 Checklist finale

- [ ] Permissions configurées (Étape 1)
- [ ] Code poussé sur GitHub (Étape 2)
- [ ] Workflow ✅ vert dans Actions
- [ ] GitHub Pages configuré (Étape 3)
- [ ] Site accessible à `https://mike1908.github.io/portfolio/`

---

## 💡 Pourquoi ça va fonctionner maintenant

1. **Node.js 22** : Version stable et à jour
2. **pnpm v9** : Configuration correcte avec cache
3. **Workflow simplifié** : Un seul job, plus simple = moins d'erreurs
4. **Build testé localement** : Le build fonctionne ✅
5. **peaceiris/actions-gh-pages** : Action fiable et éprouvée

C'est parti ! 🚀
