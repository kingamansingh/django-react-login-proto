// components/Sidebar.jsx

function Sidebar({ width }) {
  return (
    <aside className="sidebar" style={{ width: `${width}px` }}>
      <h2>Uploaded Files</h2>
      <ul>
        <li>Metabolism File</li>
      </ul>
    </aside>
  )
}

export default Sidebar

