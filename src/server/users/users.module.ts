import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './entities/user.entity'
import { UsersService } from './services/users.service'
import { UsersResolver } from './resolvers/users.resolver'

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UsersService, UsersResolver]
})
export class UsersModule{

}