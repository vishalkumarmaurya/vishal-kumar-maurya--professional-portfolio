# FolioForge: Vishal Kumar Maurya's Professional Portfolio

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/vishalkumarmaurya/vishal-kumar-maurya--professional-portfolio)

A visually stunning, minimalist, and responsive single-page portfolio website for an Agri-Tech professional.

FolioForge is a visually stunning, minimalist, single-page professional portfolio website designed for Vishal Kumar Maurya, an aspiring Agri-Tech Innovator. The application presents a clean, modern, and information-dense layout that is both aesthetically pleasing and easy to navigate. It features a sticky navigation header for seamless section traversal, a captivating hero section, and distinct, well-spaced sections for 'About Me', 'Work Experience', 'Education', 'Skills', 'Certifications', 'Projects', and 'Contact'.

## Key Features

-   **Minimalist Single-Page Design:** A clean, modern, and information-dense layout for a professional presentation.
-   **Sticky Navigation:** Seamless section traversal for an excellent user experience.
-   **Fully Responsive:** Flawless viewing experience on all devices, from mobile phones to widescreen desktops.
-   **Modern UI Components:** Utilizes `shadcn/ui` for beautiful and consistent card-based layouts.
-   **Engaging Micro-interactions:** Subtle scroll-reveal animations and hover effects create a dynamic and engaging user experience.
-   **Performance Optimized:** Built with Vite for a fast and responsive frontend.

## Technology Stack

-   **Frontend:** React, Vite, TypeScript
-   **Styling:** Tailwind CSS, shadcn/ui
-   **Animation:** Framer Motion
-   **Icons:** Lucide React
-   **Scrolling:** React Scroll
-   **Deployment:** Cloudflare Workers & Pages

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Bun](https://bun.sh/) (v1.0.0 or higher)
-   [Git](https://git-scm.com/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/folio-forge-portfolio.git
    cd folio-forge-portfolio
    ```

2.  **Install dependencies:**
    ```sh
    bun install
    ```

## Development

To start the local development server, run the following command. This will open the application on `http://localhost:3000`.

```sh
bun run dev
```

The server supports hot-reloading, so any changes you make to the source code will be reflected in the browser instantly.

## Building for Production

To create a production-ready build of the application, run:

```sh
bun run build
```

This command bundles the application and outputs the static files to the `dist` directory, ready for deployment.

## Deployment

This project is optimized for deployment on the Cloudflare network.

### Deploy with Wrangler CLI

1.  **Authenticate with Cloudflare:**
    If you haven't already, log in to your Cloudflare account.
    ```sh
    npx wrangler login
    ```

2.  **Deploy the application:**
    Run the deploy script, which will build the project and deploy it using Wrangler.
    ```sh
    bun run deploy
    ```

### Deploy with the Cloudflare Button

You can also deploy this project with a single click using the button below.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/vishalkumarmaurya/vishal-kumar-maurya--professional-portfolio)

## Linting

To run the linter and check for code quality issues, use the following command:

```sh
bun run lint
```