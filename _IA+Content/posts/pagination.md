---
title: "Pagination"
date: 2026-01-21
categories: 
  - "ux-design"
tags: 
  - "ux"
coverImage: "Bildschirmfoto-2026-02-04-um-19.55.46.png"
---

Zusammenfassung:

Paginierung teilt die Inhalte auf verschiedene Seiten auf. Diese Seiten sind über Nummerierung (1,2,3,4 …) oder Links („Weiter“) navigierbar und interaktiv. Der Inhalt ist, analog einem Buch oder Katalog, auf Seiten aufgeteilt und die Navigation entspricht dem Blättern durch Seiten. Die Seitenzahl hilft dem User sich zu orientieren und ein Gefühl für die Menge der Suchergebnisse zu bekommen.  
**Idealfall:** Per Suche, Filter und geschickter Priorisierung der Inhalte findet der User auf der ersten Seite seinen gewünschten Gegenstand und die Mission ist erfüllt.  
**Wenn nicht**, blättert er weiter und bricht, wenn das Aufmerksamkeitsbudget erschöpft ist, die Suche ab.  
Um seinen Focus zu schonen und schneller eine Antwort zu liefern (und zu bekommen), stellen wir die Suchergebnisse zu Beginn der Suche möglichst kurz dar. Und erweitern die Liste der Suchergebnisse progressiv im Verlauf der Suche.  
Viel Nutzer wollen alle Optionen auf einen Blick sehen. Sie scannen die Liste lieber schnell, als sich durch alle Seiten zu klicken.

## Die Option **Alle Artikel zeigen**

Ein Button **Alle Artikel zeigen** ist hilfreich für diese User. User, die diese Option nicht nutzen wollen, ignorieren ihn und freuen sich über diese Option. Listen, deren Artikel sich schwer sortieren lassen, wo persönlicher Geschmack und Präferenz entscheidet, sind dankbare Kandidaten für diese Option: Mode, Kunst, Blumen, Essen.  
**Alle Artikel zeigen** hat Grenzen: eine Amazon-Suche nach Schraubendrehern würde vermutlich Millionen Einträge haben, diese Liste überfordert jeden Menschen.  
Für lange Listen sind **wenige zusätzliche Buttons sinnvoll**, z.B.**20 Artikel zeigen** oder **100 Artikel zeigen**. Die Nummer der anzuzeigenden Artikel sollte weit aus einander liegen: **zwischen 10 und 20 zu wählen** macht die **Entscheidung schwer**.  
**Zwischen 10 und 50 zu wählen** macht die **Entscheidung einfach**.  
Auf eine weitere Anpassbarkeit der Auswahl verzichten wir, das ist außerhalb des Kontext der Pagination und erhöht hier die kognitive Last unnötig.

### „Alle Artikel zeigen“ oder Infinite Scroll?

InfiniteScroll beschreibt das automatische Nachladen von Artikeln, Bildern oder Produkten am Ende der Liste. Die Liste wird automatisch ergänzt. **Ziel von InfiniteScroll** ist **Discovery**, Entdeckung und das sogenannte **User-Engagement**, den **Nutzer möglichst lange auf der Seite halten**. Der Feed bei Facebook oder Instagram sind bekannte Beispiele. Diese Seiten verkaufen Werbung, dort ist es sinnvoll die User möglichst lange zu halten. InfiniteScroll nutzt den Betreibern mehr als den Nutzern. Technisch ist es schlecht für organisches SEO (irrelevant für Facebook und Co) und es fördert sozialen Druck und süchtig machendes Verhalten.  
**Ich bewerte InfiniteScroll als DarkPattern und vermeide es**.
