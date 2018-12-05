export default abstract class Configurable
{
    public config(config: any)
    {
        for(let property in config) {
            if (config.hasOwnProperty(property)) {
                this[property] = config[property];
            }
        }
    }

    protected setDefaultProps(): void {}
}
