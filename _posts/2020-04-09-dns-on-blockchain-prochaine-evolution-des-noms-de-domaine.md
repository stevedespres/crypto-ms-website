---
layout: post-right-sidebar
title:  "DNS on Blockchain: la prochaine évolution des noms de domaine ?"
description: "Le DNS, système de noms de domaine, est un service au coeur du fonctionnement d’Internet. La technologie Blockchain pourrait être une évolution considérable pour le DNS, en apportant plusieurs avantages et nouvelles fonctionnalités."
author: steve
categories: [ technologie ]
image: assets/images/articles/dns-on-blockchain-la-prochaine-evolution-des-noms-de-domaine/DoB.jpg
image_credential: ""
featured: true
---

### Le DNS, un service fondamental

Le DNS, **système de noms de domaine**, est un service au cœur du fonctionnement d’Internet. Il fonctionne comme un annuaire public qui associe des noms de domaine à des ressources sur Internet, comme par exemple des adresses IP.

Lorsqu’un utilisateur saisit une adresse dans son navigateur, c’est donc un **serveur DNS** qui traduit cette adresse humainement compréhensible, en une adresse IP, compréhensible par les ordinateurs et les réseaux. C’est la **résolution DNS**.


![walking]({{ site.baseurl }}/assets/images/articles/dns-on-blockchain-la-prochaine-evolution-des-noms-de-domaine/dns_resolution.png)

Ce système, créé en 1983, est **fondamental** pour le fonctionnement de nombreux services tels que les sites web, les serveurs mails, la téléphonie VoIP et bien d’autres. Il est en **constante évolution** pour répondre à des besoins toujours plus importants en termes de fonctionnalités et de sécurité. En effet, le DNS doit garantir : 

- **Disponibilité** : une indisponibilité du service DNS entraînerait une coupure de services.
- **Intégrité** : les données présentes sur le DNS (associées à un nom de domaines) ne doivent pas être corrompues.
- **Confidentialité** : pour protéger la vie privée des utilisateurs, le DNS implémente différentes solutions qui permettent d'accroître la confidentialité des requêtes DNS. Si les requêtes ne sont pas confidentielles, il est possible d’analyser les informations de navigation des utilisateurs.

Le système de noms de domaine est basé sur un **modèle de confiance centralisé**. Il est **distribué** dans le monde entier et géré par différents acteurs de manière **hiérarchique**, en plusieurs niveaux ; un _niveau racine_, un _premier niveau_ où sont gérées les extensions par les registres, puis un _second niveau_ géré par les bureaux d’enregistrement. Le tout est orchestré par l’[ICANN](https://www.icann.org/fr), l’autorité de régulation de l’Internet. 


![walking]({{ site.baseurl }}/assets/images/articles/dns-on-blockchain-la-prochaine-evolution-des-noms-de-domaine/dns_hierarchy.png)

Depuis **plus de 30 ans**, de nombreuses extensions et fonctionnalités ont été ajoutées au DNS, ce qui se traduit techniquement par une **hausse de la complexité** des infrastructures. 

La **technologie Blockchain** pourrait être une évolution considérable pour le DNS, en apportant plusieurs **avantages et nouvelles fonctionnalités**. 

### Blockchain et registres décentralisés

Une **Blockchain** est une **structure de données accessible à tous et distribuée** sur un réseau **décentralisé**; les données sont répliquées sur chaque noeud du réseau, il n’y a pas d’autorité centrale. Tout le monde a la possibilité de **lire** son contenu, d’**ajouter** des données et même de **rejoindre** le réseau. Le concept a été implémenté la première fois en 2009 avec Bitcoin, mais il existe aujourd’hui de nombreuses technologies Blockchain, chacune avec des propriétés qui leur sont propres. 

Les données sont inscrites sur une Blockchain via des **transactions**. Les transactions sont regroupées en **blocs**, chaque bloc est ensuite **validé par les membres du réseau**, puis mis bout à bout. Ainsi, une Blockchain contient l’**historique** de toutes les transactions effectuées depuis sa création. 

Les règles de validation sont inscrites dans le **protocole** de la Blockchain, que chaque membre du réseau respecte. Pour garantir le respect de ses règles, les protocoles Blockchain s’appuient sur des **algorithmes de consensus**, le plus connu étant le **Proof of Work**. Ces algorithmes garantissent l’**intégrité**, l’**immuabilité** et la **sécurité** des données inscrites sur la Blockchain.


![walking]({{ site.baseurl }}/assets/images/articles/dns-on-blockchain-la-prochaine-evolution-des-noms-de-domaine/blockchain.png)

La technologie Blockchain répond à plusieurs besoins du DNS :
- **Disponibilité** : un réseau décentralisé et pair à pair ne peut pas être arrêté. Cela pourrait remplacer ou compléter les infrastructures Anycast.  
- **Intégrité** : le protocole de consensus d’une Blockchain garantit, par nature, l’intégrité des données. De plus, les données ne peuvent pas être modifiées. Ces propriétés permettraient de se passer de DNSSEC, et de sa fameuse [cérémonie de renouvellement des clés.](https://www.nextinpact.com/brief/dnssec---quand-un-coffre-fort--physique--decale-le-renouvellement-des-cles-zsk-11293.htm)
- **Confidentialité** : Les requêtes effectuées pour lire les données de la Blockchain peuvent être encapsulées dans un canal HTTPS de la même manière que le protocole [DNS over HTTPS](https://www.nextinpact.com/news/108780-quest-ce-que-dns-over-https-doh-quest-ce-que-cela-peut-vous-apporter.htm) (DoH). Les résolveurs DoH sont aujourd’hui peu nombreux, donc le trafic est centralisé autour d’un nombre limité d’acteurs. L’utilisation d’une Blockchain offrirait la possibilité d'interroger n’importe quel noeud du réseau, et limiterait donc ainsi la centralisation et les SPF (single point of failure). 

Les données incluent dans les **fichiers de zones DNS**, c’est-à-dire les configurations des noms de domaines, pourraient donc être **distribuées sur une Blockchain**. Chaque acteur (registres, bureaux d’enregistrement) pourrait directement interagir avec cette Blockchain pour gérer les noms de domaines. C’est l’idée du **DNS on Blockchain**.

### De nouveaux besoins

Ces dernières années, avec l'émergence des technologies Blockchain, de **nouveaux moyens d’échange de valeurs** se sont développés, notamment avec la [tokenisation](https://blockchainfrance.net/2018/05/22/comprendre-la-tokenisation/), les **crypto-actifs** et les **applications décentralisées** ([dapps](https://bitconseil.fr/applications-decentralisees-dapp-dapps/)); on parle de [Web 3.0](https://blockchainfrance.net/2018/05/22/comprendre-le-web-decentralise/), ou de l’[Internet de la valeur](https://medium.com/swlh/what-is-the-internet-of-values-3f14b5d35a90).

![walking]({{ site.baseurl }}/assets/images/articles/dns-on-blockchain-la-prochaine-evolution-des-noms-de-domaine/web3.png)

Les [portefeuilles numériques](https://www.journaldunet.fr/patrimoine/guide-des-finances-personnelles/1208977-wallet/) et applications décentralisées fonctionnent avec des **identifiants difficilement lisibles**, comme par exemple _0x483add28edbd9f83fb5db0289c7ed48c83f55982_ pour une adresse de portefeuille. 

Pouvoir **associer ce type d’adresse à des noms de domaine**, au sein d’un **système universel de nommage**, pourrait avoir un réel intérêt pour les applications du Web de demain. Il serait possible d’avoir un portefeuille de cryptoactifs ou une application décentralisée **configurée directement derrière un nom de domaine**. Cela pourrait aussi se révéler utile pour l’identité numérique des entreprises et de leurs marques. 

### DNS on Blockchain, aujourd’hui

De nombreux projets de systèmes de nommage sur Blockchain sont actuellement en cours de développement, chacun avec sa propre implémentation. 

Certaines applications proposent de **nouvelles extensions de noms de domaine** (TLD), comme le _.bit_, _.zil_, _.crypto_, _.eth_, etc. C’est notamment le cas de [Namecoin](https://www.namecoin.org/) et de [UnstoppableDomains](https://unstoppabledomains.com/). Ces systèmes sont complètement **indépendants** du DNS traditionnel et de l’ICANN. L’enregistrement est directement géré par les utilisateurs, et la résolution des noms se fait en général à travers une extension de navigateur. Le navigateur [Opera a récemment intégré nativement la résolution de ces noms de domaine](https://journalducoin.com/bitcoin/opera-domaines-crypto-bases-ethereum/).

Ces applications sont fonctionnelles et l’enregistrement des noms n’est pas contrôlé. Il y a donc beaucoup de cas de **cybersquatting**. Des utilisateurs enregistrent des noms dans l’espoir de les revendre et toucher une plus-value. Cela pose évidemment un problème pour les **titulaires de marques**, et empêchera certainement l’adoption de ces solutions par des entreprises. 


![walking]({{ site.baseurl }}/assets/images/articles/dns-on-blockchain-la-prochaine-evolution-des-noms-de-domaine/logo_dnsblockchain.png)

D’autres projets proposent des **solutions complémentaires au DNS**. [Ethereum Name Service](https://ens.domains/) (ENS) propose notamment un système de noms sur Blockchain qui s’intègre avec le DNS traditionnel. Si vous êtes titulaire d’un nom de domaine et pouvez le prouver avec un enregistrement DNSSEC, vous pouvez alors enregistrer ce même nom sur le service Blockchain. Cela permet de **cumuler les avantages** du DNS traditionnel et du DNS on Blockchain. 

Les extensions _.kred_, _.xyz_ et le _.luxe_ supportent déjà cette intégration sur Blockchain, et ENS prévoit de la proposer pour **toutes les extensions compatibles DNSSEC**. Ce projet est assez prometteur, Ethereum Name Service a récemment rejoint le [DNS-OARC](https://www.dns-oarc.net/) (DNS Operations, Analysis, and Research Center). 

Le projet [Handshake](https://handshake.org/) propose quant à lui un protocole de nommage pour **gérer le niveau racine** du DNS, et fournir une **alternative aux autorités de certification**. Il remet en cause le modèle de confiance et de gouvernance du DNS, pour expérimenter un système plus **décentralisé**, **sécurisé** et **résilient** basé sur de la validation des zones DNS par les participants du réseau. 

### Conclusion

Le DNS on Blockchain pourrait être une **évolution considérable** du DNS; cela apporterait **plusieurs avantages** et de **nouvelles fonctionnalités** grâce à la technologie Blockchain, ce qui profiterait au développement du web décentralisé. 

Cependant aujourd’hui, il n’y a pas encore de technologies et d'applications qui font l’**unanimité**, même si de nombreux projets et PoC sont en cours de développement. Ils n’ont pas encore une **maturité suffisante** pour être utilisés à **grande échelle**. Des améliorations en termes de **scalabilité**, de **sécurité** et d’**usage** doivent être réalisées.

La **collaboration des acteurs d’Internet** (ICANN, DNS-OARC, registres) semble indispensable pour qu’une technologie fasse **consensus** et soit **adoptée**, notamment pour fixer des **règles communes**.  C’est un sujet à suivre de près au cours des prochaines années.
