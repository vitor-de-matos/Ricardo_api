import { OrderEntity } from 'src/orders/models/entities/orders.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  PADEIRO = 'padeiro',
  CLIENTE = 'cliente',
}

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 20,
    default: UserRole.CLIENTE,
  })
  role: UserRole;

  @OneToMany(() => OrderEntity, order => order.user)
  orders: OrderEntity[];
}
