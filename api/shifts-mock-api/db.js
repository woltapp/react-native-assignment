const createMockDb = (initialValues = {}) => {
  const state = {
    shifts: initialValues.shifts || [],
  };

  const createDbMethods = dataSet => ({
    list: async () => dataSet,
    set: async (id, data) => {
      dataSet = dataSet.map(d => d.id === id
        ? Object.assign(d, data)
        : data);

      return true;
    },
  })

  return {
    shifts: createDbMethods(state.shifts),
  };
};

export { createMockDb };
