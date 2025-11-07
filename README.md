# Audiophile E-commerce Store

This is a pixel-perfect e-commerce application built with Next.js and React, powered by Convex for the backend, and featuring a functional checkout process with email confirmations. This project aims to bring the Audiophile Figma design to life across various screen sizes.

## Features

-   **Pixel-Perfect Design:** Implements the Audiophile Figma design across mobile, tablet, and desktop breakpoints.
-   **Product Catalog:** Browse various audio products (headphones, speakers, earphones).
-   **Product Detail Pages:** Detailed views for each product with descriptions, features, and related items.
-   **Shopping Cart:**
    -   Add items to cart with quantity selection.
    -   Update item quantities directly in the cart modal.
    -   Remove items from the cart.
    -   Cart item count displayed on the header icon.
    -   Cart is cleared after successful checkout.
-   **Checkout Process:**
    -   Collects user details (name, email, phone, shipping address).
    -   Client-side validation for all fields.
    -   Handles payment method selection (e-Money, Cash on Delivery).
-   **Convex Backend Integration:**
    -   Stores order details (customer, shipping, items, totals, status, timestamp) in Convex.
    -   Utilizes Convex mutations and queries for data management.
-   **Order Confirmation:**
    -   Redirects to a dedicated order confirmation page after successful checkout.
    -   Displays a comprehensive summary of the order, including item images and totals.
-   **Email Confirmation:**
    -   Sends a personalized order confirmation email with an HTML template upon successful checkout.
    -   Includes order ID, summary, shipping details, support info, and a "View your order" link.
-   **Responsive Layouts:** Optimized for various screen sizes.
-   **Navigation:** Active states for navigation links in the header.

## Technologies Used

-   **Frontend:** React, Next.js
-   **Backend:** Convex (Database, Mutations, Queries, Actions)
-   **Styling:** Tailwind CSS (implied by class names in code)
-   **Forms:** React Hook Form
-   **Email Sending:** Nodemailer (via Convex Action), Resend API (implied by `SENDGRID_API_KEY` in `.env.local`)

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

-   Node.js (v18 or later recommended)
-   pnpm (or npm/yarn)
-   A Convex project set up with the necessary tables and functions (as defined in `convex/schema.ts`, `convex/orders.ts`, `convex/sendEmail.ts`).
-   A SendGrid (or similar) API key for sending emails.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Taophycc/Audiophile-Ecommerce-store.git
    cd Audiophile-Ecommerce-store
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    # or npm install
    # or yarn install
    ```

3.  **Set up Convex:**
    -   If you don't have a Convex project, create one via the Convex dashboard.
    -   Link your local project to Convex:
        ```bash
        npx convex init
        ```
        (Follow the prompts to connect to your Convex project.)

4.  **Configure Environment Variables:**
    -   Create a `.env.local` file in the root of your project.
    -   Add the following environment variables, replacing placeholders with your actual values:
        ```
        # Deployment used by `npx convex dev`
        CONVEX_DEPLOYMENT=dev:<your-dev-deployment-name> # e.g., dev:outgoing-finch-991

        # Public URL for your Convex deployment (e.g., your prod deployment)
        NEXT_PUBLIC_CONVEX_URL=https://<your-prod-deployment-name>.convex.cloud # e.g., https://reminiscent-bass-16.convex.cloud

        # API Key for your email sending service (e.g., SendGrid)
        SENDGRID_API_KEY=<your-sendgrid-api-key>

        # SMTP details for Nodemailer (used by Convex sendEmail action)
        # These should be configured as Convex environment variables, not in .env.local
        # SMTP_HOST=<your-smtp-host>
        # SMTP_PORT=<your-smtp-port>
        # SMTP_USER=<your-smtp-user>
        # SMTP_PASS=<your-smtp-password>
        ```
    -   **Important:** The `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` variables for Nodemailer should be configured directly in your Convex dashboard as environment variables for your deployment, not in `.env.local`.

5.  **Deploy Convex Backend:**
    -   Push your Convex schema and functions to your deployment:
        ```bash
        npx convex deploy
        ```
    -   Verify your schema on the Convex dashboard to ensure all fields (e.g., `image` in `orders.items`) are present.

### Running the Development Server

1.  **Start the Convex development server (optional, for local Convex development):**
    ```bash
    npx convex dev
    ```
2.  **Start the Next.js development server:**
    ```bash
    pnpm dev
    # or npm run dev
    # or yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
.
├── app/                  # Next.js app directory (pages, components, contexts)
│   ├── checkout/         # Checkout page
│   ├── components/       # Reusable React components (Header, CartModal, etc.)
│   ├── contexts/         # React Contexts (CartContext, MenuContext)
│   ├── ... (other pages like headphones, speakers, products)
├── convex/               # Convex backend functions and schema
│   ├── _generated/       # Generated Convex client code
│   ├── orders.ts         # Convex mutations/queries for order management
│   ├── schema.ts         # Convex database schema definition
│   ├── sendEmail.ts      # Convex action for sending emails
├── public/               # Static assets (images, icons)
├── .env.local            # Local environment variables
├── package.json          # Project dependencies and scripts
├── pnpm-lock.yaml        # pnpm lock file
└── tsconfig.json         # TypeScript configuration
```

## Contributing

Feel free to fork the repository and submit pull requests.

## License

[Specify your license here, e.g., MIT]