# Global Atlantic Xpress Ltd.
## Precious Metals Logistics & Secure Freight Operations

### Company Information
- **Legal Name:** Global Atlantic Xpress Ltd.
- **Registration:** Registered in Sierra Leone
- **Business Classification:** Precious Metals Logistics & Secure Freight Operations
- **Address:** 175 Regent Road, Freetown, Sierra Leone
- **Phone:** +232 72 269 319
- **Email:** globalatlanticxpress@gmail.com
- **Operating Hours:** Monday – Friday, 9:00 AM – 4:00 PM (GMT)

---

## Technology Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom components with accessibility (ARIA labels, keyboard navigation)
- **State Management:** React Context (Auth, Socket)
- **Forms:** React Hook Form + Zod validation
- **Real-time:** Socket.io Client
- **Charts:** Recharts
- **Maps:** Leaflet / React-Leaflet

### Backend
- **Runtime:** Node.js 20
- **Framework:** Express.js
- **Database:** PostgreSQL 16
- **Cache:** Redis 7
- **Real-time:** Socket.io
- **Authentication:** JWT (Access + Refresh tokens)
- **Security:** Helmet.js, CORS, Rate Limiting, CSRF protection
- **Logging:** Winston
- **Validation:** Express Validator

---

## Features

### Public Website
- **Homepage:** Company overview, services, corridors, compliance preview
- **About:** Company profile, registration details, standards
- **Services:** Secure transport, air freight, vaulting, customs brokerage, private client support
- **Corridors:**
  - Sierra Leone → Dubai (SL-DXB)
  - Sierra Leone → Switzerland (SL-CH)
  - Sierra Leone → Hong Kong (SL-HK)
- **Compliance Hub:** Export compliance, customs procedures, AML/KYC, chain-of-custody, insurance
- **Legal Documents:**
  - Export Disclaimer (full legal document)
  - Compliance Notice (AML/KYC, data protection, whistleblower)
- **Contact:** Functional WhatsApp button, email button, contact form with backend

### Client Portal (Authenticated)
- **Login/Register:** JWT authentication with role-based access
- **Dashboard:** Shipment overview, statistics, quick actions
- **Shipments:** Full shipment management, create new shipments, filter, search
- **Tracking:** Real-time tracking with timeline and map
- **Account:** Profile management, KYC status

### Admin Dashboard
- **Overview:** Active shipments, delivered count, pending customs, exceptions
- **Shipment Management:** Create, edit, update status, view audit trail
- **Client Management:** KYC verification, document review
- **Compliance Center:** Document repository, expiry alerts
- **Audit Logs:** Searchable, filterable logs of all system actions
- **Real-time Updates:** Socket.io for live shipment status updates

### Security Features
- **Headers:** CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **Authentication:** JWT with 15min expiry, refresh tokens, bcrypt hashing
- **Rate Limiting:** 100 req/15min general, 10 req/15min auth endpoints
- **CSRF Protection:** Double-submit cookie pattern
- **Input Validation:** Express Validator, parameterized queries
- **Encryption:** AES-256 for sensitive data at rest
- **Audit Logging:** All requests logged with IP, user agent, details

### Accessibility (WCAG 2.1 AA)
- ARIA labels on all interactive elements
- Semantic HTML structure
- Keyboard navigation with visible focus rings
- Skip links for screen readers
- Color contrast compliance (4.5:1 minimum)
- Screen reader support with proper heading hierarchy
- `prefers-reduced-motion` support

### SEO
- Meta descriptions, Open Graph tags, Twitter Cards
- JSON-LD structured data (Organization, LocalBusiness, Service)
- Canonical URLs, robots meta
- Sitemap-ready structure

---

## Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 20+ (for local development)
- PostgreSQL 16+ (for local development)
- Redis 7+ (for local development)

### Using Docker (Recommended)

```bash
# Clone repository
cd global-atlantic-xpress

# Copy environment files
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local

# Start all services
docker-compose up -d

# Run migrations
docker-compose exec backend npm run migrate

# Seed data
docker-compose exec backend npm run seed

# Access application
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000/api
# API Health: http://localhost:5000/api/health
```

### Local Development

```bash
# Backend
cd backend
npm install
cp .env.example .env
# Edit .env with your database credentials
npm run migrate
npm run seed
npm run dev

# Frontend (new terminal)
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

---

## Database Schema

### Tables
- **users:** Authentication, roles, KYC status
- **shipments:** Shipment details, tracking numbers, status
- **tracking_events:** Timeline events for each shipment
- **audit_logs:** Complete audit trail of all operations
- **compliance_documents:** Legal and regulatory documents
- **contact_submissions:** Contact form submissions
- **refresh_tokens:** JWT refresh token storage

### Corridors
| Code | Route | Typical Transit |
|------|-------|----------------|
| SL-DXB | Sierra Leone → Dubai | 24–48 hours |
| SL-CH | Sierra Leone → Switzerland | 36–72 hours |
| SL-HK | Sierra Leone → Hong Kong | 48–72 hours |

---

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new account
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/refresh` - Refresh access token

### Shipments
- `POST /api/shipments` - Create shipment (admin/operator)
- `GET /api/shipments` - List shipments
- `GET /api/shipments/:id` - Get shipment details
- `PATCH /api/shipments/:id/status` - Update status

### Tracking
- `GET /api/tracking/public?ref=GAX-XXXX-XXXXXX` - Public tracking
- `GET /api/tracking/authenticated?ref=...` - Authenticated tracking
- `POST /api/tracking/subscribe` - Subscribe to updates

### Admin
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/activity` - Recent activity
- `GET /api/admin/audit-logs` - Audit logs
- `GET /api/admin/clients` - Client list
- `PATCH /api/admin/clients/:id/kyc` - Update KYC status

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - List submissions (admin)

### Compliance
- `GET /api/compliance/documents` - List documents
- `GET /api/compliance/documents/:slug` - Get document

---

## Regulatory Compliance

### Sierra Leone
- Mines and Minerals Act 2009 (3% export duty)
- National Minerals Agency (NMA) requirements
- Precious Minerals Trading Directorate (PMTD) procedures
- Sierra Leone Revenue Authority (SLRA) compliance

### International
- LBMA Responsible Gold Guidance (RGG) alignment
- OECD Due Diligence Guidance for CAHRAs
- FATF AML/CFT recommendations
- Kimberley Process Certification Scheme (KPCS)

---

## License

© 2024 Global Atlantic Xpress Ltd. All rights reserved.
Registered in Sierra Leone. Precious Metals Logistics & Secure Freight Operations.
