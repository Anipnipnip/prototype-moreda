// routes/listsRoutes.js
import express from 'express';
import { addToList, getUserMovies } from '../controllers/listController.js';

const router = express.Router();

// Endpoint untuk menambah atau mengupdate like pada movie
router.post('/:userId/movies', addToList); // Menambah movie ke daftar berdasarkan userId

// Endpoint untuk mendapatkan daftar movie berdasarkan userId
router.get('/:userId/movies', getUserMovies); // Mendapatkan movie berdasarkan userId

export default router;
