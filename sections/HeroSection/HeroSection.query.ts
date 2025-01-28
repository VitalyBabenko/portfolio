export const heroSectionQuery = `
  ... on HomeSectionContentRecord {
    avatar {
      url
      alt
    }
    title {
      value
    }
    contactButtonText
    cvButtonText
    socialLinks {
      id
      socialNetwork
      link
    }
  }
`;
