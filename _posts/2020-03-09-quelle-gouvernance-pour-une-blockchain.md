---
layout: post-right-sidebar
title:  "Quelle gouvernance pour une Blockchain ?"
description: "Les technologies Blockchain fonctionnent grâce à un protocole de consensus, qui définit les règles de gouvernance et de fonctionnement du système."
author: steve
categories: [ technologie ]
image: assets/images/articles/quelle-gouvernance-pour-une-blockchain/1.jpg
image_credential: ""
featured: false
---

### Performance, Sécurité et décentralisation

Les technologies Blockchain fonctionnent grâce à un **protocole de consensus**, qui définit les **règles de gouvernance** et de **fonctionnement du système**. Chaque Blockchain dispose de son propre protocole, qui est implicitement accepté par les utilisateurs et membres du réseau.

Ces protocoles doivent proposer un équilibre entre **performances** (scalabilité, rapidité des transactions), **sécurité** (résistant aux attaques) et **décentralisation** (pouvoir de décision, de validation des blocs). C’est le fameux **trilemme des Blockchains**. 

Trois types de protocoles sont aujourd’hui les plus implémentés dans les technologies Blockchain.

### Preuve de travail (Proof of Work) 
Les membres du réseau doivent trouver la solution d’un **problème mathématique complexe** en premier pour pouvoir **valider les blocs de transactions**. Pour cela, ils utilisent un maximum de **puissance de calcul** et mènent une véritable **compétition** entre eux. En récompense, le validateur d’un bloc, appelé **mineur**, reçoit une part de cryptomonnaies (ou tokens). La **difficulté** du problème mathématique s’adapte en fonction de la puissance de calcul utilisée par les mineurs. Pour cumuler un maximum de puissance de calcul, les mineurs s’associent généralement dans des **Pools** pour avoir plus de chance de gagner la récompense, qui est ensuite partagée entre les membres.

Lorsque des modifications sont apportées au protocole, les mineurs sont libres de les **accepter ou les refuser** en mettant ou non à jour leurs nœuds. En cas de désaccord, la chaine de blocs peut alors se séparer en deux versions (une avec la mise à jour et l’autre sans), appelle cela un **fork**. Plusieurs forks ont déjà eu lieu au cours de l’histoire, les plus connus sont ceux liés à Bitcoin et Ethereum, comme Bitcoin Cash et Ethereum Classic pour ne citer qu’eux.

Ce protocole, implémenté par **Bitcoin** et de nombreuses autres Blockchains, permet de garantir un **bon niveau de décentralisation et de sécurité**, mais est critiqué à cause de sa **consommation d’énergie** et sa **scalabilité**.  Néanmoins, des progrès sont faits pour améliorer ces aspects (Lightning Network, Signatures de Schnorr, chaines parallèles). 

La récompense du minage doit être suffisamment attractive pour **inciter** un maximum d’acteurs à entrer dans la compétition. Le minage peut cependant être couteux, notamment à cause de la hausse de la difficulté de calcul qui nécessite une plus grande puissance, donc une plus grande consommation énergétique. Les mineurs souhaitant être rentables ont alors tendance à **délocaliser** vers des contrées où **l’électricité est moins couteuse**. Cela peut à terme, nuit à la décentralisation des nœuds du réseau. 

### Preuve d’enjeu (Proof of Stake)

Avec ce type de protocole, pour valider des blocs, les membres du réseau ne doivent pas utiliser de la puissance de calcul, mais **prouver leur possession d’une quantité minimum de cryptomonnaies**. Pour cela, la cryptomonnaie est **placée « sous séquestre » sur un nœud du réseau**. Le choix du validateur d’un nouveau bloc est réalisé **aléatoirement parmi les différents participants**. Sa chance d’être élu est **proportionnelle** à la quantité de cryptomonnaie mise en participation.

En cas de mise à jour du protocole, les participants peuvent refuser de mettre à jour leurs nœuds de la même manière qu’avec un protocole de preuve de travail. 

Les participants peuvent aussi **s’associer** en cumulant leurs cryptomonnaies. Des organisations proposent, comme les banques traditionnelles, de « placer » leur cryptomonnaie contre un pourcentage d’intérêt calculé en fonction du marché.

Ce protocole à l’avantage de **ne pas consommer autant d’énergie** que la preuve de travail et de permettre des **transactions plus rapides**. Cependant, pour garantir un certain niveau de décentralisation, la quantité de cryptomonnaie totale disponible doit être suffisamment **distribuée**. Les tiers, qui font office de **« banques » de cryptomonnaies**, sont aussi un risque de **centralisation des pouvoirs**. 
La mise en place technique d’un tel protocole est assez complexe et pose **plusieurs problématiques sur la scalabilité et la sécurité du réseau**. La Blockchain **Ethereum** doit migrer prochainement de la preuve de travail vers la preuve d’enjeu. 


### Preuve d’enjeu déléguée (Delegated Proof of Stake)

La preuve d’enjeu déléguée est une **variante** du protocole présenté ci-dessus. Les possesseurs de cryptomonnaies (ou token) doivent **élire un certain nombre de « délégués »**, qui seront responsables de **valider les blocs de transactions et d’accepter / refuser des modifications du protocole**. Le nombre de voix est défini au **prorata du nombre de tokens possédés**. La **gouvernance** de la Blockchain est alors déléguée à un nombre réduit d’acteurs et donc de nœuds du réseau. Ce mode de fonctionnement est comparable à une **démocratie participative**. Le principal avantage est de **simplifier le protocole**, de **réduire le nombre d’interactions** entre les nœuds et donc permet de réaliser des **transactions beaucoup plus rapides**. 

Plusieurs Blockchains implémentent ce type de protocole de consensus :
-	**Steem** : 20 délégués
-	**Eos** : 21 délégués
-	**Tron** : 27 délégués
-	**Ark** : 51 délégués
-	**Tezos** : illimités

Le principal inconvénient de ce système est la **centralisation** autour d’un nombre limité d’acteurs. Rien ne garantit que plusieurs délégués élus soient en réalité la même organisation, ou que certains soient corrompus. Plusieurs **scandales** ont éclaté récemment sur des dérives de ce genre (voir EOS). 

Un autre problème a récemment été mis en avant. Une grande partie des possesseurs de cryptomonnaies utilisent des **plateformes centralisées** comme Binance, Coinbase, Kraken ou autres pour les stocker. Avec ce type de plateformes, les utilisateurs n’ont pas le **contrôle direct** sur leurs actifs ; ce sont les **plateformes qui possèdent les clés privées**. Suite au rachat de l’entreprise Steemit (application de la Blockchain Steem) par la fondation Tron, un vote a eu lieu sur Steem pour permettre une mise à jour du protocole. Il s’est révélé que certaines plateformes ont **utilisé les tokens de leurs utilisateurs** pour voter dans leurs propres intérêts. Cela pose des questions importantes sur le **pouvoir** de ces plateformes, et met en avant le problème de centralisation de ce type de protocole.

Les Blockchains permettent d’avoir un **accès direct** à ses actifs à condition d’avoir accès à ses **clés privées**, contrairement au **système bancaire**, où en cas de crise vous pouvez vous retrouver à ne pas pouvoir retirer vos fonds ; c’est d’ailleurs le cas au Liban depuis quelques semaines. Or, cet argument ne tient plus à partir du moment où vos **clés privées sont gérées par ces plateformes centralisées**.

### Conclusion

Cet article se limite aux **trois protocoles de consensus** les plus importants, mais de nombreux autres **types et variantes** existent. Il n’y a pas de protocoles parfaits, chacun tente de proposer une solution au **trilemme de la performance, sécurité et décentralisation** d’une Blockchain. Des questions de **gouvernance, d’économie et de philosophie** se posent dans chaque implémentation. Seul le temps permettra de voir quels protocoles sont les plus résistants.
