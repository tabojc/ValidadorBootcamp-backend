import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from 'src/controllers/users/users.controller';
import { BootcampEntity } from 'src/models/bootcamp/bootcamp.entity';
import { FeatureEntity } from 'src/models/feature/feature.entity';
import { FileEntity } from 'src/models/file/file.entity';
import { OfficeEntity } from 'src/models/office/office.entity';
import { PricingProgramEntity } from 'src/models/program/pricing/pricing.program.entity';
import { ProgramEntity } from 'src/models/program/program.entity';
import { SegmentSectionEntity } from 'src/models/program/segment/section/section.segment.program.entity';
import { SegmentProgramEntity } from 'src/models/program/segment/segment.program.entity';
import { ReviewEntity } from 'src/models/review/review.entity';
import { TestimonialEntity } from 'src/models/testimonial/testimonial.entity';
import { UserEntity } from 'src/models/user/user.entity';
import { UsersService } from 'src/services/users/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      FileEntity,
      BootcampEntity,
      FeatureEntity,
      OfficeEntity,
      ProgramEntity,
      PricingProgramEntity,
      SegmentProgramEntity,
      SegmentSectionEntity,
      ReviewEntity,
      TestimonialEntity,
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [TypeOrmModule],
})
export class UsersModule {}
