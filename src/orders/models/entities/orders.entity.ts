import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from 'src/users/models/entities/user.entity';
@Entity('pedidos')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @Column()  
  user_id: number;

  @ManyToOne(() => UserEntity, user => user.orders, { onDelete: 'CASCADE' })
  user: UserEntity;
}
