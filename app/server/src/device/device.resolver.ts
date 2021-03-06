import { Args, Query, Resolver } from '@nestjs/graphql'
import { Device } from './device'
import { Inject } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { SearchDeviceArgs } from './dto/search-device.args'
import { DeviceRepository } from './device.repository'

@Resolver(() => Device)
export class DeviceResolver {
  constructor(
    @Inject(PrismaService) private prisma: PrismaService,
    private readonly deviceRepository: DeviceRepository
  ) {}

  @Query(() => [Device], { nullable: true })
  async getAllDevices() {
    return this.prisma.device.findMany()
  }

  @Query(() => [Device], { nullable: true })
  async searchDevices(@Args() args: SearchDeviceArgs) {
    console.log(args)
    return this.deviceRepository.searchDevices(args)
  }
}
