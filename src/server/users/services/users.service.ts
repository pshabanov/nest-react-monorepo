import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from '../entities/user.entity'
import { Repository } from 'typeorm'
import { CreateUserInput } from '../inputs/createUser.input'
import { UpdateUserInput } from '../inputs/updateUser.input'

@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {
    }

    async createUser(userInput: CreateUserInput): Promise<UserEntity>{
        return await this.userRepository.save({...userInput})
    }

    async getOneUser(id: number): Promise<UserEntity | undefined>{
        return await this.userRepository.findOne({ where: {
                id,
            }})
    }

    async getAllUsers(): Promise<UserEntity[]>{
        return await this.userRepository.find()
    }

    async removeUser(id: number): Promise<number>{
        await this.userRepository.delete({id})
        return id
    }

    async updateUser(updateUserInput: UpdateUserInput): Promise<UserEntity>{
        await this.userRepository.update({id: updateUserInput.id}, { ...updateUserInput})
        return await this.getOneUser(updateUserInput.id)
    }
}