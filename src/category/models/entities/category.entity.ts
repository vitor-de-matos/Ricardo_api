import { ProductEntity } from 'src/products/models/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('categorias')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nome: string;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];
}
