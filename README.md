# Identity Card Viewer with Encrypt/Decrypt & Flip

This React utility mimics a digital Identity card layout for 20 Indian users. It allows:
- Masking sensitive data (email, phone, DOB, Identity number, address)
- Toggling encryption on single click
- Flipping card to show front/back on double click
- Navigation between users (Next/Prev)
- Selecting users via buttons
- Manual "Flip" button
- Identity number styled as per real card

---

## 🔐 Masking Rules

| Field         | Masking Logic                                                   |
|---------------|------------------------------------------------------------------|
| **Email**     | Keep 1st & last letter before `@`, replace middle with 6 X      |
| **DOB**       | `**/**/****`                                                    |
| **Phone**     | Show `+91` and last 4 digits, mask rest                         |
| **Identity**   | `XXXX XX XXXX 1234`                                             |
| **Address**   | Hide all before city/state/country/zip                          |

---

## 🧩 Features

- Flip card (manual & double-click)
- Encrypt/decrypt data on single click
- User list buttons to jump directly
- Forward/backward arrows for navigation
- Disabled arrows on first/last user
- Fully responsive layout

---

## 🖼 Layout

- Front:
  - Image (left), Name, DOB, Gender, Email (right)
  - Identity number at bottom
- Back:
  - Address, Phone, Identity number at bottom

---

## 🧪 Tech Stack

- React (Client Components)
- CSS Modules
- `useState`, `useRef`

---

## 🚀 Setup

```bash
npm install
npm run dev
