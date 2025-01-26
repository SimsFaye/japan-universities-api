export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Japan Universities API</h1>
      <p>Available endpoints:</p>
      <ul>
        <li><code>/api/universities</code> - Get all universities</li>
        <li><code>/api/faculties</code> - Get all faculties</li>
      </ul>
    </div>
  )
}