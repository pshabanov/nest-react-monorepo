import { Controller, Get, Render } from '@nestjs/common'

@Controller('')
export class AppController {

    @Get(['', 'articles', 'article/:name', 'about'])
    @Render('index')
    pages() {
        return { message: 'Hello world from Template HBS!' };
    }
}
