import { FindRoute, InvokeMethod, ParseParams, Reject, RequestContext, Send, SequenceHandler, InvokeMiddleware, ExpressRequestHandler } from '@loopback/rest';
export declare class MySequence implements SequenceHandler {
    protected findRoute: FindRoute;
    protected parseParams: ParseParams;
    protected invoke: InvokeMethod;
    send: Send;
    reject: Reject;
    protected invokeMiddleware: InvokeMiddleware;
    protected expressMiddlewares: ExpressRequestHandler[];
    constructor(findRoute: FindRoute, parseParams: ParseParams, invoke: InvokeMethod, send: Send, reject: Reject);
    handle(context: RequestContext): Promise<void>;
}
