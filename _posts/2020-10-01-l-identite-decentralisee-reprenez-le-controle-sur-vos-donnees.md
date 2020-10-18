---
layout: post-right-sidebar
title:  "L'identité décentralisée : reprenez le contrôle sur vos données"
description: "L’identité numérique permet de faire un lien technologique entre une entité réelle et des entités virtuelles. Elle peut servir à représenter des utilisateurs, des organisations ou encore des services informatiques."
author: steve
categories: [ technologie ]
image: assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/1.png
image_credential: ""
featured: false
---

### Le lien entre le réel et le virtuel

L’**identité numérique** permet de faire un **lien technologique** entre une **entité réelle** et des **entités virtuelles**. Elle peut servir à représenter des utilisateurs, des organisations ou encore des dispositifs informatiques sur un réseau.

Une identité numérique est généralement associée à un **identifiant unique**, qui peut être lié à des données personnelles, descriptives ou encore biométriques. Il n’y a pas de modèle **exact et limité**, tout type d’information peut être utilisé pour identifier une entité.

&nbsp;
![walking]({{ site.baseurl }}/assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/Identities.png)
&nbsp;

Les systèmes d’identité actuels sont nombreux et généralement gérés de manière **centralisée**. Chaque site Web, réseau social ou service public utilise **un système d’identification** des utilisateurs. Les identités sont soit gérées sur leur propre infrastructure informatique, soit par un service tiers (“se connecter avec Google, Twitter, Facebook, France Connect”). Les données enregistrées par les utilisateurs se retrouvent donc **démultipliées** sur une multitude de bases de données. 

Généralement, l’utilisateur doit fournir au minimum une **adresse mail** ainsi qu’un **mot de passe** sur chaque service qu’il utilise. Il en est de sa responsabilité de gérer ses différents comptes, ses différents mots de passe, et de suivre ou non les bonnes pratiques recommandées. La gestion de ces informations par les différents services n’est **pas transparente** et le **risque de failles ou d’attaques** est d’autant plus important. L’activité des utilisateurs sur Internet est enregistrée par certaines plateformes ; ces données peuvent être exploitées et revendues. **L’utilisateur n’est pas maître de ses données**. 

Cela comporte donc des risques, sur la **vie privée** des utilisateurs et sur la **propriété intellectuelle** (fuite d’informations personnelles, usurpation d’identité, contrefaçon).


### Vers de nouveaux systèmes d’identités

Le concept d’**identité auto-souveraine** (self-sovereign identity ou SSI) repose sur le modèle où chaque utilisateur a le **contrôle total sur ses données**. Dans cette mesure, il aurait le droit et le pouvoir de décider **quand, comment et avec qui** ses informations sont partagées. L’idée est d’avoir un **système décentralisé et sans organe de contrôle**, sur lequel l’utilisateur crée et gère lui-même son **identité numérique**. Les différents services et applications devraient alors **se connecter** à ce système et **demander la permission** pour accéder à l’identité des utilisateurs.

Ce changement de paradigme permettrait aux utilisateurs de partager seulement les informations souhaitées, de choisir quand révoquer leurs accès et d’avoir réellement la main sur leurs données, sans nécessité un tiers de confiance.
C’est ce qu’on appelle aussi, l’**identité décentralisée**.

Un tel système doit s’appuyer sur 3 processus :

- **L’inscription et la vérification de l’identité**

Le système doit permettre aux utilisateurs de **s’inscrire et renseigner leurs informations**. Dans certains cas, les informations peuvent nécessiter une vérification par une autorité (par exemple pour les informations légales). Ces données peuvent être stockées directement sur le système en étant chiffrées, mais aussi en local. 

L’utilisateur doit pouvoir choisir les données qu’il souhaite présenter à un service. Ainsi, en fonction du cadre (personnel, professionnel, médical, etc.), seulement les **informations nécessaires** seraient transmises.

- **L'authentification**

L’utilisateur doit être en mesure de **prouver son identité**; celle-ci doit être **vérifiable**. De la même manière que dans le monde réel, lorsque l’on présente notre carte nationale d’identité, il doit pouvoir présenter un **certificat numérique vérifiable**. En fournissant cette preuve, il pourra s’authentifier **sans fournir de mot de passe**. 

- **Portabilité et interopérabilité** 

L’identité doit être utilisable dans différents cadres et par différents services. Il est alors nécessaire que le système soit [**interopérable**](https://www.laquadrature.net/2019/06/13/cest-quoi-linteroperabilite-et-pourquoi-est-ce-beau-et-bien/).  

&nbsp;

D’un point de vue légal, en Europe, cela doit respecter les cadres mis en place. Lorsqu’on parle d’identification numérique, on pense notamment aux : 

[**Règlement Général sur la Protection des Données**](https://www.cnil.fr/fr/reglement-europeen-protection-donnees) (RGPD)

![]({{ site.baseurl }}/assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/rgpd.jpg){:height="120px" width="120px"}

[**Règlement eiDAS**](https://www.ssi.gouv.fr/entreprise/reglementation/confiance-numerique/le-reglement-eidas/) qui définit un cadre légal sur les signatures électroniques.

![walking]({{ site.baseurl }}/assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/eidas.png){:height="120px" width="120px"}
 

Il ne faut pas oublier que le concept d’identité auto-souveraine redonne du contrôle aux utilisateurs, mais leur donne aussi de **nouvelles responsabilités**. Ils doivent être en mesure de gérer leur identité numérique et les données transmises aux services. La perte de la clé privée permettant d'accéder et de contôler son profil peut être irrémédiable. Il faut donc que le système soit **simple** pour qu’un utilisateur lambda puisse le comprendre et l’utiliser; **la complexité technique doit être invisible**.

L’identité numérique n’est pas non plus une solution miracle contre le **traitement abusif des données personnelles**. À partir du moment où certaines informations sont transmises, elles peuvent être **copiées et exploitées**. De plus, le Cloud Act (loi américaine) oblige les sociétés étatsuniennes à pouvoir communiquer les informations des utilisateurs aux autorités.
Même si en France, la CNIL est chargée de veiller au respect du RGPD, **les cas d’abus sont et seront toujours présents**.


### Le chiffrement et la signature numérique

L’identité numérique requiert le traitement de données qui peuvent être **sensibles**. Le recours à des technologies permettant de les **authentifier et de les protéger** est alors nécessaire. Les données numériques peuvent être **chiffrées** et/ou **signées numériquement**. 

- Le **chiffrement** permet de garantir la **confidentialité** des données ; seule la personne autorisée peut déchiffrer les données.

- La **signature numérique** permet d’assurer l’**intégrité** des données, et de pouvoir les **authentifier**. Elle est notamment basée sur le chiffrement asymétrique. 

Le **chiffrement asymétrique** repose sur un mécanisme de **clés publiques / clés privées**. Une paire de clés (publique/privée) est générée de manière aléatoire grâce à un **algorithme cryptographique**. Il en existe plusieurs (RSA, ECDSA, etc.), chacun ayant des spécificités différentes (tailles de clés, vitesse, niveau de sécurité, etc.).

La clé privée peut être utilisée pour chiffrer des données, et la clé publique pour les déchiffrer. 

&nbsp;
![walking]({{ site.baseurl }}/assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/Chiffrement.png)
&nbsp;

C’est avec ce concept qu’il est possible de réaliser des **signatures numériques**. 

Pour cela, une “**empreinte**” des données est générée à l’aide d’une **fonction de hachage** ; celle-ci est unique. 
À l’aide d’une clé privée, cette **empreinte est chiffrée** ; le résultat correspond à la **signature du document**. 

Pour vérifier cette signature, il faut la déchiffrer avec la clé publique pour obtenir l’empreinte originale. Il suffit ensuite de vérifier si cette empreinte est identique à celle des données. 

&nbsp;
![walking]({{ site.baseurl }}/assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/Signature.png)
&nbsp;

De ces manières, des données peuvent être signées/chiffrées par la personne ou l’organisme qui disposent de la clé privée, et authentifiées/déchiffrées par quiconque qui dispose de la clé publique. 

### Les preuves à divulgation nulle de connaissance (ZKP)

Dans le concept d’identité auto-souveraine, la **confidentialité des données** est un point primordial. Seuls les personnes ou services autorisés doivent avoir accès aux informations liées à l’identité. Étudiés depuis les années 80, les protocoles de **preuves à divulgation nulle de connaissance** (Zero-Knowledge Proof ou ZKP) permettent de **partager et d’authentifier** une information, **sans en dévoiler son contenu**. 

Cela peut vous permettre : 
- De prouver que vous êtes majeur sans dévoiler votre date de naissance
- De justifier votre lieu de domiciliation sans donner votre adresse
- De prouver un paiement sans fournir de facture détaillée

Pour expliquer comment cela fonctionne, prenons un exemple simple. 

On considère une **grotte**, composée de **deux chemins** (A et B). Ces deux chemins se rejoignent, mais sont **séparés par une porte**. Pour ouvrir cette porte, il faut un **mot secret**. 

Soit Alice (**prouveur**) et Bob (**vérificateur**) : Alice veut prouver à Bob qu’elle connaît le mot secret, sans lui donner. C’est ce qu’on appelle la **preuve de connaissance**. 

Pour cela, Alice et Bob vont répéter plusieurs fois ces étapes : 
- **Engagement** : Bob attend à l’entrée de la grotte, tandis que Alice choisit aléatoirement un chemin et entre (A ou B).
- **Défi** : Bob choisit aléatoirement un chemin et cri A ou B à Alice.
- **Réponse** : Alice doit sortir par le chemin donné par Bob.

&nbsp;
![walking]({{ site.baseurl }}/assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/ZKP.png)
&nbsp;

Si Alice sort par le mauvais chemin, c’est une **preuve de non-connaissance** : elle ne connaît pas le mot secret. 

Si Alice sort par le bon chemin, il y a une **probabilité qu’elle connaisse le mot secret**. En répétant ces étapes plusieurs fois, cette probabilité augmente. 

Pour n essais, il y a une **probabilité de 1/(2^n)** qu’Alice ne connaisse pas le mot secret. Avec une probabilité élevée, Bob peut donc affirmer qu’Alice connaît le mot secret.
 
C’est ce principe qui est implémenté dans les protocoles de preuves à divulgation nulle de connaissance, à l’aide de fonctions cryptographiques. Comme exemple d’implémentation, nous pouvons citer **zk-SNARKs** (utilisé par ZCash), **zk-STARKS**, **AZTEC** ou encore les **signatures de Schnorr**, qui seront utilisées à l’avenir dans Bitcoin ([BIP 340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki)).


L’échange de données se déroule de cette manière : 
- Bob (vérificateur) va **soumettre une requête** à Alice (prouveur) sur des données privées. 
- Alice va **construire une preuve** via le protocole ZKP, puis l’envoyer à Bob avec la réponse à la requête. 
- Bob va ensuite pouvoir **vérifier** la réponse grâce à la preuve, **sans jamais accéder aux données privées**.

&nbsp;
![walking]({{ site.baseurl }}/assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/ZKP2.png)
&nbsp;


### Les Verifiable Credentials

Une identité peut être représentée de façon numérique par une **attestation** délivrée par une **autorité ou un organisme**. Les informations contenues sur l’attestation numérique doivent pouvoir être **vérifiables** à tout moment.

C’est ce même principe qui est notamment utilisé dans la [**certification de diplômes sur Blockchain**](https://cryptoms.fr/technologie/2020/07/07/comment-la-technologie-blockchain-peut-elle-ameliorer-le-processus-de-recrutement.html).

Le **World Wide Web Consortium** (W3C) propose un modèle de données standardisé pour mettre en place différents types de certificats numériques, appelés [Vérifiable Credentials](https://www.w3.org/TR/vc-data-model/).

L’objectif est de **garantir** à un service, **la validité d’une information** émise par une source de confiance. L’architecture proposée permet de sécuriser les attestations grâce à la cryptographie, dans le respect de la vie privée et en les rendant vérifiables numériquement. 

Les titulaires de Verifiable Credentials peuvent **générer des présentations** (document représentatif) et les partager. Ces présentations sont vérifiables grâce à de la signature numérique, et peuvent donc **prouver les informations** qu’elles contiennent. 

&nbsp;
![walking]({{ site.baseurl }}/assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/VerifiableCredential.png)
&nbsp;

Le modèle de données proposé s'appuie sur quatre composants:
- **Émetteur** : émet les attestations numériques
- **Titulaire** : reçoit, gère et présente ses attestations
- **Vérificateur** : demande et vérifie des informations
- **Registre de données vérifiables** :  stocke et maintient les identifiants et schémas des attestations


### Les identifiants décentralisés (DID)

Actuellement, la plupart des systèmes d'identification reposent sur des **infrastructures centralisées**, qui contiennent donc les **identifiants** ainsi que les **données** qui y sont liées. Le gestionnaire a techniquement **tous les pouvoirs** sur l’identité numérique des utilisateurs. Un nouveau type d’identifiant a été conçu pour être implémenté **indépendamment** des émetteurs d’identité, des registres centralisés ou des autorités de certification ; ce sont les **identifiants décentralisés** (DID). 

Le principe est de rendre indépendante la gestion des identifiants en la déléguant aux utilisateurs. De plus, les identifiants décentralisés peuvent servir à identifier **n’importe quel sujet** (une personne, une organisation, une chose, un modèle de données, etc.); c’est un concept qui donc peut s’appliquer à de **nombreux cas d’usage**. 

Leurs architecture, modèle de données et représentation ont aussi été **standardisés** par le **World Wide Web Consortium** (W3C): [Decentralized Identifiers](https://www.w3.org/TR/did-core/). 

L’idée est d’avoir des **identifiants uniques** (DID) déployés sur un **réseau ouvert et décentralisé**. Chaque identifiant est généré par une **méthode** spécifique, stocké sur un **registre vérifiable** et utilisé pour identifier un **sujet défini**. 

Un DID est lié à un **document** qui contient des informations complémentaires, et ce document est géré par un **contrôleur**.

&nbsp;
![walking]({{ site.baseurl }}/assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/DID.png)
&nbsp;

L’architecture fait intervenir plusieurs composants.

- **DID**: identifiant sous forme d’une chaîne de caractères : “did:example:123456789abcdefghi”
- **Fonction**: utilisée pour générer les identifiants (DID)
- **Document**: associé au DID, contenant plusieurs informations
- **Contrôleur**: composant permettant de gérer le document
- **Résolveur**: composant permettant d’obtenir le document DID à partir de l’identifiant 
- **Sujet**: sujet de l’identification
- **URL**: lien vers les ressources publiques liées à l'identifiant (clés publiques, services, api)
- **Registre de données vérifiables** : stocke et maintient les identifiants

En mettant en place ce nouveau type d’identifiants sur des certificats numériques (Vérifiable Credentials), les données et leur identification ne sont plus liées directement aux services qui les utilisent. **L’utilisateur a réellement la main sur ses données**. Les services s’en sortent aussi gagnants ; ils n’ont plus à gérer de système d'identités.

### Les registres sur chaîne de blocs

Le niveau de décentralisation et de sécurité dépend notamment du **type de registre** sur lequel les données et identifiants sont stockés. C’est dans cette mesure que les registres sur **Blockchain** sont particulièrement adaptés pour ce cas d'usage. 

- **Intégrité**

Lorsque des données sont enregistrées sur Blockchain, leur **intégrité est assurée par les noeuds** qui maintiennent le réseau. Ces nœuds valident les différentes transactions et enregistrements réalisés par les utilisateurs. 

Une fois sur une Blockchain, les données **ne peuvent pas être modifiées ou supprimées**. Cette **immutabilité** renforce la sécurité du système et permet une **historisation** des opérations réalisées. 

- **Disponibilité**

Chaque noeud du réseau dispose d’une **copie du registre** de la chaîne de blocs. Plus les noeuds sont nombreux, plus le réseau est **décentralisé** et donc, plus l’**intégrité** et la **disponibilité** des données sont assurés.

- **Décentralisation**

La **décentralisation des noeuds** ainsi que le **mode de gouvernance** du protocole Blockchain sont primordiaux pour garantir la **sécurité** des données et fournir un **niveau de confiance suffisant**. 

Une **Blockchain publique**, si son réseau est assez développé, peut fournir un **niveau de décentralisation et de confiance maximal**. Les différents noeuds du réseau peuvent être contrôlés par n’importe quelle personne et respectent (par définition) les règles définies par le protocole. **Personne n’a le pouvoir de modifier les règles ou d'arrêter le réseau**.

Une **Blockchain permissionnée ou privée** limite le contrôle du réseau à un **nombre limité d’acteurs**. Les règles définies par le protocole peuvent donc être modifiées par les acteurs qui gèrent le réseau. D’un point de vue gouvernance, la décentralisation n’est pas maximale ; il faut **faire confiance aux gestionnaires**. 

La gouvernance du réseau dépend aussi du **protocole de consensus** que la Blockchain utilise. Nous vous invitons à lire notre article dédié : [**Quelle gouvernance pour une Blockchain ?**](https://cryptoms.fr/technologie/2020/03/09/quelle-gouvernance-pour-une-blockchain.html).


### Les acteurs

Nous verrons certainement, dans quelque temps, des services numériques utiliser des systèmes d’identification axés sur la confidentialité (private by design). Les utilisateurs seraient en mesure de **reprendre le contrôle** sur leurs données et d’**assurer leur suivi**. 

Ces données ont une **réelle valeur** et peuvent alors être vues comme des **actifs numériques**. Les technologies Blockchain permettent de **représenter et d’échanger** de la valeur, donc une véritable **économie** autour de l’identité numérique peut se développer.

Ces innovations technologiques sont au cœur du **Web 3.0** et de l’**Internet de la valeur**. 

L’implémentation, le développement, la fiabilité ainsi que l'expérience utilisateur représentent de véritables **défis techniques** pour mener à bien l’adoption par le grand public. 

Plusieurs projets sont aujourd’hui en cours de développement pour proposer, à différents niveaux, des systèmes et outils autour de l’identité numérique auto-souveraine. Si vous souhaitez en savoir plus sur ces projets, voici un aperçu de l’écosystème.

- [**Decentralized Identity Foundation (DIF)**](https://identity.foundation/)

![walking]({{ site.baseurl }}/assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/dif.png){:height="100px" width="120px"}

Composée de nombreux membres et partenaires importants (Consensys, Microsoft, Hyperledger, Accenture, etc.), la fondation de l’identité décentralisée dispose de plusieurs groupes de travail sur différents sujets. Elle organise aussi plusieurs évenements comme des conférences, des webinaires et des workshops.

- [**European self-sovereign identity framework (ESSIF)**](https://ec.europa.eu/cefdigital/wiki/display/CEFDIGITAL/eID) 

![walking]({{ site.baseurl }}/assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/essif.png){:height="100px" width="120px"}

eID est le projet d’identité numérique à l’initiative de la Commission européenne et du partenariat européen de la Blockchain (EBP). L’objectif est de développer un système d’identité pour tous les citoyens de l’Union européenne. 

Dans le cadre de ce projet, un framework d’identité auto-souveraine (European self-sovereign identity framework ou ESSIF) est en cours de développement, et utilisera la [Blockchain EBSI](https://ec.europa.eu/cefdigital/wiki/display/CEFDIGITAL/EBSI) (Blockchain permissionnée, gérée les états membres). 

- [**Univsersal Name System - Unikname**](https://www.unikname.com/)

![walking]({{ site.baseurl }}/assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/uns.png){:height="120" width="160"}

UNS Network est un réseau décentralisé pour la gestion des identités numériques. Leur Blockchain publique est basée sur Ark. 
Plusieurs applications utilisant ce réseau sont en cours de développement :
**Unikname** : identifiant universel et décentralisé (DID)
**Unikname Connect** : système d’authentification
**Unikname Certificate Proofing** : authentification de certificats SSL
**Unikname Anti-phishing** : solution de protection contre le phishing

- [**Microsoft : Identity Overlay Network (ION)**](https://github.com/decentralized-identity/ion)
 
![walking]({{ site.baseurl }}/assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/ion.png){:height="100" width="120"}

Microsoft développe une infrastructure d’identité publique et décentralisée (réseau de DID) basée sur le protocole SideTree et déployée sur Bitcoin (Blockchain publique) : [Identity Overlay Network](https://techcommunity.microsoft.com/t5/azure-active-directory-identity/toward-scalable-decentralized-identifier-systems/ba-p/560168). Elle utilise notamment le protocole IPFS pour le stockage décentralisé des données.
[La version bêta a été déployée en juin 2020 sur Bitcoin.](https://techcommunity.microsoft.com/t5/identity-standards-blog/ion-booting-up-the-network/ba-p/1441552#)

- [**ERC725 Alliance - Ethereum Identity Standard**](https://erc725alliance.org/)
 
![walking]({{ site.baseurl }}/assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/erc725.png){:height="100px" width="120px"}

C'est un standard sur Ethereum (Blockchain publique) pour pouvoir mettre en place un système d’identité auto-souveraine sur Blockchain via l’utilisation de Smart Contracts. Ce standard a été initié par Faban Vogelsteller, le créateur du standard ERC20 (token) et de Web3.js.

- [**uPort**](https://www.uport.me/)

![walking]({{ site.baseurl }}/assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/uport.png){:height="100px" width="120px"}

uPort, soutenu par **Consensys**, développe un protocole open source permettant la mise en place d’identités décentralisées et l’échange de données de manière simple, sécurisée et en préservant la confidentialité. Le protocole s’appuie sur la Blockchain Ethereum (publique).

- [**Hyperledger Identity Working Group**](https://confluence.hyperledger.org/display/IWG)

![walking]({{ site.baseurl }}/assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/hyperledger.jpg){:height="200" width="400"}

Groupe de travail focalisé sur l’identité numérique et sur les implémentations dans Hyperledger, notamment sur les projets INDY, ARIES et URSA. Hyperledger est une technologie de registre distribué soutenu par la fondation Linux. (Blockchain privée ou permissionnée)

- [**Sovrin**](https://sovrin.org/)

![walking]({{ site.baseurl }}/assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/sovrin.png){:height="100px" width="120px"}
 
Réseau et outils destinés au développement d’identités numériques auto-souveraines (SSI). Sovrin est membre et contributeur du Hyperledger Identity Working Group, et les applications sont construites avec les technologies d’Hyperledger (INDY, ARIES et URSA).

- [**Evernym**](https://www.evernym.com)

![walking]({{ site.baseurl }}/assets/images/articles/l-identite-decentralisee-reprenez-le-controle-sur-vos-donnees/evernym.png){:height="100px" width="120px"}

Plateforme de gestion d’identité numérique et d’attestations vérifiables (Vérifiable Credentials). Elle utilise notamment le réseau Sovrin et les technologies Hyperledger. Ces solutions sont destinées aux entreprises. 

&nbsp;

Nous vous conseillons aussi les [conférences de **Christopher Allen**](https://www.youtube.com/watch?v=WlDSMRb_X-s), qui est un expert dans ce domaine.

Si vous connaissez d’autres projets autour de l’identité numérique, n'hésitez pas à nous les partager. 
