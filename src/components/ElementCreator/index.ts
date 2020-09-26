type InsertingMod = 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend';

class ElementCreator {
    private _template: string;

    get template(): string {
        return this._template;
    }

    render (container: Element, mod: InsertingMod = 'beforebegin'): void {
        container.insertAdjacentHTML(mod, this.template);
    }
}

export default ElementCreator;