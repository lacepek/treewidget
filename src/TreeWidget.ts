import { Tree } from "./tree";

export default abstract class TreeWidget
{
    private static tree: Tree;
    public static create(config: object): void
    {
        TreeWidget.tree = new Tree(config);
    }
}