/* eslint-disable import/prefer-default-export */
// import { v1 as uuidv1 } from 'uuid';

// HEAD DATA
export const headData = {
  title: 'Rotem Petranker',
  lang: 'en',
  description: `Rotem Petranker's website, Canadian Psychedelic research`,
};

// Menu Links
export const menuLinks = [
  { name: 'Home', link: '/', id: 'link0' },
  { name: 'Academic Background', link: '/academia', id: 'link1' },
  { name: 'Speaking', link: '/speaking', id: 'link2' },
  { name: 'Consulting', link: '/consulting', id: 'link3' },
  { name: 'Media', link: '/media', id: 'link4' },
  { name: 'About Rotem', link: '/about', id: 'link5' },
  { name: 'Contact', link: '/contact', id: 'link6' },
];

// HERO DATA
export const heroData = {
  img: 'headshot.png',
  title: 'Rotem Petranker',
  line1: `Director, Canadian Centre for Psychedelic Science`,
  line2: `Associate Director, Psychedelic Studies Research Program`,
  line3: `PhD Student, Clinical Psychology, Boredom Lab, York University`,
  cta: `My Work`,
};

// HOME PAGE CARDS DATA
export const cardsData = [
  {
    id: 'research-card',
    logo: 'research.png',
    title: `Psychedelic Research Trailblazer`,
    text: `Rotem’s main research projects focus on the intersection between attention, creativity, and affective regulation. He is interested in psychedelics as a means to probe these constructs.`,
    btntext: 'Publications',
    url: '/academia',
    fade: 'left',
  },
  {
    id: 'ccps-card',
    logo: 'tcps_logo.png',
    title: 'Canadian Centre for Psychedelic Science',
    text: `Rotem co founded the Canadian Centre for Psychedelic Science in 2019, with the aim of offering transparent and rigorous consulting services.`,
    btntext: 'CCPS',
    url: 'https://www.psychedelicscience.ca/',
    fade: 'bottom',
  },
  {
    id: 'psrp-card',
    logo: 'uvt_logo.png',
    title: 'Psychedelic Studies Research Program',
    text: `Rotem co-created the Psychedelic Studies Research Program with Dr. Norman Farb and Thomas Anderson, creating a psychedelics research hub.`,
    btntext: 'PSRP',
    url:
      'https://www.utm.utoronto.ca/psychedelics/welcome-psychedelic-studies-research-program-utm',
    fade: 'right',
  },
  {
    id: 'consulting-card',
    logo: 'consulting.png',
    title: 'Consulting',
    text: `Rotem is a foremost global expert on the science of microdosing psychedelics and can make your business model science-based.`,
    btntext: 'Current Partners',
    url: '/consulting',
  },
  {
    id: 'speaking-card',
    logo: 'speaking.png',
    title: 'Public Speaking',
    text: `Rotem has spoken at a variety of venues and can share his expertise on the potential benefits and drawbacks of microdosing.`,
    btntext: 'Invite Rotem to Speak',
    url: '/speaking',
  },
  {
    id: 'contact-card',
    logo: 'contact.png',
    title: 'Contact',
    text: `Get in touch with Rotem directly to discuss any other issue not covered by consulting and speaking engagements.`,
    btntext: 'Reach Out',
    url: '/contact',
  },
];

// ARTICLES
export const articlesData = [
  {
    id: `article-1`,
    title: `MEET THE WOMAN WHO WANTS TO SELL PSYCHEDELIC DRUGS TO SCIENTISTS`,
    url: `https://futurism.com/neoscope/woman-sell-psychedelic-drugs-scientists`,
    date: `08/2020`,
    img: 'article-1.png',
  },
  {
    id: `article0`,
    title: `To Prevent Corruption, Psychedelics Researchers Call for Ethics Guidelines`,
    url: `https://www.lucid.news/psychedelics-researchers-call-for-ethics-guidelines/`,
    date: `07/2020`,
    img: 'article0.png',
  },
  {
    id: `article1`,
    title: `Benefits and challenges of psychedelic microdosing – as reported by microdosers `,
    url: `http://tinyurl.com/y3tfabba`,
    date: `08/2019`,
    img: 'article1.png',
  },
  {
    id: `article2`,
    title: ` ‘Microdosers’ of psychedelics report improved mood, focus and creativity`,
    url: `https://theconversation.com/microdosing-psychedelics-improves-mood-focus-and-creativity-120279`,
    date: `07/2019`,
    img: 'article2.png',
  },
  {
    id: `article4`,
    title: `Improved mood, focus reported by microdosers, UTM study shows`,
    url: `https://www.utm.utoronto.ca/main-news/improved-mood-focus-reported-microdosers-utm-study-shows`,
    date: `07/2019`,
    img: 'article4.png',
  },
  {
    id: `article5`,
    title: `The Canadian revival of psychedelic drug research`,
    url: `https://www.universityaffairs.ca/features/feature-article/the-canadian-revival-of-psychedelic-drug-research/`,
    date: `06/2019`,
    img: 'article5.png',
  },
  {
    id: `article6`,
    title: `Is microdosing LSD a solution to the 'crisis of meaning' in modern life?`,
    url: `https://nationalpost.com/health/health-and-wellness/is-microdosing-lsd-a-solution-to-the-crisis-of-meaning-in-modern-life-new-canadian-study-may-provide-answers`,
    date: `04/2019`,
    img: 'article6.png',
  },
  {
    id: `article7`,
    title: `Microdosing Psychedelics Can Lift Depression, but It May Not Be for Everyone `,
    url: `https://trauma.blog.yorku.ca/2019/04/micro-dosing-psychedelics-can-lift-depression-but-it-may-not-be-for-everyone/`,
    date: `04/2019`,
    img: 'article7.png',
  },
  {
    id: `article8`,
    title: `Microdosers Are More Creative With Happier Emotions, Study Finds`,
    url: `https://www.vice.com/en_ca/article/qvq8bw/study-finds-microdosers-are-more-creative-with-happier-emotions`,
    date: `11/2018`,
    img: 'article8.png',
  },
  {
    id: `article9`,
    title: `Opening up the future of psychedelic science`,
    url: `https://theconversation.com/opening-up-the-future-of-psychedelic-science-101303`,
    date: `10/2018`,
    img: 'article9.png',
  },
  {
    id: `article3`,
    title: `The Trip of a Lifetime`,
    url: `https://www.marieclaire.com/health-fitness/a28266516/microdosing-psilocybin-anxiety/`,
    date: `07/2019`,
    img: 'article3.png',
  },
  {
    id: `article10`,
    title: `What Is 'Microdosing'? Tiny Hits of Psychedelic Drugs Reduce Anxiety`,
    url: `https://www.newsweek.com/microdosing-tiny-hits-psychedelic-drugs-reduce-anxiety-1058538`,
    date: `08/2018`,
    img: 'article10.png',
  },
  {
    id: `article11`,
    title: `How and why people 'microdose' tiny hits of psychedelic drugs`,
    url: `https://www.cbc.ca/news/health/microdosing-pschedelics-study-1.4771647`,
    date: `08/2018`,
    img: 'article11.png',
  },
  {
    id: `article12`,
    title: `How psychedelic microdosing might help ease anxiety and sharpen focus`,
    url: `https://www.utoronto.ca/news/rethinking-psychedlics-u-t-study-looks-practice-microdosing-ease-anxiety-and-sharpen-focus`,
    date: `07/2018`,
    img: 'article12.png',
  },
  {
    id: `article13`,
  },
];

// PODCASTS
export const podcastData = [
  {
    id: `pod1`,
    title: `Psychedelic Research w/Rotem Petranker`,
    host: `The Research Slayer Podcast`,
    url: `https://www.stitcher.com/podcast/the-research-slayer-podcast/e/67177802`,
    date: `February, 2020`,
  },
  {
    id: `pod2`,
    title: `The State of Psychedelic Research – Rotem Petranker`,
    host: `Ameer Approved`,
    url: `https://ameerrosic.com/the-state-of-psychedelic-research-rotem-petranker/`,
    date: `October, 2019`,
  },
  {
    id: `pod3`,
    title: `Does microdosing LSD help you focus and improve your mood?`,
    host: `The Elias Makos Show, CJAD 800 AM`,
    url: `https://www.iheartradio.ca/cjad/audio/does-microdosing-lsd-help-you-focus-and-improve-your-mood-1.9512912`,
    date: `July, 2019`,
  },
  {
    id: `pod4`,
    title: `Is microdosing LSD a solution to the 'crisis of meaning' in modern life?`,
    host: `Afternoons with Rob Breakenridge`,
    url: `https://omny.fm/shows/afternoons-with-rob-breakenridge/dosing-your-way-to-bliss`,
    date: `April, 2019`,
  },
  {
    id: `pod5`,
    title: `‘Microdosers’ of LSD and magic mushrooms are wiser and more creative`,
    host: `The Jon McComb Show, 980 CKNW`,
    url: `https://omny.fm/shows/the-jon-mccomb-show/the-benefits-of-microdosing`,
    date: `November, 2018`,
  },
];

// VIDEOS
export const videosData = [
  {
    id: `video1`,
    title: `The State of Psychedelic Research - Rotem Petranker`,
    date: `10/2019`,
    img: `video1_thumbnail.png`,
    iframe: 'https://www.youtube.com/embed/TreFjlKCdj8',
  },
  {
    id: `video2`,
    title: `Could Canada decriminalize magic mushrooms? `,
    date: `05/2019`,
    img: `video2_thumbnail.png`,
    iframe: 'https://edmonton.citynews.ca/video/iframe/593482582001/SyxzIeNcgb/6035356169001',
  },
  {
    id: `videos3`,
    title: `Rotem Petranker and Thomas Anderson report their microdosing findings`,
    date: `01/2018`,
    img: `video3_thumbnail.png`,
    iframe: 'https://www.youtube.com/embed/VCRBmNHDlyU',
  },
  {
    id: `video4`,
    title: `A Preliminary Study on Microdosing Psychedelics by Rotem Petranker`,
    url: `https://www.youtube.com/watch?v=GNrm8nFR1G0&feature=youtu.be`,
    date: `11/2018`,
    img: `video4_thumbnail.png`,
    iframe: 'https://www.youtube.com/embed/GNrm8nFR1G0',
  },
  {
    id: `video5`,
    title: `Rotem Petranker Microdosing Psychedelics Interview`,
    url: `https://www.youtube.com/watch?v=fWf_Wm0CloU&feature=youtu.be`,
    date: `10/2018`,
    img: `video5_thumbnail.png`,
    iframe: 'https://www.youtube.com/embed/fWf_Wm0CloU',
  },
];

// ACADEMIA DATA

export const academiaData = {
  publications: [
    {
      id: `publication1`,
      title: `Demography of Microdosing Community Survey`,
      url: `https://osf.io/ke49d`,
      year: `2017`,
      month: `August`,
    },
    {
      id: `publication2`,
      title: `Microdosing Psychedelics: Personality, mental health, and creativity differences in microdosers`,
      url: `https://www.researchgate.net/publication/328700778_Microdosing_Psychedelics_Personality_mental_health_and_creativity_differences_in_microdosers`,
      year: `2018`,
      month: `November`,
    },
    {
      id: `publication3`,
      title: `Sitting with it: an Investigation of the Relationship between Mindfulness and Boredom Mindfulness, Vigilance, and Boredom Procedure`,
      url: `https://www.researchgate.net/publication/325541154_Sitting_with_it_an_Investigation_of_the_Relationship_between_Mindfulness_and_Boredom_Mindfulness_Vigilance_and_Boredom_Procedure`,
      year: `2018`,
      month: `May`,
    },
    {
      id: `publication4`,
      title: `Is fear in your head? A comparison of instructed and real-life expressions of emotion in the face and body.`,
      url: `https://psycnet.apa.org/record/2016-59274-001`,
      year: `2017`,
      month: `April`,
    },
    {
      id: 'publication5',
      title: 'Microdosing as a response to the meaning crisis',
      url: 'https://psyarxiv.com/2jnkf/',
      year: '2020',
      month: `May`,
    },
    {
      id: 'publication6',
      title:
        'Social interaction context shapes emotion recognition through body language, not facial expressions',
      url: 'https://psycnet.apa.org/record/2020-02994-001',
      year: '2020',
      month: `May`,
    },
    {
      id: 'publication7',
      title: 'Psychedelic microdosing benefits and challenges: an empirical codebook',
      url:
        'https://harmreductionjournal.biomedcentral.com/articles/10.1186/s12954-019-0308-4?optIn=true',
      year: '2019',
      month: `July`,
    },
    {
      id: 'publication8',
      title:
        'Semantic and affective representations of valence: Prediction of autonomic and facial responses from feelings-focused and knowledge-focused self-reports',
      url: 'https://psycnet.apa.org/doiLanding?doi=10.1037%2Femo0000567',
      year: '2019',
      month: `February`,
    },
    {
      id: 'publication9',
      title: 'Psychedelic Research and the Need for Transparency: Polishing Alice’s Looking Glass',
      url:
        'https://www.frontiersin.org/articles/10.3389/fpsyg.2020.01681/full?fbclid=IwAR1PWW9VKcL5qEcKdQ8av1N-fTq8BrJpVs14ESYKslOviIbAN7jybAusz4k',
      year: '2020',
      month: `July`,
    },
  ],
};

// {
//   "items": [
//     {
//       "type": "video",
//       "originalUrl": "https://vimeo.com/320862901",
//       "url": "https://vimeo.com/320862901",
//       "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F320862901%3Fapp_id%3D122963&dntp=1&url=https%3A%2F%2Fvimeo.com%2F320862901&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F763410222_1280.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo\" width=\"940\" height=\"394\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
//       "thumbnailUrl": "https://i.vimeocdn.com/video/763410222_1280.jpg",
//       "width": 940,
//       "height": 394
//     }
//   ]
// }
