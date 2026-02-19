export function createRegistry() {
  const commands = new Map();

  return {
    register(command) {
      if (!command.id) {
        throw new Error('Command must have an id');
      }
      commands.set(command.id, command);
    },

    get(id) {
      return commands.get(id);
    },

    list() {
      return Array.from(commands.values());
    }
  };
}