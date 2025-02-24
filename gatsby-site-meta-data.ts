export default {
  /**
   * basic Information
   */
  title: `알파카 잡담방`,
  description: `알파카 이모저모`,
  language: `ko`,
  siteUrl: `https://cmj7271.github.io`,
  ogImage: `og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: ``, //`danmin20/danmin-gatsby-blog`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `천민재`,
    nickname: `알파카`,
    stack: ['backend', 'spring', 'go-lang'],
    bio: {
      email: `cmjcmj1011@gmail.com`,
      residence: 'Suwon, South Korea',
      bachelorDegree: 'Hongik Univ. Computer Engineering (2023.03~ )',
    },
    social: {
      github: `https://github.com/cmj7271`,
      linkedIn: `https://cmj7271.github.io`,
      resume: `https://cmj7271.github.io`,
    },
    dropdown: {
      tistory: 'https://open-alpaca.tistory.com/',
      velog: ``,
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'AI-generated',
      category: 'featured-AI-generated',
    },
    {
      title: 'dev',
      category: 'featured-dev',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2023.03.01 - NOW',
      en: 'Hongik Univ.',
      kr: '홍익대학교',
      info: '컴퓨터공학과',
      link: '',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'SomeDay...',
      description: '언젠가는 하겠지',
      techStack: ['go-language', 'Typescript'],
      thumbnailUrl: '', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: '',
        demo: '',
        googlePlay: '',
        appStore: '',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      link: '',
      qrCode: '', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: '', // Path to your in the 'assets' folder
    },
  },
};
