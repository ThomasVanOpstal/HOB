import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `https://www.houseofbeautybylauren.be`,
    },
    {
      url: `https://www.houseofbeautybylauren.be/beauty`,
    },
    {
      url: `https://www.houseofbeautybylauren.be/body`,
    },
    {
      url: `https://www.houseofbeautybylauren.be/skin`,
    },
    {
      url: `https://www.houseofbeautybylauren.be/beauty/gelnagels`,
    },
    {
      url: `https://www.houseofbeautybylauren.be/beauty/pedicure_&amp;_lakken`,
    },
    {
      url: `https://www.houseofbeautybylauren.be/beauty/wimpers_&amp;_wenkbrauwen`,
    },
    {
      url: `https://www.houseofbeautybylauren.be/body`,
    },
    {
      url: `https://www.houseofbeautybylauren.be/body/massage`,
    },
    {
      url: `https://www.houseofbeautybylauren.be/skin/`,
    },
    {
      url: `https://www.houseofbeautybylauren.be/skin/dermaplanning`,
    },
    {
      url: `https://www.houseofbeautybylauren.be/skin/gelaatsverzorging`,
    },
    {
      url: `https://www.houseofbeautybylauren.be/about`,
    },
    {
      url: `https://www.houseofbeautybylauren.be/contact`,
    },
  ]
}
