# 🔧 Correction du bug de déploiement

## ⚠️ GUIDE SIMPLIFIÉ

**👉 Consultez le fichier `QUICK_DEPLOY_GUIDE.md` pour le guide complet et simplifié.**

---

## Historique des problèmes corrigés

### Problème #1 : npm vs pnpm
❌ Le workflow utilisait `npm` alors que le projet utilise **pnpm**
✅ **Corrigé** : Utilise maintenant pnpm

### Problème #2 : Permissions manquantes
❌ GitHub Actions n'avait pas les droits d'écriture
✅ **Corrigé** : Documentation ajoutée pour configurer les permissions

### Problème #3 : Node.js obsolète
❌ Node.js 20 est dépréciée et sera retirée
✅ **Corrigé** : Migration vers Node.js 22

### Problème #4 : Workflow trop complexe
❌ Workflow avec 2 jobs (build + deploy) créait des problèmes
✅ **Corrigé** : Workflow simplifié en 1 seul job

## 📋 Actions à effectuer MAINTENANT

### Étape 1 : Configurer les permissions (IMPORTANT !)

1. Allez sur `https://github.com/Mike1908/portfolio/settings/actions`
2. Descendez jusqu'à **Workflow permissions**
3. Sélectionnez **Read and write permissions** ✅
4. Cochez **Allow GitHub Actions to create and approve pull requests** ✅
5. Cliquez sur **Save**

### Étape 2 : Configurer GitHub Pages

1. Allez sur `https://github.com/Mike1908/portfolio/settings/pages`
2. Sous **Source**, sélectionnez **Deploy from a branch**
3. Sous **Branch**, sélectionnez :
   - Branche : **gh-pages**
   - Dossier : **/ (root)**
4. Cliquez sur **Save**

**Note** : La branche `gh-pages` sera créée automatiquement lors du premier déploiement réussi. Si elle n'apparaît pas encore dans la liste, c'est normal, sélectionnez simplement "None" pour l'instant.

### Étape 3 : Pousser les corrections

```bash
# Ajouter les modifications
git add .

# Commiter
git commit -m "Fix GitHub Actions workflow"

# Pousser
git push origin main
```

### Étape 4 : Vérifier le déploiement

1. Allez sur `https://github.com/Mike1908/portfolio/actions`
2. Vous verrez un nouveau workflow en cours
3. Attendez qu'il se termine (environ 2-3 minutes)
4. Si c'est vert ✅ : Votre site est en ligne à `https://mike1908.github.io/portfolio/`
5. Si c'est rouge ❌ : Vérifiez que les permissions (Étape 1) sont bien configurées

## 🔍 Si le problème persiste

### Vérifier les logs détaillés

1. Allez dans **Actions**
2. Cliquez sur le workflow qui a échoué
3. Cliquez sur le job "deploy"
4. Lisez les messages d'erreur

### Erreurs courantes

**❌ "refusing to allow a GitHub App to create or update workflow"**
- Solution : Vérifiez l'Étape 1 ci-dessus (permissions)

**❌ "Resource not accessible by integration"**
- Solution : Vérifiez l'Étape 1 ci-dessus (permissions)

**❌ "gh-pages branch not found"**
- Solution : C'est normal au premier déploiement, elle sera créée automatiquement

## 📞 Besoin d'aide ?

Si le problème persiste après avoir suivi toutes ces étapes :
1. Faites une capture d'écran des logs d'erreur complets
2. Vérifiez que toutes les étapes 1 et 2 ont bien été effectuées
3. Essayez de relancer le workflow manuellement dans l'onglet Actions

---

## 🎉 Une fois que ça marche

Votre portfolio sera disponible à :
```
https://mike1908.github.io/portfolio/
```

Et sera automatiquement redéployé à chaque fois que vous pousserez sur `main` ! 🚀
