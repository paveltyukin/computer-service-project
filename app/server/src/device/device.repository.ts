import { Inject, Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { Device } from './device'
import { SearchDeviceArgs } from './dto/search-device.args'

@Injectable()
export class DeviceRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async searchDevices(searchParams: SearchDeviceArgs): Promise<Device[]> {
    return this.prisma.device.findMany({
      where: {
        OR: [
          {
            title: {
              contains: searchParams.search,
            },
          },
          {
            description: {
              contains: searchParams.search,
            },
          },
        ],
      },
    })
  }
}
