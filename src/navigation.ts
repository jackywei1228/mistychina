import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Start Here',
      links: [
        { text: 'First-time Guide', href: getPermalink('/start-here') },
        { text: 'Before You Go', href: getPermalink('/start-here/before-you-go') },
        { text: 'Money & Payments', href: getPermalink('/start-here/money-payments') },
        { text: 'Internet & Apps', href: getPermalink('/start-here/internet-apps') },
        { text: 'Transportation', href: getPermalink('/start-here/transportation') },
        { text: 'Language & Culture', href: getPermalink('/start-here/language-culture') },
      ],
    },
    {
      text: 'Destinations',
      links: [
        { text: 'All destinations', href: getPermalink('/destinations') },
        { text: 'Beijing', href: getPermalink('/destinations/beijing') },
        { text: 'Shanghai', href: getPermalink('/destinations/shanghai') },
        { text: "Xi'an", href: getPermalink('/destinations/xian') },
        { text: 'Chengdu', href: getPermalink('/destinations/chengdu') },
        { text: 'Guilin', href: getPermalink('/destinations/guilin') },
        { text: 'Zhangjiajie', href: getPermalink('/destinations/zhangjiajie') },
      ],
    },
    {
      text: 'Travel Tips',
      links: [
        { text: 'All tips', href: getPermalink('/travel-tips') },
        { text: 'Scams to avoid', href: getPermalink('/travel-tips/scams') },
        { text: 'Safety basics', href: getPermalink('/travel-tips/safety') },
        { text: "Do's & Don'ts", href: getPermalink('/travel-tips/dos-and-donts') },
      ],
    },
    {
      text: 'Tools',
      links: [
        { text: 'All tools', href: getPermalink('/tools') },
        { text: 'Internet & eSIM', href: getPermalink('/tools/internet') },
        { text: 'Hotels & Transport', href: getPermalink('/tools/hotels') },
      ],
    },
    {
      text: 'Blog',
      links: [
        { text: 'Latest posts', href: getBlogPermalink() },
        { text: 'Categories', href: getPermalink('guides', 'category') },
        { text: 'Tags', href: getPermalink('china', 'tag') },
      ],
    },
  ],

  // 右上角按钮（非常重要：引导转化）
  actions: [
    { text: 'First-time Guide', href: getPermalink('/start-here') },
    { text: 'Newsletter', href: getPermalink('/newsletter'), variant: 'primary' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Guides',
      links: [
        { text: 'Start Here', href: getPermalink('/start-here') },
        { text: 'Payments', href: getPermalink('/start-here/money-payments') },
        { text: 'Internet & Apps', href: getPermalink('/start-here/internet-apps') },
        { text: 'Transportation', href: getPermalink('/start-here/transportation') },
        { text: 'Language & Culture', href: getPermalink('/start-here/language-culture') },
      ],
    },
    {
      title: 'Destinations',
      links: [
        { text: 'All destinations', href: getPermalink('/destinations') },
        { text: 'Beijing', href: getPermalink('/destinations/beijing') },
        { text: 'Shanghai', href: getPermalink('/destinations/shanghai') },
        { text: "Xi'an", href: getPermalink('/destinations/xian') },
        { text: 'Chengdu', href: getPermalink('/destinations/chengdu') },
      ],
    },
    {
      title: 'Tools',
      links: [
        { text: 'Tools & Services', href: getPermalink('/tools') },
        { text: 'Internet & eSIM', href: getPermalink('/tools/internet') },
        { text: 'Hotels', href: getPermalink('/tools/hotels') },
      ],
    },
    {
      title: 'MistyChina',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Affiliate Disclosure', href: getPermalink('/affiliate-disclaimer') },
        { text: 'Privacy Policy', href: getPermalink('/privacy-policy') },
      ],
    },
  ],

  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy-policy') },
    { text: 'Affiliate Disclosure', href: getPermalink('/affiliate-disclaimer') },
  ],

  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // 如果你不想暴露 GitHub，可删掉这一行
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],

  footNote: `
    © ${new Date().getFullYear()} <span class="font-semibold">MistyChina</span>. Practical China travel guides for Western travelers.
  `,
};
