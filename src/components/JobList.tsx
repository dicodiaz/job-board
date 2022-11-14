import { useEffect, useState } from 'react';
import Job, { JobType } from './Job';

const mockData: JobType[] = [
  {
    slug: 'strategy-business-development-manager-sales-focus-in-the-field-of-ai-satellite-data-liveeo-gmbh-berlin-germany-429690',
    company_name: 'LiveEO GmbH',
    title:
      'Strategy & Business Development Manager - Sales Focus (f/m/x) in the field of AI & Satellite Data',
    description:
      '<p><h4>Baue mit LiveEO den Marktführer in der Satellitenanalyse auf</h4><p><p>LiveEO wendet die neuesten Entwicklungen im Bereich der künstlichen Intelligenz zur Analyse von Satellitendaten an und bringt mit seiner einzigartigen SaaS-Lösung die Insights aus diesen Daten zu Kunden im Enterprise-Sektor. LiveEO steht an der Spitze der NewSpace-Industrie, ist Venture Capital-backed und besteht aus einem tollen, internationalen Team, das etwas Großes baut.  </p>Als Business Development Manager bei LiveEO wirst du als essentieller Bestandteil unseres Teams mit uns daran arbeiten, neue Opportunities zu identifizieren und zu erschließen und so das Potential der Erdbeobachtung für Kunden aus allen möglichen Bereichen zu vergrößern.</p><h4>Deine Aufgaben</h4><p><ul><li><p>Zusammenarbeit mit Unternehmen und Stakeholdern in unseren Zielmärkten zur Lösung von Problemstellungen durch Satellitendaten</p></li><li><p>Aufstellung und Validierung von Hypothesen für die horizontale Expansion von LiveEO durch Recherche, Kundeninterviews und Experimente</p></li><li><p>Demonstration von Traction und Product-Market-Fit für neue Lösungen durch gezielte Sales-Kampagnen</p></li><li><p>Zusammenarbeit mit unseren Sales &amp; Marketing Teams in der Durchführung von Kampagnen, Planung von Webinaren und Veranstaltungen und anderen Aktivitäten, um die Bekanntheit unserer neuen Produkte zu steigern.</p></li><li><p>Erstellung von Go-To-Market-Strategien und Gewinnung erster Kunden</p></li><li><p>Projektmanagement in Proof-of-Concept- und Pilotprojekten </p></li><li><p>Enge Zusammenarbeit mit dem Prototyping-Team zur inhaltlichen sowie technischen Validierung von Opportunities</p></li></ul></p></p><p><h4>Dein Profil</h4><p><ul><li><p>3+ Jahre Erfahrung in Sales-fokussierten Rollen in Tech-Unternehmen, Startups oder verwandten Branchen</p></li><li><p>Abgeschlossenes Studium in einem wirtschaftsnahen Bereich, Kombinationen mit MINT-Themen sind ein Plus.</p></li><li><p>Verständnis für AI-basierte Anwendungen und die breitere Tech-Landschaft aus einer Perspektive digitaler Geschäftsmodelle - technische Kenntnisse in diesen Bereichen sind ein Plus</p></li></ul><ul><li><p>Erfahrung in Fernerkundung und Geodaten ist ein Plus</p></li><li><p>Erfahrung im Aufsetzen, Durchführen und erfolgreichen Beenden von Projekten </p></li><li><p>Starkes analytisches Denken, strukturierte Arbeitsweise, ausgezeichnete Kommunikations- und Selbstorganisationsfähigkeiten</p></li><li><p>Verhandlungssicheres Deutsch und Englisch</p></li><li><p>Kreativität bei der Lösung von Problemen - wenn ein Ansatz nicht funktioniert, passt du dich schnell an und findest neue Lösungen.</p></li><li><p>Du lebst in Berlin oder bist bereit, nach Berlin zu ziehen</p></li></ul></p></p><p><h4>Unsere Benefits</h4><p><ul><li><p>Direkte Einblicke und Einfluss auf strategische Unternehmensentscheidungen</p></li><li><p>Die Möglichkeit, ein faszinierendes SaaS/AI-Produkt mitzugestalten, das Geschäftsprozesse und Leben auf der ganzen Welt verbessern kann</p></li><li><p>Die Chance, bei der Entstehung eines multinationalen Marktführers in einer neuen Branche dabei zu sein</p></li><li><p>Viel Verantwortung und Raum, Dinge zu verändern und zu gestalten </p></li><li><p>Eine sehr positive Unternehmenskultur geprägt von Teamgeist, Spaß und Leidenschaft</p></li></ul><ul><li><p>Junges, offenes und internationales Team </p></li><li><p>Flache Hierarchien und die Atmosphäre eines Berliner Start-ups</p></li><li><p>Faire Vergütung und Option auf Unternehmensbeteiligung</p></li><li><p>Flexible Arbeitszeiten und Homeoffice-Regelung</p></li><li><p>Zentrales Büro mitten in Berlin-Kreuzberg, kostenloses Obst und Getränke</p></li></ul></p></p><p>LiveEO wendet die neuesten Entwicklungen im Bereich der künstlichen Intelligenz zur\n Analyse von Satellitendaten an und bringt mit seiner einzigartigen SaaS-Lösung die Insights\n aus diesen Daten zu Kunden im Enterprise-Sektor.\n LiveEO steht an der Spitze der NewSpace-Industrie, ist Venture Capital-backed und besteht\n aus einem tollen, internationalen Team, das etwas Großes baut.\n<br><br></p>',
    remote: false,
    url: 'https://www.arbeitnow.com/view/strategy-business-development-manager-sales-focus-in-the-field-of-ai-satellite-data-liveeo-gmbh-berlin-germany-429690',
    tags: ['Computer software', 'business and strategic development'],
    job_types: ['Experienced', 'permanent', 'full time'],
    location: 'Berlin',
    created_at: 1663511344,
  },
];

const JobList = () => {
  const [jobs, setJobs] = useState<JobType[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      // const response = await fetch(
      //   'https://cors-anywhere.herokuapp.com/https://arbeitnow.com/api/job-board-api',
      // );
      // const { data } = await response.json();
      // setJobs(data);
      setJobs(mockData);
    };
    fetchJobs().catch(console.error);
  }, []);

  if (!jobs?.length) return null;

  return (
    <>
      {jobs.map((job) => (
        <Job key={job.slug} data={job} />
      ))}
    </>
  );
};

export default JobList;
