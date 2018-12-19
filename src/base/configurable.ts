export default abstract class Configurable
{
  [key: string]: any;

  public configurate(config: any)
  {
    for (let property in config) {
      if (config.hasOwnProperty(property)) {
        this[property] = config[property];
      }
    }
  }

  protected setDefaultProps(): void { }
}
