import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UsersService } from '../services/users.service'
import { UserEntity } from '../entities/user.entity'
import { CreateUserInput } from '../inputs/createUser.input'
import { UpdateUserInput } from '../inputs/updateUser.input'

@Resolver('User')
export class UsersResolver {
    constructor(
        private readonly usersService: UsersService
    ) {
    }

    @Mutation(()=>UserEntity)
    async createUser(@Args('createUser') createUserInput: CreateUserInput): Promise<UserEntity>{
        return await this.usersService.createUser(createUserInput)
    }

    @Mutation(()=>UserEntity)
    async updateUser(@Args('updateUser') updateUserInput:UpdateUserInput): Promise<UserEntity>{
        return await this.usersService.updateUser(updateUserInput)
    }

    @Mutation(()=>Number)
    async removeUser(@Args('id') id:number): Promise<number>{
        return await this.usersService.removeUser(id)
    }

    @Query(()=>UserEntity)
    async getOneUser(@Args('id') id: number): Promise<UserEntity>{
        return await this.usersService.getOneUser(id)
    }

    @Query(()=>[UserEntity])
    async getAllUsers(): Promise<UserEntity[]>{
        return await this.usersService.getAllUsers()
    }
}