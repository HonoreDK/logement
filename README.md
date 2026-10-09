# Dossier Logement Disponible - React PWA

Landing page React Progressive Web App inspirée du site dossierlogementdisponible.fr.

## Installation

```bash
cd dossier-logement-pwa
npm install
```

## Lancer en développement

```bash
npm run dev
```

## Build production (PWA)

```bash
npm run build
npm run preview
```

Le build génère automatiquement le service worker et le manifest PWA grâce à vite-plugin-pwa.

## Fonctionnalités

- Design mobile-first responsive
- Toutes les sections de la landing page
- Formulaire modal
- FAQ accordéon
- Menu mobile
- PWA installable (manifest + service worker)
- Tailwind CSS

## Notes

- Les icônes PWA (pwa-192x192.png, pwa-512x512.png) doivent être ajoutées dans /public
- Le formulaire est en mode démonstration (pas de backend)
- Pour brancher un vrai backend (Formspree, email, etc.), modifier la fonction handleSubmit dans FormModal
