import { Router, Request, Response } from 'express';
import { Db } from 'mongodb';

const router = Router();

// Get all loan applications
router.get('/loanApplications', async (req: Request, res: Response) => {
  try {
    const db = req.db as Db; // Use type assertion here
    const loanApplications = await db.collection('details').find().toArray();
    res.json(loanApplications);
  } catch (err) {
    console.error('Failed to fetch loan applications:', err);
    res.status(500).json({ message: 'Failed to fetch loan applications.' });
  }
});

// Submit a loan application
router.post('/loanApplications', async (req: Request, res: Response) => {
  const newApplication = {
    fullName: req.body.fullName,
    loanAmount: req.body.loanAmount,
    loanTerm: req.body.loanTerm,
    employmentStatus: req.body.employmentStatus,
    reason: req.body.reason,
    employmentAddress: req.body.employmentAddress,
    status: "Pending",
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
  };

  try {
    const db = req.db as Db; // Use type assertion here
    await db.collection('details').insertOne(newApplication);
    res.status(201).json({ message: 'Loan application submitted successfully!' });
  } catch (err) {
    console.error('Failed to submit loan application:', err);
    res.status(500).json({ message: 'Failed to submit loan application.' });
  }
});

export default router;

