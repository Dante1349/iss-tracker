import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AgentControlMiddleware } from 'src/middleware/agent-control.middleware';

import { CoordinatesModule } from 'src/coordinates/coordinates.module';
import { ISSController } from './iss.controller';
import { ISSService } from './iss.service';

@Module({
  imports: [CoordinatesModule],
  controllers: [ISSController],
  providers: [ISSService],
})
export class IssModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AgentControlMiddleware).forRoutes('*');
  }
}
