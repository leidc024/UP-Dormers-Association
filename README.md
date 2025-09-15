# UP Dormers Association - Online Application Platform

Automating and digitizing the University of the Philippines Dormitory Association’s dormitory application process.

## Features

*   **Online Application Portal:** Applications made easier and convenient.
*   **Admin Dashboard:** Easily Manage Applications.
*   **Mobile Responsiveness:** Seamless experience across devices.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-github-repo-url>
    cd <directory>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up environment variables:**
    Create  `.env.local` in the root directory of the project and add the following environment variables:
    ```bash
     

      #clerk

      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZW1lcmdpbmctYmVldGxlLTguY2xlcmsuYWNjb3VudHMuZGV2JA
      CLERK_SECRET_KEY=sk_test_8WHE2QxsgTcUgqcSg1xPdBGLez6i57JNpGkShYmNkG
      CLERK_WEBHOOK_SECRET=whsec_upISQYjw4xSXQeOSbpF2cf+Guebx1X1t
      NEXT_PUBLIC_CLERK_SIGN_IN_URL=/apply
      NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
      NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
      
      #supabase
      
      
      NEXT_PUBLIC_SUPABASE_URL=https://zturydvwoakbvmoqzuxw.supabase.co                                   
      NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmF
      zZSIsInJlZiI6Inp0dXJ5ZHZ3b2FrYnZtb3F6dXh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4NTEzNDEsImV4cCI6MjA3MzQyNzM0MX0.sS6gWjTCBVEhuf6Thh_Nqqio2nzuIqMkKP96UJKHwew
      SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0dXJ5ZHZ3b2FrYnZtb3F6dXh3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdC
      I6MTc1Nzg1MTM0MSwiZXhwIjoyMDczNDI3MzQxfQ.W83YMgqAmwe-5jq5v1s2YnaVdly6ZtJzlKhy3UW6YX0


    ```


4.  **Run the development server:**
    ```bash
    npm run dev
    ```
