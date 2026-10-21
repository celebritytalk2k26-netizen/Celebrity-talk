import React from 'react';
import { Sparkles, Home, ArrowLeft } from 'lucide-react';

export default function NotFound({ navigate }) {
  return (
    <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '520px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--accent-gold-subtle)', border: '1px solid rgba(205, 165, 82, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--accent-gold)' }}>
          <Sparkles size={32} />
        </div>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '0.5rem', lineHeight: 1 }}>
          404
        </h1>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>
          Page Not Found
        </h2>
        <p style={{ color: '#a8a29e', fontSize: '1.05rem', lineHeight: '1.65', marginBottom: '2rem' }}>
          The page you are looking for does not exist or has been moved. You can return to our homepage or explore our legal policies.
        </p>
        <button
          onClick={() => {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="btn-primary"
          style={{ display: 'inline-flex', padding: '0.85rem 2rem' }}
        >
          <ArrowLeft size={18} />
          <span>Back to Homepage</span>
        </button>
      </div>
    </main>
  );
}
