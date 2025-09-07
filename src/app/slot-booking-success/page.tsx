import Link from "next/link";

export default function SlotBookingSuccess() {
  return (
    <main
      className="container"
      style={{
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1 className="text-center" style={{ color: "#279237", fontSize: "2rem", fontWeight: "bold" }}>Slot Booking Success</h1>
      <p className="text-center" style={{ fontSize: "1rem" }}>
        Thank you for booking a slot. We will get back to you soon.
      </p>
      <Link href="/" className="btn btn-primary" style={{ backgroundColor: "#279237", border: "none", color: "#fff", padding: "10px 20px", borderRadius: "5px" }}>
        Back to Home
      </Link>
    </main>
  );
}
