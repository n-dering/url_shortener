import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Index,
} from 'typeorm';

@Entity('shortened_urls')
export class ShortenedUrlEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  @Index({ unique: true })
  short_code: string;

  @Column({ type: 'text' })
  original_url: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  expires_at: Date | null;

  @Column({ type: 'int', default: 0 })
  clicks: number;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @Column({ type: 'json', nullable: true })
  metadata: Record<string, any> | null;

  @Column({ type: 'uuid', nullable: true })
  user_id: string | null;
}
