import { inject } from '@loopback/context';
import {
  FindRoute,
  InvokeMethod,
  ParseParams,
  Reject,
  RequestContext,
  RestBindings,
  Send,
  SequenceHandler,
  InvokeMiddleware,
  ExpressRequestHandler,
} from '@loopback/rest';
import { TestSecurityBindings } from './keys';

const SequenceActions = RestBindings.SequenceActions;

export class MySequence implements SequenceHandler {
  @inject(SequenceActions.INVOKE_MIDDLEWARE, { optional: true })
  protected invokeMiddleware: InvokeMiddleware = () => false;
  @inject(TestSecurityBindings.EXPRESS_MIDDLEWARES, { optional: true })
  protected expressMiddlewares: ExpressRequestHandler[] = [];

  constructor(
    @inject(SequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
    @inject(SequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
    @inject(SequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
    @inject(SequenceActions.SEND) public send: Send,
    @inject(SequenceActions.REJECT) public reject: Reject,
  ) { }

  async handle(context: RequestContext) {
    try {
      const { request, response } = context;
      if (this.expressMiddlewares?.length) {
        const responseGenerated = await this.invokeMiddleware(
          context,
          this.expressMiddlewares,
        );
        if (responseGenerated) return;
      }
      const finished = await this.invokeMiddleware(context);
      if (finished) return;
      console.log("new request")
      const route = this.findRoute(request);
      const args = await this.parseParams(request, route);
      //result of loopback requests
      const result = await this.invoke(route, args);
      this.send(response, result);
    } catch (err) {
      this.reject(context, err);
    }
  }
}
