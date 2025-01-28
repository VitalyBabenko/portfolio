export const projectsSectionQuery = `
  ... on ProjectsSectionContentRecord {
    title
    projects {
      id
      title
      description
      stack
      link
      image {
        url
        alt
      }      
    }
  }
`;
