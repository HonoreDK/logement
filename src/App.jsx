import { useState } from 'react'

function Header({ onOpenForm }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span className="font-bold text-slate-900 text-sm tracking-tight">DOSSIER LOGEMENT</span>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-lg hover:bg-slate-100" aria-label="Menu">
          <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-white border-b border-slate-100 shadow-lg">
          <nav className="max-w-lg mx-auto px-4 py-4 flex flex-col gap-1">
            {['Comment ça marche', 'Avis clients', 'Tarifs', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} onClick={() => setMenuOpen(false)} className="py-3 px-2 text-slate-700 font-medium hover:bg-slate-50 rounded-lg">{item}</a>
            ))}
            <button onClick={() => { setMenuOpen(false); onOpenForm(); }} className="mt-2 w-full bg-blue-600 text-white font-semibold py-3 rounded-xl">Remplir le formulaire →</button>
          </nav>
        </div>
      )}
    </header>
  )
}

function Hero({ onOpenForm }) {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-slate-900 text-white text-xs py-2">
        <div className="max-w-lg mx-auto px-4 flex flex-wrap justify-center gap-x-4 gap-y-1">
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>Service 100% privé & indépendant</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>Analyse humaine personnalisée</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>Satisfait ou remboursé 30 jours</span>
        </div>
      </div>
      <div className="max-w-lg mx-auto px-4 pt-8 pb-10">
        <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
          <span className="text-emerald-500">✦</span> +800 DOSSIERS ACCOMPAGNÉS
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
          Votre dossier,<br />votre <span className="text-blue-600 underline decoration-blue-200 underline-offset-4">meilleure</span><br />chance de louer
        </h1>
        <p className="text-slate-600 text-[15px] leading-relaxed mb-7">
          Nous analysons, structurons et optimisons votre candidature logement pour maximiser vos chances face aux bailleurs — et vous accompagnons jusqu'à l'obtention de votre logement. HLM ou location privée, partout en France et dans les DOM-TOM.
        </p>
        <button onClick={onOpenForm} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl shadow-lg shadow-blue-600/25 transition active:scale-[0.98] flex items-center justify-center gap-2">
          Remplir le formulaire <span>→</span>
        </button>
        <button className="w-full mt-3 border border-slate-200 text-slate-700 font-medium py-3.5 rounded-2xl hover:bg-slate-50 transition">Voir comment ça marche</button>
        <div className="mt-6 flex flex-col gap-2 text-sm text-slate-600">
          {['Paiement par virement bancaire', 'Réponse sous 24h', 'Remboursé si insatisfait'].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const items = [
    { value: '800+', label: 'Dossiers accompagnés' },
    { value: '96%', label: 'Taux de satisfaction' },
    { value: '24h', label: 'Délai de réponse moyen' },
    { value: '30j', label: 'Garantie remboursée' },
  ]
  return (
    <section className="max-w-lg mx-auto px-4 py-6">
      <div className="bg-slate-900 rounded-2xl p-5 grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.label} className="text-center">
            <div className="text-2xl font-bold text-white">{item.value}</div>
            <div className="text-xs text-slate-400 mt-0.5">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Tags() {
  const tags = [
    { icon: '🏢', label: 'HLM / Logement social' },
    { icon: '🏠', label: 'Location privée' },
    { icon: '📄', label: 'Dossier locataire' },
    { icon: '🛡️', label: 'Garant & caution' },
    { icon: '📍', label: 'Toute la France & DOM-TOM' },
  ]
  return (
    <section className="max-w-lg mx-auto px-4 py-4">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Nous accompagnons :</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t.label} className="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-700 text-sm px-3 py-1.5 rounded-full">
            <span>{t.icon}</span> {t.label}
          </span>
        ))}
      </div>
    </section>
  )
}

function Method() {
  const steps = [
    { num: '01', title: 'Décrivez votre situation', desc: 'Remplissez notre formulaire en ligne en 5 minutes : profil, projet logement, contraintes personnelles.', badge: '5 minutes', color: 'bg-blue-100 text-blue-700' },
    { num: '02', title: 'Nos experts analysent votre dossier', desc: 'Un conseiller humain examine votre profil, identifie les points forts à valoriser et les faiblesses à corriger.', badge: 'Sous 24h', color: 'bg-emerald-100 text-emerald-700' },
    { num: '03', title: 'Recevez votre plan d\'action', desc: 'Rapport complet, conseils sur mesure, documents à préparer : tout ce qu\'il faut pour convaincre.', badge: 'Résultats concrets', color: 'bg-orange-100 text-orange-700' },
  ]
  return (
    <section id="comment-ça-marche" className="max-w-lg mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">NOTRE MÉTHODE</span>
        <h2 className="text-2xl font-bold text-slate-900">Simple, humain, efficace</h2>
        <p className="text-slate-600 text-sm mt-2">En 3 étapes claires, votre dossier passe du brouillon au dossier qui convainc les bailleurs.</p>
      </div>
      <div className="space-y-4">
        {steps.map((s) => (
          <div key={s.num} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700 shrink-0">{s.num}</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{s.desc}</p>
                <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${s.color}`}>⏱ {s.badge}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  const reviews = [
    { name: 'Marie T.', detail: 'CDI — Lyon · T2 trouvé en 3 semaines', text: 'Mon dossier était refusé partout depuis presque un an. Après l\'analyse, j\'ai compris ce qui bloquait. Accepté au 2e dossier !', badge: 'Vérifié · Client accompagné', color: 'bg-blue-500' },
    { name: 'Karim B.', detail: 'Auto-entrepreneur — Paris · T3', text: 'En tant qu\'auto-entrepreneur, impossible de convaincre les propriétaires. Le rapport m\'a appris à présenter mes revenus. Accepté au 2e dossier !', badge: 'Vérifié · Prioritaire', color: 'bg-emerald-500' },
    { name: 'Sophie L.', detail: 'Logement social — Marseille', text: 'Je cherchais un HLM depuis 2 ans. L\'équipe m\'a expliqué comment reformuler ma demande. Ma demande est remontée en priorité en quelques semaines.', badge: 'Vérifié · Client accompagné', color: 'bg-orange-500' },
    { name: 'Amina D.', detail: 'CDD — Bordeaux · T2', text: 'Service vraiment sérieux. Un vrai regard humain sur notre situation. La conseillère a identifié des erreurs que je n\'aurais jamais trouvées seule.', badge: 'Vérifié · Prioritaire', color: 'bg-purple-500' },
  ]
  return (
    <section id="avis-clients" className="max-w-lg mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">AVIS VÉRIFIÉS</span>
        <h2 className="text-2xl font-bold text-slate-900">Ils ont trouvé leur logement</h2>
        <p className="text-slate-600 text-sm mt-2">Des centaines de familles et personnes seules accompagnées chaque année.</p>
      </div>
      <div className="space-y-4">
        {reviews.map((r) => (
          <div key={r.name} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-full ${r.color} text-white font-bold flex items-center justify-center`}>{r.name[0]}</div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">{r.name}</div>
                <div className="text-xs text-slate-500">{r.detail}</div>
              </div>
            </div>
            <div className="flex gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">"{r.text}"</p>
            <span className="inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">✓ {r.badge}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Commitments() {
  const items = [
    { icon: '🔍', title: 'Analyse 100% humaine', desc: 'Un conseiller en chair et en os lit votre dossier et rédige votre rapport. Pas un algorithme.' },
    { icon: '⚡', title: 'Réponse sous 24h', desc: 'Du lundi au vendredi, vous recevez votre analyse et vos conseils personnalisés en moins d\'une journée.' },
    { icon: '🔒', title: 'Données protégées RGPD', desc: 'Vos informations sont confidentielles, jamais revendues à des tiers, supprimées sur simple demande.' },
    { icon: '✅', title: 'Remboursé sous 30 jours', desc: 'Si vous n\'êtes pas satisfait de notre accompagnement, nous vous remboursons intégralement. Sans discussion.' },
  ]
  return (
    <section className="max-w-lg mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <span className="inline-block bg-slate-900 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">NOS ENGAGEMENTS</span>
        <h2 className="text-2xl font-bold text-slate-900">On s'engage, vraiment</h2>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <div key={item.title} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
            <div className="text-2xl mb-2">{item.icon}</div>
            <h3 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Pricing({ onOpenForm }) {
  const plans = [
    {
      name: 'Standard', price: '60', tag: 'Diagnostic expert', tagColor: 'bg-slate-100 text-slate-700',
      features: ['Analyse humaine complète de votre profil locataire', 'Rapport personnalisé détaillé (5-8 pages)', 'Points forts & faiblesses de votre dossier identifiés', 'Liste précise des documents à fournir'],
      cta: 'Je lance mon analyse', popular: false
    },
    {
      name: 'Dossier optimisé', price: '150', tag: 'Le plus choisi', tagColor: 'bg-blue-100 text-blue-700', badge: 'Livré sous 48 h ouvrées',
      features: ['Tout le Diagnostic', 'Dossier reconstitué et ordonné', 'Lettre de motivation rédigée', 'Argumentaire profil atypique', 'Une révision incluse'],
      cta: 'Faire monter mon dossier', popular: true
    },
    {
      name: 'Accompagnement Relogement', price: '250', tag: 'Tout compris', tagColor: 'bg-emerald-100 text-emerald-700',
      features: ['Dossier pris en charge sous 24h par un expert dédié', 'Montage complet de votre dossier locataire', 'Lettre de motivation rédigée pour vous', 'Recours DALO rédigé pour vous : amiable, injonction & indemnitaire', 'Accompagnement jusqu\'à l\'obtention de votre logement'],
      cta: 'Je démarre mon accompagnement', popular: false
    },
  ]
  return (
    <section id="tarifs" className="max-w-lg mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <span className="inline-block bg-slate-900 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">TROIS FORMULES AU CHOIX</span>
        <h2 className="text-2xl font-bold text-slate-900">Choisissez votre accompagnement</h2>
        <p className="text-slate-600 text-sm mt-2">Diagnostic à 60 €, dossier prêt à envoyer à 150 €, ou accompagnement complet à 250 €.<br />Paiement unique par virement bancaire · Aucun abonnement</p>
      </div>
      <div className="space-y-5">
        {plans.map((plan) => (
          <div key={plan.name} className={`relative bg-white rounded-2xl border p-5 shadow-sm ${plan.popular ? 'border-blue-300 ring-2 ring-blue-100' : 'border-slate-100'}`}>
            {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">LE PLUS CHOISI</div>}
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${plan.tagColor} mb-2`}>{plan.tag}</span>
                <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
              </div>
              <div className="text-3xl font-extrabold text-blue-600">{plan.price}€</div>
            </div>
            {plan.badge && <div className="text-xs text-emerald-700 bg-emerald-50 inline-block px-2 py-1 rounded-full mb-3">{plan.badge}</div>}
            <ul className="space-y-2 mb-5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  {f}
                </li>
              ))}
            </ul>
            <div className="bg-emerald-50 text-emerald-800 text-xs rounded-xl px-3 py-2 mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Satisfait ou remboursé sous 30 jours — sans condition
            </div>
            <button onClick={onOpenForm} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition active:scale-[0.98]">{plan.cta} →</button>
            <p className="text-center text-xs text-slate-400 mt-2">Paiement par virement bancaire</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState(null)
  const items = [
    { q: 'Est-ce que vous garantissez l\'obtention d\'un logement ?', a: 'Non, nous ne pouvons pas garantir l\'obtention d\'un logement. Nous maximisons vos chances en optimisant votre dossier et en vous accompagnant stratégiquement, mais la décision finale appartient aux bailleurs et organismes.' },
    { q: 'Quand est-ce que je paie, et combien ?', a: 'Le paiement se fait par virement bancaire unique après votre demande. Les tarifs sont : 60 € (Diagnostic), 150 € (Dossier optimisé) ou 250 € (Accompagnement complet). Aucun abonnement.' },
    { q: 'Qu\'est-ce qui est inclus dans l\'accompagnement ?', a: 'Selon la formule choisie : analyse humaine, rapport détaillé, montage de dossier, lettre de motivation, recours DALO, et suivi jusqu\'à l\'obtention du logement pour la formule complète.' },
    { q: 'L\'analyse est-elle vraiment faite par un humain ?', a: 'Oui, à 100 %. Un conseiller lit personnellement votre dossier, identifie les points forts et faiblesses, et rédige un rapport sur mesure. Aucun algorithme ne décide.' },
    { q: 'Quels types de logement et profils accompagnez-vous ?', a: 'HLM / logement social et location privée. Tous profils : salariés, indépendants, étudiants, CDD, situations complexes, etc. Toute la France et DOM-TOM.' },
    { q: 'Mes données personnelles sont-elles protégées ?', a: 'Oui. Nous respectons le RGPD. Vos données sont confidentielles, jamais revendues, et supprimées sur simple demande.' },
  ]
  return (
    <section id="faq" className="max-w-lg mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">QUESTIONS FRÉQUENTES</span>
        <h2 className="text-2xl font-bold text-slate-900">Tout ce que vous voulez savoir</h2>
      </div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-xl overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left">
              <span className="font-medium text-slate-900 text-sm pr-4">{item.q}</span>
              <svg className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${open === i ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            </button>
            {open === i && <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">{item.a}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}

function Social() {
  return (
    <section className="max-w-lg mx-auto px-4 py-10">
      <div className="text-center mb-6">
        <span className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">RÉSEAUX SOCIAUX</span>
        <h2 className="text-2xl font-bold text-slate-900">Suivez-nous sur TikTok</h2>
        <p className="text-slate-600 text-sm mt-2">Conseils logement, retours d'expérience et actus de l'accompagnement.</p>
      </div>
      <div className="space-y-3">
        {[
          { handle: '@dossier.logement.dispoo', label: 'Le compte officiel Dossier Logement Disponible' },
          { handle: '@tonton.reggi.logements', label: 'Conseils et actualités logement' },
        ].map((s) => (
          <a key={s.handle} href="#" className="flex items-center gap-4 bg-white border border-slate-100 rounded-2xl p-4 hover:border-slate-200 transition">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white text-xl">♪</div>
            <div>
              <div className="font-semibold text-slate-900 text-sm">{s.handle}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
              <div className="text-xs text-blue-600 mt-0.5">Voir sur TikTok →</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function FinalCTA({ onOpenForm }) {
  return (
    <section className="max-w-lg mx-auto px-4 py-8">
      <div className="bg-blue-600 rounded-3xl p-6 text-center text-white">
        <h2 className="text-xl font-bold mb-2">Votre logement vous attend</h2>
        <p className="text-blue-100 text-sm mb-5">Rejoignez les personnes accompagnées. Commencez par le formulaire, nous vous envoyons ensuite les informations de virement.</p>
        <button onClick={onOpenForm} className="w-full bg-white text-blue-600 font-semibold py-3.5 rounded-xl hover:bg-blue-50 transition">Remplir le formulaire →</button>
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-blue-200">
          <span>⚡ Réponse sous 24h</span>
          <span>🏦 Paiement par virement</span>
          <span>✓ Accompagnement jusqu'à l'obtention</span>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-8">
      <div className="max-w-lg mx-auto px-4 py-10">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          </div>
          <span className="font-bold text-white text-sm">DOSSIER LOGEMENT DISPONIBLE</span>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm mb-8">
          <div>
            <h4 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider">Service</h4>
            <ul className="space-y-2">
              <li><a href="#comment-ça-marche" className="hover:text-white">Comment ça marche</a></li>
              <li><a href="#tarifs" className="hover:text-white">Nos formules</a></li>
              <li><a href="#avis-clients" className="hover:text-white">Avis clients</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider">Légal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Mentions légales</a></li>
              <li><a href="#" className="hover:text-white">Confidentialité</a></li>
              <li><a href="#" className="hover:text-white">CGV</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 text-xs text-slate-500">
          <p className="mb-2">📧 service@dossierlogementdisponible.fr</p>
          <p className="mb-4">📍 13 Rue de la Commanderie, 57070 Metz</p>
          <p>© 2026 Dossier Logement Disponible. Service privé et indépendant, non affilié à un organisme public de logement.</p>
          <p className="mt-2">Garantie satisfait ou remboursé · 30 jours</p>
        </div>
      </div>
    </footer>
  )
}

function FormModal({ open, onClose }) {
  const [form, setForm] = useState({ prenom: '', nom: '', email: '', telephone: '', typeLogement: '', pieces: '', ville: '' })
  const [sent, setSent] = useState(false)
  if (!open) return null
  const handleSubmit = (e) => { e.preventDefault(); setSent(true) }
  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-100 px-5 py-4 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-900">Remplir le formulaire</h3>
            <p className="text-xs text-slate-500">Réponse sous 24h · Sans engagement · 🔒 Confidentiel</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        {sent ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h4 className="font-bold text-lg text-slate-900 mb-2">Demande envoyée !</h4>
            <p className="text-slate-600 text-sm mb-6">Nous vous recontactons sous 24h avec les informations de virement et la suite de la procédure.</p>
            <button onClick={onClose} className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl">Fermer</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            {[
              { key: 'prenom', label: 'Prénom *', type: 'text', placeholder: 'Marie' },
              { key: 'nom', label: 'Nom *', type: 'text', placeholder: 'Dupont' },
              { key: 'email', label: 'Email *', type: 'email', placeholder: 'marie@email.com' },
              { key: 'telephone', label: 'Téléphone *', type: 'tel', placeholder: '06 XX XX XX XX' },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">{field.label}</label>
                <input required type={field.type} placeholder={field.placeholder} value={form[field.key]} onChange={(e) => setForm({ ...form, [field.key]: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Type de logement recherché *</label>
              <select required value={form.typeLogement} onChange={(e) => setForm({ ...form, typeLogement: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="">Choisir</option>
                <option value="hlm">HLM / Logement social</option>
                <option value="prive">Location privée</option>
                <option value="les-deux">Les deux</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Nombre de pièces *</label>
              <select required value={form.pieces} onChange={(e) => setForm({ ...form, pieces: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="">Choisir</option>
                <option value="studio">Studio</option>
                <option value="t1">T1</option>
                <option value="t2">T2</option>
                <option value="t3">T3</option>
                <option value="t4+">T4 et +</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Ville souhaitée *</label>
              <input required type="text" placeholder="Ex: Lyon, Marseille..." value={form.ville} onChange={(e) => setForm({ ...form, ville: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl mt-2 transition">Envoyer ma demande →</button>
            <p className="text-center text-xs text-slate-400">En soumettant, vous acceptez d'être recontacté. Vos données restent confidentielles.</p>
          </form>
        )}
      </div>
    </div>
  )
}

export default function App() {
  const [formOpen, setFormOpen] = useState(false)
  return (
    <div className="min-h-screen bg-slate-50">
      <Header onOpenForm={() => setFormOpen(true)} />
      <Hero onOpenForm={() => setFormOpen(true)} />
      <Stats />
      <Tags />
      <Method />
      <Testimonials />
      <Commitments />
      <Pricing onOpenForm={() => setFormOpen(true)} />
      <FAQ />
      <Social />
      <FinalCTA onOpenForm={() => setFormOpen(true)} />
      <Footer />
      <FormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  )
}
