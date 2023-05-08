const commonArgs = {
  tags: ["Example"],
};

export const schema = {
  schema: {
    description: "post some data",
    ...commonArgs,
    summary: "qwerty",
    params: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "user id",
        },
      },
    },
    response: {
      201: {
        description: "Successful response",
        type: "object",
        properties: {
          hello: { type: "string", example: "1" },
        },
      },
      default: {
        description: "Default response",
        type: "object",
        properties: {
          foo: { type: "string", example: "bar" },
        },
      },
    },
  },
};
