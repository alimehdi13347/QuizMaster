import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav
  className="navbar"
  style={{
    backgroundColor: "#1f1f1f",
    padding: "15px 30px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  }}
>
  <div
    className="container-fluid"
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <a
      className="navbar-brand"
      style={{
        color: "#00c6ff",
        fontSize: "24px",
        fontWeight: "600",
        textDecoration: "none",
      }}
    >
      QuizMaster
    </a>
    <form
      className="d-flex"
      role="search"
      style={{ gap: "10px" }}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="form-control"
        type="search"
        placeholder="Search topics..."
        aria-label="Search"
        style={{
          padding: "8px 12px",
          borderRadius: "8px",
          border: "none",
          outline: "none",
        }}
      />
      <button
        className="btn"
        type="submit"
        style={{
          backgroundColor: "#0072ff",
          color: "white",
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </form>
  </div>
</nav>
    </>
  )
}

export default Navbar