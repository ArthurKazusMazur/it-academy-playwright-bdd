export class ContextManager {
  private static context: { [key: string]: any } = {};

  static setContext(key: string, value: any) {
    this.context[key] = value;
  }

  static getContext(key: string) {
    return this.context[key];
  }
}
