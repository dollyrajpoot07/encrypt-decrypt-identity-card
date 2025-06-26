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
```
<img width="708" alt="image1" src="https://github.com/user-attachments/assets/b6a693ec-cd15-46fd-992a-86e952aabf1f" />
<img width="771" alt="image2" src="https://github.com/user-attachments/assets/ec67cd31-f8f4-4994-85a6-bfec6756dab1" />
<img width="755" alt="image3" src="https://github.com/user-attachments/assets/2dbad09e-d7bf-43de-9732-a7514b61e852" />
<img width="729" alt="image4" src="https://github.com/user-attachments/assets/777c9471-dd23-4ff2-a956-d936b73f07c9" />
<img width="708" alt="image5" src="https://github.com/user-attachments/assets/886baf7f-d9ce-4d3d-b1b9-e55b0e1dbcf2" />
<img width="706" alt="image6" src="https://github.com/user-attachments/assets/332d2495-7596-4caa-9109-5b5d1871678e" />

