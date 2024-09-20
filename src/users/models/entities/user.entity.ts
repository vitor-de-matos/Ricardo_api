import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  PADEIRO = 'padeiro',
  CLIENTE = 'cliente',
}

@Entity('users')
export class UserInterface {
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
}
