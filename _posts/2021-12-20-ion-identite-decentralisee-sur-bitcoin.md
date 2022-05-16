---
layout: post-right-sidebar
title:  "ION : l'identité décentralisée sur Bitcoin"
description: ""
author: steve
categories: [ technologie ]
image: assets/images/articles/ion-identite-decentralisee-sur-bitcoin/1.png
image_credential: ""
featured: false
---

### L’identité numérique de demain ?

**L’identité** est une partie intégrante du monde numérique dans lequel nous vivons. Tout individu, organisme ou ordinateur est représenté virtuellement par un ou plusieurs **identifiants**, liés de près ou de loin à différentes données. L’identité numérique permet de faire le lien entre une entité réelle et sa représentation virtuelle. 

Que ce soit pour **s’authentifier**, **communiquer** ou utiliser un **service sur le Web**, nous utilisons des identifiants uniques, qui sont associés à plusieurs informations personnelles (adresses mail, pseudonymes, id aléatoires, etc.). Ces identifiants sont en général gérés par des organismes qui ont le contrôle sur nos données. Celles-ci peuvent être analysées, altérées, revendues ou encore volées, sans avoir le consentement des utilisateurs ; cela représente des menaces vis-à-vis de leurs vies privées. Il ne faut pas oublier que le business des données représente plusieurs milliards d’euros ; les utilisateurs n’ont pas toujours en tête que leurs données ont une véritable valeur. 

C’est à partir de ce constat que le **concept d’identité décentralisée**, aussi appelée l’identité auto-souveraine (self-sovereign identity / SSI), est né. Nous vous conseillons de lire notre [précédent article](https://cryptoms.fr/technologie/2020/10/01/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees.html) sur le sujet. 

**L’identité décentralisée** a pour objectif de redonner aux utilisateurs le **contrôle sur leurs données**, en étant au cœur du [**Web3**](https://cryptoms.fr/technologie/2021/01/19/surfez-sur-le-web-decentralise-dweb.html). Elle s'appuie sur des **identifiants décentralisés (DID)**, déployés sur un registre distribué. Les utilisateurs sont les seuls à pouvoir gérer leurs DID et les données qui y sont liés. Ils peuvent y associer seulement les informations qu’ils souhaitent partager. 

Plusieurs acteurs développent des solutions pour mettre au point des systèmes d’identités décentralisées. Aujourd’hui nous allons nous intéresser à l’une d’entre elles : [**ION (Identity Overlay Network)**](https://identity.foundation/ion/). Il s’agit d’un réseau décentralisé de gestion d’identité, basé sur Bitcoin. 

{:refdef: style="text-align: center;"}
![]({{ site.baseurl }}/assets/images/articles/ion-identite-decentralisee-sur-bitcoin/ion-logo.jpg){:height="350px" width="350px"}
{: refdef}

### SideTree : un protocole de gestion d’identifiants

En 2017, les membres de la [**Decentralized Identity Foundation (DIF)**](https://identity.foundation/) ont commencé à travailler sur une solution pour gérer des identifiants décentralisés, notamment en utilisant des Blockchain comme registres. L’idée étant d’inscrire des **références** sur une chaîne de blocs, afin qu’elles soient vérifiables et auto-contrôlées par leurs titulaires. De par ses propriétés de registre décentralisé, les **Blockchain** répondent particulièrement au besoin. Plusieurs projets autour de l’identité décentralisée ont recours à ce type de technologie pour gérer des DID. 

L’une des problématiques des Blockchain, c’est la difficulté à monter en charge : la **scalabilitée**. Par exemple, sur Ethereum le réseau est souvent saturé, ce qui provoque des lenteurs dans le traitement des transactions et des frais qui augmentent. D’autres Blockchain proposent de meilleures performances, mais font un compromis sur la sécurité ou la décentralisation du système. On parle du [trilemme des Blockchain](https://cryptoast.fr/trilemme-blockchains/).

Pour qu’un système d’identité puisse fonctionner à l’échelle globale, il doit être scalable. Pour cela, il existe des **solutions dites de Layer 2**. Ce sont des solutions construites “au dessus” d’une Blockchain existante, de manière à **agréger plusieurs opérations** en une seule transaction. Cela permet d’augmenter significativement le nombre de transactions par seconde pouvant être traitée, et donc de diminuer les frais. Ce mécanisme est notamment utilisé par le [**Lighning Network**](https://lightning.network/) sur Bitcoin, et par différentes applications sur Ethereum. 

Les membres de la DIF ont alors développé un protocole de Layer 2 pour gérer des identités décentralisées : [**SideTree**](https://identity.foundation/sidetree/spec/). Ce protocole permet de créer un réseau sur lequel les différents **nœuds sont connectés en pair-à-pair**. Le protocole peut être adapté à différentes Blockchain sous-jacentes, pour offrir une certaine **interopérabilité**. Il est aussi important de souligner qu’il suit les **préconisations du W3C** par rapport aux [DID](https://www.w3.org/TR/did-core/) et aux [Vérifiable Credentials](https://www.w3.org/TR/vc-data-model/). 

SideTree est construit avec plusieurs composants logiciels : 

{:refdef: style="text-align: center;"}
![]({{ site.baseurl }}/assets/images/articles/ion-identite-decentralisee-sur-bitcoin/sidetree.png){:height="250px" width="250px"}
{: refdef}

**API REST** : une interface pour permettre aux utilisateurs d’interagir avec le système. 

**SideTree Core** : c’est la partie “logique” du système, qui gère les différentes opérations sur les identifiants. 

**Content Addressble Storage** : gère le stockage des identifiants et leurs métadonnées. SideTree utilise notamment [IPFS](https://cryptoms.fr/technologie/2021/01/27/ipfs-l-hebergement-de-donnees-en-pair-a-pair.html), un protocole permettant de stocker et distribuer des données de manière décentralisée. Une base de données MongoDB est également utilisé pour du stockage local.

**Blockchain Adapter** : permet de communiquer avec une Blockchain sous-jacente, afin d’y enregistrer des “états”. 

### ION : le protocole SideTree couplé à Bitcoin

#### Bitcoin comme layer 1 

[**ION**](https://github.com/decentralized-identity/ion) (Identity Overlay Network) est une **implémentation du protocole SideTree** basé sur **Bitcoin** et développé par les membres de la DIF. C’est donc un système de gestion d’identité public, décentralisé et qui n’est contrôlé par aucune organisation. Il est capable de gérer **plusieurs milliers d’opérations par seconde**. 

{:refdef: style="text-align: center;"}
![]({{ site.baseurl }}/assets/images/articles/ion-identite-decentralisee-sur-bitcoin/ion.png){:height="250px" width="250px"}
{: refdef}

SideTree a également d’autres implémentations, dont [Element](https://github.com/decentralized-identity/element) qui est basé sur la Blockchain Ethereum.

ION a choisi Bitcoin pour :
Sa **décentralisation** : 
- Le réseau est ouvert à tous
- Les nœuds sont nombreux et décentralisés
- Les transactions sont transparentes, vérifiables et immuables
Sa **sécurité** :
- Bitcoin a montré sa résistance depuis plus de 10 ans
- Les participants sont incités à maintenir et faire fonctionner le réseau
- Le coût d’une attaque à 50% est extrêmement élevé, et considérée impossible

#### Des DID et documents

Concrètement, un identifiant sur ION ressemble à une suite de caractères unique et complexe : **did:ion:EiD3DIbDgBCajj2zCkE48x74FKTV9_Dcu1u_imzZddDKfg**

Ce DID il est lié à un document JSON qui contient plusieurs propriétés. 

{:refdef: style="text-align: center;"}
![]({{ site.baseurl }}/assets/images/articles/ion-identite-decentralisee-sur-bitcoin/ion-did.png){:height="600px" width="600px"}
{: refdef}

L’utilisateur peut également ajouter **toutes les propriétés qu’il souhaite**. Il est possible d’obtenir le document à partir de l’identifiant, en effectuant une **résolution**. Cela peut se faire en utilisant l’**API REST** d’un nœud ION, ou alors en utilisant un [**explorateur dédié**](https://identity.foundation/ion/explorer/). L’idée est de pouvoir récupérer les informations associées à un DID, de la même manière que lorsqu’on récupère les adresses IP liées à des noms de domaine (DNS).

#### Comment ça fonctionne ? 

Pour générer un DID, un utilisateur doit soit utiliser **son propre nœud**, soit en utiliser un **disponible sur le réseau**. L’opérateur du nœud doit avoir un **portefeuille numérique** (wallet) avec du Bitcoin, car l’opération nécessite d’effectuer une transaction. La gestion des identifiants se fait en plusieurs étapes, en ligne de commande et via une API REST; **ce n’est pas trivial**. 

Chaque identifiant est lié à **3 paires de clés cryptographiques** : 
-	Clés de mise à jour
-	Clés de récupération
-	Clés de signature

Les **opérations réalisées** lors de la création sont inscrites dans un fichier. Ce **fichier d’instructions** est distribué sur **IPFS**, et son **identifiant unique** est inscrit dans une **transaction Bitcoin**. Les opérations simultanées sur plusieurs identifiants sont regroupées, afin d’avoir une seule transaction Bitcoin exécutée. SideTree utilise notamment des [**arbres de Merkel**](https://fr.wikipedia.org/wiki/Arbre_de_Merkle) afin de structurer les états des différents identifiants, et permettre la gestion d’un **grand nombre d’opérations par transaction**.    

Tous **les autres nœuds** du réseau ION observent les transactions Bitcoin et extraient celles qui correspondent au protocole ION. Ils **récupèrent le fichier d’instructions** sur IPFS, grâce à son identifiant unique contenu dans la transaction. Puis ils **exécutent les instructions** afin de se **mettre à jour** et contenir les **derniers identifiants créés**. Ainsi, le nouvel identifiant est distribué sur l’ensemble du réseau. Le temps de synchronisation peut varier ; nous n’avons pas trouvé de mesures par rapport à ce temps. 

{:refdef: style="text-align: center;"}
![]({{ site.baseurl }}/assets/images/articles/ion-identite-decentralisee-sur-bitcoin/ion-fonctionnement.png){:height="1200px" width="1200px"}
{: refdef}

Par définition, **les DID ne sont pas transférables** ; l’utilisateur à l’origine d’une opération sur un DID est donc forcément le “propriétaire” et le seul à avoir le contrôle dessus avec sa clé privée. Cette propriété permet notamment de **se passer d’un mécanisme de consensus** lors des opérations sur les DID, car il n’y a [**pas de doubles dépenses possibles**](https://fr.wikipedia.org/wiki/Double_d%C3%A9pense).

### Quel avenir ?

#### Plusieurs cas d’usage

Le projet ION est développé par les **membres de la DIF**, et soutenu activement par **Microsoft**. L’entreprise américaine souhaite exploiter ce protocole afin de proposer de [nouveaux services](https://techcommunity.microsoft.com/t5/identity-standards-blog/ion-booting-up-the-network/ba-p/1441552) basés sur l’identité décentralisée. 

Plusieurs cas d’usage sont possibles : 
- Les utilisateurs peuvent **créer leurs DID et utiliser le système d'authentification** [**OpenID**](https://fr.wikipedia.org/wiki/OpenID). Ainsi, il serait possible de **s’authentifier** sur diverses applications, sites et services Web avec un identifiant unique et décentralisé. **L’authentification sans mot de passe est possible**.

- Les utilisateurs pourraient **choisir les données qu’ils souhaitent associer à leur DID** et **révoquer leurs accès** à tout moment. Des **modèles économiques** pourraient être développés afin de rémunérer directement les utilisateurs en échange de leurs données. 

- Les utilisateurs peuvent **gérer différentes identités** avec plusieurs DID, à travers leurs portefeuilles numériques. 

- Des entreprises, écoles ou organismes peuvent **générer des certificats numériques vérifiables** associés à des DID. (Verifiable Credentials).

- Les DID peuvent être **associés à des noms de domaine**, afin d’utiliser des noms lisibles plutôt que des adresses complexes. 

#### Des services à développer

L’ambition de ION est de devenir **un standard pour l'identité décentralisée de demain**. L’ingéniosité du protocole est intéressante, et pourrait se démarquer des autres solutions concurrentes notamment grâce à **l’utilisation du protocole Bitcoin**. Les solutions **Layer 2** sont prometteuses pour de nombreux cas d’usage, et permettent d’augmenter significativement la scalabilitée des registres décentralisés. 

Cependant, aujourd’hui le protocole reste **complexe à utiliser** ; des outils et applications pour faciliter l’usage devront être développés. **Microsoft** proposera certainement des services utilisant ION, mais il faut espérer que d’autres acteurs suivront ce pas, notamment avec des **“solutions finales” non-propriétaires**. 

De plus, les **spécifications techniques** recommandées pour déployer un nœud sont **assez gourmandes** ; cela peut représenter un **coût non négligeable** en termes d'hébergement. Les frais lors de l’enregistrement d’un DID sont également à la charge de l'opérateur du nœud, qui va soumettre la transaction sur le réseau. Il n’y a donc **pas d’incitation économique** pour déployer un nœud, mis à part pour créer un modèle économique en vendant l'enregistrement de DID à d’autres utilisateurs. À première vue, ces éléments peuvent être des **freins à la décentralisation et l’adoption de ION**, mais il est encore trop tôt pour l’affirmer. 

#### De nombreux concurrents

La **concurrence est rude** dans le monde de l’identité numérique. D’une part, il y a les **solutions d’identité proposées par des géants** (Google, Facebook, Thales, etc.), qui dominent aujourd’hui le marché, d’autre part il y a les **solutions d’identités souveraines** poussées par les gouvernements (France Connect, Essif, etc.). En marge de ces systèmes plus ou moins centralisés, les **protocoles d’identité auto-souveraine** sont également nombreux. Mise à part ION, il y a également **Ethereum Name Service** basé sur Ethereum, **Evernym**, **Sovrin** et d'innombrables **projets en cours de développement**.

La réalisation d’**applications concrètes** et l’**adoption par le grand public** sont des points essentiels dans la réussite d’un projet ; le temps nous montrera lesquels feront la différence et se rendront  indispensables au Web de demain. 

