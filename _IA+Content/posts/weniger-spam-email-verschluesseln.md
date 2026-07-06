---
title: "Weniger Spam: E-mail-Links in WordPress ohne Plugin schützen"
date: 2026-01-14
categories: 
  - "sicherheit-datenschutz"
tags: 
  - "block-themes"
  - "fse"
  - "html-entities"
  - "patterns"
  - "wordpress"
coverImage: "Bildschirmfoto-2026-01-23-um-17.58.33.png"
---

## Problem: Zu viele Spam-E-Mails

Bots lesen die Website automatisch, scannen nach E-Mail-Adressen und fluten den Spam-Ordner. In WordPress gibt es dafür viele Plugins - aber in einem Block-Theme lassen sich Links auch ohne Plugin schützen. Dieser Ansatz eignet sich für wenige E-mail-Adressen.

## Kontext: WordPress mit Block-Theme

**Ich nutze ein individuelles Block-Theme in WordPress.** Das bisherige Plugin verschlüsselt nur im Inhalt, nicht aber meine Links im Footer und Header - und spielt nicht gut mit modernen Block-Themes zusammen.  
In WordPress führt der erste Impuls oft in den Plugin-Dschungel. Laut Dokumentation gibt es einen Shortcode zum Verschlüsseln, der funktioniert aber nur in Classic-Themes oder mit einem weiteren Plugin.

## Lösung: E-Mail und Telefon-Links ohne Plugin verschlüsseln

Ich brauche nur zwei geschützte Links: E-Mail und Telefon.  
Stattdessen gehe ich lieber einen Schritt zurück: Ich nutze ein eigenes Pattern im Block-Theme und in dieser Vorlage trage ich die Links nicht als Klartext, sondern als verschlüsselter Text, als HTML-Entities ein.  
**Das sieht so aus:**

```
href="mailto:&#107;&#97;&#117;&#115;&#101;..." 
```

**Ein Browser entschlüsselt die HTML-Entities automatisch.** Für Nutzer, Screenreader und Suchmaschinen bleibt alles lesbar - gute Accessibility und User Experience. Das wird in den SEO Ergebnissen der Suchmaschinen belohnt.  
Bots scheuen den Aufwand der Entschlüsselung von HTML-Entities.  
Ein Plugin weniger in WordPress.

## Was Kund:innen davon haben

- weniger Plugins, weniger Wartung

- schnellere Ladezeiten und bessere Chancen im SEO

- eine wiederverwendbare Lösung, die Projekte beschleunigt.

Weniger ist besser.
