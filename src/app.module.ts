import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthMiddleware } from './auth/auth.middleware';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './orders/orders.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './products/product.module';
import { ProductOrderModule } from './products-order/product-order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bakery.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    CategoryModule,
    ProductModule,
    OrderModule,
    ProductOrderModule,
  ],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).exclude('/auth/login'); //.forRoutes('*');//comente esta linha para desativar o Auth
  }
}
