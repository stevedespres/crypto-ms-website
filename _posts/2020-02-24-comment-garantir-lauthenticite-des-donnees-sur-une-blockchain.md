---
layout: post-right-sidebar
title:  "Comment garantir l'authenticité des données sur une Blockchain ?"
description: "Les Blockchains permettent de stocker des données, garantir leur intégrité et leur immuabilité; celles-ci ne peuvent pas être modifiées. Cependant, rien ne garantit que les données inscrites sur une Blockchain soient honnêtes et vraies."
author: steve
categories: [ technologie ]
image: assets/images/articles/comment-garantir-lauthenticite-des-donnees-sur-une-blockchain/1.jpg
image_credential: ""
featured: true
---

### Les Blockchains peuvent mentir

Les **Blockchains** permettent de **stocker des données, garantir leur intégrité et leur immuabilité**; celles-ci ne peuvent pas être modifiées. Cependant, rien ne garantit que les données inscrites sur une Blockchain soient **honnêtes et vraies**. N’importe qui peut enregistrer n’importe quoi. 

Certaines applications Blockchain fonctionnent avec des **Smart Contracts**. Ces programmes informatiques sont déployés sur une Blockchain et s'exécutent de façon automatique lorsque les conditions nécessaires sont réunies. Ils sont notamment utilisés pour effectuer des **transactions automatisées**. Les Smart Contracts peuvent avoir **besoin de données spécifiques** pour établir leurs conditions d'exécution, et donc de les récupérer à partir d’une **source externe** *(off-chain)*. 


### Lier le monde réel et le monde numérique

Si vous voulez réaliser une **application de traçabilité** de poulets, les données de toutes les **étapes importantes** (élevage -> abattage -> distribution) vont devoir être inscrites sur la Blockchain. 

Si vous voulez créer une **application de paris sportifs**, votre Smart Contract va avoir besoin de récupérer les **résultats des matchs** afin de récompenser les gagnants. 

Si vous voulez créer un **système d’assurance** qui indemnise automatiquement les agriculteurs en cas de grosses précipitations, il va falloir récupérer de façon précise les **quantités de pluie**. 

Les **avantages de la décentralisation** fournis par une Blockchain peuvent alors biaiser si une application récupère toutes ses données externes **en passant par des tiers**, à qui il faut donc faire une **confiance aveugle**. Pourquoi ne pas utiliser une base de données distribuée classique ? (indice: Marketing)

### Auditeurs et Oracles

En fonction des cas d’usages, **plusieurs solutions existent pour garantir un maximum de confiance** dans la récupération et le traitement des données.

Reprenons les exemples précédents. Dans le cas d’un système de traçabilité, l’intervention de tiers tout au long des étapes semble indispensable pour renseigner les différentes informations. Pour garantir l’authenticité de ces données, le **contrôle par des auditeurs indépendants** est primordial, et leur résultat doit être **public** pour plus de transparence.

Pour les autres exemples, des solutions alternatives peuvent être mises en place. Des **acteurs peuvent mettre à profit des données externes** *(off-chain)* pour qu’elles soient exploitées *on-chain*, le tout en garantissant un certain niveau d’authenticité et de décentralisation. C’est notamment le rôle des **Oracles**. 

Les **Oracles** permettent de faire le **lien entre le monde réel et des réseaux de Blockchains**. N’importe qui peut alors **partager des données utiles**; un **système de notatio**n vient ensuite évaluer la qualité des données fournies, ce qui incite à ne pas mentir. Cela pourrait parfaitement fonctionner pour une application décentralisée de paris sportifs dont les résultats seraient récupérés auprès d'**Oracles validés par la communauté**. De plus, la possibilité de devenir fournisseur de données peut être **ouverte à tous**. 

Une autre solution consiste à **pondérer des données** fournies par un grand nombre de fournisseurs. Dans l’exemple du système d’assurance, un grand nombre de personnes pourraient placer des capteurs de précipitations chez eux contre une rémunération. Pour calculer le niveau moyen de précipitations tombées dans une zone donnée, les mesures de tous les capteurs à proximité seraient pondérées et le Smart Contract pourrait ensuite les exploiter. 


### Vers de nouveaux marchés

Ces différentes solutions permettent de garantir un certain **niveau d’authenticité** des données utilisées par des Smart Contracts, le tout en **incitant financièrement** les utilisateurs à participer au partage. 

La technologie Blockchain **facilite les échanges de valeurs**, de manière automatisée. N’importe qui pourrait **partager tous types de données**, logicielles ou matérielles, et **recevoir une rémunération** en conséquence. Cela ouvre les portes vers de **nouveaux marchés et modèles économiques**.

Ces systèmes d’Oracles commencent à se développer, on peut notamment citer les projets **Oraclize** et **ChainLink**.