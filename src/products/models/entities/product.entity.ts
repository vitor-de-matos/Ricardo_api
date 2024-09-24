import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { CategoryEntity } from 'src/category/models/entities/category.entity';
import { ProductOrderEntity } from 'src/products-order/models/entities/products-order.entity';

@Entity('produtos')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nome: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  preco: number;

  @Column({ name: 'categoria_id' })
  categoriaId: number;

  @OneToMany(() => ProductOrderEntity, (pedidoProduto) => pedidoProduto.produto)
  pedidoProdutos: ProductOrderEntity[];

  @ManyToOne(() => CategoryEntity, (category) => category.products, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'categoria_id',
    foreignKeyConstraintName: 'categoria_id',
  })
  category: CategoryEntity;
}
