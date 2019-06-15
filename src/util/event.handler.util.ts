type CustomHandlers<E> = (event: any) => void;

export class EventDispatcher<E> {
    private handlers: CustomHandlers<E>[] = [];
    fire(event: E) {
        for (let h of this.handlers)
            h(event);
    }
    register(handler: CustomHandlers<E>) {
        this.handlers.push(handler);
    }
}