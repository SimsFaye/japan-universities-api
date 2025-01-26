import type { NextApiRequest, NextApiResponse } from 'next'
import faculties from '../../data/faculties.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  
  if (req.method === 'GET') {
    res.status(200).json(faculties)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}