---
layout: post-right-sidebar
title:  "Unikname : votre identifiant décentralisé"
description: ""
author: steve
categories: [ technologie ]
image: assets/images/articles/unikname-votre-identifiant-decentralise/1.png
image_credential: ""
featured: false
---

### L’identité décentralisée à la portée de tous

L’**identité numérique** est au cœur du monde d'aujourd'hui et de demain ; elle permet de faire le lien entre le réel et le virtuel. Tous les jours, nous utilisons des identifiants pour profiter de services sur Internet ; nous partageons nos **informations personnelles, login et mots de passe** avec différents systèmes d’identification.

Nos données se retrouvent alors gérées par **plusieurs tiers**, sur lesquels nous n’avons **aucun moyen de contrôle**. Cela comporte des risques vis-à-vis de notre vie privée et de nos informations personnelles (fuites de données, usurpation d’identité, etc.). 

{:refdef: style="text-align: center;"}
![]({{ site.baseurl }}/assets/images/articles/unikname-votre-identifiant-decentralise/identity.png){:height="400px" width="400px"}
{: refdef}

Le concept d’[**identité décentralisé**](https://cryptoms.fr/technologie/2020/10/01/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees.html) (ou d’identité auto-souveraine) est une alternative aux systèmes d’identités traditionnels. Il repose sur le modèle où chaque utilisateur a le **contrôle total sur son identité numérique**.

Aujourd’hui, nous allons nous intéresser à un projet qui propose des solutions autour de l’identité numérique décentralisée : [**Unikname**](https://www.unikname.com/). 

### Unikname : fournisseur d’identifiants décentralisés

Créé en **2018** par une équipe nantaise, [**Unikname**](https://www.unikname.com/) est une **plateforme open-source** qui permet de créer des **identifiants décentralisés** et de les utiliser à travers différents services. Le projet fonctionne avec sa propre **Blockchain**, Unikname Network, sur laquelle sont enregistrés les identifiants.

{:refdef: style="text-align: center;"}
![]({{ site.baseurl }}/assets/images/articles/unikname-votre-identifiant-decentralise/unikname.png){:height="500px" width="500px"}
{: refdef}

En quelques clics, nous pouvons créer notre **propre identifiant universel** sur leur [application mobile](https://my.unikname.app/). Lors de cette création, un **portefeuille** va être généré sur la Blockchain, avec sa **clé privée** associée. Cette clé privée ne doit absolument pas être perdue, sous peine de perdre l’accès à votre identifiant. 

Avec l’application, nous pouvons gérer différentes **propriétés qui sont liées à notre identifiant**, et nous **connecter** sur les sites qui implémentent la solution Unikname, en **quelques secondes** et **sans mot de passe**. 

{:refdef: style="text-align: center;"}
![]({{ site.baseurl }}/assets/images/articles/unikname-votre-identifiant-decentralise/unikname-connect.gif){:height="400px" width="400px"}
{: refdef}

Lors d’une tentative de connexion avec notre Unikname, le site web va envoyer une demande de confirmation sur l’application mobile, comme une **double authentification** classique. Du point de vue de l'expérience utilisateur, c’est assez **simple, intuitif et rapide**. 

{:refdef: style="text-align: center;"}
![]({{ site.baseurl }}/assets/images/articles/unikname-votre-identifiant-decentralise/steps-login.png){:height="600px" width="600px"}
{: refdef}

Cette solution d'authentification est donc une alternative aux systèmes traditionnels, offrant plus de **confidentialité** et de **contrôle** sur nos données personnelles. 

### Les objectifs 

Unikname souhaite se positionner comme un **fournisseur d’identités décentralisées** de référence et créer un modèle économique viable grâce à son **token $UNIK**. Son objectif est d’augmenter le nombre de partenaires permettant aux utilisateurs de se connecter avec leur système, afin de développer l'utilisation de ses identifiants. 

Les identifiants peuvent notamment être utilisés pour **d’autres cas d’usage** : 
- [Génération de certificats](https://docs.unikname.network/unikname-use-case.html#unikname-certificate-proofing) 
- [Participation à des votes](https://www.unikname.com/unikname-quorum-le-vote-decentralise/) 
- Signature numérique de documents
- etc.

{:refdef: style="text-align: center;"}
![]({{ site.baseurl }}/assets/images/articles/unikname-votre-identifiant-decentralise/ecosystem.png){:height="600px" width="600px"}
{: refdef}

Le réseau compte aujourd'hui plus de **15 000 identifiants enregistrés**. Le prix pour créer son Unikname varie en fonction de sa longueur ; il est **gratuit s'il fait plus de 15 caractères**. Pour les entreprises qui souhaitent implémenter cette solution sur leur site Web, Unikname propose plusieurs offres sous forme d'abonnement. 

Le projet axe ses développements autour de la **protection des données personnelles** des utilisateurs : 
- Pas de [KYC](https://fr.wikipedia.org/wiki/Know_your_customer) (Know Your Consumer)
- Pas de collecte de données personnelles
- Association Unikname/clé publique non visible par défaut sur la Blockchain
- Utilisation de [preuves à divulgation nulle de connaissance](https://fr.wikipedia.org/wiki/Preuve_%C3%A0_divulgation_nulle_de_connaissance) (ZKP)

Plusieurs outils comme des [API](https://fr.wikipedia.org/wiki/Interface_de_programmation), [SDK](https://fr.wikipedia.org/wiki/Kit_de_d%C3%A9veloppement) ou [CLI](https://fr.wikipedia.org/wiki/Interface_en_ligne_de_commande) sont mis à disposition pour faciliter les développeurs dans l’intégration des solutions. On notera aussi un effort sur la [**documentation fonctionnelle et technique**](https://docs.unikname.network/) mise à disposition par l’équipe. 

### Une Blockchain et de la preuve d’enjeu déléguée

Unikname fonctionne avec sa propre [**Blockchain publique**](https://docs.unikname.network/introduction.html#main-features) basée sur [**Ark**](https://ark.io/) et de la [**preuve d’enjeu déléguée**](https://academy.binance.com/fr/articles/delegated-proof-of-stake-explained) (DPOS) comme algorithme de consensus. [**23 délégués**](https://docs.unikname.network/key-concept/network-governance.html) maintiennent des nœuds du réseau et sont chargés de valider les transactions, en échange d’une **récompense en $UNIK**.

Parmi ces 23 délégués : 
- **10** délégués sont des **utilisateurs élus**
- **10** délégués sont représentés par des **entreprises partenaires**
- **3** délégués sont des **membres de l’équipe**

{:refdef: style="text-align: center;"}
![]({{ site.baseurl }}/assets/images/articles/unikname-votre-identifiant-decentralise/dpos.png){:height="600px" width="600px"}
{: refdef}

Unikname mise donc sur la preuve d’enjeu déléguée pour garantir la **sécurité du réseau**. Ce mécanisme, certes **moins décentralisé** en termes de nombre de nœuds, permet d’avoir un réseau plus **scalable et rapide**. 

Contrairement à la [preuve de travail](https://fr.wikipedia.org/wiki/Preuve_de_travail) basée sur la puissance de calcul, la preuve d’enjeu délégué repose sur un modèle de **démocratie participative**. Les utilisateurs **votent pour soutenir un délégué**. Les 10 délégués ayant le plus de votes ont le droit de valider les transactions et recevoir des récompenses. Les délégués ont alors tout intérêt à **partager leurs gains** avec leurs supporters.

### Les concepts clés

Les identifiants s’appuient sur les **concepts de DID et des Verifiable Credentials**, les standards proposés par le W3C. L’équipe d’Unikname est aussi membre de la [**DIF**](https://identity.foundation/) (Decentralized Identity Foundation).

{:refdef: style="text-align: center;"}
![]({{ site.baseurl }}/assets/images/articles/unikname-votre-identifiant-decentralise/w3c.png){:height="200px" width="200px"}
{: refdef}

Les [**DID**](https://www.w3.org/TR/did-core/) (Decentralized Identifiers) représentent un **nouveau type d’identifiants**, pouvant représenter n’importe quel sujet ou individu. Contrairement aux identifiants classiques, les DID sont enregistrés sur un **registre décentralisé** comme des Blockchains, et sont gérés par un **contrôleur**.  Pour faire simple, l'utilisateur est propriétaire de son identifiant, il peut gérer les informations qui y sont liées, et surtout le faire **sans demander la permission à une tierce partie**.

Les [**Verifiable Credentials**](https://www.w3.org/TR/vc-data-model/) sont des types de **certificats** qui peuvent être **vérifiés numériquement** grâce à la signature cryptographique. Le standard décrit ce modèle et permet de générer des **preuves** numériques, notamment sur des **registres décentralisés**.

### Feuille de route et modèle économique

Le **token principal** d’Unikname est le [**$UNIK**](https://docs.unikname.network/tokens.html). Il est le fuel du réseau ; il permet d’enregistrer des identifiants, réaliser les transactions et utiliser les divers services disponibles. Le $UNIK est aussi **multi-chain** ; des bridges sont en cours de développement pour permettre l'échange du token sur différents réseaux (Ethereum, BSC, etc.). Les **identifiants** sont quant à eux représentés par des [**NFT**](https://fr.wikipedia.org/wiki/Jeton_non_fongible) **$UniknameID**. 

Le projet s’appuie sur une [road map](https://github.com/unik-name/unikname-papers/blob/master/unikname_whitepaper.pdf) divisée en **2 phases principales**. La **phase 1**, initiée en 2018, a eu pour but de lancer les **premiers services et attirer les utilisateurs**. La **phase 2** est la **version plus mature du système**, qui vise un nombre de services et d’utilisateurs grandissant sur le long terme. Le projet est aujourd’hui en transition vers la phase 2, qui est notamment marqué par la **vente au public** du token $UNIK et sa **cotation sur des plateformes d’échange décentralisées** (DEX). 

{:refdef: style="text-align: center;"}
![]({{ site.baseurl }}/assets/images/articles/unikname-votre-identifiant-decentralise/roadmap.png){:height="800px" width="800px"}
{: refdef}

La **supply** d’$UNIK va atteindre **400 millions d'unités** au début de cette seconde phase, puis va augmenter d'environ **4 millions tous les ans** (1 $UNIK / bloc, 8 blocs /s). Cette **inflation de 1%** devrait être compensée par les tokens bloqués par les délégués et les tokens perdus. Les tokens vont être réparti entre les membres de la communauté, l’équipe Unikname et une réserve de sécurité, afin de pérenniser et sécuriser le développement du projet. 

{:refdef: style="text-align: center;"}
![]({{ site.baseurl }}/assets/images/articles/unikname-votre-identifiant-decentralise/distribution.png){:height="600px" width="600px"}
{: refdef}

### Une première expérience dans l’identité décentralisée

En tant qu’utilisateur, l’expérience Unikname est plutôt réussie. C’est intéressant de voir comment le **concept d’identité décentralisée** peut **changer et simplifier** notre façon de nous identifier sur Internet, **sans mot de passe** et avec un **contrôle accru sur nos données**. 

Pour se développer, Unikname devra faire face à **plusieurs défis** comme la recherche de partenaires, le développement de ses services ou encore la lutte contre le cybersquatting. La **concurrence** est aussi présente dans ce secteur d’activité, mais le projet peut compter sur une [**équipe sérieuse**](https://www.unikname.com/en/about/), des objectifs axés sur la **privacy** et des **applications qui fonctionnent** aujourd’hui.

En tant que rédacteur de cet article, je suis aussi délégué du réseau Unikname. Je tiens à préciser que cet article de présentation n’est pas écrit en collaboration avec l’équipe du projet et n’a pas pour but de vendre quoi que ce soit.

Pour en savoir plus, voici quelques liens utiles : 
- [Application](https://my.unikname.app/) / [Explorer](https://explorer.unikname.network) 
- [Whitepaper](https://github.com/unik-name/unikname-papers/blob/master/unikname_whitepaper.pdf) / [Documentation](https://docs.unikname.network/) / [Github](https://github.com/unik-name)
- [Twitter](https://twitter.com/UniknameNetwork) / [Discord](https://discord.com/invite/Wur2FZjNb8) / [Telegram](https://t.me/Unikname_network)
- [Token sale](https://hub.unikname.network/whitelist?a=vp4G2XxR)

J’espère que cette présentation vous aura plu, n’hésitez pas à nous faire un retour si vous testez ce projet, ou nous contacter en cas de questions. 
