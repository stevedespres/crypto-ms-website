---
layout: post-right-sidebar
title:  "Enregistrer un nom de domaine .eth sur la Blockchain Ethereum"
description: "Ethereum Name Service est un projet de système de nommage initié en 2016 par Nick Johnson. L’idée est de proposer un registre de noms universel sur la Blockchain Ethereum."
author: steve
categories: [ technologie ]
image: assets/images/articles/enregistrer-un-nom-de-domaine-sur-la-blockchain-ethereum/ens.png
image_credential: ""
featured: false
---

### Un système de nommage sur Blockchain

**Ethereum Name Service** est un projet de **système de nommage** initié en 2016 par **Nick Johnson**. L’idée est de proposer des registres de noms de domaine universels sur la **Blockchain Ethereum**. 

L’objectif n’est pas de développer un système alternatif au [DNS](https://fr.wikipedia.org/wiki/Domain_Name_System), mais plutôt un système complémentaire qui apporte de nouvelles fonctionnalités utiles aux applications Blockchains.

Ethereum fonctionne avec des identifiants sous forme d’adresses hexadécimales : 
_0xDC25EF3F5B8A186998338A2ADA83795FBA2D695E_

Ces adresses correspondent à des **identifiants** de **portefeuilles numériques** ou de **Smart Contracts**. Pour accéder à une application ou envoyer des cryptomonnaies / tokens à quelqu’un, il faut alors manipuler ce type d’adresse. Le principe initial d’ENS est de permettre l'**association de noms facilement lisibles avec des adresses Ethereum**, et donc **faciliter** leur utilisation. Exactement comme les noms de domaine traditionnels le font avec les adresses IP. 

Si vous voulez en savoir plus sur les systèmes de nommage sur Blockchain, retrouvez notre précédent article :

[DNS on Blockchain, la prochaine évolution des noms de domaine ?](https://cryptoms.fr/technologie/2020/04/09/dns-on-blockchain-prochaine-evolution-des-noms-de-domaine.html)

ENS est un **protocole** de système de nommage **open source**. Aujourd’hui, il existe **plusieurs implémentations** de ce protocole, dont les plus importants sont : 
-	Le registre **.eth** : proposé par l’équipe d’ENS
-	Le registre **.crypto** : proposé par UnstoppableDomains
-	Le registre **.kred** : proposé par le registre Kred

Ces différentes implémentations ont des extensions qui leurs sont propres. Celles-ci ne sont pas reconnues par l'[ICANN](https://fr.wikipedia.org/wiki/Internet_Corporation_for_Assigned_Names_and_Numbers) et donc, ne sont pas des extensions "officielles".

Les noms de domaine ENS ne sont pas pris en charge nativement par les navigateurs Internet; il faut utiliser des applications compatibles. Ces applications permettent de résoudre un nom de domaine ENS et de récupérer les données associées. 

En tant que particulier ou professionnel, vous pouvez décider d’enregistrer, par exemple, un nom **.eth**. Derrière ce nom, vous pouvez configurer un **portefeuille numérique**. Vos amis ou clients pourront ensuite envoyer de la monnaie numérique directement vers votre nom, au lieu d’utiliser une adresse hexadécimale. 

Plusieurs autres cas d’usage sont possibles, comme la configuration de **sites web**, de **dapps** ou encore des **certificats et actifs numériques**.

### Comment faire ?

Dans cet exemple, nous avons décidé d’enregistrer le nom **cryptoms.eth**, sur le registre **.eth**. Ce registre est soutenu par une grande partie de l’écosystème Blockchain, et les noms sont compatibles avec un certain nombre d’applications : 

[https://ens.domains/](https://ens.domains/)

De plus, le **coût d’enregistrement est plutôt abordable** (5$ par an), contrairement à d’autres registres sur Blockchain.

Tout d’abord, il faut avoir un portefeuille (wallet) sur Ethereum qui contient assez d’ethers (ETH) pour enregistrer le nom de votre choix et payer les frais de transaction. 

Ensuite il faut utiliser une application web cliente qui permet l’enregistrement de noms **.eth**. 
Il en existe plusieurs comme : 
- [**ENS App**](https://app.ens.domains/)
- [**My Ether Wallet**](https://www.myetherwallet.com/)

Pour cet exemple, nous avons utilisé My Ether Wallet (MEW). 

**1- Créer un portefeuille sur MEW**
 
Prenez les mesures adéquates pour **ne pas perdre les accès** de votre portefeuille. 

![walking]({{ site.baseurl }}/assets/images/articles/enregistrer-un-nom-de-domaine-sur-la-blockchain-ethereum/step1.png)

**2- Approvisionner votre portefeuille en ethers (ETH)**

Il faut une **somme suffisante d’ethers (ETH)** sur votre portefeuille pour permettre l’enregistrement d’un nom.
Il est possible d’acheter de l’ether (ETH) **directement sur MEW** ou sur des **plateformes d’échanges** (Coinbase, Binance, Kraken, Paymium et de nombreuses autres). 

![walking]({{ site.baseurl }}/assets/images/articles/enregistrer-un-nom-de-domaine-sur-la-blockchain-ethereum/step2.png)

**3- Rechercher un nom disponible**

MEW propose un **gestionnaire de noms ENS** (ENS Manager). À partir de celui-ci, il est possible de rechercher des noms .eth

![walking]({{ site.baseurl }}/assets/images/articles/enregistrer-un-nom-de-domaine-sur-la-blockchain-ethereum/step3.png)

**4- Enregistrement d’un nom**

Il faut ensuite choisir la **durée d’enregistrement** du nom. Une fois cette durée dépassée, le nom sera de nouveau disponible à l’enregistrement pour tout le monde. 

![walking]({{ site.baseurl }}/assets/images/articles/enregistrer-un-nom-de-domaine-sur-la-blockchain-ethereum/step4.png)

Pour enregistrer un nom, une **première transaction** doit être réalisée. Cette transaction n’utilise **aucun ether (ETH)** mis à part les frais de transaction. 

![walking]({{ site.baseurl }}/assets/images/articles/enregistrer-un-nom-de-domaine-sur-la-blockchain-ethereum/step5.png)
 
Il faut ensuite **attendre 2-3 minutes**. Ce temps d’attente avant de pouvoir confirmer l’enregistrement du nom est prévu au cas où une autre personne enregistre le nom au même moment. 

![walking]({{ site.baseurl }}/assets/images/articles/enregistrer-un-nom-de-domaine-sur-la-blockchain-ethereum/step6.png)
 
Puis il faut **confirmer l’enregistrement du nom**. Cette fois, la valeur du nom (ici 5$ d’ethers) est envoyée. 

![walking]({{ site.baseurl }}/assets/images/articles/enregistrer-un-nom-de-domaine-sur-la-blockchain-ethereum/step7.png)
 
Le nom est maintenant **enregistré sur la Blockchain** et **visible dans l’interface de MEW**. L’adresse publique de notre portefeuille est par défaut associée à ce nom.

On peut le vérifier sur ce site **Ethereum Name Service Lookup** (EWHOIS) : 

[https://etherscan.io/enslookup](https://etherscan.io/enslookup)

![walking]({{ site.baseurl }}/assets/images/articles/enregistrer-un-nom-de-domaine-sur-la-blockchain-ethereum/lookup.png)

**5- Gérer le nom** 

À partir du gestionnaire sur MEW, il est maintenant possible de **gérer le nom** enregistré.

_Association d’un portefeuille de cryptomonnaies_

![walking]({{ site.baseurl }}/assets/images/articles/enregistrer-un-nom-de-domaine-sur-la-blockchain-ethereum/step8.png)

_Ajout d’un record_
 
![walking]({{ site.baseurl }}/assets/images/articles/enregistrer-un-nom-de-domaine-sur-la-blockchain-ethereum/step9.png)

_Transfert de la propriété_

![walking]({{ site.baseurl }}/assets/images/articles/enregistrer-un-nom-de-domaine-sur-la-blockchain-ethereum/step10.png)
 
Il est aussi possible de créer des sous-domaines.


**Vous pouvez désormais envoyer de l’ether ou des tokens directement vers le nom cryptoms.eth.**

N’hésitez pas à nous contacter si vous voulez des informations supplémentaires. 