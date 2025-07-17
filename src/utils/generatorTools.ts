const setupGeneratorTools = () => {
  const generateId = (): string => {
    return Math.random().toString(36).substring(2, 8);
  };

  return {
    generateId,
  };
}

export const {
  generateId,
} = setupGeneratorTools();

