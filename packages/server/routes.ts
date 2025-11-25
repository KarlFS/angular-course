import { chatController } from './controllers/chat.controller';
import express from 'express';
import type { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
   res.send('Hello world!');
});

router.get('/api/hello', (req: Request, res: Response) => {
   res.send({ message: 'Hello world!' });
});

router.post('/api/chat', chatController.sendMessage);

export default router;
