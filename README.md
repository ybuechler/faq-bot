# faq-bot

Coop Case


- Eigene Eintität mit allen Wissenbeiträgen
    - Aus JSON von Thomas importieren und Marke als Attribut
    - Marke (Jumbo, Interdiscount) als Attribut
    - Tags
    - Editieren und erstellen ermöglichen um zu zeigen wie einfach diese Administriert werden können
- EIP Schnittstelle für Suche nach Beiträgen bauen. Evtl. in RAG von AI packen und via LLM abfragen. Muss aber schnell gehen.
- CX hat zwei Einbindungen von diesen Beiträgen: Einerseits als Liste groupiert und ausklappbar (klassisch) und via Magic Suchfeld
- CX hat Assistent eingebaut der diese Beiträge durchsucht mittels EIP Query API oder LLM.
- 2 Cases werden dabei inkl. Workflow umgesetzt
    - Mangel an bestelltem Produkt:
        - Automatisch bestellte Produkte anzeigen auswählen welches
        - Rückfrage zu Mangelbeschreibung inkl. Foto
        - Da kleiner Betrag wird automatisch (dunkel) bearbeitet
        - bei grösserem Betrag oder Regelabweichung wird Freigaben durch Agent angefordert
    - Quittungen suchen:
        - Eingabe in Suche nach meinen Quittungen
        - Automatischer Absprung zu den Bestellungen mit der Möglichkeit die Quittung herunterzuladen


Rückruf vereinbaren mittels OTV



Umsetzung:
https://codeassist.google/?hl=de Chatbot interface mit Workflow mit Cursor designen oder Google Code Assistent im VSCode
https://github.com/ybuechler/faq-bot