// Central affiliate config — update IDs here when networks approve
// All affiliate URLs are built from this file — never hardcode in articles

export const affiliates = {
  amazon: {
    tag: 'standandsleep-20',
    baseUrl: 'https://www.amazon.com/dp/',
  },
  impact: {
    ouraring: '',
    eightsleep: '',
    momentous: '',
    ag1: '',
    whoop: '',
  },
  shareasale: {
    thorne: '',
    hatch: '',
    winkbeds: '',
  },
  direct: {
    joovv: '',
    plunge: '',
    sunlighten: '',
  }
}

export function amazonLink(asin) {
  return `${affiliates.amazon.baseUrl}${asin}?tag=${affiliates.amazon.tag}`
}
