interface UrlsInterface{
    name:string,
    link:string,
    type?:string
}

export const listsUrls:UrlsInterface[] = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Tutorial',
      link: '/tutorial',
    },
    {
      name: 'Pricing',
      link: '/pricing',
      
    },
    {
      name: 'FAQ',
      link: '/faq',
    },
    {
      name: 'Contact Us',
      link: '/',
    },
  ];