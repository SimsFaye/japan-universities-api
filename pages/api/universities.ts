import type { NextApiRequest, NextApiResponse } from 'next'
import universities from '../../data/universities.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Access-Control-Max-Age', '86400') // 24 hours
  
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  
  if (req.method === 'GET') {
    // Add cache headers
    res.setHeader('Cache-Control', 'public, max-age=3600') // 1 hour
    res.status(200).json(universities)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}