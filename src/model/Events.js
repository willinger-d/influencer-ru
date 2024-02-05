import EventModel from "./EventModel";
import Consequences from "./Consequences";

const Events = [
    new EventModel(
        "Нове фото",
        "Es ist Zeit für ein neues Foto auf deinem Social-Media-Kanal. Wie möchtest du dich darstellen?",
        "Welches Foto von dir willst du posten?",
        "Ein kreativ inszeniertes Foto aus deinem letzten Urlaub.",
        "Ein Schnappschuss, auf dem du dich mit ein paar Pickelchen darstellst.",
        new Consequences("Du bekommst viele Likes und eine Marke will mit dir Werbung machen.",
            0,
            +3,
            +2,
            0
        ),
        new Consequences(
            "Die meisten deiner Fans mochten dein Foto. Du bekommst auch Zuspruch von neuen Followern.",
            +2,
            +3,
            0,
            0
        )),
    new EventModel(
        "Video mit Social-Media-Star",
        "Ein bekannter Social-Media-Star will ein Video mit dir drehen. Du magst die Person eigentlich gar nicht.",
        "Was machst du?",
        "Das Video drehen, das gibt viel Aufmerksamkeit!",
        "Das Video absagen, darauf habe ich keine Lust.",
        new Consequences("Das Video erhält viele Aufrufe, deine Fans finden deinen Auftritt aber komisch. Außerdem war der Dreh echt zeitaufwändig.",
            +3,
            -1,
            0,
            -1
        ),
        new Consequences(
            "Der Social-Media-Star findet deine Absage blöd und lässt das öffentlich durchblicken.",
            0,
            -2,
            0,
            +3
        )),
    new EventModel(
        "Produktwerbung",
        "Du bekommst zwei Anfragen von Unternehmen, die möchten, dass du Werbung für ihr Produkt auf deinen Social-Media-Angeboten machst. Du entscheidest dich dafür, mal wieder ein Werbeangebot anzunehmen.",
        "Welches nimmst du?",
        "Werbung für ein Produkt, von dem du bisher nichts Gutes gehört hast, aber dafür sehr viel Geld verdienst.",
        "Werbung für ein Produkt, dass du super findest, aber wenig Geld dafür bekommst.",
        new Consequences("Deine Fans folgen deiner Empfehlung, kaufen das Produkt und sind enttäuscht.",
            0,
            -2,
            +3,
            0
        ),
        new Consequences(
            "Deine Fans mögen das Produkt genauso gern wie du.",
            0,
            +3,
            +2,
            0
        )),
    new EventModel(
        "Urlaub",
        "Dein nächster Urlaub steht an – endlich Zeit mit der Familie. Eigentlich sollte es ganz privat werden, doch das Hotel bietet dir Geld und ein luxuriöses Zimmer an, wenn du den Urlaub auf deinen Social-Media-Angeboten teilst.",
        "Was machst du?",
        "Den Urlaub auf deinen Social-MediaAngeboten begleiten.",
        "Selbst bezahlen und den Urlaub nicht auf deinen Social-Media-Angeboten begleiten.",
        new Consequences("Ein bezahlter Urlaub und reichlich Material für deine Social-Media-Angebote. Aber du konntest weniger Zeit als geplant mit deiner Familie verbringen.",
            +2,
            0,
            +2,
            -1
        ),
        new Consequences(
            "Du konntest endlich mal wieder ausspannen und Zeit mit deinen Liebsten verbringen.",
            0,
            -1,
            -1,
            +3
        )),
    new EventModel(
        "Beleidigende Kommentare",
        "Auf deinem Social-Media-Profil bekommst du immer wieder beleidigende Kommentare. Langsam geht es dir echt nahe.",
        "Was machst du?",
        "Einen schlagfertigen Post gegen Hass im Netz schreiben.",
        "Die Kommentare einfach löschen.",
        new Consequences("Du erhältst viel Zuspruch von anderen Medienstars und deine Fans loben dein Verhalten.",
            +2,
            +3,
            0,
            0
        ),
        new Consequences(
            "Dass du Kommentare löschst, kritisieren zwar manche Follower, aber dir geht es erstmal besser",
            0,
            -2,
            0,
            +3
        )),
    new EventModel(
        "Frisch verliebt",
        "Du bist frisch verliebt. Eigentlich möchtest du deinen neuen Schwarm noch nicht öffentlich vorstellen. Deine Fans fragen aber ständig auf deinen Social-Media-Angeboten danach.",
        "Was tust du?",
        "Du stellst die Person öffentlich vor und inszenierst dazu ein großes Special in deinem Social-Media-Profil.",
        "Du bittest deine Fans, zu verstehen, dass du deine Liebe privat halten willst.",
        new Consequences("Dein Beitrag erhält sehr viel Aufmerksamkeit, deine Fans mögen euch als Paar.",
            +2,
            +2,
            0,
            -1
        ),
        new Consequences(
            "Deine Fans verstehen dich zwar, hoffen aber, dass sie trotzdem bald mehr erfahren.",
            0,
            -2,
            0,
            +3
        )),
    new EventModel(
        "Fake Streit",
        "Eine Freundin von dir ist mit ihren SocialMedia-Kanälen sehr erfolgreich. Sie schlägt dir vor, dass ihr beide so tut, als hättet ihr einen richtigen Streit, und dass ihr in euren Beiträgen schlecht übereinander redet. Damit würdet ihr bestimmt viel Aufmerksamkeit bekommen.",
        "Was machst du?",
        "Du machst mit, das bringt sicher viel Aufmerksamkeit.",
        "Das klingt nicht gut, du lehnst es ab.",
        new Consequences("Eure Videos bekommen enorme Aufmerksamkeit und du bekommst sogar Anfragen aus dem Fernsehen! Doch du wirst ganz oft auch als Schuldige:r an dem Streit dargestellt. Das macht dir zu schaffen.",
            +2,
            -1,
            +1,
            -1
        ),
        new Consequences(
            "Die Freundin inszeniert den Streit mit einer anderen Freundin und bekommt dafür viel Aufmerksamkeit. Das mediale Interesse an dir lässt etwas nach.",
            -2,
            0,
            0,
            +3
        )),
    new EventModel(
        "Anfrage Fernsehshows",
        "Du bist für zwei Fernsehshows angefragt.",
        "Bei welcher machst du mit?",
        "Bei einer erfolgreichen Unterhaltungsshow, bei der viele Challenges zu bewältigen sind und oft Skandale zwischen den Mitstreiter:innen inszeniert werden.",
        "Bei einer mittelmäßig erfolgreichen DinnerShow, bei der du mit anderen Stars für einen guten Zweck kochst und es weniger um das Privatleben der Teilnehmer:innen geht.",
        new Consequences("Eure Videos bekommen enorme Aufmerksamkeit und du bekommst sogar Anfragen aus dem Fernsehen! Doch du wirst ganz oft auch als Schuldige:r an dem Streit dargestellt. Das macht dir zu schaffen.",
            +2,
            0,
            +1,
            -2
        ),
        new Consequences(
            "Die Freundin inszeniert den Streit mit einer anderen Freundin und bekommt dafür viel Aufmerksamkeit. Das mediale Interesse an dir lässt etwas nach.",
            +1,
            +3,
            +1,
            0
        )),
    new EventModel(
        "Trennung Star-Pärchen",
        "Ein befreundetes Star-Pärchen hat sich getrennt. Ein Klatsch-Magazin möchte ein Interview mit dir über die beiden machen.",
        "Was machst du?",
        "Du machst das Interview und plauderst intime Details über die Beziehung der beiden aus.",
        "Du lehnst ab, da die Beziehung der beiden deiner Meinung nach niemanden etwas angeht.",
        new Consequences("Das Klatsch-Magazin will öfter mit dir zusammenarbeiten. Das befreundete Pärchen möchte aber nichts mehr mit dir zu tun haben.",
            +3,
            0,
            0,
            -2
        ),
        new Consequences(
            "Das Magazin sucht sich eine andere Person für das Interview und fragt dich zukünftig nicht mehr an.",
            -1,
            0,
            -1,
            3
        )),
    new EventModel(
        "Moderation TV-Shows",
        "Du erhältst von zwei TV-Shows das Angebot sie zu moderieren.",
        "Für welche entscheidest du dich?",
        "Eine wöchentliche Casting-Show, bei der häufig ein rauer Ton herrscht.",
        "Eine einmalige Spenden-Gala, bei der Geld für Bedürftige gesammelt wird.",
        new Consequences("Du bist jede Woche im TV zu sehen und es gibt viel über dich zu berichten.",
            +3,
            0,
            +2,
            0
        ),
        new Consequences(
            "Dein Einsatz für Bedürftige kommt beim Publikum sehr gut an.",
            +1,
            +3,
            +1,
            0
        )),
    new EventModel(
        "Eigener Podcast",
        "Du bekommst ein Angebot für einen eigenen Podcast.",
        "Welches Thema möchtest du in den Mittelpunkt stellen?",
        "Hauptsächlich Mainstream-Themen, die möglichst viele Leute ansprechen. Du versuchst möglichst auf die Wünsche deiner Fans einzugehen.",
        "Die Gelegenheit nutzt du für ein NischenThema, das dir schon lange am Herzen liegt. Du holst dir viele Expert:innen ins Boot, auch wenn du dafür weniger Redezeit erhältst.",
        new Consequences("Deine Fans mögen, dass du auf ihre Themenvorschläge eingehst. Dein Konzept ist allerdings nicht durchdacht und bekommt langfristig nicht genug Zuhörer:innen.",
            +2,
            +2,
            +1,
            0
        ),
        new Consequences(
            "Der Podcast hat vollen Erfolg, allerdings nur bei einer kleinen Gruppe von Zuschauer:innen. Die bleiben dir jedoch lange treu.",
            +1,
            +2,
            +2,
            0
        )),
    new EventModel(
        "Interview Radio",
        "Du bist bei einem bekannten Radiosender zu einem Interview eingeladen. Dabei werden dir Live auf Sendung ziemlich viele persönliche Fragen gestellt. Wie reagierst du?",
        "Was machst du?",
        "Du gehst nicht näher darauf ein und versuchst über etwas Anderes zu sprechen.",
        "Du plauderst aus dem Nähkästchen und beantwortest alle Fragen.",
        new Consequences("Das Publikum findet dein Interview zwar interessant. Dass du bei den persönlichen Fragen ausgewichen bist, kommt aber weniger gut an.",
            +2,
            -2,
            0,
            +1
        ),
        new Consequences(
            "Du hast sehr viel Privates preisgegeben, nicht nur über dich, auch über deinen Bekanntenkreis. Dem Publikum gefällt deine Offenheit.",
            +1,
            +2,
            0,
            -2
        )),
    new EventModel(
        "Autogramme Messe",
        "Du sollst auf einer Messe Autogramme für deine Fans geben. Doch es sind so viele gekommen, dass nach vielen Stunden Arbeit immer noch eine Menschenschlange vor dir steht.",
        "Was machst du?",
        "Du entschuldigst dich bei den Fans und vertröstest sie auf einen anderen Termin. Du möchtest deine Freizeit mit deinen Freund:innen verbringen.",
        "Du machst weiter, weil du deine Fans nicht enttäuschen möchtest. Ein Treffen mit Freund:innen sagst du dafür ab.",
        new Consequences("Deine Freund:innen freuen sich den Abend mit dir zu verbringen. Einige Fans sind geknickt, sie haben zum Teil lange warten müssen, haben dich aber gar nicht zu Gesicht bekommen. Einige entfolgen dir sogar auf deinen Social-Media-Kanälen.",
            -1,
            -2,
            0,
            +2
        ),
        new Consequences(
            "Deine Fans freuen sich, ein Autogramm erhalten zu haben. Deine Freund:innen sind enttäuscht von deiner Absage.",
            0,
            +3,
            0,
            -2
        )),
    new EventModel(
        "Fans beim Einkaufen",
        "Du triffst beim Einkaufen eine Gruppe Fans, die Fotos mit dir machen möchte. Heute fühlst du dich etwas kränklich und wolltest eigentlich nur in Ruhe etwas zu essen kaufen.",
        "Was machst du?",
        "Du sagst den Fans, dass du dich über die Aufmerksamkeit freust, aber dich heute nicht wohl fühlst und daher kein Foto machen möchtest.",
        "Du versuchst dir dein Unwohlsein nicht anmerken zu lassen und lächelst in die Kamera.",
        new Consequences("Die Fans sind unzufrieden und verbreiten ihre Ansichten über dich in ihren SocialMedia-Profilen.",
            0,
            -2,
            0,
            +3
        ),
        new Consequences(
            "Die Fans freuen sich, doch du fühlst dich unwohl und dir gefällt das Foto auch nicht besonders.",
            0,
            +2,
            0,
            -3
        )),
    new EventModel(
        "Fantreffen",
        "Du triffst beim Einkaufen eine Gruppe Fans, die Fotos mit dir machen möchte. Heute fühlst du dich etwas kränklich und wolltest eigentlich nur in Ruhe etwas zu essen kaufen.",
        "Wie soll es aussehen?",
        "Ein kostenloses Treffen für alle an einem öffentlichen Platz.",
        "Ein Treffen an einer extravaganten Location, das aber auch ein paar Euro Eintritt kostet.",
        new Consequences("Es kommen sehr viele Fans und freuen sich riesig, dich zu sehen. Leider ist so viel Andrang, dass nicht alle die Gelegenheit haben dich kennenzulernen.",
            +3,
            +2,
            0,
            0
        ),
        new Consequences(
            "Das Treffen verläuft super und alle Teilnehmer:innen können dich kurz kennenlernen. Einige Fans haben aber keine Tickets mehr bekommen und finden es grundsätzlich unverständlich, dass du dafür Geld verlangst.",
            +2,
            +1,
            +2,
            0
        )),
    new EventModel(
        "Tod Haustier",
        "Dein Haustier ist diese Woche gestorben, doch du hast in zwei Tagen ein Fantreffen mit Auftritt organisiert. Danach ist dir gerade gar nicht.",
        "Ziehst du es trotzdem durch?",
        "Ja klar, da muss ich jetzt durch.",
        "Nein, ich sage ab und erkläre den Fans warum. Ich kann jetzt kein Lächeln aufsetzen.",
        new Consequences("Das Fantreffen läuft gut. Du bist allerdings danach völlig fertig.",
            +1,
            +2,
            0,
            -2
        ),
        new Consequences(
            "Einige Fans sind traurig, andere können deine Entscheidung gut nachvollziehen. Du hast Zeit dich zu erholen.",
            0,
            0,
            0,
            +5
        )),
    new EventModel(
        "Fans vor Haustür",
        "Du wachst morgens auf und siehst, dass eine Gruppe Fans vor deiner Tür steht und auf dich wartet.",
        "Was machst du?",
        "Du hältst dich bedeckt und schleichst dich hinten raus. Du hoffst, dass dich niemand gesehen hat.",
        "Du freust dich über die Aufmerksamkeit und grüßt sie vom Balkon aus.",
        new Consequences(
            "Du hast Glück, niemand hat das mitbekommen und dein Wohnort wird nicht bestätigt. Du fragst dich aber, woher sie deine Adresse kennen.",
            +2,
            -1,
            0,
            -2
        ),
        new Consequences(
            "Nach einer Zeit verlieren sie das Interesse und gehen von alleine wieder. Allerdings ist deine Adresse jetzt bekannt.",
            +2,
            +1,
            0,
            -2
        )),
    new EventModel(
        "Wohnungs-Tour",
        "Du hast deinen Fans in einer Social-Media Abstimmung versprochen, bald eine Tour durch dein Zuhause zu machen und alles zu filmen. Doch jetzt fühlst du dich im Nachhinein nicht wohl damit, deine ganze Wohnung zu zeigen.",
        "Was machst du?",
        "Du erklärst deinen Fans die Gründe. Sie werden das verstehen.",
        "Du drehst das Video, zeigst aber nur einen Teil deiner Wohnung.",
        new Consequences("Einige deiner Fans sind richtig enttäuscht, andere finden es gut, dass du zu dir stehst.",
            -2,
            0,
            0,
            +3
        ),
        new Consequences(
            "Viele Fans finden es merkwürdig, dass du nur Ausschnitte zeigst. Dein Video wirkt für sie nicht so authentisch wie sonst.",
            +1,
            -2,
            0,
            -2
        )),
]

export default Events