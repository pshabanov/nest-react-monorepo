import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ArticleModule } from './article/article.module'
import { ConfigModule } from '@nestjs/config'
import * as path from 'path'

@Module({
    imports: [ArticleModule, ConfigModule.forRoot({
        load: [()=>({
            dataPath: path.resolve(__dirname, '..', '..', 'data')
        })],
        isGlobal: true
    })
    ],
    controllers: [AppController],
})
export class AppModule {
}
