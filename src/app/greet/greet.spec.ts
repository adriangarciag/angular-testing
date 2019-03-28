import { greet } from './greet';
describe ('greet', ()=> { // g r e e t s u i t
    it ('should include the name in the message', () => {
        expect(greet ('gaby')).toContain('gaby');
    })
})

