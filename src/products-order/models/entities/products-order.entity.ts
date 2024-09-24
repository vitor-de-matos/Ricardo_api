import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { OrderEntity } from 'src/orders/models/entities/orders.entity';
import { ProductEntity } from 'src/products/models/entities/product.entity';

@Entity('pedido_produtos')
export class ProductOrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'pedido_id' })
  pedidoId: number;

  @Column({ name: 'produto_id' })
  produtoId: number;

  @Column({ type: 'integer' })
  quantidade: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precoTotal: number;

  @ManyToOne(() => OrderEntity, (pedido) => pedido.pedidoProdutos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'pedido_id' })
  pedido: OrderEntity;

  @ManyToOne(() => ProductEntity, (produto) => produto.pedidoProdutos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'produto_id' })
  produto: ProductEntity;
}
