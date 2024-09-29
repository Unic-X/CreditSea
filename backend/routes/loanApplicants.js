const express = require('express');
const router = express.Router();

// Get all loan applications
router.get('/loanApplications', async (req, res) => {
  try {
    const loanApplications = await req.db.collection('details').find().toArray();
    res.json(loanApplications);
  } catch (err) {
    console.error('Failed to fetch loan applications:', err);
    res.status(500).json({ message: 'Failed to fetch loan applications.' });
  }
});

// Submit a loan application

router.post('/loanApplications', async (req, res) => {

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
    await req.db.collection('details').insertOne(newApplication);
    res.status(201).json({ message: 'Loan application submitted successfully!' });
  } catch (err) {
    console.error('Failed to submit loan application:', err);
    res.status(500).json({ message: 'Failed to submit loan application.' });
  }
});

module.exports = router;

