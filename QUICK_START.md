# 🚀 Démarrage Rapide - Portfolio Mike Useni

Guide ultra-simplifié pour démarrer en **5 minutes** !

## ⚡ Installation en 3 étapes

### 1️⃣ Installer les dépendances

```bash
cd portfolio
npm install
```

### 2️⃣ Configurer Supabase

1. Créer un compte sur [supabase.com](https://supabase.com) (gratuit)
2. Créer un nouveau projet
3. Copier les credentials :
   - URL du projet
   - Clé `anon` (publique)
   - Clé `service_role` (privée)
   - Connection string de la DB

### 3️⃣ Configurer l'environnement

```bash
# Copier le fichier d'exemple
cp .env.example .env.local

# Éditer .env.local avec vos vraies valeurs
```

Remplacer dans `.env.local` :
```env
DATABASE_URL="postgresql://postgres:[PASSWORD]@[HOST]/postgres"
NEXT_PUBLIC_SUPABASE_URL="https://[PROJECT].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="votre_cle_anon"
SUPABASE_SERVICE_ROLE_KEY="votre_cle_service"
ADMIN_EMAIL="usenimikesefu@gmail.com"
```

### 4️⃣ Initialiser la base de données

```bash
npm run db:generate
npm run db:push
```

### 5️⃣ Lancer le projet

```bash
npm run dev
```

Ouvrir [http://localhost:3000/fr](http://localhost:3000/fr) 🎉

## 📝 Ajouter vos données

### Option A : Interface graphique (Prisma Studio)

```bash
npm run db:studio
```

Cela ouvre une interface pour ajouter vos projets, expériences, etc.

### Option B : Directement dans Supabase

1. Aller dans votre projet Supabase
2. Cliquer sur `Table Editor`
3. Ajouter des données manuellement

## 🔐 Se connecter en tant qu'admin

1. Dans Supabase, aller dans `Authentication`
2. Cliquer sur `Add user` → `Create new user`
3. Entrer votre email (`ADMIN_EMAIL`)
4. Se connecter sur `/fr/dashboard`

## 🚢 Déployer sur Vercel

```bash
# Pousser sur GitHub
git init
git add .
git commit -m "Initial commit"
git push

# Sur vercel.com
1. Importer le repo GitHub
2. Copier les variables d'env depuis .env.local
3. Deploy !
```

## 🆘 Problèmes courants

### "Cannot find module @prisma/client"
```bash
npm run db:generate
```

### "Connection refused" (DB)
Vérifier que `DATABASE_URL` est correct dans `.env.local`

### Erreur d'authentification
Vérifier que `ADMIN_EMAIL` correspond à l'email dans Supabase Auth

## 📚 Prochaines étapes

1. ✅ Ajouter vos projets via Prisma Studio
2. ✅ Personnaliser les couleurs dans `tailwind.config.ts`
3. ✅ Modifier les traductions dans `messages/`
4. ✅ Ajouter vos liens GitHub/LinkedIn dans les composants
5. ✅ Déployer sur Vercel

## 💡 Commandes utiles

```bash
npm run dev          # Lancer en développement
npm run build        # Build de production
npm run lint         # Vérifier le code
npm run format       # Formater le code
npm run db:studio    # Ouvrir Prisma Studio
npm run type-check   # Vérifier les types
```

---

🎯 **Besoin d'aide ?** Consultez `SETUP.md` pour un guide détaillé ou `ARCHITECTURE.md` pour comprendre la structure.

Bon développement ! 🚀
