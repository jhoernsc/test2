export const letterFixture = { "teiHeader": { "@xmlns": "http://www.tei-c.org/ns/1.0", "fileDesc": { "titleStmt": { "title": "Ferdinand Gregorovius an Johann Georg Freiherr Cotta von Cottendorf in Stuttgart. Rom, 25. Mai 1854", "editor": { "persName": { "@ref": "http://d-nb.info/gnd/1127895559", "surname": "Steinsiek", "forename": "Angela" } }, "respStmt": { "persName": { "surname": "Costea", "forename": "Theodor" }, "resp": { "note": { "@type": "remarkResponsibility", "#text": "Mitarbeit" } } } }, "editionStmt": { "edition": { "title": "Fredinand Gregorovius, gesammelte Briefe" } }, "publicationStmt": { "publisher": { "orgName": [{ "@xml:lang": "de", "#text": "Deutsches Historisches Institut in Rom" }, { "@xml:lang": "it", "#text": "Istituto Storico Germanico di Roma" }, { "@xml:lang": "en", "#text": "German Historical Institute in Rome" }], "address": { "addrLine": "Via Aurelia Antica, 00165 Rom, Italien" } }, "pubPlace": { "@ref": "http://www.geonames.org/3169070", "#text": "Rom" }, "availability": { "@status": "free", "licence": { "@target": "http://creativecommons.org/licenses/by/4.0/", "#text": "Creative Commons Attribution 4.0 International (CC BY 4.0)" } } }, "sourceDesc": { "msDesc": { "msIdentifier": { "repository": "DLA Marbach", "collection": "Cotta-Archiv", "idno": "Cotta-Briefe (4)" }, "physDesc": { "p": "1 Dbl., 4°, 1 ½ S. – 1r aoR in einer Vignette geprägt: BATH – 2v, Blatt um 180° gedreht, Adr.: Dem hochwolgeborenen Herrn / Freiherrn von Cotta." } }, "listWit": { "witness": [{ "msDesc": { "@type": "copy", "msIdentifier": { "institution": "GStA Berlin", "collection": "NL Waldemar Kampf", "idno": { "idno": { "@type": "shelfmark", "#text": "Karton 59, Mappe 347 (nach D1)" } } } } }, { "msDesc": { "@type": "concept", "msIdentifier": { "institution": null, "collection": null, "idno": { "idno": { "@type": "shelfmark" } } } } }, { "bibl": { "@type": "print", "#text": "Johannes Hönig: Ferdinand Gregorovius der\n                            Geschichtsschreiber der Stadt Rom. Stuttgart, Berlin 1921. S.\n                            205–206" } }] } } }, "profileDesc": { "abstract": { "p": [{ "@xml:lang": "de", "#text": "In Rom ist sein soeben erschienenes „Corsica“ (1854) eingetroffen. Er dankt für die Aufnahme im Cotta-Verlag. Er fürchtet keine Kritik, auch wenn er heute Manches mit mehr Kenntnis geschrieben hätte. Als erstes hat ihm Karl Rosenkranz seine Anerkennung ausgesprochen. Auf die von ihm übersetzten korsischen Totenklagen (Voceros) ist er besonders stolz." }, { "@xml:lang": "it" }, { "@xml:lang": "en", "#text": "His recently published „Corsica“ (1854) has arrived in Rome. He is grateful that the Cotta publishing house accepted his work. He is not afraid of any criticism, even if he would have written some things with more knowledge today. Karl Rosenkranz was the first person to compliment his book. He is particularly proud of the Corsican lamentations (Voceros) he translated." }] }, "correspDesc": { "correspAction": [{ "@type": "sent", "persName": { "@key": "G001200", "#text": "Gregorovius, Ferdinand (1821–1891)" }, "placeName": { "@key": "G000763", "#text": "Rom" }, "date": { "@when": "1854-05-25", "@cert": "high" } }, { "@type": "received", "persName": { "@key": "G001055", "#text": "Cotta von Cottendorf, Johann Georg\n                        (1796–1863)" }, "placeName": { "@key": "G000879", "#text": "Stuttgart" } }] } } } };

export const letterXsltResult = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<div xmlns:telota=\"http://www.telota.de\" xmlns:tei=\"http://www.tei-c.org/ns/1.0\" xmlns:v-bind=\"https://vuejs.org/v2/api/#v-bind\" xmlns:v-on=\"https://vuejs.org/v2/api/#v-on\" class=\"g-edition-text\">\n<span class=\"text-red-10\">| </span><span class=\"g-pb text-red-10\">1r</span>\n            \n                \n<p class=\"text-right\">Rom d<em>en</em> 25. <span class=\"g-aq\">Mai</span> 1854.</p>\n<p>Dem hochwohlgebornen Herren, </p>\n<p class=\"text-center\"><br>Freiherren von Cotta.</p>\n\n                <p class=\"   \">ich habe, hochgeehrter Herr, in diesen Tagen eines der Exemplare des <span class=\"g-comment-orig\" v-bind:class=\"['nn2k_mvn_llb' === activeComment.id ? 'active' : '' ]\" v-on:click=\"activateComment($event, 'nn2k_mvn_llb', 'Gregorovius’ „Corsica“ (2 Bde. Stuttgart, Tübingen: Cotta 1854) erschien als 41.-42. „Lieferung der Sammlung Reisen und Länderbeschreibungen der älteren und neuesten Zeit“.', '„Corsica“')\" v-bind:commentId=\"'nn2k_mvn_llb'\" v-bind:commentText=\"'Gregorovius’ „Corsica“ (2 Bde. Stuttgart, Tübingen: Cotta 1854) erschien als 41.-42. „Lieferung der Sammlung Reisen und Länderbeschreibungen der älteren und neuesten Zeit“.'\"><q-tooltip content-style=\"font-size: 12pt;\">Gregorovius’ „Corsica“ (2 Bde. Stuttgart, Tübingen...\n                </q-tooltip>„<span class=\"g-aq\"><a class=\"g-entity-link\" v-on:click=\"$router.push({ name: 'Werk', params: { id: 'G003106' } })\">Corsica</a></span>“<CommentIcon v-bind:commentId=\"'nn2k_mvn_llb'\" v-bind:commentText=\"'Gregorovius’ „Corsica“ (2 Bde. Stuttgart, Tübingen: Cotta 1854) erschien als 41.-42. „Lieferung der Sammlung Reisen und Länderbeschreibungen der älteren und neuesten Zeit“.'\" v-bind:commentReference=\"'„Corsica“'\"></CommentIcon></span>Gregorovius’ „Corsica“ (2 Bde. Stuttgart, Tübingen: Cotta 1854) erschien als 41.-42. „Lieferung der Sammlung Reisen und Länderbeschreibungen der älteren und neuesten Zeit“., welche an die <a class=\"g-entity-link\" v-on:click=\"$router.push({ name: 'Person', params: { id: 'G000545' } })\">deutsche Buchhandlung</a> in Rom gelangt sind, erhalten u<em>nd</em> somit meine Arbeit zum ersten Male in neuer Gestalt u<em>nd</em> als Buch gesehen und auch lesen können. Ich betrachte sie nun in dieser Gestalt wie ein Geschenk, das mir von Ihnen, hochgeehrter Herr Baron, zugekommen ist, u<em>nd</em> fühle das lebhafte Bedürfniß, Ihnen zu danken, der Sie schon dem Manuscripte die Ehre gegönnt hatten, es zu lesen, wie es eben war, u<em>nd</em> in Ihre Obhut zu nehmen. Gestatten Sie mir nun, Ihnen aus dem aufrichtigsten Herzen meinen tiefempfundenen Dank zu sagen.</p>\n                <p class=\"   \">Ich fühle ganz die Ehre u<em>nd</em> das Glück, welches Sie mir durch die Aufnahme des „<span class=\"g-aq\">Corsica</span>“ in den Verlag Ihrer Buchhandlung geschenkt haben, u<em>nd</em> wol war dies eine Vergünstigung, welche meine ferneren Studien in <a class=\"g-entity-link\" v-on:click=\"$router.push({ name: 'Ort', params: { id: 'G000690' } })\">Italien</a> bedeutend erleichtert. Ich werde glücklich sein, wenn die Billigung, die das Buch beim Publicum findet, Ihrem eignen Wolwollen für dasselbe nun auch entsprechen wird.</p>\n                <p class=\"   \">Hätte ich es heute geschrieben, so wäre vieles besser geworden, da meine Kenntniße sich durch längere Studien einigermaßen erweitert u<em>nd</em> meine Anschauungen, so hoffe ich, sich mehr abgeklärt haben. Wenn ich nun erkenne, daß Manches in der Arbeit mangelhaft ist, so muß ich mich schon hinter den Charakter u<em>nd</em> die Gesinnung des Ganzen flüchten u<em>nd</em> darf wenigstens das gute Bewußtsein aussprechen, d<em>a</em>ß die Absicht eine sittliche war; ja ich kann sagen, d<em>a</em>ß ich um dieser Absicht willen keine Critik fürchte, u<em>nd</em> d<em>a</em>ß selbst eine mißliebende u<em>nd</em> bittere mich nicht irre machen wird, weil ich sehr wol weiß, d<em>a</em>ß dieses Buch eine wolthätige Wirkung, zumal auf das Gemüt der Jugend um seines Stoffes willen nicht verfehlen kann.</p>\n                <p class=\"   \"><span class=\"g-comment-orig\" v-bind:class=\"['nwrd_lwn_llb' === activeComment.id ? 'active' : '' ]\" v-on:click=\"activateComment($event, 'nwrd_lwn_llb', 'Bevor Gregorovius im Frühjahr 1852 nach Italien aufbrach, hatte er in Königsberg zunächst Theologie studiert, dann aber zur Philosophie gewechselt und 1842 als Lieblingsschüler des Hegelianers Karl Rosenkranz (1805–1879) promoviert (siehe den Brief von Gregorovius an Rosenkranz, 6. April 1854 in: Ferdinand Gregorovius: Briefe nach Königsberg. Hrsg. von Dominik Fugger und Nina Schlüter. München: Beck 2013. S. 173–174).', 'Herr Professor Rosenkranz aus Königsberg war der Erste, der mir seine freudige Teilnahme an dem Buche ausgesprochen hat')\" v-bind:commentId=\"'nwrd_lwn_llb'\" v-bind:commentText=\"'Bevor Gregorovius im Frühjahr 1852 nach Italien aufbrach, hatte er in Königsberg zunächst Theologie studiert, dann aber zur Philosophie gewechselt und 1842 als Lieblingsschüler des Hegelianers Karl Rosenkranz (1805–1879) promoviert (siehe den Brief von Gregorovius an Rosenkranz, 6. April 1854 in: Ferdinand Gregorovius: Briefe nach Königsberg. Hrsg. von Dominik Fugger und Nina Schlüter. München: Beck 2013. S. 173–174).'\"><q-tooltip content-style=\"font-size: 12pt;\">Bevor Gregorovius im Frühjahr 1852 nach Italien au...\n                </q-tooltip>Herr Professor <a class=\"g-entity-link\" v-on:click=\"$router.push({ name: 'Person', params: { id: 'G001557' } })\"><span class=\"g-aq\">Rosenkranz</span></a> aus <a class=\"g-entity-link\" v-on:click=\"$router.push({ name: 'Ort', params: { id: 'G000699' } })\">Königsberg</a> war der Erste, der mir seine freudige Teilnahme an dem Buche ausgesprochen hat<CommentIcon v-bind:commentId=\"'nwrd_lwn_llb'\" v-bind:commentText=\"'Bevor Gregorovius im Frühjahr 1852 nach Italien aufbrach, hatte er in Königsberg zunächst Theologie studiert, dann aber zur Philosophie gewechselt und 1842 als Lieblingsschüler des Hegelianers Karl Rosenkranz (1805–1879) promoviert (siehe den Brief von Gregorovius an Rosenkranz, 6. April 1854 in: Ferdinand Gregorovius: Briefe nach Königsberg. Hrsg. von Dominik Fugger und Nina Schlüter. München: Beck 2013. S. 173–174).'\" v-bind:commentReference=\"'Herr Professor Rosenkranz aus Königsberg war der Erste, der mir seine freudige Teilnahme an dem Buche ausgesprochen hat'\"></CommentIcon></span>Bevor Gregorovius im Frühjahr 1852 nach Italien aufbrach, hatte er in Königsberg zunächst Theologie studiert, dann aber zur Philosophie gewechselt und 1842 als Lieblingsschüler des Hegelianers Karl Rosenkranz (1805–1879) promoviert (siehe den Brief von Gregorovius an Rosenkranz, 6. April 1854 in: Ferdinand Gregorovius: Briefe nach Königsberg. Hrsg. von Dominik Fugger und Nina Schlüter. München: Beck 2013. S. 173–174)., u<em>nd</em> eine solche Stimme sagt mir, d<em>a</em>ß es einer guten Aufnahme in die Literatur <span class=\"text-red-10\">| </span><span class=\"g-pb text-red-10\">1v</span>sich werde zu erfreuen haben. Mir selber machen nun die Todtenklagen fast die größeste Freude, da sie sich in dem schönen Druck nun erst recht mit Behagen lesen laßen, u<em>nd</em> ich bin sehr neugierig, die Stimme der Critik u<em>nd</em> des Publikums über diesen Gesang zu vernehmen; mir scheint es d<em>a</em>ß diese <span class=\"g-aq\"><span class=\"g-comment-orig\" v-bind:class=\"['ntj5_5wn_llb' === activeComment.id ? 'active' : '' ]\" v-on:click=\"activateComment($event, 'ntj5_5wn_llb', 'Korsische Totenklagen, die Gregorovius in seinem „Corsica“ in deutscher Übersetzung wiedergibt.', 'Vocero’s')\" v-bind:commentId=\"'ntj5_5wn_llb'\" v-bind:commentText=\"'Korsische Totenklagen, die Gregorovius in seinem „Corsica“ in deutscher Übersetzung wiedergibt.'\"><q-tooltip content-style=\"font-size: 12pt;\">Korsische Totenklagen, die Gregorovius in seinem „...\n                </q-tooltip>Vocero’s<CommentIcon v-bind:commentId=\"'ntj5_5wn_llb'\" v-bind:commentText=\"'Korsische Totenklagen, die Gregorovius in seinem „Corsica“ in deutscher Übersetzung wiedergibt.'\" v-bind:commentReference=\"'Vocero’s'\"></CommentIcon></span>Korsische Totenklagen, die Gregorovius in seinem „Corsica“ in deutscher Übersetzung wiedergibt.</span> die aller anderen Nationen, so weit sie mir bekannt sind, an Naivetät übertreffen, u<em>nd</em> namentlich ist es diese dramatische Lebendigkeit, welche sie so anziehend macht. Ich bin recht froh, d<em>a</em>ß ich diesen Schatz habe heben können.</p>\n                <p class=\"   \">Möchte nun dieses heroische Lebensbild eines so kräftigen Volkes so von der Gegenwart aufgenommen werden, als ich mir vorstellte, d<em>a</em>ß es könne aufgenommen werden; dann würde diese Arbeit sich recht belohnt haben. Ihrer eignen Teilnahme ist sie schon froh u<em>nd</em> all der Vorteile sicher, welche ihr daraus entspringen. Wie groß diese für ein Buch sind, welches die Ehre hat Ihrem Verlage anzugehören weiß ich sehr wol zu schätzen. Möchten Sie, hochgeehrter Herr, meinen Dank so gerne annehmen, als ich ihn ausspreche! mich für alle Zeit zu ihm zu bekennen ist mir mehr als Pflicht, ist mir eine innige Freude.</p>\n                \n                    <p>Ich wünsche Ihrem Wolwollen empfohlen zu sein, der ich mit der größesten Hochachtung und Ergebenheit mich unterzeichne</p>\n                    <p class=\"text-right\">Ferd. Gregorovius.</p>\n                \n            \n        </div>\n";