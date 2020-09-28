type InsertingModType = 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend';

class ElementCreator {
  private _template: string;

  protected get template(): string {
    return this._template;
  }

  render(container: Element, mod: InsertingModType = 'beforebegin') {
    container.insertAdjacentHTML(mod, this.template);
  }
}

export default ElementCreator;
