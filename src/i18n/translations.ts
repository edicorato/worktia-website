import type { Locale } from "./locales";

type Card = {
  title: string;
  description: string;
  badge?: string;
};

type FAQ = {
  question: string;
  answer: string;
};

export type Translation = {
  seo: {
    title: string;
    description: string;
  };
  mailtoSubject: string;
  brand: string;
  nav: {
    ariaLabel: string;
    flow: string;
    features: string;
    useCases: string;
    beta: string;
  };
  languageSelector: {
    ariaLabel: string;
  };
  cta: {
    beta: string;
    flow: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  phone: {
    ariaLabel: string;
    status: string;
    jobTitle: string;
    customer: string;
    report: string;
    pdfReady: string;
    checklist: string;
    checklistItems: string[];
    nextStep: string;
    nextStepDescription: string;
  };
  problem: {
    kicker: string;
    title: string;
    description: string;
    cards: Card[];
  };
  flow: {
    kicker: string;
    title: string;
    description: string;
    steps: string[];
  };
  features: {
    kicker: string;
    title: string;
    cards: Card[];
  };
  useCases: {
    kicker: string;
    title: string;
    cards: Card[];
  };
  difference: {
    kicker: string;
    title: string;
    description: string;
    points: string[];
  };
  betaCta: {
    kicker: string;
    title: string;
    description: string;
  };
  faq: {
    kicker: string;
    title: string;
    items: FAQ[];
  };
  footer: {
    tagline: string;
    links: {
      privacy: string;
      terms: string;
      contacts: string;
    };
  };
};

export const translations: Record<Locale, Translation> = {
  it: {
    seo: {
      title: "Worktia — Il tuo lavoro. In ordine.",
      description:
        "Worktia aiuta squadre, manutentori e tecnici a gestire lavori, foto, checklist, firme e PDF in un unico flusso pensato per il lavoro sul campo.",
    },
    mailtoSubject: "Richiesta accesso beta Worktia",
    brand: "Worktia",
    nav: {
      ariaLabel: "Navigazione principale",
      flow: "Come funziona",
      features: "Funzioni",
      useCases: "Per chi è",
      beta: "Beta",
    },
    languageSelector: {
      ariaLabel: "Seleziona lingua",
    },
    cta: {
      beta: "Richiedi accesso alla beta",
      flow: "Guarda il flusso",
    },
    hero: {
      badge: "Beta privata in preparazione",
      title: "Il tuo lavoro. In ordine.",
      subtitle:
        "Worktia aiuta squadre, manutentori e tecnici a trasformare interventi, foto, checklist e firme in rapporti ordinati e PDF professionali.",
    },
    phone: {
      ariaLabel: "Anteprima interfaccia Worktia",
      status: "In corso",
      jobTitle: "Intervento caldaia",
      customer: "Cliente: Condominio Rovere",
      report: "Rapporto",
      pdfReady: "PDF pronto",
      checklist: "Checklist",
      checklistItems: ["Foto iniziali", "Controlli completati", "Firma cliente"],
      nextStep: "Prossimo passo",
      nextStepDescription: "Archivia e prepara il flusso per fatturazione.",
    },
    problem: {
      kicker: "Il problema",
      title: "Quando il lavoro è fatto, spesso resta da rimettere tutto in ordine.",
      description:
        "Foto in chat, note sparse, conferme verbali e rapportini ricopiati a fine giornata fanno perdere tempo e rendono più difficile dimostrare cosa è stato fatto.",
      cards: [
        {
          title: "WhatsApp pieni di messaggi",
          description: "Le informazioni restano dentro chat difficili da consultare.",
        },
        {
          title: "Foto sparse tra chat e galleria",
          description: "Le immagini non sono sempre collegate al lavoro giusto.",
        },
        {
          title: "Rapportini manuali da ricopiare",
          description: "A fine giornata serve ricostruire tutto da appunti e memoria.",
        },
        {
          title: "Clienti e conferme da inseguire",
          description: "Mancano passaggi chiari per consegna, firma e archiviazione.",
        },
      ],
    },
    flow: {
      kicker: "Come funziona",
      title: "Un flusso semplice, pensato per arrivare al report senza rincorrere pezzi.",
      description:
        "Un flusso lineare, pensato per chi lavora sul campo e non vuole perdere tempo a ricostruire l’intervento dopo.",
      steps: ["Crea lavoro", "Raccogli foto e checklist", "Registra firma o conferma", "Genera PDF", "Archivia e prepara la fatturazione"],
    },
    features: {
      kicker: "Funzioni",
      title: "Gli strumenti essenziali per documentare meglio ogni intervento.",
      cards: [
        {
          title: "Lavori e clienti",
          description: "Tieni collegati cliente, intervento, stato, indirizzo e attività.",
        },
        {
          title: "Foto ordinate per intervento",
          description: "Raccogli immagini direttamente nel contesto del lavoro.",
        },
        {
          title: "Checklist operative",
          description: "Segui attività e controlli senza fogli sparsi.",
        },
        {
          title: "Firma sul rapportino",
          description: "Raccogli una conferma visiva quando serve.",
        },
        {
          title: "PDF professionali",
          description: "Genera documenti più ordinati da condividere e archiviare.",
        },
        {
          title: "Offline-first",
          description: "Lavora anche quando la connessione non è stabile.",
        },
        {
          title: "Portale tecnico/cliente",
          description: "Previsto per ridurre installazioni e passaggi manuali.",
          badge: "in sviluppo",
        },
        {
          title: "Validazione tracciata",
          description: "Pensata per documentare meglio consegna e conferma del lavoro.",
        },
      ],
    },
    useCases: {
      kicker: "Per chi è",
      title: "Per squadre e tecnici che devono lasciare traccia chiara del lavoro svolto.",
      cards: [
        {
          title: "Manutenzione immobiliare",
          description: "Interventi in appartamenti, condomini e immobili con foto, note e rapporti ordinati.",
        },
        {
          title: "Impiantisti",
          description: "Uscite tecniche, controlli, riparazioni e conferme raccolte in un unico flusso.",
        },
        {
          title: "Facility e pulizie",
          description: "Checklist, attività ricorrenti e prove fotografiche per squadre operative.",
        },
        {
          title: "Edilizia leggera",
          description: "Piccoli cantieri, avanzamenti, sopralluoghi e consegne documentate.",
        },
        {
          title: "Ispezioni",
          description: "Controlli, verifiche e rapporti con evidenze raccolte sul posto.",
        },
      ],
    },
    difference: {
      kicker: "La differenza",
      title: "Non un gestionale generico. Un flusso operativo per documentare meglio il lavoro.",
      description:
        "Worktia nasce mobile-first per ridurre passaggi manuali e trasformare ciò che succede sul campo in materiale ordinato, leggibile e pronto per i processi interni.",
      points: ["Meno informazioni disperse", "Rapporti più facili da ricostruire", "Documenti più chiari per cliente e archivio"],
    },
    betaCta: {
      kicker: "Beta privata",
      title: "Vuoi provare Worktia quando la beta sarà pronta?",
      description:
        "Stiamo raccogliendo aziende e tecnici interessati a validare il flusso reale: lavori, foto, checklist, firma, PDF e archiviazione.",
    },
    faq: {
      kicker: "FAQ",
      title: "Domande frequenti",
      items: [
        {
          question: "È già disponibile?",
          answer:
            "Worktia è in fase beta/pre-lancio. Stiamo raccogliendo richieste da aziende e tecnici interessati a provare il flusso quando saranno aperti nuovi inviti.",
        },
        {
          question: "Serve installare l’app al cliente?",
          answer:
            "Il flusso è pensato per ridurre il carico sul cliente. Il portale tecnico/cliente è previsto proprio per limitare installazioni e passaggi manuali dove possibile.",
        },
        {
          question: "Funziona offline?",
          answer: "L’approccio previsto è offline-first per aiutare chi lavora sul campo anche in contesti con connettività non stabile.",
        },
        {
          question: "Che valore ha il PDF generato?",
          answer:
            "Il PDF aiuta a documentare l’intervento in modo ordinato, con le informazioni raccolte durante il lavoro. Non viene presentato come firma certificata e non sostituisce consulenze legali o collaudi formali quando richiesti.",
        },
        {
          question: "Per quali aziende è pensata?",
          answer: "Per imprese e squadre operative che gestiscono interventi, manutenzioni, ispezioni, checklist, foto e rapportini da consegnare o archiviare.",
        },
      ],
    },
    footer: {
      tagline: "Il tuo lavoro. In ordine.",
      links: {
        privacy: "Privacy",
        terms: "Termini",
        contacts: "Contatti",
      },
    },
  },
  en: {
    seo: {
      title: "Worktia — Your field work, organized.",
      description:
        "Worktia helps teams, maintenance companies and field technicians manage jobs, photos, checklists, signatures and PDFs in one workflow built for field work.",
    },
    mailtoSubject: "Worktia beta access request",
    brand: "Worktia",
    nav: {
      ariaLabel: "Main navigation",
      flow: "How it works",
      features: "Features",
      useCases: "Who it is for",
      beta: "Beta",
    },
    languageSelector: {
      ariaLabel: "Select language",
    },
    cta: {
      beta: "Request beta access",
      flow: "See the workflow",
    },
    hero: {
      badge: "Private beta in preparation",
      title: "Your field work, organized.",
      subtitle:
        "Worktia helps teams, maintenance companies and field technicians turn jobs, photos, checklists and signatures into organized reports and professional PDFs.",
    },
    phone: {
      ariaLabel: "Worktia interface preview",
      status: "In progress",
      jobTitle: "Boiler service",
      customer: "Customer: Rovere Building",
      report: "Report",
      pdfReady: "PDF ready",
      checklist: "Checklist",
      checklistItems: ["Initial photos", "Checks completed", "Customer signature"],
      nextStep: "Next step",
      nextStepDescription: "Archive and prepare the billing workflow.",
    },
    problem: {
      kicker: "The problem",
      title: "When the work is done, there is often still a lot to put back in order.",
      description:
        "Photos in chats, scattered notes, verbal confirmations and end-of-day reports copied by hand waste time and make it harder to show what was done.",
      cards: [
        {
          title: "Chats full of messages",
          description: "Information stays inside conversations that are hard to search later.",
        },
        {
          title: "Photos scattered across chats and galleries",
          description: "Images are not always connected to the right job.",
        },
        {
          title: "Manual reports to copy again",
          description: "At the end of the day, everything has to be rebuilt from notes and memory.",
        },
        {
          title: "Customers and confirmations to chase",
          description: "Clear steps are missing for handover, signature and archiving.",
        },
      ],
    },
    flow: {
      kicker: "How it works",
      title: "A simple workflow designed to reach the report without chasing missing pieces.",
      description:
        "A linear flow for people working in the field who do not want to waste time rebuilding the job afterwards.",
      steps: ["Create the job", "Collect photos and checklists", "Record a signature or confirmation", "Generate the PDF", "Archive and prepare billing"],
    },
    features: {
      kicker: "Features",
      title: "The essential tools to document every job more clearly.",
      cards: [
        {
          title: "Jobs and customers",
          description: "Keep customer, job, status, address and activities connected.",
        },
        {
          title: "Photos organized by job",
          description: "Collect images directly in the context of the work.",
        },
        {
          title: "Operational checklists",
          description: "Follow activities and checks without scattered paper.",
        },
        {
          title: "Signature on the report",
          description: "Collect a visual confirmation when needed.",
        },
        {
          title: "Professional PDFs",
          description: "Generate clearer documents to share and archive.",
        },
        {
          title: "Offline-first",
          description: "Work even when the connection is not stable.",
        },
        {
          title: "Technician/customer portal",
          description: "Planned to reduce installations and manual steps.",
          badge: "in development",
        },
        {
          title: "Tracked validation",
          description: "Designed to better document handover and work confirmation.",
        },
      ],
    },
    useCases: {
      kicker: "Who it is for",
      title: "For teams and technicians who need a clear record of completed work.",
      cards: [
        {
          title: "Property maintenance",
          description: "Jobs in apartments, buildings and properties with organized photos, notes and reports.",
        },
        {
          title: "Installers",
          description: "Technical visits, checks, repairs and confirmations collected in one workflow.",
        },
        {
          title: "Facility and cleaning",
          description: "Checklists, recurring tasks and photographic proof for operational teams.",
        },
        {
          title: "Light construction",
          description: "Small sites, progress updates, inspections and documented handovers.",
        },
        {
          title: "Inspections",
          description: "Checks, reviews and reports with evidence collected on site.",
        },
      ],
    },
    difference: {
      kicker: "The difference",
      title: "Not a generic management tool. An operational workflow to document work better.",
      description:
        "Worktia is designed mobile-first to reduce manual steps and turn what happens in the field into organized, readable material ready for internal processes.",
      points: ["Less scattered information", "Reports that are easier to rebuild", "Clearer documents for customers and archives"],
    },
    betaCta: {
      kicker: "Private beta",
      title: "Do you want to try Worktia when the beta is ready?",
      description:
        "We are collecting companies and technicians interested in validating the real workflow: jobs, photos, checklists, signature, PDF and archiving.",
    },
    faq: {
      kicker: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          question: "Is it already available?",
          answer:
            "Worktia is in beta/pre-launch. We are collecting requests from companies and technicians interested in trying the workflow when new invitations open.",
        },
        {
          question: "Does the customer need to install the app?",
          answer:
            "The workflow is designed to reduce the customer's effort. The technician/customer portal is planned specifically to limit installations and manual steps where possible.",
        },
        {
          question: "Does it work offline?",
          answer: "The planned approach is offline-first to help field teams work even in places where connectivity is not stable.",
        },
        {
          question: "What value does the generated PDF have?",
          answer:
            "The PDF helps document the job in an organized way, using the information collected during the work. It is not presented as a certified signature and does not replace legal advice, formal inspections or regulatory requirements when required.",
        },
        {
          question: "What companies is it designed for?",
          answer: "For companies and operational teams managing jobs, maintenance, inspections, checklists, photos and reports to deliver or archive.",
        },
      ],
    },
    footer: {
      tagline: "Your field work, organized.",
      links: {
        privacy: "Privacy",
        terms: "Terms",
        contacts: "Contact",
      },
    },
  },
  es: {
    seo: {
      title: "Worktia — Tu trabajo, en orden.",
      description:
        "Worktia ayuda a equipos, empresas de mantenimiento y técnicos de campo a gestionar trabajos, fotos, listas de control, firmas y PDF en un único flujo de trabajo.",
    },
    mailtoSubject: "Solicitud de acceso beta Worktia",
    brand: "Worktia",
    nav: {
      ariaLabel: "Navegación principal",
      flow: "Cómo funciona",
      features: "Funciones",
      useCases: "Para quién",
      beta: "Beta",
    },
    languageSelector: {
      ariaLabel: "Seleccionar idioma",
    },
    cta: {
      beta: "Solicitar acceso a la beta",
      flow: "Ver el flujo",
    },
    hero: {
      badge: "Beta privada en preparación",
      title: "Tu trabajo, en orden.",
      subtitle:
        "Worktia ayuda a equipos, empresas de mantenimiento y técnicos de campo a convertir trabajos, fotos, listas de control y firmas en informes ordenados y PDF profesionales.",
    },
    phone: {
      ariaLabel: "Vista previa de la interfaz Worktia",
      status: "En curso",
      jobTitle: "Intervención de caldera",
      customer: "Cliente: Comunidad Rovere",
      report: "Informe",
      pdfReady: "PDF listo",
      checklist: "Lista de control",
      checklistItems: ["Fotos iniciales", "Controles completados", "Firma del cliente"],
      nextStep: "Siguiente paso",
      nextStepDescription: "Archivar y preparar el flujo para facturación.",
    },
    problem: {
      kicker: "El problema",
      title: "Cuando el trabajo está hecho, a menudo todavía queda poner todo en orden.",
      description:
        "Fotos en chats, notas dispersas, confirmaciones verbales e informes copiados al final del día hacen perder tiempo y dificultan demostrar qué se hizo.",
      cards: [
        {
          title: "Chats llenos de mensajes",
          description: "La información queda dentro de conversaciones difíciles de consultar.",
        },
        {
          title: "Fotos dispersas entre chat y galería",
          description: "Las imágenes no siempre están conectadas con el trabajo correcto.",
        },
        {
          title: "Informes manuales que copiar",
          description: "Al final del día hay que reconstruir todo desde notas y memoria.",
        },
        {
          title: "Clientes y confirmaciones que perseguir",
          description: "Faltan pasos claros para entrega, firma y archivo.",
        },
      ],
    },
    flow: {
      kicker: "Cómo funciona",
      title: "Un flujo sencillo, pensado para llegar al informe sin perseguir piezas sueltas.",
      description:
        "Un flujo lineal para quien trabaja en campo y no quiere perder tiempo reconstruyendo la intervención después.",
      steps: ["Crear trabajo", "Recoger fotos y listas de control", "Registrar firma o confirmación", "Generar PDF", "Archivar y preparar facturación"],
    },
    features: {
      kicker: "Funciones",
      title: "Las herramientas esenciales para documentar mejor cada intervención.",
      cards: [
        {
          title: "Trabajos y clientes",
          description: "Mantén conectados cliente, intervención, estado, dirección y actividades.",
        },
        {
          title: "Fotos ordenadas por intervención",
          description: "Recoge imágenes directamente en el contexto del trabajo.",
        },
        {
          title: "Listas de control operativas",
          description: "Sigue actividades y controles sin hojas dispersas.",
        },
        {
          title: "Firma en el informe",
          description: "Recoge una confirmación visual cuando sea necesario.",
        },
        {
          title: "PDF profesionales",
          description: "Genera documentos más ordenados para compartir y archivar.",
        },
        {
          title: "Offline-first",
          description: "Trabaja incluso cuando la conexión no es estable.",
        },
        {
          title: "Portal técnico/cliente",
          description: "Previsto para reducir instalaciones y pasos manuales.",
          badge: "en desarrollo",
        },
        {
          title: "Validación trazada",
          description: "Pensada para documentar mejor la entrega y confirmación del trabajo.",
        },
      ],
    },
    useCases: {
      kicker: "Para quién",
      title: "Para equipos y técnicos que necesitan dejar una traza clara del trabajo realizado.",
      cards: [
        {
          title: "Mantenimiento inmobiliario",
          description: "Intervenciones en viviendas, comunidades e inmuebles con fotos, notas e informes ordenados.",
        },
        {
          title: "Instaladores",
          description: "Salidas técnicas, controles, reparaciones y confirmaciones recogidas en un único flujo.",
        },
        {
          title: "Facility y limpieza",
          description: "Listas de control, tareas recurrentes y pruebas fotográficas para equipos operativos.",
        },
        {
          title: "Construcción ligera",
          description: "Pequeñas obras, avances, visitas y entregas documentadas.",
        },
        {
          title: "Inspecciones",
          description: "Controles, verificaciones e informes con evidencias recogidas en sitio.",
        },
      ],
    },
    difference: {
      kicker: "La diferencia",
      title: "No es un gestor genérico. Es un flujo operativo para documentar mejor el trabajo.",
      description:
        "Worktia nace mobile-first para reducir pasos manuales y transformar lo que ocurre en campo en material ordenado, legible y listo para procesos internos.",
      points: ["Menos información dispersa", "Informes más fáciles de reconstruir", "Documentos más claros para cliente y archivo"],
    },
    betaCta: {
      kicker: "Beta privada",
      title: "¿Quieres probar Worktia cuando la beta esté lista?",
      description:
        "Estamos reuniendo empresas y técnicos interesados en validar el flujo real: trabajos, fotos, listas de control, firma, PDF y archivo.",
    },
    faq: {
      kicker: "FAQ",
      title: "Preguntas frecuentes",
      items: [
        {
          question: "¿Ya está disponible?",
          answer:
            "Worktia está en fase beta/prelanzamiento. Estamos recogiendo solicitudes de empresas y técnicos interesados en probar el flujo cuando se abran nuevas invitaciones.",
        },
        {
          question: "¿El cliente necesita instalar la app?",
          answer:
            "El flujo está pensado para reducir la carga del cliente. El portal técnico/cliente está previsto precisamente para limitar instalaciones y pasos manuales cuando sea posible.",
        },
        {
          question: "¿Funciona sin conexión?",
          answer: "El enfoque previsto es offline-first para ayudar a quienes trabajan en campo incluso en contextos con conectividad inestable.",
        },
        {
          question: "¿Qué valor tiene el PDF generado?",
          answer:
            "El PDF ayuda a documentar la intervención de forma ordenada, con la información recogida durante el trabajo. No se presenta como firma certificada y no sustituye asesoramiento legal, inspecciones formales o requisitos normativos cuando sean necesarios.",
        },
        {
          question: "¿Para qué empresas está pensada?",
          answer: "Para empresas y equipos operativos que gestionan trabajos, mantenimientos, inspecciones, listas de control, fotos e informes para entregar o archivar.",
        },
      ],
    },
    footer: {
      tagline: "Tu trabajo, en orden.",
      links: {
        privacy: "Privacidad",
        terms: "Términos",
        contacts: "Contacto",
      },
    },
  },
  fr: {
    seo: {
      title: "Worktia — Votre travail, en ordre.",
      description:
        "Worktia aide les équipes, les entreprises de maintenance et les techniciens terrain à gérer interventions, photos, checklists, signatures et PDF dans un seul flux.",
    },
    mailtoSubject: "Demande d’accès bêta Worktia",
    brand: "Worktia",
    nav: {
      ariaLabel: "Navigation principale",
      flow: "Fonctionnement",
      features: "Fonctions",
      useCases: "Pour qui",
      beta: "Bêta",
    },
    languageSelector: {
      ariaLabel: "Sélectionner la langue",
    },
    cta: {
      beta: "Demander l’accès bêta",
      flow: "Voir le flux",
    },
    hero: {
      badge: "Bêta privée en préparation",
      title: "Votre travail, en ordre.",
      subtitle:
        "Worktia aide les équipes, les entreprises de maintenance et les techniciens terrain à transformer interventions, photos, checklists et signatures en rapports ordonnés et PDF professionnels.",
    },
    phone: {
      ariaLabel: "Aperçu de l’interface Worktia",
      status: "En cours",
      jobTitle: "Intervention chaudière",
      customer: "Client : Immeuble Rovere",
      report: "Rapport",
      pdfReady: "PDF prêt",
      checklist: "Checklist",
      checklistItems: ["Photos initiales", "Contrôles terminés", "Signature client"],
      nextStep: "Étape suivante",
      nextStepDescription: "Archiver et préparer le flux pour la facturation.",
    },
    problem: {
      kicker: "Le problème",
      title: "Quand le travail est terminé, il reste souvent à tout remettre en ordre.",
      description:
        "Photos dans les chats, notes dispersées, confirmations verbales et petits rapports recopiés en fin de journée font perdre du temps et rendent plus difficile la preuve de ce qui a été fait.",
      cards: [
        {
          title: "Chats pleins de messages",
          description: "Les informations restent dans des conversations difficiles à consulter.",
        },
        {
          title: "Photos dispersées entre chat et galerie",
          description: "Les images ne sont pas toujours reliées à la bonne intervention.",
        },
        {
          title: "Rapports manuels à recopier",
          description: "En fin de journée, il faut tout reconstruire à partir de notes et de mémoire.",
        },
        {
          title: "Clients et confirmations à relancer",
          description: "Il manque des étapes claires pour la remise, la signature et l’archivage.",
        },
      ],
    },
    flow: {
      kicker: "Fonctionnement",
      title: "Un flux simple, pensé pour arriver au rapport sans courir après les éléments.",
      description:
        "Un flux linéaire, pensé pour celles et ceux qui travaillent sur le terrain et ne veulent pas perdre de temps à reconstruire l’intervention ensuite.",
      steps: ["Créer l’intervention", "Collecter photos et checklists", "Enregistrer une signature ou confirmation", "Générer le PDF", "Archiver et préparer la facturation"],
    },
    features: {
      kicker: "Fonctions",
      title: "Les outils essentiels pour mieux documenter chaque intervention.",
      cards: [
        {
          title: "Interventions et clients",
          description: "Gardez client, intervention, statut, adresse et activités connectés.",
        },
        {
          title: "Photos classées par intervention",
          description: "Collectez les images directement dans le contexte du travail.",
        },
        {
          title: "Checklists opérationnelles",
          description: "Suivez activités et contrôles sans feuilles dispersées.",
        },
        {
          title: "Signature sur le rapport",
          description: "Recueillez une confirmation visuelle lorsque nécessaire.",
        },
        {
          title: "PDF professionnels",
          description: "Générez des documents plus ordonnés à partager et archiver.",
        },
        {
          title: "Offline-first",
          description: "Travaillez même lorsque la connexion n’est pas stable.",
        },
        {
          title: "Portail technicien/client",
          description: "Prévu pour réduire les installations et les étapes manuelles.",
          badge: "en développement",
        },
        {
          title: "Validation tracée",
          description: "Pensée pour mieux documenter la remise et la confirmation du travail.",
        },
      ],
    },
    useCases: {
      kicker: "Pour qui",
      title: "Pour les équipes et techniciens qui doivent laisser une trace claire du travail effectué.",
      cards: [
        {
          title: "Maintenance immobilière",
          description: "Interventions dans appartements, immeubles et biens avec photos, notes et rapports ordonnés.",
        },
        {
          title: "Installateurs",
          description: "Sorties techniques, contrôles, réparations et confirmations réunis dans un seul flux.",
        },
        {
          title: "Facility et nettoyage",
          description: "Checklists, tâches récurrentes et preuves photo pour équipes opérationnelles.",
        },
        {
          title: "Petits chantiers",
          description: "Petits chantiers, avancements, visites et remises documentées.",
        },
        {
          title: "Inspections",
          description: "Contrôles, vérifications et rapports avec preuves collectées sur place.",
        },
      ],
    },
    difference: {
      kicker: "La différence",
      title: "Pas un logiciel de gestion générique. Un flux opérationnel pour mieux documenter le travail.",
      description:
        "Worktia est conçu mobile-first pour réduire les étapes manuelles et transformer ce qui se passe sur le terrain en matériel ordonné, lisible et prêt pour les processus internes.",
      points: ["Moins d’informations dispersées", "Rapports plus faciles à reconstruire", "Documents plus clairs pour le client et l’archive"],
    },
    betaCta: {
      kicker: "Bêta privée",
      title: "Voulez-vous essayer Worktia quand la bêta sera prête ?",
      description:
        "Nous recueillons des entreprises et techniciens intéressés par la validation du flux réel : interventions, photos, checklists, signature, PDF et archivage.",
    },
    faq: {
      kicker: "FAQ",
      title: "Questions fréquentes",
      items: [
        {
          question: "Est-ce déjà disponible ?",
          answer:
            "Worktia est en phase bêta/pré-lancement. Nous recueillons les demandes d’entreprises et de techniciens intéressés par l’essai du flux lorsque de nouvelles invitations seront ouvertes.",
        },
        {
          question: "Le client doit-il installer l’application ?",
          answer:
            "Le flux est pensé pour réduire l’effort côté client. Le portail technicien/client est prévu précisément pour limiter les installations et les étapes manuelles lorsque possible.",
        },
        {
          question: "Cela fonctionne-t-il hors ligne ?",
          answer: "L’approche prévue est offline-first pour aider les équipes terrain même lorsque la connectivité n’est pas stable.",
        },
        {
          question: "Quelle est la valeur du PDF généré ?",
          answer:
            "Le PDF aide à documenter l’intervention de manière ordonnée, avec les informations collectées pendant le travail. Il n’est pas présenté comme une signature certifiée et ne remplace pas les conseils juridiques, les contrôles formels ou les exigences réglementaires lorsque ceux-ci sont requis.",
        },
        {
          question: "Pour quelles entreprises est-ce pensé ?",
          answer: "Pour les entreprises et équipes opérationnelles qui gèrent interventions, maintenance, inspections, checklists, photos et rapports à remettre ou archiver.",
        },
      ],
    },
    footer: {
      tagline: "Votre travail, en ordre.",
      links: {
        privacy: "Confidentialité",
        terms: "Conditions",
        contacts: "Contact",
      },
    },
  },
  de: {
    seo: {
      title: "Worktia — Deine Arbeit, geordnet.",
      description:
        "Worktia hilft Teams, Wartungsbetrieben und Außendiensttechnikern, Aufträge, Fotos, Checklisten, Unterschriften und PDFs in einem einzigen Ablauf zu verwalten.",
    },
    mailtoSubject: "Anfrage für Worktia Beta-Zugang",
    brand: "Worktia",
    nav: {
      ariaLabel: "Hauptnavigation",
      flow: "So funktioniert es",
      features: "Funktionen",
      useCases: "Für wen",
      beta: "Beta",
    },
    languageSelector: {
      ariaLabel: "Sprache auswählen",
    },
    cta: {
      beta: "Beta-Zugang anfragen",
      flow: "Ablauf ansehen",
    },
    hero: {
      badge: "Private Beta in Vorbereitung",
      title: "Deine Arbeit, geordnet.",
      subtitle:
        "Worktia hilft Teams, Wartungsbetrieben und Außendiensttechnikern, Aufträge, Fotos, Checklisten und Unterschriften in geordnete Berichte und professionelle PDFs zu verwandeln.",
    },
    phone: {
      ariaLabel: "Vorschau der Worktia-Oberfläche",
      status: "In Arbeit",
      jobTitle: "Heizkessel-Wartung",
      customer: "Kunde: Gebäude Rovere",
      report: "Bericht",
      pdfReady: "PDF bereit",
      checklist: "Checkliste",
      checklistItems: ["Startfotos", "Prüfungen abgeschlossen", "Kundenunterschrift"],
      nextStep: "Nächster Schritt",
      nextStepDescription: "Archivieren und Ablauf für die Abrechnung vorbereiten.",
    },
    problem: {
      kicker: "Das Problem",
      title: "Wenn die Arbeit erledigt ist, bleibt oft noch alles zu ordnen.",
      description:
        "Fotos in Chats, verstreute Notizen, mündliche Bestätigungen und am Tagesende neu geschriebene Berichte kosten Zeit und erschweren den Nachweis der erledigten Arbeit.",
      cards: [
        {
          title: "Chats voller Nachrichten",
          description: "Informationen bleiben in schwer durchsuchbaren Unterhaltungen.",
        },
        {
          title: "Fotos verteilt auf Chat und Galerie",
          description: "Bilder sind nicht immer mit dem richtigen Auftrag verbunden.",
        },
        {
          title: "Manuelle Berichte zum Abschreiben",
          description: "Am Tagesende muss alles aus Notizen und Erinnerung rekonstruiert werden.",
        },
        {
          title: "Kunden und Bestätigungen nachverfolgen",
          description: "Klare Schritte für Übergabe, Unterschrift und Archivierung fehlen.",
        },
      ],
    },
    flow: {
      kicker: "So funktioniert es",
      title: "Ein einfacher Ablauf, der zum Bericht führt, ohne fehlenden Teilen hinterherzulaufen.",
      description:
        "Ein linearer Ablauf für Menschen im Außendienst, die nach dem Einsatz keine Zeit mit Rekonstruktion verlieren wollen.",
      steps: ["Auftrag erstellen", "Fotos und Checklisten sammeln", "Unterschrift oder Bestätigung erfassen", "PDF erzeugen", "Archivieren und Abrechnung vorbereiten"],
    },
    features: {
      kicker: "Funktionen",
      title: "Die wichtigsten Werkzeuge, um jeden Einsatz besser zu dokumentieren.",
      cards: [
        {
          title: "Aufträge und Kunden",
          description: "Kunde, Auftrag, Status, Adresse und Aktivitäten bleiben verbunden.",
        },
        {
          title: "Fotos nach Auftrag geordnet",
          description: "Sammle Bilder direkt im Kontext der Arbeit.",
        },
        {
          title: "Operative Checklisten",
          description: "Folge Aufgaben und Prüfungen ohne verstreute Zettel.",
        },
        {
          title: "Unterschrift auf dem Bericht",
          description: "Erfasse bei Bedarf eine visuelle Bestätigung.",
        },
        {
          title: "Professionelle PDFs",
          description: "Erzeuge klarere Dokumente zum Teilen und Archivieren.",
        },
        {
          title: "Offline-first",
          description: "Arbeite auch dann, wenn die Verbindung nicht stabil ist.",
        },
        {
          title: "Techniker-/Kundenportal",
          description: "Geplant, um Installationen und manuelle Schritte zu reduzieren.",
          badge: "in Entwicklung",
        },
        {
          title: "Nachverfolgte Bestätigung",
          description: "Gedacht, um Übergabe und Arbeitsbestätigung besser zu dokumentieren.",
        },
      ],
    },
    useCases: {
      kicker: "Für wen",
      title: "Für Teams und Techniker, die eine klare Spur erledigter Arbeit brauchen.",
      cards: [
        {
          title: "Immobilienwartung",
          description: "Einsätze in Wohnungen, Gebäuden und Immobilien mit geordneten Fotos, Notizen und Berichten.",
        },
        {
          title: "Installationsbetriebe",
          description: "Technische Besuche, Prüfungen, Reparaturen und Bestätigungen in einem Ablauf.",
        },
        {
          title: "Facility und Reinigung",
          description: "Checklisten, wiederkehrende Aufgaben und Fotobelege für operative Teams.",
        },
        {
          title: "Leichter Bau",
          description: "Kleine Baustellen, Fortschritte, Begehungen und dokumentierte Übergaben.",
        },
        {
          title: "Inspektionen",
          description: "Kontrollen, Prüfungen und Berichte mit vor Ort gesammelten Nachweisen.",
        },
      ],
    },
    difference: {
      kicker: "Der Unterschied",
      title: "Kein generisches Verwaltungstool. Ein operativer Ablauf, um Arbeit besser zu dokumentieren.",
      description:
        "Worktia ist mobile-first gedacht, um manuelle Schritte zu reduzieren und Außendienstereignisse in geordnetes, lesbares Material für interne Prozesse zu verwandeln.",
      points: ["Weniger verstreute Informationen", "Berichte leichter rekonstruieren", "Klarere Dokumente für Kunden und Archiv"],
    },
    betaCta: {
      kicker: "Private Beta",
      title: "Möchtest du Worktia ausprobieren, wenn die Beta bereit ist?",
      description:
        "Wir sammeln Unternehmen und Techniker, die den realen Ablauf validieren möchten: Aufträge, Fotos, Checklisten, Unterschrift, PDF und Archivierung.",
    },
    faq: {
      kicker: "FAQ",
      title: "Häufige Fragen",
      items: [
        {
          question: "Ist es bereits verfügbar?",
          answer:
            "Worktia befindet sich in der Beta-/Pre-Launch-Phase. Wir sammeln Anfragen von Unternehmen und Technikern, die den Ablauf testen möchten, sobald neue Einladungen geöffnet werden.",
        },
        {
          question: "Muss der Kunde die App installieren?",
          answer:
            "Der Ablauf ist darauf ausgelegt, den Aufwand für Kunden zu reduzieren. Das Techniker-/Kundenportal ist genau dafür geplant, Installationen und manuelle Schritte möglichst zu begrenzen.",
        },
        {
          question: "Funktioniert es offline?",
          answer: "Der geplante Ansatz ist offline-first, um Teams im Außendienst auch bei instabiler Verbindung zu unterstützen.",
        },
        {
          question: "Welchen Wert hat das erzeugte PDF?",
          answer:
            "Das PDF hilft, den Einsatz geordnet zu dokumentieren, mit den während der Arbeit gesammelten Informationen. Es wird nicht als zertifizierte Signatur dargestellt und ersetzt keine Rechtsberatung, formalen Abnahmen oder regulatorischen Anforderungen, wenn diese erforderlich sind.",
        },
        {
          question: "Für welche Unternehmen ist es gedacht?",
          answer: "Für Unternehmen und operative Teams, die Aufträge, Wartungen, Inspektionen, Checklisten, Fotos und Berichte zur Übergabe oder Archivierung verwalten.",
        },
      ],
    },
    footer: {
      tagline: "Deine Arbeit, geordnet.",
      links: {
        privacy: "Datenschutz",
        terms: "Bedingungen",
        contacts: "Kontakt",
      },
    },
  },
};
