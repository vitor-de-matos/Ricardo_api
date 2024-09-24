import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { UserEntity } from 'src/users/models/entities/user.entity';
import { ProductOrderEntity } from 'src/products-order/models/entities/products-order.entity';
@Entity('pedidos')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @Column({ name: 'user_id' })
  userId: number;

  @OneToMany(() => ProductOrderEntity, (pedidoProduto) => pedidoProduto.pedido)
  pedidoProdutos: ProductOrderEntity[];

  @ManyToOne(() => UserEntity, (user) => user.orders, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id', foreignKeyConstraintName: 'user_id' })
  user: UserEntity;
}
