import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.PUBLIC_URL}`,
    },
    {
      url: `${process.env.PUBLIC_URL}/beauty`,
    },
    {
      url: `${process.env.PUBLIC_URL}/body`,
    },
    {
      url: `${process.env.PUBLIC_URL}/skin`,
    },
    {
      url: `${process.env.PUBLIC_URL}/beauty/gelnagels`,
    },
    {
      url: `${process.env.PUBLIC_URL}/beauty/pedicure_&amp;_lakken`,
    },
    {
      url: `${process.env.PUBLIC_URL}/beauty/wimpers_&amp;_wenbrauwen`,
    },
    {
      url: `${process.env.PUBLIC_URL}/body`,
    },
    {
      url: `${process.env.PUBLIC_URL}/body/massage`,
    },
    {
      url: `${process.env.PUBLIC_URL}/skin/`,
    },
    {
      url: `${process.env.PUBLIC_URL}/skin/dermaplanning`,
    },
    {
      url: `${process.env.PUBLIC_URL}/skin/gelaatsverzorging`,
    },
    {
      url: `${process.env.PUBLIC_URL}/about`,
    },
    {
      url: `${process.env.PUBLIC_URL}/contact`,
    },
  ]
}
