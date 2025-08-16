import React from "react";

export async function generateStaticParams() {
  return [
    { category: "vedic-astrology", slug: "parashari-jyotish" },
    // Add more as needed
  ];
}

interface ServicePageProps {
  params: { category: string; slug: string };
}

const serviceData: Record<string, any> = {
  "vedic-astrology/parashari-jyotish": {
    title: "Parashari Jyotish",
    price: 2100,
    duration: "90 minutes",
    description:
      "Traditional Vedic astrology using Parashari principles for comprehensive life guidance",
    keyBenefits: [
      "Deep understanding of life purpose",
      "Career and business guidance",
      "Relationship compatibility analysis",
    ],
    category: "Vedic Astrology",
    featured: true,
    rating: 5,
  },
  // Add more services here
};

export default function ServicePage({ params }: ServicePageProps) {
  const key = `${params.category}/${params.slug}`;
  const service = serviceData[key];

  if (!service) {
    return <div>Service not found.</div>;
  }

  return (
    <div style={{ padding: 32, maxWidth: 600, margin: "0 auto", background: "#fff", borderRadius: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
      {service.featured && (
        <span style={{ background: '#facc15', color: '#fff', padding: '4px 12px', borderRadius: 12, fontWeight: 600, position: 'absolute', marginTop: -24, marginLeft: -24 }}>Featured</span>
      )}
      <div style={{ marginBottom: 16, color: '#888', fontSize: 14 }}>
        <span role="img" aria-label="clock">⏰</span> {service.duration}
        <span style={{ marginLeft: 16 }}>
          {'★'.repeat(service.rating)}
        </span>
      </div>
      <span style={{ background: '#ede9fe', color: '#7c3aed', padding: '2px 10px', borderRadius: 8, fontSize: 13, fontWeight: 500 }}>{service.category}</span>
      <span style={{ float: 'right', color: '#7c3aed', fontWeight: 700, fontSize: 24 }}>₹{service.price.toLocaleString()}</span>
      <h1 style={{ margin: '16px 0 8px 0', fontSize: 28 }}>{service.title}</h1>
      <p style={{ color: '#666', marginBottom: 16 }}>{service.description}</p>
      <div>
        <strong>Key Benefits:</strong>
        <ul style={{ marginTop: 8, marginBottom: 24 }}>
          {service.keyBenefits.map((benefit: string) => (
            <li key={benefit} style={{ color: '#7c3aed', marginBottom: 4 }}>• {benefit}</li>
          ))}
        </ul>
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        <button style={{ flex: 1, background: 'linear-gradient(90deg, #a78bfa, #7c3aed)', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 0', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Learn More</button>
        <button style={{ flex: 1, background: '#fff', color: '#7c3aed', border: '2px solid #7c3aed', borderRadius: 8, padding: '12px 0', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Book Now</button>
      </div>
    </div>
  );
}