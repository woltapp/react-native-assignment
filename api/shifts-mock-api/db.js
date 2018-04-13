const createMockDb = (initialValues = {}) => {
  const state = {
    shifts: initialValues.shifts || [],
  };

  const createDbMethods = dataSet => ({
    list: async () => dataSet,
    get: async (id) => dataSet.find(d => d.id === id),
    set: async (id, data) => {
      dataSet = dataSet.map(d => d.id === id ? Object.assign(d, data) : d);
      return true;
    },
  })

  return {
    shifts: createDbMethods(state.shifts),
  };
};

export { createMockDb };
