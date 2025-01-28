export const experienceSectionQuery = `
  ... on ExperienceSectionContentRecord {
      title
      experienceBlocks {
        icon
        title
        location
        description
        years
    }
  }
`;
