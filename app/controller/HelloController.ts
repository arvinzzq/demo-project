import {
  HTTPController,
  HTTPMethod,
  HTTPMethodEnum,
  Context,
  EggContext,
  HTTPQuery,
  Inject,
} from '@eggjs/tegg';
import { EggLogger } from 'egg';
import { HelloService } from '@/app/service/HelloService';

@HTTPController()
export class HelloController {
  @Inject()
  private readonly helloService: HelloService;

  @Inject()
  private readonly logger: EggLogger;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: '/home'
  })
  async getHomePage(@Context() ctx) {
    console.log('get home page ~');
    await ctx.render('index.html');
  }


  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: '/hello',
  })
  async hello(@Context() ctx: EggContext, @HTTPQuery() name: string) {
    this.logger.info('access url: %s', ctx.url);

    const message = await this.helloService.hello(name);

    return {
      success: true,
      data: {
        message,
      },
    };
  }
}