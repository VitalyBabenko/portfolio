export const contactSectionQuery = `
  ... on ContactSectionContentRecord {
    title
    description {
      value
    }
    emailPlaceholder
    messagePlaceholder
    submitButtonText
  }
`;
