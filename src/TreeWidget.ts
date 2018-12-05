import { Tree } from "./tree";

export default abstract class TreeWidget
{
    private static tree;
    public static create(config: object): void
    {
        TreeWidget.tree = new Tree(config);
    }
}