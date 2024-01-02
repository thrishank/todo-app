const z = require("zod");

const todoschema = z.object({
  title: z.string(),
  notes: z.string(),
  isCompleted: z.boolean(),
});

const numberschema = z.string();
module.exports = {
  todoschema,
  numberschema
};
