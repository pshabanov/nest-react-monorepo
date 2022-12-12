import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ConfigModule, ConfigService } from '@nestjs/config'
import * as path from 'path'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'


import { UsersModule } from './users/users.module'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

@Module({
    imports: [
        ConfigModule.forRoot({envFilePath: path.resolve(__dirname, '..', '..', '.env'), isGlobal: true}),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            autoSchemaFile: 'schema.gql',
            sortSchema: true,
            driver: ApolloDriver,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => ({
                //config.get<string>('TYPEORM_CONNECTION')
                type: 'postgres' as 'postgres',
                username: config.get<string>('TYPEORM_USERNAME'),
                password: config.get<string>('TYPEORM_PASSWORD'),
                database: config.get<string>('TYPEORM_DATABASE'),
                port: config.get<number>('TYPEORM_PORT'),
                entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
                synchronize: true,
                autoLoadEntities: true,
                logging: true,
            }),
        }),
        UsersModule
    ],
    controllers: [AppController],
})

export class AppModule {
}
